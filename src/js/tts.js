/* Japanese speech.
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
    voices = synth.getVoices().filter((v) => isJa(v.lang));
    voices.sort((a, b) => rank(a) - rank(b));
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

  NH.TTS = {
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
