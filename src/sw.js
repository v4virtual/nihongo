// Offline support for the installed app.
// App files are network-first: online you always get the latest deploy, offline
// the last copy. Google Fonts never change, so they are cache-first.
// The deploy job stamps CACHE with the commit, which clears older caches.
const CACHE = "kaku-dev";
const FILES = [
  "./", "index.html", "css/app.css", "manifest.webmanifest",
  "icon.svg", "icon-192.png", "icon-512.png", "icon-maskable-512.png", "apple-touch-icon.png",
  "js/util.js", "js/data/strokes.js", "js/data/kana-info.js", "js/data/katakana-info.js", "js/data/kana.js", "js/data/words.js", "js/data/reading.js", "js/data/kanji.js",
  "js/data/scene-art.js", "js/geometry.js", "js/ink.js", "js/audio.js", "js/tts.js",
  "js/srs.js", "js/backdrops.js", "js/writer.js", "js/today.js", "js/read.js", "js/speak.js", "js/kanji-line.js", "js/app.js",
];
const FONTS = /^https:\/\/fonts\.(googleapis|gstatic)\.com\//;

self.addEventListener("install", (e) => {
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES)));
});

self.addEventListener("activate", (e) =>
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  )
);

self.addEventListener("fetch", (e) => {
  const req = e.request;
  if (req.method !== "GET") return;
  if (FONTS.test(req.url)) {
    e.respondWith(caches.match(req).then((hit) => hit || fetchAndKeep(req)));
  } else if (new URL(req.url).origin === location.origin) {
    e.respondWith(fetchAndKeep(req).catch(() => caches.match(req, { ignoreSearch: true })));
  }
});

async function fetchAndKeep(req) {
  const res = await fetch(req);
  if (res.ok) {
    const copy = res.clone();
    caches.open(CACHE).then((c) => c.put(req, copy));
  }
  return res;
}
