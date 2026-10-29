// Offline cache for the installed app: cache-first for our files, network for the rest.
const CACHE = "kaku-v0.1.0";
const FILES = [
  "./", "index.html", "css/app.css", "icon.svg", "manifest.webmanifest",
  "js/util.js", "js/data/strokes.js", "js/data/kana-info.js", "js/data/kana.js", "js/data/words.js",
  "js/data/scene-art.js", "js/geometry.js", "js/ink.js", "js/audio.js", "js/tts.js",
  "js/backdrops.js", "js/writer.js", "js/app.js",
];
self.addEventListener("install", (e) => e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES))));
self.addEventListener("activate", (e) =>
  e.waitUntil(caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k)))))
);
self.addEventListener("fetch", (e) => {
  if (e.request.method !== "GET") return;
  e.respondWith(
    caches.match(e.request).then((hit) => hit || fetch(e.request).then((res) => {
      // Keep Google Fonts for offline use too.
      if (res.ok && /fonts\.(googleapis|gstatic)\.com/.test(e.request.url)) {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(e.request, copy));
      }
      return res;
    }))
  );
});
