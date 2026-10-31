/* Speech: Japanese words, and the lessons' narration, which is English with
 * the Japanese spoken in a Japanese voice.
 * Web: the browser's built-in speech synthesis (Web Speech API). On Android
 * this is Google's offline TTS, on iOS/macOS "Kyoko"/"O-ren", on Windows
 * "Nanami"/"Haruka". No network or API key needed.
 * Android app: the WebView has no speech synthesis, so speech goes through
 * Android's own text-to-speech engine (@capacitor-community/text-to-speech). */
window.NH = window.NH || {};

(function () {
  const synth = window.speechSynthesis;
  const native = window.Capacitor?.isNativePlatform?.() && window.Capacitor.Plugins?.TextToSpeech;
  let voices = [];
  let english = null; // the narrator's voice (web), best local English voice
  let nativeJapanese = false;
  const listeners = new Set();
  const notify = () => listeners.forEach((fn) => fn(voices));

  // Natural-sounding voices first; fall back to any ja-JP voice.
  const PREFERRED = [/nanami/i, /google.*日本語|日本語.*google/i, /kyoko.*(enhanced|premium)/i, /o-ren/i, /kyoko/i, /haruka/i, /ayumi/i, /otoya/i];
  const rank = (v) => {
    const i = PREFERRED.findIndex((re) => re.test(v.name));
    return i < 0 ? 99 : i;
  };
  const isJa = (lang) => /^ja([-_]|$)/i.test(lang || "");

  function loadWeb() {
    const all = synth.getVoices();
    voices = all.filter((v) => isJa(v.lang));
    voices.sort((a, b) => rank(a) - rank(b));
    const en = all.filter((v) => /^en([-_]|$)/i.test(v.lang));
    english = en.find((v) => v.localService && /^en[-_](US|GB)/i.test(v.lang)) || en.find((v) => v.localService) || en[0] || null;
    notify();
  }

  async function loadNative() {
    try {
      nativeJapanese = (await native.isLanguageSupported({ lang: "ja-JP" })).supported;
      // `voice` in speak() is an index into the full list, so remember it.
      const all = (await native.getSupportedVoices()).voices || [];
      voices = all.map((v, index) => ({ name: v.name, lang: v.lang, localService: v.localService !== false, index })).filter((v) => isJa(v.lang));
    } catch (_) {
      voices = [];
    }
    notify();
  }

  if (native) loadNative();
  else if (synth) {
    loadWeb();
    synth.addEventListener ? synth.addEventListener("voiceschanged", loadWeb) : (synth.onvoiceschanged = loadWeb);
  }

  function pick() {
    const want = NH.store.settings.voice;
    return voices.find((v) => v.name === want) || voices[0] || null;
  }

  // Lone small kana and particles read oddly on their own; say what a teacher would.
  const SAY = { "っ": "ちいさい つ", "ゃ": "ちいさい や", "ゅ": "ちいさい ゆ", "ょ": "ちいさい よ", "ぁ": "ちいさい あ", "ぃ": "ちいさい い", "ぅ": "ちいさい う", "ぇ": "ちいさい え", "ぉ": "ちいさい お", "ゎ": "ちいさい わ", "を": "を", "ゐ": "い", "ゑ": "え", "ぢ": "ぢ", "づ": "づ" };

  function speak(text, { rate } = {}) {
    if (current) { const c = current; current = null; c.cancel(); }
    const say = SAY[text] || text;
    const r = rate || NH.store.settings.rate || 0.85;
    const v = pick();
    if (native) {
      native.stop().catch(() => {}).finally(() =>
        native.speak({ text: say, lang: "ja-JP", rate: r, pitch: 1, volume: 1, ...(v ? { voice: v.index } : {}) }).catch(() => {}));
      return true;
    }
    if (!synth) return false;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(say);
    u.lang = "ja-JP";
    if (v) u.voice = v;
    u.rate = r;
    u.pitch = 1;
    synth.speak(u);
    return true;
  }

  /* Narration: speaks segments [{ text, lang: "en" | "ja" }] one after the
   * other. Returns { done, cancel }; done resolves when the last one ends (or
   * is cancelled). Without speech it waits about as long as reading takes, so
   * an animated lesson keeps its pace with captions alone. */
  let current = null;
  function narrate(segments) {
    current?.cancel();
    let cancelled = false, finish;
    const done = new Promise((r) => (finish = r));
    const handle = { done, cancel: () => { if (cancelled) return; cancelled = true; stopSpeech(); finish(); } };
    current = handle;
    (async () => {
      for (const seg of segments) {
        if (cancelled) return;
        await sayOne(seg, () => cancelled);
      }
      if (current === handle) current = null;
      finish();
    })();
    return handle;
  }
  // How long reading a segment takes, roughly: for captions without a voice and as a safety net.
  const estimate = ({ text, lang }) => 400 + text.length * (lang === "ja" ? 220 : 65);
  function sayOne(seg, isCancelled) {
    const r = NH.store.settings.rate || 0.85;
    const ja = seg.lang === "ja";
    const text = ja ? SAY[seg.text] || seg.text : seg.text;
    return new Promise((resolve) => {
      const limit = setTimeout(resolve, estimate(seg) * 2.5 + 1500);
      const end = () => { clearTimeout(limit); resolve(); };
      if (isCancelled()) return end();
      if (native) {
        const v = ja ? pick() : null;
        native.speak({ text, lang: ja ? "ja-JP" : "en-US", rate: ja ? r : Math.min(1, r + 0.1), pitch: 1, volume: 1, ...(v ? { voice: v.index } : {}) }).then(end, end);
        return;
      }
      if (!synth || (ja && !voices.length)) { clearTimeout(limit); return setTimeout(resolve, estimate(seg)); }
      const u = new SpeechSynthesisUtterance(text);
      u.lang = ja ? "ja-JP" : "en-US";
      const v = ja ? pick() : english;
      if (v) u.voice = v;
      u.rate = ja ? r : Math.min(1, r + 0.1);
      u.onend = u.onerror = end;
      synth.speak(u);
    });
  }
  function stopSpeech() {
    if (native) native.stop().catch(() => {});
    else synth?.cancel();
  }
  // Splits text into English and Japanese runs: "A sword through あ" → two segments.
  function segments(text, lang = "en") {
    const out = [];
    for (const m of text.matchAll(/([\u3000-\u30ff\u3400-\u9fff々]+)|([^\u3000-\u30ff\u3400-\u9fff々]+)/g)) {
      const seg = m[1] ? { text: m[1], lang: "ja" } : { text: m[2], lang };
      if (seg.lang === "en" && !/[a-z0-9]/i.test(seg.text)) continue; // bare punctuation
      out.push(seg);
    }
    return out;
  }

  NH.TTS = {
    narrate, segments, estimate,
    stop() { current?.cancel(); stopSpeech(); },
    native: !!native,
    get supported() { return !!(native || synth); },
    get voices() { return voices; },
    get hasJapanese() { return native ? nativeJapanese || voices.length > 0 : voices.length > 0; },
    speak,
    // Android app only: opens the system screen to download voice data.
    installVoice() { return native ? native.openInstall().catch(() => {}) : null; },
    onVoices(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
})();
