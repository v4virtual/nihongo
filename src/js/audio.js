/* Sound design, synthesized live with the Web Audio API (no audio files).
 *   accuracy    – pencil scratch, marimba blips, school chime
 *   neon        – transformer hum, tube crackle, synthwave chords
 *   calligraphy – brush swish, koto plucks (in-scale), wood block, temple bell */
window.NH = window.NH || {};

(function () {
  let ctx = null, master = null, verb = null, noiseBuf = null;
  let drawing = null; // live nodes for the continuous drawing sound

  const SCALES = {
    accuracy: [523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66, 1318.5], // C major pentatonic
    neon: [440, 523.25, 587.33, 659.25, 783.99, 880, 1046.5, 1174.66],         // A minor pentatonic
    calligraphy: [293.66, 311.13, 392, 440, 466.16, 587.33, 622.25, 783.99],   // miyako-bushi on D
  };

  function ensure() {
    if (ctx) {
      if (ctx.state === "suspended") ctx.resume();
      return ctx;
    }
    const AC = window.AudioContext || window.webkitAudioContext;
    if (!AC) return null;
    ctx = new AC();
    master = ctx.createGain();
    master.gain.value = 0.8;
    const comp = ctx.createDynamicsCompressor();
    master.connect(comp).connect(ctx.destination);
    // A short synthetic reverb shared by the softer sounds.
    verb = ctx.createConvolver();
    verb.buffer = impulse(2.2, 2.5);
    const wet = ctx.createGain();
    wet.gain.value = 0.25;
    verb.connect(wet).connect(master);
    noiseBuf = ctx.createBuffer(1, ctx.sampleRate * 2, ctx.sampleRate);
    const d = noiseBuf.getChannelData(0);
    for (let i = 0; i < d.length; i++) d[i] = Math.random() * 2 - 1;
    return ctx;
  }

  function impulse(seconds, decay) {
    const len = ctx.sampleRate * seconds;
    const buf = ctx.createBuffer(2, len, ctx.sampleRate);
    for (let c = 0; c < 2; c++) {
      const d = buf.getChannelData(c);
      for (let i = 0; i < len; i++) d[i] = (Math.random() * 2 - 1) * Math.pow(1 - i / len, decay);
    }
    return buf;
  }

  const on = () => NH.store.settings.sound && ensure();
  const now = () => ctx.currentTime;

  function out(node, { reverb = 0 } = {}) {
    node.connect(master);
    if (reverb) {
      const g = ctx.createGain();
      g.gain.value = reverb;
      node.connect(g).connect(verb);
    }
    return node;
  }

  function env(gain, t, a, peak, d, sustain = 0.0001) {
    gain.gain.cancelScheduledValues(t);
    gain.gain.setValueAtTime(0.0001, t);
    gain.gain.exponentialRampToValueAtTime(peak, t + a);
    gain.gain.exponentialRampToValueAtTime(sustain, t + a + d);
  }

  function tone(freq, { type = "sine", t = now(), a = 0.005, d = 0.4, peak = 0.3, reverb = 0, detune = 0, filter } = {}) {
    const o = ctx.createOscillator();
    o.type = type;
    o.frequency.setValueAtTime(freq, t);
    o.detune.value = detune;
    const g = ctx.createGain();
    env(g, t, a, peak, d);
    let node = o.connect(g);
    if (filter) node = node.connect(filter);
    out(node, { reverb });
    o.start(t);
    o.stop(t + a + d + 0.05);
    return o;
  }

  function noise({ t = now(), d = 0.1, peak = 0.3, type = "bandpass", freq = 2000, q = 1, reverb = 0 } = {}) {
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    const f = ctx.createBiquadFilter();
    f.type = type;
    f.frequency.value = freq;
    f.Q.value = q;
    const g = ctx.createGain();
    env(g, t, 0.002, peak, d);
    out(src.connect(f).connect(g), { reverb });
    src.start(t, Math.random());
    src.stop(t + d + 0.05);
  }

  // Karplus–Strong plucked string, rendered once per pitch and cached.
  const koto = new Map();
  function pluck(freq, { t = now(), peak = 0.5, reverb = 0.5 } = {}) {
    let buf = koto.get(freq);
    if (!buf) {
      const sr = ctx.sampleRate, len = Math.floor(sr * 2.4), N = Math.round(sr / freq);
      buf = ctx.createBuffer(1, len, sr);
      const y = buf.getChannelData(0);
      for (let i = 0; i < N; i++) y[i] = (Math.random() * 2 - 1) * (1 - i / N);
      for (let i = N; i < len; i++) y[i] = 0.4985 * (y[i - N] + y[i - N - 1 < 0 ? 0 : i - N - 1]);
      koto.set(freq, buf);
    }
    const src = ctx.createBufferSource();
    src.buffer = buf;
    const g = ctx.createGain();
    g.gain.value = peak;
    const f = ctx.createBiquadFilter();
    f.type = "lowpass";
    f.frequency.value = 3200;
    out(src.connect(f).connect(g), { reverb });
    src.start(t);
  }

  function bell(base, t = now()) {
    // Inharmonic partials of a bonshō-like temple bell, with a slow beat.
    const partials = [[0.5, 0.35, 7], [1, 0.3, 6], [1.183, 0.2, 5], [1.506, 0.16, 4], [2, 0.12, 3.5], [2.74, 0.08, 2.5], [3.76, 0.05, 1.6]];
    for (const [r, amp, dur] of partials) {
      tone(base * r, { t, a: 0.004, d: dur, peak: amp * 0.5, reverb: 0.6 });
      tone(base * r * 1.003, { t, a: 0.004, d: dur, peak: amp * 0.2 });
    }
  }

  // Continuous texture while the pen is down; `move(speed)` modulates it.
  function drawStart(style) {
    if (!on()) return;
    drawEnd();
    const t = now();
    const g = ctx.createGain();
    g.gain.value = 0.0001;
    const nodes = [];
    const src = ctx.createBufferSource();
    src.buffer = noiseBuf;
    src.loop = true;
    nodes.push(src);
    if (style === "neon") {
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.value = 520;
      const hum = [55, 110.4, 165.2].map((f) => {
        const o = ctx.createOscillator();
        o.type = "sawtooth";
        o.frequency.value = f;
        o.connect(lp);
        o.start(t);
        nodes.push(o);
        return o;
      });
      const crackle = ctx.createBiquadFilter();
      crackle.type = "highpass";
      crackle.frequency.value = 5000;
      const cg = ctx.createGain();
      cg.gain.value = 0.12;
      src.connect(crackle).connect(cg).connect(g);
      lp.connect(g);
      drawing = { g, nodes, hum, lp, style, base: 0.05, k: 0.12 };
    } else {
      const f1 = ctx.createBiquadFilter();
      const f2 = ctx.createBiquadFilter();
      if (style === "calligraphy") {
        f1.type = "lowpass"; f1.frequency.value = 1300;
        f2.type = "bandpass"; f2.frequency.value = 700; f2.Q.value = 0.6;
      } else {
        f1.type = "highpass"; f1.frequency.value = 1800;
        f2.type = "bandpass"; f2.frequency.value = 4200; f2.Q.value = 0.9;
      }
      src.connect(f1).connect(f2).connect(g);
      drawing = { g, nodes, f2, style, base: 0.01, k: style === "calligraphy" ? 0.5 : 0.22 };
    }
    out(g);
    src.start(t);
  }

  function drawMove(speed) {
    if (!drawing || !ctx) return;
    const t = now();
    const v = Math.min(1, speed);
    drawing.g.gain.setTargetAtTime(drawing.base + drawing.k * v, t, 0.03);
    if (drawing.hum) {
      drawing.hum.forEach((o, i) => o.frequency.setTargetAtTime((55 + v * 18) * (i + 1), t, 0.05));
      drawing.lp.frequency.setTargetAtTime(380 + v * 900, t, 0.05);
    } else if (drawing.f2) {
      drawing.f2.frequency.setTargetAtTime((drawing.style === "calligraphy" ? 500 : 3600) + v * 1400, t, 0.04);
    }
  }

  function drawEnd() {
    if (!drawing || !ctx) return;
    const { g, nodes } = drawing;
    const t = now();
    g.gain.setTargetAtTime(0.0001, t, 0.03);
    nodes.forEach((n) => n.stop(t + 0.2));
    drawing = null;
  }

  function accept(style, i = 0, n = 1) {
    if (!on()) return;
    const scale = SCALES[style] || SCALES.accuracy;
    const f = scale[Math.min(scale.length - 1, Math.round((i / Math.max(1, n - 1)) * (scale.length - 3)))];
    const t = now();
    if (style === "neon") {
      for (let k = 0; k < 4; k++) noise({ t: t + k * 0.035 + Math.random() * 0.02, d: 0.025, peak: 0.25, freq: 3500, q: 0.7 });
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(4000, t + 0.12);
      lp.frequency.exponentialRampToValueAtTime(600, t + 0.6);
      tone(f, { type: "square", t: t + 0.12, d: 0.5, peak: 0.12, filter: lp, reverb: 0.5 });
      tone(f * 2, { type: "sawtooth", t: t + 0.12, d: 0.3, peak: 0.04, detune: 8, reverb: 0.5 });
    } else if (style === "calligraphy") {
      pluck(f, { t, peak: 0.55 });
    } else {
      tone(f, { t, d: 0.35, peak: 0.25 });
      tone(f * 4, { t, d: 0.06, peak: 0.06 });
      noise({ t, d: 0.02, peak: 0.08, freq: 6000 });
    }
  }

  function reject(style) {
    if (!on()) return;
    const t = now();
    if (style === "neon") {
      const o = ctx.createOscillator();
      o.type = "sawtooth";
      o.frequency.setValueAtTime(320, t);
      o.frequency.exponentialRampToValueAtTime(50, t + 0.35);
      const g = ctx.createGain();
      env(g, t, 0.005, 0.18, 0.35);
      out(o.connect(g));
      o.start(t);
      o.stop(t + 0.4);
      noise({ t, d: 0.2, peak: 0.12, freq: 900, q: 3 });
    } else if (style === "calligraphy") {
      tone(560, { t, d: 0.12, peak: 0.35 });
      tone(1210, { t, d: 0.04, peak: 0.1 });
      noise({ t, d: 0.05, peak: 0.2, freq: 1200, q: 4 });
    } else {
      tone(330, { t, d: 0.12, peak: 0.15 });
      tone(262, { t: t + 0.11, d: 0.2, peak: 0.15 });
    }
  }

  function complete(style, score = 100) {
    if (!on()) return;
    const t = now() + 0.05;
    if (style === "neon") {
      const chord = score >= 75 ? [220, 261.63, 329.63, 493.88] : [220, 261.63, 311.13];
      const lp = ctx.createBiquadFilter();
      lp.type = "lowpass";
      lp.frequency.setValueAtTime(300, t);
      lp.frequency.exponentialRampToValueAtTime(3500, t + 0.6);
      lp.frequency.exponentialRampToValueAtTime(700, t + 2);
      lp.Q.value = 6;
      out(lp, { reverb: 0.6 });
      for (const f of chord) {
        for (const det of [-9, 9]) {
          const o = ctx.createOscillator();
          o.type = "sawtooth";
          o.frequency.value = f;
          o.detune.value = det;
          const g = ctx.createGain();
          env(g, t, 0.08, 0.05, 2.2);
          o.connect(g).connect(lp);
          o.start(t);
          o.stop(t + 2.4);
        }
      }
      SCALES.neon.slice(0, 6).forEach((f, k) => tone(f * 2, { type: "square", t: t + k * 0.09, d: 0.18, peak: 0.05, reverb: 0.7 }));
    } else if (style === "calligraphy") {
      // stamp thud, hyoshigi clap, then the bell
      tone(90, { t, d: 0.25, peak: 0.5 });
      noise({ t, d: 0.08, peak: 0.3, type: "lowpass", freq: 500 });
      for (const k of [0.35, 0.47]) {
        noise({ t: t + k, d: 0.06, peak: 0.6, freq: 2400, q: 6, reverb: 0.8 });
        tone(1850, { t: t + k, d: 0.05, peak: 0.15 });
      }
      bell(score >= 75 ? 196 : 174.6, t + 0.75);
    } else {
      const notes = score >= 90 ? [523.25, 659.25, 783.99, 1046.5] : [523.25, 659.25, 783.99];
      notes.forEach((f, k) => {
        tone(f, { t: t + k * 0.11, d: 0.6, peak: 0.2, reverb: 0.4 });
        tone(f * 3, { t: t + k * 0.11, d: 0.15, peak: 0.04 });
      });
    }
  }

  function tap() {
    if (!on()) return;
    tone(1400, { d: 0.03, peak: 0.05 });
  }

  NH.Audio = { unlock: ensure, drawStart, drawMove, drawEnd, accept, reject, complete, tap, pluck: (f) => on() && pluck(f) };
})();
