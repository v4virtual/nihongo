import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA, makeRng, humanize } from "../helpers/load.mjs";

const NH = load(ALL_DATA);
const { flatten, resample, length, grade, judge, strokesOf, smooth, labelPos } = NH.Geo;
const chars = Object.keys(NH.STROKES);

describe("path parsing", () => {
  test("absolute and relative line commands", () => {
    const pts = flatten("M0,0 L10,0 l0,10 H0 v-10");
    assert.deepEqual(JSON.parse(JSON.stringify(pts.map((p) => [p.x, p.y]))), [[0, 0], [10, 0], [10, 10], [0, 10], [0, 0]]);
  });

  test("cubic curves end exactly at their end point", () => {
    const pts = flatten("M10,10c0,10,20,10,20,0s20,-10,20,0");
    const last = pts[pts.length - 1];
    assert.ok(Math.abs(last.x - 50) < 1e-9 && Math.abs(last.y - 10) < 1e-9);
  });

  test("every KanjiVG stroke parses inside the 109 box", () => {
    for (const ch of chars) {
      for (const st of strokesOf(ch)) {
        assert.ok(st.raw.length >= 2, `${ch} has an empty stroke`);
        for (const p of st.raw) assert.ok(p.x > -2 && p.x < 111 && p.y > -2 && p.y < 111, `${ch} point out of box`);
      }
    }
  });
});

describe("resampling", () => {
  test("returns n evenly spaced points with the same length", () => {
    const line = [{ x: 0, y: 0 }, { x: 100, y: 0 }];
    const r = resample(line, 11);
    assert.equal(r.length, 11);
    r.forEach((p, i) => assert.ok(Math.abs(p.x - i * 10) < 1e-6));
    assert.ok(Math.abs(length(r) - 100) < 1e-6);
  });

  test("a single point (a tap) does not crash", () => {
    const r = resample([{ x: 5, y: 5 }], 8);
    assert.equal(r.length, 8);
  });

  test("smoothing keeps end points", () => {
    const pts = Array.from({ length: 20 }, (_, i) => ({ x: i, y: i % 2 ? 3 : -3 }));
    const s = smooth(pts);
    assert.deepEqual(s[0], pts[0]);
    assert.deepEqual(s[19], pts[19]);
  });
});

describe("stroke grading", () => {
  test("a perfect copy scores close to 100", () => {
    for (const ch of ["あ", "き", "ふ", "を", "ぽ"]) {
      for (const st of strokesOf(ch)) {
        const g = grade(st.raw, st, "memory");
        assert.ok(g.ok, `${ch} rejected a perfect stroke`);
        assert.ok(g.accuracy >= 97, `${ch} scored ${g.accuracy}`);
      }
    }
  });

  test("decent human attempts are accepted at every help level", () => {
    const rnd = makeRng(11);
    for (const assist of ["trace", "guide", "memory"]) {
      let ok = 0, n = 0;
      for (const ch of chars) for (const st of strokesOf(ch)) { ok += grade(humanize(NH, st, rnd), st, assist).ok; n++; }
      assert.ok(ok / n > 0.97, `${assist}: only ${((100 * ok) / n).toFixed(1)}% accepted`);
    }
  });

  test("higher help levels are stricter on sloppy attempts", () => {
    const rates = {};
    for (const assist of ["trace", "guide", "memory"]) {
      const rnd = makeRng(5);
      let ok = 0, n = 0;
      for (const ch of chars) for (const st of strokesOf(ch)) { ok += grade(humanize(NH, st, rnd, { jitter: 6, shift: 22 }), st, assist).ok; n++; }
      rates[assist] = ok / n;
    }
    assert.ok(rates.trace > rates.guide && rates.guide > rates.memory, JSON.stringify(rates));
  });

  test("accuracy drops as the stroke drifts away", () => {
    const st = strokesOf("し")[0];
    const shifted = (d) => st.raw.map((p) => ({ x: p.x + d, y: p.y }));
    const a = [0, 4, 8, 12].map((d) => grade(shifted(d), st, "trace").accuracy);
    for (let i = 1; i < a.length; i++) assert.ok(a[i] < a[i - 1], `not monotonic: ${a}`);
  });

  test("a stroke in the wrong place is rejected", () => {
    const st = strokesOf("し")[0];
    const far = st.raw.map((p) => ({ x: p.x + 40, y: p.y }));
    assert.equal(grade(far, st, "trace").ok, false);
  });

  test("reversed strokes are flagged, not accepted", () => {
    const rnd = makeRng(3);
    for (const ch of chars) {
      for (const st of strokesOf(ch)) {
        if (st.len < 22) continue; // dots and ticks have no meaningful direction
        const g = grade(humanize(NH, st, rnd, { jitter: 2, shift: 4 }).reverse(), st, "guide");
        assert.ok(g.reversed && !g.ok, `${ch}: reversed stroke not caught`);
      }
    }
  });
});

describe("stroke order", () => {
  test("drawing a later stroke first is reported as an order mistake", () => {
    const S = strokesOf("た");
    const r = judge(S[2].raw, S, 0, new Set(), "guide");
    assert.equal(r.status, "order");
    assert.equal(r.actual, 2);
  });

  test("the two dakuten ticks are told apart", () => {
    const S = strokesOf("が");
    const n = S.length;
    const r = judge(S[n - 1].raw, S, n - 2, new Set([0, 1, 2]), "trace");
    assert.equal(r.status, "order");
  });

  test("the wrong stroke almost never counts as the due one", () => {
    const rnd = makeRng(9);
    let bad = 0, pairs = 0;
    for (const ch of chars) {
      const S = strokesOf(ch);
      S.forEach((_, i) => S.forEach((other, j) => {
        if (i === j) return;
        pairs++;
        if (judge(humanize(NH, other, rnd, { jitter: 2, shift: 4 }), S, i, new Set(), "guide").status === "ok") bad++;
      }));
    }
    assert.ok(bad / pairs < 0.02, `${bad}/${pairs} confusions`);
  });

  test("the due stroke drawn well is ok", () => {
    const S = strokesOf("ほ");
    S.forEach((st, i) => {
      const done = new Set([...Array(i).keys()]);
      assert.equal(judge(st.raw, S, i, done, "memory").status, "ok", `stroke ${i + 1}`);
    });
  });
});

test("stroke number labels stay inside the box", () => {
  for (const ch of chars) {
    for (const st of strokesOf(ch)) {
      const p = labelPos(st);
      assert.ok(p.x >= 5 && p.x <= 104 && p.y >= 6 && p.y <= 106, `${ch} label at ${p.x},${p.y}`);
    }
  }
});
