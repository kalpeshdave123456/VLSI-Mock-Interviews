
const $ = (sel) => document.querySelector(sel);
const $$ = (sel) => Array.from(document.querySelectorAll(sel));
const byId = Object.fromEntries(window.QUESTION_BANK.map(q => [q.id, q]));

const state = {
  activeTest: null,
  answers: {},
  timer: null,
  deferredPrompt: null,
  progress: JSON.parse(localStorage.getItem("vlsi-progress") || "{}")
};

function saveProgress() {
  localStorage.setItem("vlsi-progress", JSON.stringify(state.progress));
}

function byIdElement(id) {
  return document.getElementById(id);
}

function showTab(name) {
  $$(".tab").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.tab === name);
  });
  $$(".view").forEach(view => {
    view.classList.toggle("active", view.id === name);
  });
  if (name === "tests") renderTests();
  if (name === "bank") renderBank();
}

$$(".tab").forEach(btn => {
  btn.addEventListener("click", () => showTab(btn.dataset.tab));
});

function renderStats() {
  const cards = [
    { label: "Scored MCQs", value: window.QUESTION_BANK.length },
    { label: "Mock Tests", value: window.MOCK_TESTS.length },
    { label: "Company Prompts", value: Object.values(window.COMPANY_BANK).flat().length }
  ];

  $("#statsCards").innerHTML = cards.map(c => `
    <div class="card">
      <h3>${c.label}</h3>
      <div class="num">${c.value}</div>
    </div>
  `).join("");
}

function progressSummary() {
  const attempted = Object.keys(state.progress).length;
  if (!attempted) return "No attempts yet.";
  const scores = Object.values(state.progress).map(x => x.scorePct);
  const avg = Math.round(scores.reduce((a, b) => a + b, 0) / scores.length);
  return `${attempted} tests attempted. Average score: ${avg}%.`;
}

function renderTests() {
  $("#progressText").textContent = progressSummary();

  const company = $("#companyFilter").value;
  const round = $("#roundFilter").value;
  const role = $("#roleFilter").value;

  const filtered = window.MOCK_TESTS.filter(t => {
    const companyOk = company === "All" || t.company === company;
    const roundOk = round === "All" || t.roundType === round;
    const roleOk = role === "All" || t.roles.includes(role);
    return companyOk && roundOk && roleOk;
  });

  $("#testList").innerHTML = filtered.map(t => {
    const p = state.progress[t.id];
    const progressHtml = p ? `<p>Last score: ${p.score} / ${p.total} (${p.scorePct}%)</p>` : "";
    return `
      <div class="card test-card">
        <h3>${t.title}</h3>
        <div class="meta">
          <span>${t.company}</span>
          <span>${t.roundType}</span>
          <span>${t.roles.join(" / ")}</span>
          <span>${t.durationMin} min</span>
        </div>
        <p>${t.questionIds.length} questions · ${t.difficulty.join(" + ")}</p>
        ${progressHtml}
        <button type="button" data-start-test="${t.id}">Start test</button>
      </div>
    `;
  }).join("");

  $$("[data-start-test]").forEach(btn => {
    btn.addEventListener("click", () => startTest(btn.getAttribute("data-start-test")));
  });
}

["companyFilter", "roundFilter", "roleFilter"].forEach(id => {
  byIdElement(id).addEventListener("change", renderTests);
});

function startTest(testId) {
  const test = window.MOCK_TESTS.find(t => t.id === testId);
  state.activeTest = test;
  state.answers = {};
  clearInterval(state.timer);

  let remaining = test.durationMin * 60;

  $("#runner").classList.remove("hidden");
  $("#resultPanel").classList.add("hidden");

  $("#runner").innerHTML = `
    <div class="runner-top card">
      <div>
        <strong>${test.title}</strong><br/>
        <span class="subtitle">${test.company} · ${test.roundType}</span>
      </div>
      <div class="timer" id="timerLabel"></div>
    </div>
    <div id="runnerQuestions"></div>
    <div class="card">
      <button class="warn" id="submitTestBtn" type="button">Submit test</button>
      <button class="ghost" id="cancelTestBtn" type="button">Cancel</button>
    </div>
  `;

  renderRunnerQuestions();
  updateTimerLabel(remaining);

  byIdElement("submitTestBtn").addEventListener("click", submitTest);
  byIdElement("cancelTestBtn").addEventListener("click", cancelTest);

  state.timer = setInterval(() => {
    remaining -= 1;
    updateTimerLabel(remaining);
    if (remaining <= 0) {
      clearInterval(state.timer);
      submitTest();
    }
  }, 1000);

  window.scrollTo({ top: 0, behavior: "smooth" });
}

function updateTimerLabel(seconds) {
  const m = Math.max(0, Math.floor(seconds / 60));
  const s = Math.max(0, seconds % 60);
  const label = $("#timerLabel");
  if (label) label.textContent = `Time left: ${m}:${String(s).padStart(2, "0")}`;
}

function renderRunnerQuestions() {
  const wrap = $("#runnerQuestions");
  wrap.innerHTML = state.activeTest.questionIds.map((id, idx) => {
    const q = byId[id];
    const optionsHtml = q.options.map((opt, oi) => `
      <label class="option">
        <input type="radio" name="q_${id}" value="${oi}" ${state.answers[id] === oi ? "checked" : ""}/>
        ${String.fromCharCode(65 + oi)}. ${opt}
      </label>
    `).join("");

    return `
      <div class="card question-card" data-question-id="${id}">
        <h3>Q${idx + 1}. ${q.question}</h3>
        <div class="meta">
          <span>${q.topic}</span>
          <span>${q.role}</span>
          <span>${q.difficulty}</span>
        </div>
        <div class="options">${optionsHtml}</div>
      </div>
    `;
  }).join("");

  $$("[data-question-id]").forEach(card => {
    const id = card.getAttribute("data-question-id");
    card.querySelectorAll("input[type=radio]").forEach(input => {
      input.addEventListener("change", () => {
        state.answers[id] = Number(input.value);
      });
    });
  });
}

function cancelTest() {
  clearInterval(state.timer);
  $("#runner").classList.add("hidden");
  state.activeTest = null;
}

function submitTest() {
  clearInterval(state.timer);
  const test = state.activeTest;
  if (!test) return;

  let score = 0;
  const topics = {};

  const details = test.questionIds.map((id, idx) => {
    const q = byId[id];
    const chosen = state.answers[id];
    const correct = chosen === q.answer;

    if (correct) score += 1;
    if (!topics[q.topic]) topics[q.topic] = { right: 0, total: 0 };
    topics[q.topic].total += 1;
    if (correct) topics[q.topic].right += 1;

    return { q, chosen, correct, idx: idx + 1 };
  });

  const pct = Math.round((score * 100) / test.questionIds.length);
  state.progress[test.id] = {
    score,
    total: test.questionIds.length,
    scorePct: pct,
    when: new Date().toISOString()
  };
  saveProgress();

  $("#runner").classList.add("hidden");
  $("#resultPanel").classList.remove("hidden");

  const cls = pct >= 75 ? "result-good" : pct >= 50 ? "result-mid" : "result-bad";
  const summary = pct >= 75 ? "Strong result." : pct >= 50 ? "Good base. Review weak spots." : "Revisit core topics before the next final-round mock.";

  const topicSummary = Object.entries(topics).map(([k, v]) => `<span>${k}: ${v.right}/${v.total}</span>`).join("");

  $("#resultPanel").innerHTML = `
    <div class="card">
      <div class="result-score ${cls}">${score} / ${test.questionIds.length} (${pct}%)</div>
      <p>${summary}</p>
      <div class="meta">${topicSummary}</div>
      <button type="button" id="backToTestsBtn">Back to tests</button>
    </div>
    ${details.map(d => {
      const opts = d.q.options.map((opt, oi) => {
        const classes = oi === d.q.answer ? "option correct" : ((oi === d.chosen && d.chosen !== d.q.answer) ? "option wrong" : "option");
        return `<div class="${classes}">${String.fromCharCode(65 + oi)}. ${opt}</div>`;
      }).join("");
      const chosenText = d.chosen === undefined ? "No answer selected" : `${String.fromCharCode(65 + d.chosen)}. ${d.q.options[d.chosen]}`;
      return `
        <div class="card">
          <h3>Q${d.idx}. ${d.q.question}</h3>
          <div class="meta">
            <span>${d.q.topic}</span>
            <span>${d.q.company}</span>
            <span>${d.q.role}</span>
          </div>
          <p><strong>Your answer:</strong> ${chosenText}</p>
          <div class="options">${opts}</div>
          <p><strong>Explanation:</strong> ${d.q.explanation}</p>
        </div>
      `;
    }).join("")}
  `;

  byIdElement("backToTestsBtn").addEventListener("click", () => {
    showTab("tests");
    renderTests();
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  $("#progressText").textContent = progressSummary();
  window.scrollTo({ top: 0, behavior: "smooth" });
}

function renderDiscussion() {
  const company = $("#discussionCompany").value;
  const prompts = window.COMPANY_BANK[company] || [];
  $("#discussionList").innerHTML = prompts.map((p, i) => `
    <div class="card">
      <h3>${company} Prompt ${i + 1} - ${p.role}</h3>
      <p><strong>Prompt:</strong> ${p.prompt}</p>
      <p><strong>Model answer points:</strong> ${p.solution}</p>
    </div>
  `).join("");
}

function renderBank() {
  const topicSel = $("#bankTopic");
  if (topicSel.options.length === 1) {
    [...new Set(window.QUESTION_BANK.map(q => q.topic))].sort().forEach(topic => {
      const opt = document.createElement("option");
      opt.value = topic;
      opt.textContent = topic;
      topicSel.appendChild(opt);
    });
  }

  const topic = $("#bankTopic").value;
  const diff = $("#bankDifficulty").value;
  const comp = $("#bankCompany").value;

  const filtered = window.QUESTION_BANK.filter(q => {
    const topicOk = topic === "All" || q.topic === topic;
    const diffOk = diff === "All" || q.difficulty === diff;
    const compOk = comp === "All" || q.company === comp;
    return topicOk && diffOk && compOk;
  });

  $("#questionBankList").innerHTML = filtered.map(q => `
    <div class="card">
      <h3>${q.id}. ${q.question}</h3>
      <div class="meta">
        <span>${q.company}</span>
        <span>${q.role}</span>
        <span>${q.topic}</span>
        <span>${q.difficulty}</span>
      </div>
      <div class="options">
        ${q.options.map((opt, i) => `<div class="option">${String.fromCharCode(65 + i)}. ${opt}</div>`).join("")}
      </div>
      <p><strong>Explanation:</strong> ${q.explanation}</p>
    </div>
  `).join("");

  renderDiscussion();
}

["bankTopic", "bankDifficulty", "bankCompany", "discussionCompany"].forEach(id => {
  byIdElement(id).addEventListener("change", renderBank);
});

$("#resetProgressBtn").addEventListener("click", () => {
  if (confirm("Clear saved local progress?")) {
    state.progress = {};
    saveProgress();
    renderTests();
  }
});

window.addEventListener("beforeinstallprompt", (e) => {
  e.preventDefault();
  state.deferredPrompt = e;
  $("#installBtn").classList.remove("hidden");
});

$("#installBtn").addEventListener("click", async () => {
  if (!state.deferredPrompt) return;
  state.deferredPrompt.prompt();
  await state.deferredPrompt.userChoice;
  state.deferredPrompt = null;
  $("#installBtn").classList.add("hidden");
});

if ("serviceWorker" in navigator) {
  window.addEventListener("load", () => navigator.serviceWorker.register("./sw.js"));
}

renderStats();
renderTests();
renderBank();
