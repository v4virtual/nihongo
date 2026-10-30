/* Small helpers shared by every module: DOM building, storage, math. */
window.NH = window.NH || {};

(function () {
  const SVGNS = "http://www.w3.org/2000/svg";

  // h("div.card#id", {onclick}, child, "text", [children]) → HTMLElement
  function h(tag, attrs, ...kids) {
    const [, name, rest] = tag.match(/^([a-z0-9-]+)?(.*)$/i);
    const el = document.createElement(name || "div");
    applyTagSuffix(el, rest);
    applyAttrs(el, attrs);
    append(el, kids);
    return el;
  }

  function s(tag, attrs, ...kids) {
    const [, name, rest] = tag.match(/^([a-z0-9-]+)?(.*)$/i);
    const el = document.createElementNS(SVGNS, name || "g");
    applyTagSuffix(el, rest);
    applyAttrs(el, attrs);
    append(el, kids);
    return el;
  }

  function applyTagSuffix(el, rest) {
    for (const m of rest.matchAll(/([.#])([\w-]+)/g)) {
      if (m[1] === ".") el.classList.add(m[2]);
      else el.id = m[2];
    }
  }

  function applyAttrs(el, attrs) {
    if (!attrs || typeof attrs !== "object" || attrs instanceof Node || Array.isArray(attrs)) {
      if (attrs != null) append(el, [attrs]);
      return;
    }
    for (const [k, v] of Object.entries(attrs)) {
      if (v == null || v === false) continue;
      if (k.startsWith("on") && typeof v === "function") el.addEventListener(k.slice(2), v);
      else if (k === "class") el.setAttribute("class", [el.getAttribute("class"), v].filter(Boolean).join(" "));
      else if (k === "style" && typeof v === "object") Object.assign(el.style, v);
      else if (k === "html") el.innerHTML = v;
      else el.setAttribute(k, v === true ? "" : v);
    }
  }

  function append(el, kids) {
    for (const k of kids.flat(Infinity)) {
      if (k == null || k === false) continue;
      el.append(k instanceof Node ? k : document.createTextNode(String(k)));
    }
  }

  // Persistent settings and progress. Storage may be unavailable; the app works without it.
  const KEY = "kaku.v1";
  const defaults = {
    settings: { style: "accuracy", assist: "trace", sound: true, volume: 0.8, vibrate: true, rate: 0.85, voice: "", text: "normal", theme: "auto" },
    progress: {}, // char → { best, last, tries, right, wrong }
  };
  let state = structuredClone(defaults);
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state.settings = Object.assign({}, defaults.settings, saved.settings);
      state.progress = saved.progress || {};
    }
  } catch (_) {}

  const store = {
    get settings() { return state.settings; },
    set(key, value) { state.settings[key] = value; save(); },
    progress(ch) { return state.progress[ch] || null; },
    recordWrite(ch, acc) {
      const p = (state.progress[ch] ||= { best: 0, last: 0, tries: 0, right: 0, wrong: 0 });
      p.tries++;
      p.last = acc;
      p.best = Math.max(p.best, acc);
      save();
    },
    recordQuiz(ch, ok) {
      const p = (state.progress[ch] ||= { best: 0, last: 0, tries: 0, right: 0, wrong: 0 });
      ok ? p.right++ : p.wrong++;
      save();
    },
    reset() { state.progress = {}; save(); },
  };

  function save() {
    try { localStorage.setItem(KEY, JSON.stringify(state)); } catch (_) {}
  }

  const clamp = (v, a, b) => Math.max(a, Math.min(b, v));
  const lerp = (a, b, t) => a + (b - a) * t;
  const rand = (a, b) => a + Math.random() * (b - a);
  const shuffle = (arr) => {
    const a = arr.slice();
    for (let i = a.length - 1; i > 0; i--) {
      const j = (Math.random() * (i + 1)) | 0;
      [a[i], a[j]] = [a[j], a[i]];
    }
    return a;
  };
  const reducedMotion = () => window.matchMedia && matchMedia("(prefers-reduced-motion: reduce)").matches;
  const hex = (ch) => [...ch].map((c) => c.codePointAt(0).toString(16)).join("-");
  const unhex = (id) => id.split("-").map((x) => String.fromCodePoint(parseInt(x, 16))).join("");

  // Splits a hiragana word into writable characters, keeping small kana as their own cells.
  const chars = (word) => [...word];

  Object.assign(NH, { h, s, SVGNS, store, clamp, lerp, rand, shuffle, reducedMotion, hex, unhex, chars });
})();
