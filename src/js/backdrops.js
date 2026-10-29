/* Backdrops for the writing stage, all vector:
 *   accuracy    – a school notebook page with ballpoint doodles in the margins
 *   neon        – Tokyo at night: skyline, lit windows, vertical neon signs
 *   calligraphy – washi paper with faint sumi-e: pagoda, torii, Fuji, sakura,
 *                 seigaiha waves, ginkgo leaves
 * Words add their own scene art (waves for water words, Skytree for Oshiage…). */
window.NH = window.NH || {};

(function () {
  const { h, s, rand } = NH;

  function art(id, cls, style) {
    const a = NH.SCENE_ART && NH.SCENE_ART[id];
    if (!a) return null;
    const el = s("svg.art", { viewBox: a.vb, preserveAspectRatio: "xMidYMid meet", class: cls || "", "aria-hidden": "true" });
    el.innerHTML = a.svg;
    for (const [k, v] of Object.entries(style || {})) el.style.setProperty(k.replace(/[A-Z]/g, (m) => "-" + m.toLowerCase()), v);
    return el;
  }

  // Seeded random so the same word always gets the same city.
  function prng(seed) {
    let x = (seed % 2147483646) + 1;
    return () => ((x = (x * 16807) % 2147483647) / 2147483647);
  }

  // ── notebook ─────────────────────────────────────────────
  function notebook(el, scenes) {
    el.append(
      h("div.nb-holes", Array.from({ length: 9 }, () => h("span"))),
      h("div.nb-head", h("span", "No."), h("i"), h("span", "Date"), h("i.short"), h("b", "."), h("i.short"), h("b", "."), h("i.short"))
    );
    const ids = scenes.length ? scenes : ["sakura", "cat", "fuji", "train"];
    const slots = [
      { left: "3%", bottom: "4%", width: "min(30vw, 220px)", rotate: "-6deg" },
      { right: "3%", top: "12%", width: "min(24vw, 170px)", rotate: "8deg" },
      { right: "4%", bottom: "6%", width: "min(26vw, 190px)", rotate: "-3deg" },
      { left: "5%", top: "16%", width: "min(20vw, 140px)", rotate: "5deg" },
    ];
    ids.slice(0, 4).forEach((id, i) => {
      const { rotate, ...pos } = slots[i];
      const a = art(id, "doodle" + (scenes.length && i === 0 ? " hero" : ""), { ...pos, transform: `rotate(${rotate})` });
      if (a) el.append(a);
    });
  }

  // ── neon city ────────────────────────────────────────────
  const SIGNS = ["ラーメン", "カラオケ", "居酒屋", "喫茶", "ゲーム", "寿司", "薬", "本屋", "温泉", "バー"];
  const NEONS = ["#ff3ea5", "#38f3ff", "#ffe14d", "#b46bff", "#5dff9e", "#ff8a3d"];

  function neon(el, scenes, seed) {
    const rnd = prng(seed || 1234);
    const W = 1600, H = 900, horizon = 660;
    const svg = s("svg.city", { viewBox: `0 0 ${W} ${H}`, preserveAspectRatio: "xMidYMax slice", "aria-hidden": "true" });
    svg.append(
      s("defs",
        s("linearGradient", { id: "ng-sky", x1: 0, y1: 0, x2: 0, y2: 1 },
          s("stop", { offset: "0", "stop-color": "#05041a" }),
          s("stop", { offset: "0.55", "stop-color": "#160a3a" }),
          s("stop", { offset: "0.8", "stop-color": "#3d0f4f" }),
          s("stop", { offset: "1", "stop-color": "#6b1450" })),
        s("linearGradient", { id: "ng-street", x1: 0, y1: 0, x2: 0, y2: 1 },
          s("stop", { offset: "0", "stop-color": "#140a2a" }),
          s("stop", { offset: "1", "stop-color": "#05040e" })),
        s("filter", { id: "ng-glow", x: "-50%", y: "-50%", width: "200%", height: "200%" },
          s("feGaussianBlur", { stdDeviation: "4", result: "b" }),
          s("feMerge", s("feMergeNode", { in: "b" }), s("feMergeNode", { in: "b" }), s("feMergeNode", { in: "SourceGraphic" })))),
      s("rect", { width: W, height: H, fill: "url(#ng-sky)" })
    );
    // stars
    const stars = s("g.stars");
    for (let i = 0; i < 90; i++) stars.append(s("circle", { cx: rnd() * W, cy: rnd() * horizon * 0.6, r: rnd() * 1.4 + 0.3, style: `animation-delay:${(rnd() * 6).toFixed(2)}s` }));
    svg.append(stars);
    // far skyline
    const far = s("g.far");
    for (let x = -20; x < W; ) {
      const bw = 40 + rnd() * 90, bh = 120 + rnd() * 260;
      far.append(s("rect", { x, y: horizon - bh, width: bw, height: bh + 4 }));
      if (rnd() < 0.3) far.append(s("rect.blink", { x: x + bw / 2 - 1.5, y: horizon - bh - 14, width: 3, height: 14, style: `animation-delay:${(rnd() * 3).toFixed(2)}s` }));
      x += bw + rnd() * 6;
    }
    svg.append(far);
    // near buildings with windows and neon signs
    const near = s("g.near");
    const windows = s("g.windows");
    const signs = s("g.signs");
    let signNo = (seed || 0) % SIGNS.length;
    for (let x = -30; x < W; ) {
      const bw = 90 + rnd() * 150, bh = 160 + rnd() * 330;
      const top = horizon + 120 - bh;
      near.append(s("rect", { x, y: top, width: bw, height: bh + 200 }));
      for (let wy = top + 18; wy < horizon + 100; wy += 22) {
        for (let wx = x + 10; wx < x + bw - 14; wx += 18) {
          if (rnd() < 0.42) windows.append(s("rect", { x: wx, y: wy, width: 9, height: 12, class: rnd() < 0.2 ? "cool" : "" }));
        }
      }
      if (rnd() < 0.55 && bh > 260) {
        const word = SIGNS[signNo++ % SIGNS.length];
        const color = NEONS[(rnd() * NEONS.length) | 0];
        const sx = x + (rnd() < 0.5 ? 8 : bw - 46), sy = top + 30;
        const g = s("g.sign", { style: `--c:${color};animation-delay:${(rnd() * 8).toFixed(2)}s`, filter: "url(#ng-glow)" });
        g.append(s("rect", { x: sx, y: sy, width: 38, height: [...word].length * 40 + 16, rx: 4 }));
        [...word].forEach((c, i) => g.append(s("text", { x: sx + 19, y: sy + 42 + i * 40, "text-anchor": "middle" }, c)));
        signs.append(g);
      }
      x += bw + rnd() * 10;
    }
    svg.append(near, windows, signs);
    // wet street with reflections
    svg.append(s("rect", { x: 0, y: horizon + 120, width: W, height: H - horizon - 120, fill: "url(#ng-street)" }));
    const refl = s("g.reflect");
    for (let i = 0; i < 26; i++) {
      const x = rnd() * W;
      refl.append(s("rect", { x, y: horizon + 124, width: 3 + rnd() * 10, height: 40 + rnd() * 110, style: `--c:${NEONS[(rnd() * NEONS.length) | 0]}` }));
    }
    svg.append(refl);
    el.append(svg);

    // landmark or scene art lit as neon over the skyline
    const ids = scenes.length ? scenes : [rnd() < 0.5 ? "tokyotower" : "skytree"];
    ids.slice(0, 2).forEach((id, i) => {
      const color = i === 0 ? (id === "tokyotower" ? "#ff8a3d" : "#38f3ff") : "#ff3ea5";
      const a = art(id, "neon-art" + (i === 0 ? " hero" : ""), {
        ...(i === 0 ? { right: "6%", bottom: "26%", height: "min(46vh, 380px)" } : { left: "5%", top: "8%", height: "min(22vh, 170px)" }),
        "--c": color,
      });
      if (a) el.append(a);
    });
    if (scenes.includes("rain")) el.append(rain());
  }

  function rain() {
    const g = h("div.rain");
    for (let i = 0; i < 70; i++) {
      g.append(h("i", { style: { left: `${rand(-10, 110)}%`, animationDelay: `${rand(0, 1.2).toFixed(2)}s`, animationDuration: `${rand(0.5, 0.9).toFixed(2)}s`, opacity: rand(0.25, 0.6).toFixed(2) } }));
    }
    return g;
  }

  // ── washi + sumi-e ───────────────────────────────────────
  function washi(el, scenes) {
    const tex = s("svg.washi-tex", { "aria-hidden": "true", preserveAspectRatio: "none" },
      s("filter", { id: "washi-f" },
        s("feTurbulence", { type: "fractalNoise", baseFrequency: "0.012 0.09", numOctaves: "3", seed: "4" }),
        s("feColorMatrix", { values: "0 0 0 0 0.42  0 0 0 0 0.33  0 0 0 0 0.2  0 0 0 0.55 -0.18" })),
      s("rect", { width: "100%", height: "100%", filter: "url(#washi-f)" }));
    el.append(tex);

    // seigaiha band along the bottom
    const sg = NH.SCENE_ART && NH.SCENE_ART.seigaiha;
    if (sg) {
      const band = s("svg.seigaiha", { "aria-hidden": "true", preserveAspectRatio: "none" });
      const [, , tw, th] = sg.vb.split(" ").map(Number);
      const pat = s("pattern", { id: "sg-pat", width: tw, height: th, patternUnits: "userSpaceOnUse", patternTransform: "scale(1.6)" });
      pat.innerHTML = sg.svg; // the tile already contains its offset rows
      band.append(s("defs", pat), s("rect", { width: "100%", height: "100%", fill: "url(#sg-pat)" }));
      el.append(band);
    }

    const hero = scenes[0];
    const layout = [
      ["fuji", { left: "50%", top: "4%", width: "min(56vw, 520px)", transform: "translateX(-50%)", opacity: 0.55 }],
      ["sakura", { right: "-2%", top: "-1%", width: "min(42vw, 360px)", transform: "scaleX(-1)" }],
      ["pagoda", { left: "2%", bottom: "13%", height: "min(40vh, 320px)" }],
      ["torii", { right: "3%", bottom: "12%", width: "min(26vw, 210px)" }],
      ["flower", { left: "3%", top: "8%", width: "min(16vw, 120px)", opacity: 0.6 }],
    ];
    if (hero) {
      // The word's own scene takes the sky; keep two quiet companions.
      el.append(art(hero, "sumi hero", { left: "50%", top: "7%", width: "min(80vw, 640px)", height: "min(36vh, 320px)", transform: "translateX(-50%)" }) || "");
      if (scenes[1]) el.append(art(scenes[1], "sumi", { right: "3%", bottom: "12%", width: "min(26vw, 210px)" }) || "");
      for (const [id, st] of [layout[2], layout[1]]) if (!scenes.includes(id)) el.append(art(id, "sumi faint", st) || "");
    } else {
      for (const [id, st] of layout) el.append(art(id, "sumi", st) || "");
    }
    // ginkgo leaves and petals drifting down
    const drift = h("div.drift");
    for (let i = 0; i < 9; i++) {
      const id = i % 3 === 0 ? "ginkgo" : "petal";
      const a = art(id, "drifter " + id, { left: `${rand(0, 96)}%`, animationDelay: `${rand(-20, 0).toFixed(1)}s`, animationDuration: `${rand(16, 28).toFixed(1)}s`, width: id === "ginkgo" ? "26px" : "14px" });
      if (a) drift.append(a);
    }
    el.append(drift);
  }

  NH.Backdrop = {
    render(el, style, scenes = [], seed = 0) {
      el.replaceChildren();
      el.className = "backdrop bd-" + style;
      if (style === "neon") neon(el, scenes, seed);
      else if (style === "calligraphy") washi(el, scenes);
      else notebook(el, scenes);
    },
    art,
  };
})();
