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
    settings: { style: "accuracy", assist: "trace", sound: true, volume: 0.8, vibrate: true, rate: 0.85, voice: "", text: "normal", theme: "auto", hand: "right", dailyNew: 5, dailyKanji: 2, learn: "hiragana", furigana: true, speechOk: false },
    progress: {}, // char → { best, last, tries, right, wrong }
    srs: { cards: {}, day: null }, // spaced-repetition deck, see srs.js
  };
  let state = structuredClone(defaults);
  try {
    const raw = localStorage.getItem(KEY);
    if (raw) {
      const saved = JSON.parse(raw);
      state.settings = Object.assign({}, defaults.settings, saved.settings);
      state.progress = saved.progress || {};
      state.srs = Object.assign({ cards: {}, day: null }, saved.srs);
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
    srs() { return state.srs; },
    saveSrs() { save(); },
    reset() { state.progress = {}; state.srs = { cards: {}, day: null }; save(); },
    // Everything Kaku keeps on this device, as one JSON object.
    backup() { return { app: "kaku", format: 1, saved: new Date().toISOString(), settings: state.settings, progress: state.progress, srs: state.srs }; },
    // Replaces or merges in a backup checked by readBackup(). Merging keeps this device's settings.
    restore(data, { merge = false } = {}) {
      if (merge) Object.assign(state, mergeBackup(state, data));
      else {
        state.settings = Object.assign({}, defaults.settings, data.settings);
        state.progress = structuredClone(data.progress);
        state.srs = { cards: structuredClone(data.srs.cards), day: null };
      }
      save();
    },
  };

  /* Checks pasted or loaded text is a Kaku backup. Returns the backup, or
   * throws an Error whose message can be shown as is. */
  function readBackup(text) {
    let data;
    try { data = JSON.parse(text); } catch (_) { throw new Error("That isn't a Kaku backup: it couldn't be read."); }
    if (!data || data.app !== "kaku") throw new Error("That isn't a Kaku backup.");
    if (data.format > 1) throw new Error("This backup comes from a newer Kaku. Update the app first.");
    const isObj = (o) => o && typeof o === "object" && !Array.isArray(o);
    if (!isObj(data.progress) || !isObj(data.srs) || !isObj(data.srs.cards)) throw new Error("This backup is incomplete.");
    for (const c of Object.values(data.srs.cards)) {
      if (!["s", "d", "last", "due"].every((k) => Number.isFinite(c?.[k]))) throw new Error("This backup is damaged.");
    }
    return data;
  }

  /* Combines this device's state with a backup: for each card, the copy
   * reviewed more recently wins; writing scores keep the higher numbers. */
  function mergeBackup(here, there) {
    const cards = { ...here.srs.cards };
    for (const [id, c] of Object.entries(there.srs.cards)) if (!cards[id] || c.last > cards[id].last) cards[id] = c;
    const progress = { ...here.progress };
    for (const [ch, p] of Object.entries(there.progress)) {
      const q = progress[ch];
      progress[ch] = q ? { best: Math.max(q.best, p.best || 0), last: q.last, tries: Math.max(q.tries, p.tries || 0), right: Math.max(q.right, p.right || 0), wrong: Math.max(q.wrong, p.wrong || 0) } : p;
    }
    return { settings: here.settings, progress, srs: { cards, day: here.srs.day } };
  }

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

  // Screens in other files register hub tabs ({ name: render(body) }) and
  // routes ({ match: /^re$/, render(match) }) here; app.js shares its UI helpers in NH.UI.
  NH.Tabs = NH.Tabs || {};
  NH.Routes = NH.Routes || [];
  NH.UI = NH.UI || {};

  Object.assign(NH, { h, s, SVGNS, store, readBackup, mergeBackup, clamp, lerp, rand, shuffle, reducedMotion, hex, unhex, chars });
})();
