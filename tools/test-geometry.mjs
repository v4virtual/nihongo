// Sanity checks for the stroke grader: node tools/test-geometry.mjs
import { readFileSync } from "node:fs";
global.window = global;
for (const f of ["util.js", "data/strokes.js", "geometry.js"]) {
  try { (0, eval)(readFileSync(new URL(`../src/js/${f}`, import.meta.url), "utf8")); }
  catch (e) { if (f !== "util.js") throw e; } // util.js touches the DOM/localStorage; Geo only needs clamp
}
NH.clamp ??= (v, a, b) => Math.max(a, Math.min(b, v));
const { strokesOf, grade, judge, resample } = NH.Geo;

let seed = 7;
const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
// A plausible human attempt: shifted, scaled, wobbly, unevenly sampled.
function humanize(ref, jitter, shift) {
  const pts = resample(ref.raw, 30 + ((rnd() * 30) | 0));
  const dx = (rnd() - 0.5) * shift, dy = (rnd() - 0.5) * shift, sc = 0.9 + rnd() * 0.2;
  let wx = 0, wy = 0;
  return pts.map((p) => {
    wx = wx * 0.8 + (rnd() - 0.5) * jitter; wy = wy * 0.8 + (rnd() - 0.5) * jitter;
    return { x: 54.5 + (p.x - 54.5) * sc + dx + wx, y: 54.5 + (p.y - 54.5) * sc + dy + wy };
  });
}

let fails = 0;
const report = (name, ok) => { if (!ok) { fails++; console.log("FAIL", name); } };
const chars = Object.keys(NH.STROKES);
const stats = { trace: [0, 0], guide: [0, 0], memory: [0, 0] };
let reversedCaught = 0, reversedTotal = 0, confusions = 0, pairs = 0;
for (const ch of chars) {
  const S = strokesOf(ch);
  S.forEach((ref, i) => {
    for (const assist of ["trace", "guide", "memory"]) {
      for (let k = 0; k < 10; k++) {
        const g = grade(humanize(ref, 3, 8), ref, assist);
        stats[assist][0] += g.ok; stats[assist][1]++;
      }
    }
    if (ref.len > 22) {
      reversedTotal++;
      const g = grade(humanize(ref, 2, 4).reverse(), ref, "guide");
      if (g.reversed && !g.ok) reversedCaught++;
    }
    S.forEach((other, j) => {
      if (i === j) return;
      pairs++;
      // Drawing stroke j when stroke i is due must never count as stroke i.
      if (judge(humanize(other, 2, 4), S, i, new Set(), "guide").status === "ok") confusions++;
    });
  });
}
// Sloppy attempts should get stricter treatment at higher levels.
for (const assist of ["trace", "guide", "memory"]) {
  let ok = 0, n = 0;
  for (const ch of chars) for (const ref of strokesOf(ch)) { ok += grade(humanize(ref, 6, 22), ref, assist).ok; n++; }
  console.log(`${assist}: ${((100 * ok) / n).toFixed(1)}% of sloppy attempts accepted`);
}
for (const [a, [ok, n]] of Object.entries(stats)) {
  console.log(`${a}: ${((100 * ok) / n).toFixed(1)}% of decent attempts accepted`);
}
console.log(`reversed strokes caught: ${reversedCaught}/${reversedTotal}`);
console.log(`wrong stroke accepted as another: ${confusions}/${pairs}`);
report("trace acceptance", stats.trace[0] / stats.trace[1] > 0.97);
report("guide acceptance", stats.guide[0] / stats.guide[1] > 0.9);
report("reversal detection", reversedCaught / reversedTotal > 0.9);
report("confusion rate", confusions / pairs < 0.02);
// A perfect copy scores ~100.
report("perfect score", grade(strokesOf("あ")[0].raw, strokesOf("あ")[0]).accuracy >= 98);
process.exit(fails ? 1 : 0);
