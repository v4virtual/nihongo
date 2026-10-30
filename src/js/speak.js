/* Pronunciation check: say a word, phrase or sign and see what the speech
 * recogniser heard.
 * Web: the browser's Web Speech recognition (Chrome, Edge, Safari). The
 * browser's provider does the listening (Chrome sends the audio to Google),
 * so the first use asks before turning the microphone on.
 * Android app: Android's speech service (@capacitor-community/speech-recognition).
 * Single kana aren't offered: cloud recognisers turn one syllable into a
 * random word, so they need an on-device model (see ROADMAP). */
window.NH = window.NH || {};

(function () {
  const WebSR = window.SpeechRecognition || window.webkitSpeechRecognition;
  const native = window.Capacitor?.isNativePlatform?.() && window.Capacitor.Plugins?.SpeechRecognition;
  // Framed pages (like the Claude artifact) can't get the microphone.
  let framed = false;
  try { framed = window.self !== window.top; } catch (_) { framed = true; }
  const supported = !!native || (!!WebSR && window.isSecureContext !== false && !framed);

  // ── matching (pure, unit-tested) ─────────────────────────
  const KANJI = /[㐀-鿿豈-﫿々]/;
  // Katakana → hiragana; drop spaces, punctuation, long-vowel marks and digits.
  function normalize(s) {
    return [...(s || "")].map((c) => {
      const n = c.codePointAt(0);
      return n >= 0x30a1 && n <= 0x30f6 ? String.fromCodePoint(n - 0x60) : c;
    }).join("").replace(/[\s。、，．,.!?！？「」『』・ー〜~0-9０-９]/g, "");
  }
  // The way it sounds: particle は/へ at the end of a word are wa/e, を is o.
  function sounds(target) {
    return target.split(/\s+/).map((w) => w.replace(/は$/, "わ").replace(/へ$/, "え").replace(/を/g, "お")).join("");
  }
  function lev(a, b) {
    a = [...a]; b = [...b];
    let row = b.map((_, j) => j + 1);
    row.unshift(0);
    for (let i = 1; i <= a.length; i++) {
      let prev = row[0];
      row[0] = i;
      for (let j = 1; j <= b.length; j++) {
        const tmp = row[j];
        row[j] = Math.min(row[j] + 1, row[j - 1] + 1, prev + (a[i - 1] === b[j - 1] ? 0 : 1));
        prev = tmp;
      }
    }
    return row[b.length];
  }
  // Recognisers write words in kanji (駅 for えき). Each run of kanji may stand
  // for 1–4 kana; the kana around it must line up exactly.
  function kanjiFits(heard, target) {
    if (!KANJI.test(heard)) return false;
    const kana = [...heard].filter((c) => !KANJI.test(c)).length;
    if (kana < [...target].length / 2) return false; // mostly kanji: too loose to judge
    const re = heard.split(/([㐀-鿿豈-﫿々]+)/).map((part, i) =>
      i % 2 ? `.{${[...part].length},${[...part].length * 4}}` : part.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")).join("");
    return new RegExp(`^${re}$`, "u").test(target);
  }

  /* Compares what was heard (the recogniser's alternatives) with the target
   * kana. Returns { ok, close, heard }: ok when any alternative says it,
   * close when the best one is near. */
  function match(targetKana, alternatives, kanji = "") {
    const raw = normalize(targetKana), sound = normalize(sounds(targetKana));
    const k = normalize(kanji);
    let best = null, bestScore = -1;
    for (const alt of alternatives || []) {
      const hd = normalize(alt);
      if (!hd) continue;
      if (hd === raw || hd === sound || (k && hd === k) || kanjiFits(hd, raw) || kanjiFits(hd, sound)) return { ok: true, close: true, heard: alt };
      const score = 1 - Math.min(lev(hd, raw), lev(hd, sound)) / Math.max([...hd].length, [...raw].length);
      if (score > bestScore) { bestScore = score; best = alt; }
    }
    return { ok: false, close: bestScore >= 0.6, heard: best };
  }

  // ── listening ────────────────────────────────────────────
  // Resolves with the recogniser's alternatives, or rejects with a short reason.
  async function listen() {
    if (native) {
      const p = await native.checkPermissions().catch(() => ({}));
      if (p.speechRecognition !== "granted") {
        const r = await native.requestPermissions();
        if (r.speechRecognition !== "granted") throw new Error("not-allowed");
      }
      const res = await native.start({ language: "ja-JP", maxResults: 5, partialResults: false, popup: false });
      return res.matches || [];
    }
    return new Promise((resolve, reject) => {
      const r = new WebSR();
      r.lang = "ja-JP";
      r.maxAlternatives = 5;
      r.interimResults = false;
      r.continuous = false;
      let done = false;
      r.onresult = (e) => { done = true; resolve([...e.results[0]].map((a) => a.transcript)); };
      r.onerror = (e) => { done = true; reject(new Error(e.error || "error")); };
      r.onend = () => { if (!done) reject(new Error("no-speech")); };
      listen.stop = () => { try { r.stop(); } catch (_) {} };
      r.start();
    });
  }
  const WHY = {
    "not-allowed": "The microphone is blocked. Allow it for this site in your browser's settings, then try again.",
    "service-not-allowed": "This browser won't run speech recognition here.",
    "no-speech": "Didn't catch anything. Tap the microphone and speak after the tone.",
    "audio-capture": "No microphone found.",
    network: "Speech recognition in this browser needs an internet connection.",
  };

  // ── the "Say it" sheet ───────────────────────────────────
  function button(item) {
    if (!supported || !item) return null;
    return NH.UI.btn("Say it", () => open(item), "ghost", "mic");
  }

  function open(item) {
    const { h, btn, iconBtn, say, announce } = NH.UI;
    const text = item.kana.replace(/\s/g, "");
    const bg = h("div.sheet-bg", { onclick: (e) => e.target === bg && close() });
    const opener = document.activeElement;
    const keys = (e) => { if (e.key === "Escape") close(); };
    const close = () => { listen.stop?.(); native?.stop?.().catch(() => {}); bg.remove(); document.removeEventListener("keydown", keys); opener?.focus?.(); };
    document.addEventListener("keydown", keys);
    NH.UI.onLeave(close); // a back gesture closes it too
    const body = h("div.say-body");
    const sheet = h("div.sheet.say-sheet", { role: "dialog", "aria-modal": "true", "aria-label": "Say it", tabindex: "-1" },
      h("div.sheet-head", h("h2", "Say it"), iconBtn("close", "Close", close)),
      h("div.say-target", h("b", item.kana), h("span", item.romaji)),
      body);
    bg.append(sheet);
    document.body.append(bg);
    sheet.focus();
    NH.store.settings.speechOk ? ready() : consent();

    function consent() {
      body.replaceChildren(
        h("p", native
          ? "Kaku will use your phone's speech service to turn what you say into text. Depending on the phone, the audio may be sent to Google for this."
          : "Your browser does the listening: Chrome and Edge send the audio to Google or Microsoft to turn it into text, Safari to Apple."),
        h("p.muted", "Kaku itself doesn't record, keep or send anything."),
        h("div.actions", btn("Use the microphone", () => { NH.store.set("speechOk", true); ready(); }, "primary", "mic"), btn("Not now", close, "ghost")));
    }

    function ready(msg) {
      const status = h("p.say-status", { "aria-live": "polite" }, msg || "Listen first if you like, then tap the microphone and say it.");
      const mic = h("button.say-mic", { type: "button", "aria-label": "Start listening", onclick: start }, NH.UI.icon("mic"));
      body.replaceChildren(mic, status, h("div.actions", btn("Listen", () => say(text), "ghost", "speaker")));
      mic.focus();

      async function start() {
        mic.classList.add("on");
        mic.disabled = true;
        status.className = "say-status";
        status.textContent = "Listening…";
        try {
          const alts = await listen();
          const r = match(item.kana, alts, item.kanji);
          mic.classList.remove("on");
          mic.disabled = false;
          status.className = "say-status " + (r.ok ? "ok" : r.close ? "tip" : "no");
          status.textContent = r.ok ? `Yes! Heard ${r.heard}.` : r.heard ? `${r.close ? "Close. " : ""}Heard ${r.heard}. Listen and try again.` : "Couldn't make that out. Try again.";
          r.ok ? NH.Audio.accept(NH.store.settings.style, 3, 5) : NH.Audio.reject(NH.store.settings.style);
          announce(status.textContent);
        } catch (e) {
          mic.classList.remove("on");
          mic.disabled = false;
          status.className = "say-status no";
          status.textContent = WHY[e.message] || "Speech recognition stopped. Try again.";
          announce(status.textContent);
        }
      }
    }
  }

  NH.Speak = { supported, normalize, sounds, match, button, open };
})();
