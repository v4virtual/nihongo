/* Ink renderers for the three writing styles. Each takes a 2D context and a
 * stroke as pixel points [{x, y, t, p}] and paints it:
 *   pencil – graphite on notebook paper
 *   brush  – sumi ink whose width follows speed and pressure, with dry-brush
 *            streaks (kasure) on fast sweeps and tapered flicks (harai)
 *   neon   – glowing glass tube; `tube` paints the same tube unlit */
window.NH = window.NH || {};

(function () {
  const { dist } = { dist: (a, b) => Math.hypot(a.x - b.x, a.y - b.y) };

  function chaikin(pts, iters = 2) {
    let p = pts;
    for (let k = 0; k < iters && p.length > 2; k++) {
      const q = [p[0]];
      for (let i = 0; i < p.length - 1; i++) {
        const a = p[i], b = p[i + 1];
        q.push(mix(a, b, 0.25));
        q.push(mix(a, b, 0.75));
      }
      q.push(p[p.length - 1]);
      p = q;
    }
    return p;
  }

  // Interpolates position, time and pressure, so speeds stay meaningful after smoothing.
  const mix = (a, b, t) => ({ x: a.x + (b.x - a.x) * t, y: a.y + (b.y - a.y) * t, t: a.t + (b.t - a.t) * t, p: a.p + (b.p - a.p) * t });

  function path(ctx, pts) {
    ctx.beginPath();
    ctx.moveTo(pts[0].x, pts[0].y);
    if (pts.length === 1) { ctx.lineTo(pts[0].x + 0.01, pts[0].y); return; }
    for (let i = 1; i < pts.length - 1; i++) {
      const mx = (pts[i].x + pts[i + 1].x) / 2, my = (pts[i].y + pts[i + 1].y) / 2;
      ctx.quadraticCurveTo(pts[i].x, pts[i].y, mx, my);
    }
    const l = pts[pts.length - 1];
    ctx.lineTo(l.x, l.y);
  }

  // Seeded random so a stroke's texture is identical on every redraw.
  function prng(seed) {
    let s = (Math.abs(Math.floor(seed * 9973)) % 2147483646) + 1;
    return () => ((s = (s * 16807) % 2147483647) / 2147483647);
  }

  // ── pencil ───────────────────────────────────────────────
  let graphite = null;
  function graphitePattern(ctx) {
    if (graphite) return graphite;
    const c = document.createElement("canvas");
    c.width = c.height = 96;
    const g = c.getContext("2d");
    g.fillStyle = "#3a3a44";
    g.fillRect(0, 0, 96, 96);
    const img = g.getImageData(0, 0, 96, 96);
    for (let i = 0; i < img.data.length; i += 4) {
      const n = Math.random();
      const v = n < 0.18 ? 120 : n < 0.3 ? 85 : 58;
      img.data[i] = v; img.data[i + 1] = v; img.data[i + 2] = v + 8;
      img.data[i + 3] = n < 0.12 ? 120 : 235;
    }
    g.putImageData(img, 0, 0);
    graphite = ctx.createPattern(c, "repeat");
    return graphite;
  }

  function pencil(ctx, pts, { w, color }) {
    if (!pts.length) return;
    const sm = chaikin(pts, 2);
    const pr = pressureOf(pts);
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalAlpha = 0.16;
    ctx.strokeStyle = color || "#444";
    ctx.lineWidth = w * 0.5 * pr;
    path(ctx, sm);
    ctx.stroke();
    ctx.globalAlpha = 0.95;
    ctx.strokeStyle = color || graphitePattern(ctx);
    ctx.lineWidth = w * 0.3 * pr;
    path(ctx, sm);
    ctx.stroke();
    ctx.restore();
  }

  function pressureOf(pts) {
    // Real pen pressure varies; mice report a flat 0.5 or 0, which we ignore.
    const ps = pts.map((p) => p.p).filter((p) => p > 0 && p !== 0.5);
    if (ps.length < pts.length / 2) return 1;
    return 0.55 + 0.8 * (ps.reduce((a, b) => a + b, 0) / ps.length);
  }

  // ── brush ────────────────────────────────────────────────
  let off = null;
  function offscreen(w, h) {
    if (!off) off = document.createElement("canvas");
    if (off.width !== w || off.height !== h) { off.width = w; off.height = h; }
    const c = off.getContext("2d");
    c.setTransform(1, 0, 0, 1, 0, 0);
    c.clearRect(0, 0, w, h);
    return c;
  }

  /* Widths per point: slow = loaded, wide brush; fast = thin. The entry
   * presses in (irikomi); a fast exit tapers into a sweep (harai), a slow one
   * stops blunt (tome). `scale` normalises speed to the cell size. */
  function brushWidths(pts, w, scale, live) {
    const n = pts.length;
    const sp = new Array(n).fill(0);
    for (let i = 1; i < n; i++) {
      const dt = Math.max(4, pts[i].t - pts[i - 1].t);
      sp[i] = (dist(pts[i], pts[i - 1]) / dt) * scale;
    }
    sp[0] = sp[1] || 0;
    for (let i = 1; i < n; i++) sp[i] = sp[i - 1] * 0.7 + sp[i] * 0.3;
    const pr = pressureOf(pts);
    const ws = sp.map((v) => w * NH.clamp(1.4 - 1.25 * v, 0.3, 1.35) * pr);
    // entry
    let acc = 0;
    for (let i = 0; i < n; i++) {
      if (i) acc += dist(pts[i], pts[i - 1]);
      const t = acc / (w * 0.9);
      if (t >= 1) break;
      ws[i] *= 0.55 + 0.5 * Math.sin(t * Math.PI * 0.6);
    }
    // exit
    const endSpeed = sp.slice(-5).reduce((a, b) => a + b, 0) / Math.min(5, n);
    if (!live && endSpeed > 0.75) {
      const total = acc + pts.slice(1).reduce((a, p, i) => a + dist(p, pts[i]), 0) - acc;
      let back = 0;
      const tail = Math.min(total * 0.45, w * 4.5);
      for (let i = n - 1; i > 0 && back < tail; i--) {
        ws[i] *= Math.pow(back / tail, 0.7) * 0.95 + 0.04;
        back += dist(pts[i], pts[i - 1]);
      }
    }
    return { ws, sp };
  }

  function brush(ctx, pts, { w, color = "#16120f", scale = 1, live = false, bleed = true }) {
    if (!pts.length) return;
    const sm = chaikin(pts, 2);
    const { ws, sp } = brushWidths(sm, w, scale, live);
    const cw = ctx.canvas.width, ch = ctx.canvas.height;
    const o = offscreen(cw, ch);
    o.setTransform(ctx.getTransform());
    o.fillStyle = color;
    // Body: discs joined by quads along the centreline.
    for (let i = 0; i < sm.length; i++) {
      const p = sm[i], r = ws[i] / 2;
      o.beginPath();
      o.arc(p.x, p.y, Math.max(0.3, r), 0, Math.PI * 2);
      o.fill();
      if (i) {
        const q = sm[i - 1], rq = ws[i - 1] / 2;
        const dx = p.x - q.x, dy = p.y - q.y, L = Math.hypot(dx, dy) || 1;
        const nx = -dy / L, ny = dx / L;
        o.beginPath();
        o.moveTo(q.x + nx * rq, q.y + ny * rq);
        o.lineTo(p.x + nx * r, p.y + ny * r);
        o.lineTo(p.x - nx * r, p.y - ny * r);
        o.lineTo(q.x - nx * rq, q.y - ny * rq);
        o.fill();
      }
    }
    // Dry-brush streaks where the brush moved fast.
    const rnd = prng(sm[0].x * 31 + sm[0].y);
    o.globalCompositeOperation = "destination-out";
    o.lineCap = "butt";
    const hairs = 7;
    for (let k = 0; k < hairs; k++) {
      const off = (rnd() - 0.5) * 0.85;
      const thick = 0.4 + rnd() * 1.3;
      const gate = 0.4 + rnd() * 0.5;
      for (let i = 1; i < sm.length; i++) {
        const dry = (sp[i] - gate) * 1.6;
        if (dry <= 0) continue;
        const p = sm[i], q = sm[i - 1];
        const dx = p.x - q.x, dy = p.y - q.y, L = Math.hypot(dx, dy) || 1;
        const nx = -dy / L, ny = dx / L;
        o.globalAlpha = NH.clamp(dry, 0, 0.85);
        o.lineWidth = thick;
        o.beginPath();
        o.moveTo(q.x + nx * ws[i - 1] * off, q.y + ny * ws[i - 1] * off);
        o.lineTo(p.x + nx * ws[i] * off, p.y + ny * ws[i] * off);
        o.stroke();
      }
    }
    o.globalCompositeOperation = "source-over";
    o.globalAlpha = 1;
    ctx.save();
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (bleed && !live) {
      // Ink soaking into the washi: a soft halo under the stroke.
      ctx.globalAlpha = 0.22;
      ctx.filter = "blur(2.5px)";
      ctx.drawImage(off, 0, 0);
      ctx.filter = "none";
      ctx.globalAlpha = 1;
    }
    ctx.drawImage(off, 0, 0);
    ctx.restore();
  }

  // ── neon ─────────────────────────────────────────────────
  function neon(ctx, pts, { w, color = "#ff3ea5", intensity = 1, live = false }) {
    if (!pts.length || intensity <= 0) return;
    const sm = chaikin(pts, 2);
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.globalCompositeOperation = "lighter";
    ctx.strokeStyle = color;
    if (live) {
      // While the pen moves this is redrawn every frame, so fake the glow with
      // wide translucent passes; shadowBlur is far too slow on phones.
      for (const [width, alpha] of [[1.9, 0.08], [1.3, 0.14], [0.8, 0.3], [0.42, 0.9]]) {
        ctx.globalAlpha = alpha * intensity;
        ctx.lineWidth = w * width;
        path(ctx, sm);
        ctx.stroke();
      }
      ctx.globalAlpha = 0.9 * intensity;
      ctx.strokeStyle = "#fff";
      ctx.lineWidth = w * 0.16;
      path(ctx, sm);
      ctx.stroke();
      ctx.restore();
      return;
    }
    ctx.shadowColor = color;
    ctx.globalAlpha = 0.35 * intensity;
    ctx.shadowBlur = w * 1.8;
    ctx.lineWidth = w * 0.95;
    path(ctx, sm);
    ctx.stroke();
    ctx.globalAlpha = 0.9 * intensity;
    ctx.shadowBlur = w * 0.7;
    ctx.lineWidth = w * 0.42;
    path(ctx, sm);
    ctx.stroke();
    ctx.shadowBlur = 0;
    ctx.globalAlpha = 0.9 * intensity;
    ctx.strokeStyle = "#fff";
    ctx.lineWidth = w * 0.16;
    path(ctx, sm);
    ctx.stroke();
    ctx.restore();
  }

  // An unlit glass tube: what the sign looks like before you write on it.
  function tube(ctx, pts, { w }) {
    if (!pts.length) return;
    const sm = chaikin(pts, 1);
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    ctx.strokeStyle = "rgba(190, 200, 255, 0.10)";
    ctx.lineWidth = w * 0.46;
    path(ctx, sm);
    ctx.stroke();
    ctx.strokeStyle = "rgba(230, 235, 255, 0.16)";
    ctx.lineWidth = w * 0.08;
    ctx.translate(-w * 0.08, -w * 0.08);
    path(ctx, sm);
    ctx.stroke();
    ctx.restore();
  }

  NH.Ink = { pencil, brush, neon, tube, chaikin, path };
})();
