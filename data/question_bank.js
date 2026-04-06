window.QUESTION_BANK = [
  {
    "id": "Q001",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Hard",
    "question": "A design has a path delay of 7 ns, flip-flop clock-to-Q of 0.5 ns, and setup time of 0.5 ns. What is the minimum safe clock period?",
    "options": [
      "6 ns",
      "7 ns",
      "8 ns",
      "8.5 ns"
    ],
    "answer": 3,
    "explanation": "Minimum clock period = Tcq + combinational delay + setup = 0.5 + 7 + 0.5 = 8.0 ns. Designers normally add margin, but the exact minimum here is 8 ns.",
    "sourceType": "public-style"
  },
  {
    "id": "Q002",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Moderate",
    "question": "Which statement correctly distinguishes a latch from an edge-triggered flip-flop?",
    "options": [
      "A latch samples only on rising edge",
      "A flip-flop is level-sensitive",
      "A latch is level-sensitive while a flip-flop is edge-triggered",
      "They are functionally identical"
    ],
    "answer": 2,
    "explanation": "A latch is transparent during an active level, while an edge-triggered flip-flop captures data only on a clock edge.",
    "sourceType": "public-style"
  },
  {
    "id": "Q003",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Hard",
    "question": "For a Moore FSM, outputs depend on:",
    "options": [
      "Current state only",
      "Current input only",
      "Current state and current input",
      "Previous output only"
    ],
    "answer": 0,
    "explanation": "In a Moore machine, outputs are functions of state only. Mealy outputs depend on state plus inputs.",
    "sourceType": "public-style"
  },
  {
    "id": "Q004",
    "company": "AMD",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Moderate",
    "question": "A design has a path delay of 7 ns, flip-flop clock-to-Q of 0.5 ns, and setup time of 0.5 ns. What is the minimum safe clock period?",
    "options": [
      "6 ns",
      "7 ns",
      "8 ns",
      "8.5 ns"
    ],
    "answer": 3,
    "explanation": "Minimum clock period = Tcq + combinational delay + setup = 0.5 + 7 + 0.5 = 8.0 ns. Designers normally add margin, but the exact minimum here is 8 ns.",
    "sourceType": "public-style"
  },
  {
    "id": "Q005",
    "company": "AMD",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Hard",
    "question": "Which statement correctly distinguishes a latch from an edge-triggered flip-flop?",
    "options": [
      "A latch samples only on rising edge",
      "A flip-flop is level-sensitive",
      "A latch is level-sensitive while a flip-flop is edge-triggered",
      "They are functionally identical"
    ],
    "answer": 2,
    "explanation": "A latch is transparent during an active level, while an edge-triggered flip-flop captures data only on a clock edge.",
    "sourceType": "public-style"
  },
  {
    "id": "Q006",
    "company": "AMD",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Hard",
    "question": "For a Moore FSM, outputs depend on:",
    "options": [
      "Current state only",
      "Current input only",
      "Current state and current input",
      "Previous output only"
    ],
    "answer": 0,
    "explanation": "In a Moore machine, outputs are functions of state only. Mealy outputs depend on state plus inputs.",
    "sourceType": "public-style"
  },
  {
    "id": "Q007",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Hard",
    "question": "A design has a path delay of 7 ns, flip-flop clock-to-Q of 0.5 ns, and setup time of 0.5 ns. What is the minimum safe clock period?",
    "options": [
      "6 ns",
      "7 ns",
      "8 ns",
      "8.5 ns"
    ],
    "answer": 3,
    "explanation": "Minimum clock period = Tcq + combinational delay + setup = 0.5 + 7 + 0.5 = 8.0 ns. Designers normally add margin, but the exact minimum here is 8 ns.",
    "sourceType": "public-style"
  },
  {
    "id": "Q008",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Hard",
    "question": "Which statement correctly distinguishes a latch from an edge-triggered flip-flop?",
    "options": [
      "A latch samples only on rising edge",
      "A flip-flop is level-sensitive",
      "A latch is level-sensitive while a flip-flop is edge-triggered",
      "They are functionally identical"
    ],
    "answer": 2,
    "explanation": "A latch is transparent during an active level, while an edge-triggered flip-flop captures data only on a clock edge.",
    "sourceType": "public-style"
  },
  {
    "id": "Q009",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Digital Design Fundamentals",
    "difficulty": "Moderate",
    "question": "For a Moore FSM, outputs depend on:",
    "options": [
      "Current state only",
      "Current input only",
      "Current state and current input",
      "Previous output only"
    ],
    "answer": 0,
    "explanation": "In a Moore machine, outputs are functions of state only. Mealy outputs depend on state plus inputs.",
    "sourceType": "public-style"
  },
  {
    "id": "Q010",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "Average memory access time (AMAT) is best written as:",
    "options": [
      "Hit time + miss rate \u00d7 miss penalty",
      "Hit time \u00d7 miss rate + cache size",
      "Miss penalty \u00f7 miss rate",
      "Hit time + cache size"
    ],
    "answer": 0,
    "explanation": "AMAT = hit time + miss rate \u00d7 miss penalty.",
    "sourceType": "public-style"
  },
  {
    "id": "Q011",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "A control hazard in a pipelined CPU is most directly caused by:",
    "options": [
      "Data dependency between ALU operations",
      "Branch/jump direction uncertainty",
      "Cache associativity",
      "Clock skew"
    ],
    "answer": 1,
    "explanation": "Control hazards arise when the next PC is not yet known, such as around branches.",
    "sourceType": "public-style"
  },
  {
    "id": "Q012",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "If L1 miss rate falls while hit time and miss penalty stay constant, AMAT will:",
    "options": [
      "Increase",
      "Stay same",
      "Decrease",
      "Become undefined"
    ],
    "answer": 2,
    "explanation": "Lower miss rate reduces the miss component in AMAT, so average access time falls.",
    "sourceType": "public-style"
  },
  {
    "id": "Q013",
    "company": "AMD",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Moderate",
    "question": "Average memory access time (AMAT) is best written as:",
    "options": [
      "Hit time + miss rate \u00d7 miss penalty",
      "Hit time \u00d7 miss rate + cache size",
      "Miss penalty \u00f7 miss rate",
      "Hit time + cache size"
    ],
    "answer": 0,
    "explanation": "AMAT = hit time + miss rate \u00d7 miss penalty.",
    "sourceType": "public-style"
  },
  {
    "id": "Q014",
    "company": "AMD",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "A control hazard in a pipelined CPU is most directly caused by:",
    "options": [
      "Data dependency between ALU operations",
      "Branch/jump direction uncertainty",
      "Cache associativity",
      "Clock skew"
    ],
    "answer": 1,
    "explanation": "Control hazards arise when the next PC is not yet known, such as around branches.",
    "sourceType": "public-style"
  },
  {
    "id": "Q015",
    "company": "AMD",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "If L1 miss rate falls while hit time and miss penalty stay constant, AMAT will:",
    "options": [
      "Increase",
      "Stay same",
      "Decrease",
      "Become undefined"
    ],
    "answer": 2,
    "explanation": "Lower miss rate reduces the miss component in AMAT, so average access time falls.",
    "sourceType": "public-style"
  },
  {
    "id": "Q016",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "Average memory access time (AMAT) is best written as:",
    "options": [
      "Hit time + miss rate \u00d7 miss penalty",
      "Hit time \u00d7 miss rate + cache size",
      "Miss penalty \u00f7 miss rate",
      "Hit time + cache size"
    ],
    "answer": 0,
    "explanation": "AMAT = hit time + miss rate \u00d7 miss penalty.",
    "sourceType": "public-style"
  },
  {
    "id": "Q017",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Moderate",
    "question": "A control hazard in a pipelined CPU is most directly caused by:",
    "options": [
      "Data dependency between ALU operations",
      "Branch/jump direction uncertainty",
      "Cache associativity",
      "Clock skew"
    ],
    "answer": 1,
    "explanation": "Control hazards arise when the next PC is not yet known, such as around branches.",
    "sourceType": "public-style"
  },
  {
    "id": "Q018",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Computer Architecture",
    "difficulty": "Hard",
    "question": "If L1 miss rate falls while hit time and miss penalty stay constant, AMAT will:",
    "options": [
      "Increase",
      "Stay same",
      "Decrease",
      "Become undefined"
    ],
    "answer": 2,
    "explanation": "Lower miss rate reduces the miss component in AMAT, so average access time falls.",
    "sourceType": "public-style"
  },
  {
    "id": "Q019",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Moderate",
    "question": "Inside sequential always_ff-style logic, the preferred assignment type is:",
    "options": [
      "Blocking assignment",
      "Continuous assignment",
      "Non-blocking assignment",
      "Force assignment"
    ],
    "answer": 2,
    "explanation": "Non-blocking assignments model clocked storage behavior correctly and avoid race-style issues.",
    "sourceType": "public-style"
  },
  {
    "id": "Q020",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "Which construct is typically used to describe combinational logic in synthesizable Verilog?",
    "options": [
      "always @(posedge clk)",
      "always @(*)",
      "initial begin",
      "fork-join"
    ],
    "answer": 1,
    "explanation": "always @(*) is used for combinational logic so sensitivity automatically follows RHS usage.",
    "sourceType": "public-style"
  },
  {
    "id": "Q021",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "A testbench is primarily used to:",
    "options": [
      "Reduce silicon area",
      "Drive DUT stimulus and check behavior",
      "Synthesize gates",
      "Perform routing"
    ],
    "answer": 1,
    "explanation": "Testbenches apply stimulus, observe outputs, and validate behavior before hardware implementation.",
    "sourceType": "public-style"
  },
  {
    "id": "Q022",
    "company": "AMD",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "Inside sequential always_ff-style logic, the preferred assignment type is:",
    "options": [
      "Blocking assignment",
      "Continuous assignment",
      "Non-blocking assignment",
      "Force assignment"
    ],
    "answer": 2,
    "explanation": "Non-blocking assignments model clocked storage behavior correctly and avoid race-style issues.",
    "sourceType": "public-style"
  },
  {
    "id": "Q023",
    "company": "AMD",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "Which construct is typically used to describe combinational logic in synthesizable Verilog?",
    "options": [
      "always @(posedge clk)",
      "always @(*)",
      "initial begin",
      "fork-join"
    ],
    "answer": 1,
    "explanation": "always @(*) is used for combinational logic so sensitivity automatically follows RHS usage.",
    "sourceType": "public-style"
  },
  {
    "id": "Q024",
    "company": "AMD",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "A testbench is primarily used to:",
    "options": [
      "Reduce silicon area",
      "Drive DUT stimulus and check behavior",
      "Synthesize gates",
      "Perform routing"
    ],
    "answer": 1,
    "explanation": "Testbenches apply stimulus, observe outputs, and validate behavior before hardware implementation.",
    "sourceType": "public-style"
  },
  {
    "id": "Q025",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "Inside sequential always_ff-style logic, the preferred assignment type is:",
    "options": [
      "Blocking assignment",
      "Continuous assignment",
      "Non-blocking assignment",
      "Force assignment"
    ],
    "answer": 2,
    "explanation": "Non-blocking assignments model clocked storage behavior correctly and avoid race-style issues.",
    "sourceType": "public-style"
  },
  {
    "id": "Q026",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "Which construct is typically used to describe combinational logic in synthesizable Verilog?",
    "options": [
      "always @(posedge clk)",
      "always @(*)",
      "initial begin",
      "fork-join"
    ],
    "answer": 1,
    "explanation": "always @(*) is used for combinational logic so sensitivity automatically follows RHS usage.",
    "sourceType": "public-style"
  },
  {
    "id": "Q027",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Verilog/HDL Basics",
    "difficulty": "Hard",
    "question": "A testbench is primarily used to:",
    "options": [
      "Reduce silicon area",
      "Drive DUT stimulus and check behavior",
      "Synthesize gates",
      "Perform routing"
    ],
    "answer": 1,
    "explanation": "Testbenches apply stimulus, observe outputs, and validate behavior before hardware implementation.",
    "sourceType": "public-style"
  },
  {
    "id": "Q028",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "A Karnaugh map is most useful for:",
    "options": [
      "Clock tree synthesis",
      "Boolean minimization",
      "STA signoff",
      "IR-drop analysis"
    ],
    "answer": 1,
    "explanation": "K-maps simplify Boolean expressions by grouping adjacent minterms.",
    "sourceType": "public-style"
  },
  {
    "id": "Q029",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Moderate",
    "question": "For XOR(A,B), the output is 1 when:",
    "options": [
      "A and B are both 1",
      "A and B are both 0",
      "A and B differ",
      "A is 1 regardless of B"
    ],
    "answer": 2,
    "explanation": "XOR is high only when inputs differ.",
    "sourceType": "public-style"
  },
  {
    "id": "Q030",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "A 2-to-4 decoder has how many output lines?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "A 2-to-4 decoder converts 2 input bits into 4 one-hot style outputs.",
    "sourceType": "public-style"
  },
  {
    "id": "Q031",
    "company": "AMD",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "A Karnaugh map is most useful for:",
    "options": [
      "Clock tree synthesis",
      "Boolean minimization",
      "STA signoff",
      "IR-drop analysis"
    ],
    "answer": 1,
    "explanation": "K-maps simplify Boolean expressions by grouping adjacent minterms.",
    "sourceType": "public-style"
  },
  {
    "id": "Q032",
    "company": "AMD",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "For XOR(A,B), the output is 1 when:",
    "options": [
      "A and B are both 1",
      "A and B are both 0",
      "A and B differ",
      "A is 1 regardless of B"
    ],
    "answer": 2,
    "explanation": "XOR is high only when inputs differ.",
    "sourceType": "public-style"
  },
  {
    "id": "Q033",
    "company": "AMD",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Moderate",
    "question": "A 2-to-4 decoder has how many output lines?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "A 2-to-4 decoder converts 2 input bits into 4 one-hot style outputs.",
    "sourceType": "public-style"
  },
  {
    "id": "Q034",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "A Karnaugh map is most useful for:",
    "options": [
      "Clock tree synthesis",
      "Boolean minimization",
      "STA signoff",
      "IR-drop analysis"
    ],
    "answer": 1,
    "explanation": "K-maps simplify Boolean expressions by grouping adjacent minterms.",
    "sourceType": "public-style"
  },
  {
    "id": "Q035",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "For XOR(A,B), the output is 1 when:",
    "options": [
      "A and B are both 1",
      "A and B are both 0",
      "A and B differ",
      "A is 1 regardless of B"
    ],
    "answer": 2,
    "explanation": "XOR is high only when inputs differ.",
    "sourceType": "public-style"
  },
  {
    "id": "Q036",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Boolean Algebra & Logic",
    "difficulty": "Hard",
    "question": "A 2-to-4 decoder has how many output lines?",
    "options": [
      "2",
      "4",
      "8",
      "16"
    ],
    "answer": 1,
    "explanation": "A 2-to-4 decoder converts 2 input bits into 4 one-hot style outputs.",
    "sourceType": "public-style"
  },
  {
    "id": "Q037",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "In CMOS logic, the main component of dynamic power is proportional to:",
    "options": [
      "R \u00d7 I",
      "\u03b1CV\u00b2f",
      "V/I",
      "Threshold voltage only"
    ],
    "answer": 1,
    "explanation": "Dynamic switching power is approximately \u03b1CV\u00b2f.",
    "sourceType": "public-style"
  },
  {
    "id": "Q038",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "A PMOS transistor typically passes which value strongly?",
    "options": [
      "Strong 0",
      "Strong 1",
      "Neither 0 nor 1",
      "Only analog voltages"
    ],
    "answer": 1,
    "explanation": "PMOS passes a strong logic 1 and an NMOS passes a strong logic 0.",
    "sourceType": "public-style"
  },
  {
    "id": "Q039",
    "company": "NVIDIA",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Moderate",
    "question": "IR drop refers to:",
    "options": [
      "Voltage drop due to resistance in power delivery",
      "Logic inversion ratio",
      "Input resistance at clock pin",
      "Routing density metric"
    ],
    "answer": 0,
    "explanation": "IR drop is the voltage loss across power-grid resistance under current draw.",
    "sourceType": "public-style"
  },
  {
    "id": "Q040",
    "company": "AMD",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "In CMOS logic, the main component of dynamic power is proportional to:",
    "options": [
      "R \u00d7 I",
      "\u03b1CV\u00b2f",
      "V/I",
      "Threshold voltage only"
    ],
    "answer": 1,
    "explanation": "Dynamic switching power is approximately \u03b1CV\u00b2f.",
    "sourceType": "public-style"
  },
  {
    "id": "Q041",
    "company": "AMD",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Moderate",
    "question": "A PMOS transistor typically passes which value strongly?",
    "options": [
      "Strong 0",
      "Strong 1",
      "Neither 0 nor 1",
      "Only analog voltages"
    ],
    "answer": 1,
    "explanation": "PMOS passes a strong logic 1 and an NMOS passes a strong logic 0.",
    "sourceType": "public-style"
  },
  {
    "id": "Q042",
    "company": "AMD",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "IR drop refers to:",
    "options": [
      "Voltage drop due to resistance in power delivery",
      "Logic inversion ratio",
      "Input resistance at clock pin",
      "Routing density metric"
    ],
    "answer": 0,
    "explanation": "IR drop is the voltage loss across power-grid resistance under current draw.",
    "sourceType": "public-style"
  },
  {
    "id": "Q043",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "In CMOS logic, the main component of dynamic power is proportional to:",
    "options": [
      "R \u00d7 I",
      "\u03b1CV\u00b2f",
      "V/I",
      "Threshold voltage only"
    ],
    "answer": 1,
    "explanation": "Dynamic switching power is approximately \u03b1CV\u00b2f.",
    "sourceType": "public-style"
  },
  {
    "id": "Q044",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "A PMOS transistor typically passes which value strongly?",
    "options": [
      "Strong 0",
      "Strong 1",
      "Neither 0 nor 1",
      "Only analog voltages"
    ],
    "answer": 1,
    "explanation": "PMOS passes a strong logic 1 and an NMOS passes a strong logic 0.",
    "sourceType": "public-style"
  },
  {
    "id": "Q045",
    "company": "Qualcomm",
    "role": "RTL",
    "topic": "Basic Electronics",
    "difficulty": "Hard",
    "question": "IR drop refers to:",
    "options": [
      "Voltage drop due to resistance in power delivery",
      "Logic inversion ratio",
      "Input resistance at clock pin",
      "Routing density metric"
    ],
    "answer": 0,
    "explanation": "IR drop is the voltage loss across power-grid resistance under current draw.",
    "sourceType": "public-style"
  },
  {
    "id": "Q046",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "Setup slack is computed as:",
    "options": [
      "Arrival time \u2212 required time",
      "Required time \u2212 arrival time",
      "Clock period \u00f7 skew",
      "Hold time \u2212 setup time"
    ],
    "answer": 1,
    "explanation": "Positive setup slack means arrival time is earlier than the required time.",
    "sourceType": "public-style"
  },
  {
    "id": "Q047",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Moderate",
    "question": "If clock uncertainty increases, setup slack generally will:",
    "options": [
      "Increase",
      "Remain unchanged",
      "Decrease",
      "Reverse sign always"
    ],
    "answer": 2,
    "explanation": "Higher uncertainty effectively reduces available timing budget, hurting slack.",
    "sourceType": "public-style"
  },
  {
    "id": "Q048",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "A hold violation is commonly fixed by:",
    "options": [
      "Increasing clock frequency",
      "Adding delay to the fast data path",
      "Reducing setup time",
      "Shrinking buffers"
    ],
    "answer": 1,
    "explanation": "Hold is fixed by slowing the data path or adjusting skew carefully.",
    "sourceType": "public-style"
  },
  {
    "id": "Q049",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "Setup slack is computed as:",
    "options": [
      "Arrival time \u2212 required time",
      "Required time \u2212 arrival time",
      "Clock period \u00f7 skew",
      "Hold time \u2212 setup time"
    ],
    "answer": 1,
    "explanation": "Positive setup slack means arrival time is earlier than the required time.",
    "sourceType": "public-style"
  },
  {
    "id": "Q050",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "If clock uncertainty increases, setup slack generally will:",
    "options": [
      "Increase",
      "Remain unchanged",
      "Decrease",
      "Reverse sign always"
    ],
    "answer": 2,
    "explanation": "Higher uncertainty effectively reduces available timing budget, hurting slack.",
    "sourceType": "public-style"
  },
  {
    "id": "Q051",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "A hold violation is commonly fixed by:",
    "options": [
      "Increasing clock frequency",
      "Adding delay to the fast data path",
      "Reducing setup time",
      "Shrinking buffers"
    ],
    "answer": 1,
    "explanation": "Hold is fixed by slowing the data path or adjusting skew carefully.",
    "sourceType": "public-style"
  },
  {
    "id": "Q052",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "Setup slack is computed as:",
    "options": [
      "Arrival time \u2212 required time",
      "Required time \u2212 arrival time",
      "Clock period \u00f7 skew",
      "Hold time \u2212 setup time"
    ],
    "answer": 1,
    "explanation": "Positive setup slack means arrival time is earlier than the required time.",
    "sourceType": "public-style"
  },
  {
    "id": "Q053",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Moderate",
    "question": "If clock uncertainty increases, setup slack generally will:",
    "options": [
      "Increase",
      "Remain unchanged",
      "Decrease",
      "Reverse sign always"
    ],
    "answer": 2,
    "explanation": "Higher uncertainty effectively reduces available timing budget, hurting slack.",
    "sourceType": "public-style"
  },
  {
    "id": "Q054",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "Static Timing Analysis (STA)",
    "difficulty": "Hard",
    "question": "A hold violation is commonly fixed by:",
    "options": [
      "Increasing clock frequency",
      "Adding delay to the fast data path",
      "Reducing setup time",
      "Shrinking buffers"
    ],
    "answer": 1,
    "explanation": "Hold is fixed by slowing the data path or adjusting skew carefully.",
    "sourceType": "public-style"
  },
  {
    "id": "Q055",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Moderate",
    "question": "Which physical-design stage is primarily responsible for balancing clock arrival across sinks?",
    "options": [
      "Placement",
      "CTS",
      "Floorplanning",
      "DRC"
    ],
    "answer": 1,
    "explanation": "Clock tree synthesis builds and balances the clock network.",
    "sourceType": "public-style"
  },
  {
    "id": "Q056",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Hard",
    "question": "Routing congestion is most likely improved by:",
    "options": [
      "Ignoring density hot spots",
      "Better floorplan / spreading cells",
      "Lowering setup time",
      "Increasing process node"
    ],
    "answer": 1,
    "explanation": "Congestion relief comes from improved floorplan, placement spread, and routing resources.",
    "sourceType": "public-style"
  },
  {
    "id": "Q057",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Hard",
    "question": "Which stage usually happens before detailed routing?",
    "options": [
      "Signoff extraction",
      "CTS and global routing planning",
      "Tape-out",
      "Board bring-up"
    ],
    "answer": 1,
    "explanation": "Detailed routing follows earlier implementation stages including CTS and global planning.",
    "sourceType": "public-style"
  },
  {
    "id": "Q058",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Moderate",
    "question": "Which physical-design stage is primarily responsible for balancing clock arrival across sinks?",
    "options": [
      "Placement",
      "CTS",
      "Floorplanning",
      "DRC"
    ],
    "answer": 1,
    "explanation": "Clock tree synthesis builds and balances the clock network.",
    "sourceType": "public-style"
  },
  {
    "id": "Q059",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Hard",
    "question": "Routing congestion is most likely improved by:",
    "options": [
      "Ignoring density hot spots",
      "Better floorplan / spreading cells",
      "Lowering setup time",
      "Increasing process node"
    ],
    "answer": 1,
    "explanation": "Congestion relief comes from improved floorplan, placement spread, and routing resources.",
    "sourceType": "public-style"
  },
  {
    "id": "Q060",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Hard",
    "question": "Which stage usually happens before detailed routing?",
    "options": [
      "Signoff extraction",
      "CTS and global routing planning",
      "Tape-out",
      "Board bring-up"
    ],
    "answer": 1,
    "explanation": "Detailed routing follows earlier implementation stages including CTS and global planning.",
    "sourceType": "public-style"
  },
  {
    "id": "Q061",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Moderate",
    "question": "Which physical-design stage is primarily responsible for balancing clock arrival across sinks?",
    "options": [
      "Placement",
      "CTS",
      "Floorplanning",
      "DRC"
    ],
    "answer": 1,
    "explanation": "Clock tree synthesis builds and balances the clock network.",
    "sourceType": "public-style"
  },
  {
    "id": "Q062",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Hard",
    "question": "Routing congestion is most likely improved by:",
    "options": [
      "Ignoring density hot spots",
      "Better floorplan / spreading cells",
      "Lowering setup time",
      "Increasing process node"
    ],
    "answer": 1,
    "explanation": "Congestion relief comes from improved floorplan, placement spread, and routing resources.",
    "sourceType": "public-style"
  },
  {
    "id": "Q063",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "Physical Design Flow",
    "difficulty": "Moderate",
    "question": "Which stage usually happens before detailed routing?",
    "options": [
      "Signoff extraction",
      "CTS and global routing planning",
      "Tape-out",
      "Board bring-up"
    ],
    "answer": 1,
    "explanation": "Detailed routing follows earlier implementation stages including CTS and global planning.",
    "sourceType": "public-style"
  },
  {
    "id": "Q064",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Hard",
    "question": "Crosstalk is caused mainly by:",
    "options": [
      "Capacitive coupling between nearby nets",
      "Excessive clock frequency alone",
      "Low fanout",
      "Large cache size"
    ],
    "answer": 0,
    "explanation": "Adjacent nets can capacitively couple and inject noise or alter delay.",
    "sourceType": "public-style"
  },
  {
    "id": "Q065",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Hard",
    "question": "Electromigration is fundamentally related to:",
    "options": [
      "Instruction-set mismatch",
      "Metal wear-out under sustained current density",
      "Boolean minimization",
      "Latch transparency"
    ],
    "answer": 1,
    "explanation": "High current density can physically move metal atoms over time.",
    "sourceType": "public-style"
  },
  {
    "id": "Q066",
    "company": "NVIDIA",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Moderate",
    "question": "Which trade-off is most typical in VLSI implementation?",
    "options": [
      "Power, performance, area",
      "Voltage, comments, whitespace",
      "Routing, syntax, branches",
      "Only clock and reset"
    ],
    "answer": 0,
    "explanation": "PPA is the classic design trade-off triangle.",
    "sourceType": "public-style"
  },
  {
    "id": "Q067",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Moderate",
    "question": "Crosstalk is caused mainly by:",
    "options": [
      "Capacitive coupling between nearby nets",
      "Excessive clock frequency alone",
      "Low fanout",
      "Large cache size"
    ],
    "answer": 0,
    "explanation": "Adjacent nets can capacitively couple and inject noise or alter delay.",
    "sourceType": "public-style"
  },
  {
    "id": "Q068",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Hard",
    "question": "Electromigration is fundamentally related to:",
    "options": [
      "Instruction-set mismatch",
      "Metal wear-out under sustained current density",
      "Boolean minimization",
      "Latch transparency"
    ],
    "answer": 1,
    "explanation": "High current density can physically move metal atoms over time.",
    "sourceType": "public-style"
  },
  {
    "id": "Q069",
    "company": "AMD",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Moderate",
    "question": "Which trade-off is most typical in VLSI implementation?",
    "options": [
      "Power, performance, area",
      "Voltage, comments, whitespace",
      "Routing, syntax, branches",
      "Only clock and reset"
    ],
    "answer": 0,
    "explanation": "PPA is the classic design trade-off triangle.",
    "sourceType": "public-style"
  },
  {
    "id": "Q070",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Hard",
    "question": "Crosstalk is caused mainly by:",
    "options": [
      "Capacitive coupling between nearby nets",
      "Excessive clock frequency alone",
      "Low fanout",
      "Large cache size"
    ],
    "answer": 0,
    "explanation": "Adjacent nets can capacitively couple and inject noise or alter delay.",
    "sourceType": "public-style"
  },
  {
    "id": "Q071",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Moderate",
    "question": "Electromigration is fundamentally related to:",
    "options": [
      "Instruction-set mismatch",
      "Metal wear-out under sustained current density",
      "Boolean minimization",
      "Latch transparency"
    ],
    "answer": 1,
    "explanation": "High current density can physically move metal atoms over time.",
    "sourceType": "public-style"
  },
  {
    "id": "Q072",
    "company": "Qualcomm",
    "role": "Physical Design",
    "topic": "VLSI Design",
    "difficulty": "Moderate",
    "question": "Which trade-off is most typical in VLSI implementation?",
    "options": [
      "Power, performance, area",
      "Voltage, comments, whitespace",
      "Routing, syntax, branches",
      "Only clock and reset"
    ],
    "answer": 0,
    "explanation": "PPA is the classic design trade-off triangle.",
    "sourceType": "public-style"
  },
  {
    "id": "Q073",
    "company": "NVIDIA",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "A 2-flop synchronizer is primarily used for:",
    "options": [
      "High-speed arithmetic",
      "Clock-domain crossing of single-bit signals",
      "Cache replacement",
      "Formal equivalence"
    ],
    "answer": 1,
    "explanation": "A 2FF synchronizer lowers metastability propagation risk for single-bit CDC transfers.",
    "sourceType": "public-style"
  },
  {
    "id": "Q074",
    "company": "NVIDIA",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "Gray code is preferred in async FIFO pointers because:",
    "options": [
      "It uses fewer flops",
      "Only one bit changes between adjacent counts",
      "It eliminates metastability fully",
      "It doubles memory depth"
    ],
    "answer": 1,
    "explanation": "Changing one bit at a time reduces CDC ambiguity on multi-bit pointer transfer.",
    "sourceType": "public-style"
  },
  {
    "id": "Q075",
    "company": "NVIDIA",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "An arbiter is used to:",
    "options": [
      "Convert analog to digital",
      "Grant one among multiple requesters",
      "Fix IR drop",
      "Decode instructions"
    ],
    "answer": 1,
    "explanation": "Arbiters resolve contention among multiple request sources.",
    "sourceType": "public-style"
  },
  {
    "id": "Q076",
    "company": "AMD",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "A 2-flop synchronizer is primarily used for:",
    "options": [
      "High-speed arithmetic",
      "Clock-domain crossing of single-bit signals",
      "Cache replacement",
      "Formal equivalence"
    ],
    "answer": 1,
    "explanation": "A 2FF synchronizer lowers metastability propagation risk for single-bit CDC transfers.",
    "sourceType": "public-style"
  },
  {
    "id": "Q077",
    "company": "AMD",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "Gray code is preferred in async FIFO pointers because:",
    "options": [
      "It uses fewer flops",
      "Only one bit changes between adjacent counts",
      "It eliminates metastability fully",
      "It doubles memory depth"
    ],
    "answer": 1,
    "explanation": "Changing one bit at a time reduces CDC ambiguity on multi-bit pointer transfer.",
    "sourceType": "public-style"
  },
  {
    "id": "Q078",
    "company": "AMD",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "An arbiter is used to:",
    "options": [
      "Convert analog to digital",
      "Grant one among multiple requesters",
      "Fix IR drop",
      "Decode instructions"
    ],
    "answer": 1,
    "explanation": "Arbiters resolve contention among multiple request sources.",
    "sourceType": "public-style"
  },
  {
    "id": "Q079",
    "company": "Qualcomm",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "A 2-flop synchronizer is primarily used for:",
    "options": [
      "High-speed arithmetic",
      "Clock-domain crossing of single-bit signals",
      "Cache replacement",
      "Formal equivalence"
    ],
    "answer": 1,
    "explanation": "A 2FF synchronizer lowers metastability propagation risk for single-bit CDC transfers.",
    "sourceType": "public-style"
  },
  {
    "id": "Q080",
    "company": "Qualcomm",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Hard",
    "question": "Gray code is preferred in async FIFO pointers because:",
    "options": [
      "It uses fewer flops",
      "Only one bit changes between adjacent counts",
      "It eliminates metastability fully",
      "It doubles memory depth"
    ],
    "answer": 1,
    "explanation": "Changing one bit at a time reduces CDC ambiguity on multi-bit pointer transfer.",
    "sourceType": "public-style"
  },
  {
    "id": "Q081",
    "company": "Qualcomm",
    "role": "Verification",
    "topic": "Advanced Digital Design",
    "difficulty": "Moderate",
    "question": "An arbiter is used to:",
    "options": [
      "Convert analog to digital",
      "Grant one among multiple requesters",
      "Fix IR drop",
      "Decode instructions"
    ],
    "answer": 1,
    "explanation": "Arbiters resolve contention among multiple request sources.",
    "sourceType": "public-style"
  },
  {
    "id": "Q082",
    "company": "NVIDIA",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Hard",
    "question": "Functional coverage is used to measure:",
    "options": [
      "Timing slack",
      "How well verification scenarios were exercised",
      "Routing overflow",
      "Leakage current"
    ],
    "answer": 1,
    "explanation": "Functional coverage tracks whether intended scenarios/behaviors were actually tested.",
    "sourceType": "public-style"
  },
  {
    "id": "Q083",
    "company": "NVIDIA",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Moderate",
    "question": "An assertion in verification is most useful for:",
    "options": [
      "Document formatting",
      "Checking protocol and design properties",
      "Placement optimization",
      "Cell sizing"
    ],
    "answer": 1,
    "explanation": "Assertions catch illegal or unexpected behavior during simulation/formal checks.",
    "sourceType": "public-style"
  },
  {
    "id": "Q084",
    "company": "NVIDIA",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Hard",
    "question": "Constrained-random verification is valuable because it:",
    "options": [
      "Prevents bugs completely",
      "Explores wider legal stimulus spaces automatically",
      "Replaces all directed tests",
      "Reduces clock skew"
    ],
    "answer": 1,
    "explanation": "Randomized stimulus with constraints can hit corner cases hard to enumerate manually.",
    "sourceType": "public-style"
  },
  {
    "id": "Q085",
    "company": "AMD",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Moderate",
    "question": "Functional coverage is used to measure:",
    "options": [
      "Timing slack",
      "How well verification scenarios were exercised",
      "Routing overflow",
      "Leakage current"
    ],
    "answer": 1,
    "explanation": "Functional coverage tracks whether intended scenarios/behaviors were actually tested.",
    "sourceType": "public-style"
  },
  {
    "id": "Q086",
    "company": "AMD",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Hard",
    "question": "An assertion in verification is most useful for:",
    "options": [
      "Document formatting",
      "Checking protocol and design properties",
      "Placement optimization",
      "Cell sizing"
    ],
    "answer": 1,
    "explanation": "Assertions catch illegal or unexpected behavior during simulation/formal checks.",
    "sourceType": "public-style"
  },
  {
    "id": "Q087",
    "company": "AMD",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Hard",
    "question": "Constrained-random verification is valuable because it:",
    "options": [
      "Prevents bugs completely",
      "Explores wider legal stimulus spaces automatically",
      "Replaces all directed tests",
      "Reduces clock skew"
    ],
    "answer": 1,
    "explanation": "Randomized stimulus with constraints can hit corner cases hard to enumerate manually.",
    "sourceType": "public-style"
  },
  {
    "id": "Q088",
    "company": "Qualcomm",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Hard",
    "question": "Functional coverage is used to measure:",
    "options": [
      "Timing slack",
      "How well verification scenarios were exercised",
      "Routing overflow",
      "Leakage current"
    ],
    "answer": 1,
    "explanation": "Functional coverage tracks whether intended scenarios/behaviors were actually tested.",
    "sourceType": "public-style"
  },
  {
    "id": "Q089",
    "company": "Qualcomm",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Moderate",
    "question": "An assertion in verification is most useful for:",
    "options": [
      "Document formatting",
      "Checking protocol and design properties",
      "Placement optimization",
      "Cell sizing"
    ],
    "answer": 1,
    "explanation": "Assertions catch illegal or unexpected behavior during simulation/formal checks.",
    "sourceType": "public-style"
  },
  {
    "id": "Q090",
    "company": "Qualcomm",
    "role": "Verification",
    "topic": "Verification Concepts",
    "difficulty": "Hard",
    "question": "Constrained-random verification is valuable because it:",
    "options": [
      "Prevents bugs completely",
      "Explores wider legal stimulus spaces automatically",
      "Replaces all directed tests",
      "Reduces clock skew"
    ],
    "answer": 1,
    "explanation": "Randomized stimulus with constraints can hit corner cases hard to enumerate manually.",
    "sourceType": "public-style"
  }
];
