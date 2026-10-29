/* Japanese speech through the browser's built-in speech synthesis (Web Speech
 * API). On Android this is Google's offline TTS, on iOS/macOS "Kyoko"/"O-ren",
 * on Windows "Nanami"/"Haruka". No network or API key needed. */
window.NH = window.NH || {};

(function () {
  const synth = window.speechSynthesis;
  let voices = [];
  const listeners = new Set();

  // Natural-sounding voices first; fall back to any ja-JP voice.
  const PREFERRED = [/nanami/i, /google.*日本語|日本語.*google/i, /kyoko.*(enhanced|premium)/i, /o-ren/i, /kyoko/i, /haruka/i, /ayumi/i, /otoya/i];

  function load() {
    if (!synth) return;
    voices = synth.getVoices().filter((v) => /^ja(-|_|$)/i.test(v.lang));
    voices.sort((a, b) => rank(a) - rank(b));
    listeners.forEach((fn) => fn(voices));
  }
  const rank = (v) => {
    const i = PREFERRED.findIndex((re) => re.test(v.name));
    return i < 0 ? 99 : i;
  };

  if (synth) {
    load();
    synth.addEventListener ? synth.addEventListener("voiceschanged", load) : (synth.onvoiceschanged = load);
  }

  function pick() {
    const want = NH.store.settings.voice;
    return voices.find((v) => v.name === want) || voices[0] || null;
  }

  // Lone small kana and particles read oddly on their own; say what a teacher would.
  const SAY = { "っ": "ちいさい つ", "ゃ": "ちいさい や", "ゅ": "ちいさい ゆ", "ょ": "ちいさい よ", "ぁ": "ちいさい あ", "ぃ": "ちいさい い", "ぅ": "ちいさい う", "ぇ": "ちいさい え", "ぉ": "ちいさい お", "ゎ": "ちいさい わ", "を": "を", "ゐ": "い", "ゑ": "え", "ぢ": "ぢ", "づ": "づ" };

  function speak(text, { rate } = {}) {
    if (!synth) return false;
    synth.cancel();
    const u = new SpeechSynthesisUtterance(SAY[text] || text);
    u.lang = "ja-JP";
    const v = pick();
    if (v) u.voice = v;
    u.rate = rate || NH.store.settings.rate || 0.85;
    u.pitch = 1;
    synth.speak(u);
    return true;
  }

  NH.TTS = {
    get supported() { return !!synth; },
    get voices() { return voices; },
    get hasJapanese() { return voices.length > 0; },
    speak,
    onVoices(fn) { listeners.add(fn); return () => listeners.delete(fn); },
  };
})();
