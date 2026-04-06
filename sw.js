
const CACHE_NAME = "vlsi-prep-v2";
const ASSETS = [
  "./",
  "./index.html",
  "./styles.css",
  "./app.js",
  "./manifest.json",
  "./data/question_bank.js",
  "./data/tests.js",
  "./assets/setup_hold.svg",
  "./assets/cdc_sync.svg",
  "./assets/fifo_gray.svg",
  "./assets/mux_truth_table.svg",
  "./assets/cache_hierarchy.svg",
  "./assets/cts_skew.svg"
];

self.addEventListener("install", event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(ASSETS)));
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(keys.map(key => {
      if (key !== CACHE_NAME) return caches.delete(key);
    })))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(resp => resp || fetch(event.request))
  );
});
