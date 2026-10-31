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

describe("stroke endings (hane)", () => {
  const { hasHook } = NH.Geo;
  // Removes the last `cut` units of a stroke: the same stroke without its flick.
  const trim = (raw, cut) => {
    const pts = resample(raw, 200);
    const keep = Math.round(200 * (1 - cut / length(pts)));
    return pts.slice(0, keep);
  };

  test("the model marks exactly the textbook hooks", () => {
    const marked = [];
    for (const ch of chars.filter((c) => !/[\u3400-\u9fff]/.test(c))) strokesOf(ch).forEach((st, i) => st.hane && marked.push(`${ch}${i + 1}`));
    assert.deepEqual(marked.sort(), [
      "い1", "か1", "が1", "き3", "ぎ3", "け1", "げ1", "さ2", "ざ2", "せ2", "ぜ2", "に1", "は1", "ば1", "ぱ1",
      "ほ1", "ぼ1", "ぽ1", "む2", "り1", "ぃ1", "ゑ1",
      // katakana: オ's and ホ's verticals and カ's turn end in a flick
      "オ2", "ォ2", "カ1", "ガ1", "ホ2", "ボ2", "ポ2",
    ].sort());
  });

  test("kanji hooks are found, and straight strokes aren't hooks", () => {
    const hook = (ch, n) => !!strokesOf(ch)[n - 1].hane;
    for (const [ch, n] of [["水", 1], ["小", 1], ["子", 2], ["月", 2], ["円", 2], ["何", 7], ["行", 6], ["見", 7]]) assert.ok(hook(ch, n), `${ch} stroke ${n}`);
    for (const [ch, n] of [["一", 1], ["十", 2], ["木", 2], ["人", 1], ["日", 2], ["本", 2]]) assert.ok(!hook(ch, n), `${ch} stroke ${n} is straight`);
  });

  test("a stroke written with its flick is recognised", () => {
    const rnd = makeRng(21);
    let ok = 0, n = 0;
    for (const ch of chars) for (const st of strokesOf(ch)) {
      if (!st.hane) continue;
      for (let k = 0; k < 5; k++) { ok += hasHook(humanize(NH, st, rnd, { jitter: 1.5, shift: 6 })); n++; }
    }
    assert.ok(ok / n > 0.9, `${ok}/${n} flicks recognised`);
  });

  test("the same stroke stopped before the flick is not", () => {
    for (const ch of ["い", "け", "は", "り", "に"]) {
      const st = strokesOf(ch)[0];
      assert.equal(hasHook(trim(st.raw, 15)), false, `${ch}: trimmed stroke still has a hook`);
      assert.equal(hasHook(st.raw), true, `${ch}: model stroke has no hook`);
    }
  });

  test("a straight or gently curved stroke has no hook", () => {
    assert.equal(hasHook([{ x: 10, y: 10 }, { x: 10, y: 90 }]), false);
    assert.equal(hasHook(strokesOf("し")[0].raw), false);
    assert.equal(hasHook(strokesOf("つ")[0].raw), false);
  });
});

describe("stroke descriptions", () => {
  const { describe: say } = NH.Geo;
  test("every stroke gets a plain-language description", () => {
    for (const ch of chars) for (const st of strokesOf(ch)) assert.match(say(st), /^starts at the (top|middle|bottom|centre)/, ch);
  });
  test("they say where strokes go, loop and flick", () => {
    const [a1, a2, a3] = strokesOf("あ").map(say);
    assert.match(a1, /top left, a line going right/);
    assert.match(a2, /long line going down/);
    assert.match(a3, /loops around/);
    assert.match(say(strokesOf("い")[0]), /ends with a flick \(hane\)/);
    assert.doesNotMatch(say(strokesOf("い")[1]), /flick/);
  });
});
