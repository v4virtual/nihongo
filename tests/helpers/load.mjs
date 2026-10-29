// Loads the app's browser scripts into a Node VM sandbox so pure logic
// (geometry, data, tables) can be unit-tested without a browser.
import { readFileSync } from "node:fs";
import vm from "node:vm";

const SRC = new URL("../../src/", import.meta.url);

export function load(files) {
  const store = new Map();
  const sandbox = {
    console,
    structuredClone,
    localStorage: {
      getItem: (k) => (store.has(k) ? store.get(k) : null),
      setItem: (k, v) => store.set(k, String(v)),
      removeItem: (k) => store.delete(k),
    },
    matchMedia: () => ({ matches: false }),
  };
  sandbox.window = sandbox;
  vm.createContext(sandbox);
  for (const f of files) {
    vm.runInContext(readFileSync(new URL(`js/${f}`, SRC), "utf8"), sandbox, { filename: f });
  }
  return sandbox.NH;
}

export const ALL_DATA = ["util.js", "data/strokes.js", "data/kana-info.js", "data/kana.js", "data/words.js", "data/scene-art.js", "geometry.js"];

// Deterministic "human" stroke: shifted, scaled, wobbly, unevenly sampled.
export function makeRng(seed = 7) {
  let s = seed;
  return () => (s = (s * 16807) % 2147483647) / 2147483647;
}

export function humanize(NH, ref, rnd, { jitter = 3, shift = 8 } = {}) {
  const pts = NH.Geo.resample(ref.raw, 30 + ((rnd() * 30) | 0));
  const dx = (rnd() - 0.5) * shift, dy = (rnd() - 0.5) * shift, sc = 0.9 + rnd() * 0.2;
  let wx = 0, wy = 0;
  return pts.map((p) => {
    wx = wx * 0.8 + (rnd() - 0.5) * jitter;
    wy = wy * 0.8 + (rnd() - 0.5) * jitter;
    return { x: 54.5 + (p.x - 54.5) * sc + dx + wx, y: 54.5 + (p.y - 54.5) * sc + dy + wy };
  });
}
