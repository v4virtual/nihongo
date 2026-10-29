/* Stroke geometry: parses KanjiVG paths, resamples polylines and grades a
 * handwritten stroke against the reference. All coordinates live in KanjiVG's
 * 109×109 box. Pure functions, so tools/test-geometry.mjs can run them in Node. */
window.NH = window.NH || {};

(function () {
  const BOX = 109;
  const N = 48; // points per resampled stroke

  // Flattens an SVG path (M/L/C/S/Q/Z, absolute or relative) into a polyline.
  function flatten(d) {
    const toks = d.match(/[a-zA-Z]|-?(?:\d*\.\d+|\d+\.?)(?:e[-+]?\d+)?/g) || [];
    const pts = [];
    let i = 0, cmd = "", x = 0, y = 0, sx = 0, sy = 0, cx2 = 0, cy2 = 0, prev = "";
    const num = () => parseFloat(toks[i++]);
    const cubic = (x1, y1, x2, y2, x3, y3) => {
      const x0 = x, y0 = y;
      for (let k = 1; k <= 16; k++) {
        const t = k / 16, u = 1 - t;
        pts.push({
          x: u * u * u * x0 + 3 * u * u * t * x1 + 3 * u * t * t * x2 + t * t * t * x3,
          y: u * u * u * y0 + 3 * u * u * t * y1 + 3 * u * t * t * y2 + t * t * t * y3,
        });
      }
      cx2 = x2; cy2 = y2; x = x3; y = y3;
    };
    while (i < toks.length) {
      if (/[a-zA-Z]/.test(toks[i])) cmd = toks[i++];
      const rel = cmd === cmd.toLowerCase();
      const ox = rel ? x : 0, oy = rel ? y : 0;
      switch (cmd.toUpperCase()) {
        case "M":
          x = num() + ox; y = num() + oy; sx = x; sy = y;
          pts.push({ x, y });
          cmd = rel ? "l" : "L"; // implicit lineto after moveto
          break;
        case "L":
          x = num() + ox; y = num() + oy; pts.push({ x, y });
          break;
        case "H":
          x = num() + ox; pts.push({ x, y });
          break;
        case "V":
          y = num() + oy; pts.push({ x, y });
          break;
        case "C": {
          const a = [num() + ox, num() + oy, num() + ox, num() + oy, num() + ox, num() + oy];
          cubic(...a);
          break;
        }
        case "S": {
          const rx = /[CS]/i.test(prev) ? 2 * x - cx2 : x;
          const ry = /[CS]/i.test(prev) ? 2 * y - cy2 : y;
          const a = [num() + ox, num() + oy, num() + ox, num() + oy];
          cubic(rx, ry, ...a);
          break;
        }
        case "Q": {
          const qx = num() + ox, qy = num() + oy, ex = num() + ox, ey = num() + oy;
          cubic(x + (2 / 3) * (qx - x), y + (2 / 3) * (qy - y), ex + (2 / 3) * (qx - ex), ey + (2 / 3) * (qy - ey), ex, ey);
          break;
        }
        case "Z":
          x = sx; y = sy; pts.push({ x, y });
          break;
        default:
          i++; // unsupported command: skip a token rather than loop forever
      }
      prev = cmd;
    }
    return pts;
  }

  const dist = (a, b) => Math.hypot(a.x - b.x, a.y - b.y);

  function length(pts) {
    let L = 0;
    for (let i = 1; i < pts.length; i++) L += dist(pts[i - 1], pts[i]);
    return L;
  }

  // Resamples a polyline to n points evenly spaced along its length.
  function resample(pts, n = N) {
    if (!pts.length) return [];
    const L = length(pts);
    if (L < 1e-6) return Array.from({ length: n }, () => ({ x: pts[0].x, y: pts[0].y }));
    const step = L / (n - 1);
    const out = [{ x: pts[0].x, y: pts[0].y }];
    let acc = 0;
    for (let i = 1; i < pts.length && out.length < n; i++) {
      let a = pts[i - 1];
      const b = pts[i];
      let seg = dist(a, b);
      while (acc + seg >= step && out.length < n) {
        const t = (step - acc) / seg;
        const p = { x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t };
        out.push(p);
        a = p;
        seg = dist(a, b);
        acc = 0;
      }
      acc += seg;
    }
    while (out.length < n) out.push({ ...pts[pts.length - 1] });
    return out;
  }

  const cache = new Map();
  // Reference strokes for a character: [{ d, pts (resampled), len }]
  function strokesOf(ch) {
    if (cache.has(ch)) return cache.get(ch);
    const paths = (NH.STROKES && NH.STROKES[ch]) || [];
    const strokes = paths.map((d) => {
      const raw = flatten(d);
      return { d, raw, pts: resample(raw), len: length(raw) };
    });
    cache.set(ch, strokes);
    return strokes;
  }

  // Tolerances in KanjiVG units (the box is 109 wide) per assist level.
  const TOL = { trace: 16, guide: 12.5, memory: 10.5 };

  // Moving-average smoothing that keeps the end points, to tame pointer jitter.
  function smooth(pts, r = 2) {
    if (pts.length < 5) return pts;
    return pts.map((p, i) => {
      if (i === 0 || i === pts.length - 1) return p;
      let sx = 0, sy = 0, n = 0;
      for (let k = Math.max(0, i - r); k <= Math.min(pts.length - 1, i + r); k++) { sx += pts[k].x; sy += pts[k].y; n++; }
      return { x: sx / n, y: sy / n };
    });
  }

  function meanDist(a, b, reversed) {
    let s = 0;
    for (let i = 0; i < a.length; i++) s += dist(a[i], b[reversed ? b.length - 1 - i : i]);
    return s / a.length;
  }

  /* Grades one user stroke (points in box units) against reference stroke `ref`.
   * Returns { ok, accuracy 0-100, avg, reversed } */
  function grade(userPts, ref, assist = "guide") {
    const short = ref.len < 22;
    const T = (TOL[assist] || TOL.guide) * (short ? 1.4 : 1);
    const U = resample(smooth(userPts));
    const avg = meanDist(U, ref.pts, false);
    const rev = meanDist(U, ref.pts, true);
    const ratio = length(U) / Math.max(ref.len, 1);
    const [lo, hi] = short ? [0.15, 4] : [0.4, 2.6];
    const reversed = !short && rev <= T && rev < avg * 0.6;
    const ok = !reversed && avg <= T && ratio >= lo && ratio <= hi;
    const accuracy = Math.round(100 * Math.max(0, 1 - Math.pow(avg / (2.5 * T), 1.3)));
    return { ok, accuracy, avg, reversed, ratio };
  }

  /* Judges a user stroke when stroke `expected` is due. Returns
   *   { status: "ok" | "order" | "reversed" | "miss", grade, actual }
   * "order" means it matches a different unwritten stroke clearly better. */
  function judge(userPts, strokes, expected, done, assist) {
    const g = grade(userPts, strokes[expected], assist);
    let actual = -1, bestAvg = Infinity;
    strokes.forEach((ref, i) => {
      if (i === expected || done.has(i)) return;
      const o = grade(userPts, ref, assist);
      if (o.ok && o.avg < bestAvg) { actual = i; bestAvg = o.avg; }
    });
    if (g.ok && !(actual >= 0 && bestAvg < g.avg * 0.5)) return { status: "ok", grade: g, actual: expected };
    if (actual >= 0) return { status: "order", grade: g, actual };
    if (g.reversed) return { status: "reversed", grade: g, actual: expected };
    return { status: "miss", grade: g, actual: -1 };
  }

  // Where to put a stroke's number: a little behind its starting point.
  function labelPos(ref) {
    const p0 = ref.pts[0], p1 = ref.pts[Math.min(4, ref.pts.length - 1)];
    let dx = p1.x - p0.x, dy = p1.y - p0.y;
    const L = Math.hypot(dx, dy) || 1;
    dx /= L; dy /= L;
    // step back along the stroke and a bit to its left
    return { x: NH.clamp(p0.x - dx * 6 - dy * 5, 5, BOX - 5), y: NH.clamp(p0.y - dy * 6 + dx * 5, 6, BOX - 3) };
  }

  NH.Geo = { BOX, N, flatten, resample, smooth, length, dist, strokesOf, grade, judge, labelPos, TOL };
})();
