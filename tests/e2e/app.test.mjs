import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { execSync } from "node:child_process";
import { chromium, serve, open, settle, strokesOnScreen, drawPath, writeChar, feedback, saved } from "../helpers/browser.mjs";

// Per-test limit; software-rendered neon glow makes some tests take ~30s.
const T = { timeout: 120000 };

let browser, server, base;
before(async () => {
  ({ server, base } = await serve());
  browser = await chromium.launch();
});
after(async () => {
  await browser?.close();
  server?.close();
});

// Every test opens its own page; this checks it ended without script errors.
async function withPage(route, opts, fn) {
  const page = await open(browser, base, route, opts);
  try {
    await fn(page);
    assert.deepEqual(page.errors, [], "page errors");
  } finally {
    await page.context().close();
  }
}

describe("home", () => {
  test("shows three station signs; only hiragana is open", T, () => withPage("home", {}, async (page) => {
    assert.equal(await page.locator(".eki").count(), 3);
    assert.equal(await page.locator(".eki.soon").count(), 2);
    await page.locator(".eki.soon").first().click();
    await page.locator(".toast").waitFor();
    assert.match(await page.locator(".toast").textContent(), /coming soon/);
    assert.equal(new URL(page.url()).hash, "#home");
    await page.locator(".eki:not(.soon)").click();
    await page.waitForURL(/#today$/);
  }));
});

describe("symbols chart", () => {
  test("lists all 104 chart kana plus the small kana", T, () => withPage("hiragana", {}, async (page) => {
    assert.equal(await page.locator(".kgrid .kcell:not(.empty)").count(), 46 + 25 + 33);
    assert.equal(await page.locator(".extras .kcell").count(), 4);
  }));

  test("tapping a kana opens its explain page", T, () => withPage("hiragana", {}, async (page) => {
    await page.locator(".kcell", { hasText: "ka" }).first().click();
    await page.waitForURL(/#k-304b$/);
    assert.equal(await page.locator(".big-romaji").textContent(), "ka");
  }));
});

describe("explain", () => {
  test("あ shows its strokes, source kanji and neighbours", T, () => withPage("k-3042", {}, async (page) => {
    assert.equal(await page.locator(".so-st").count(), 3);
    assert.equal(await page.locator(".origin-k").textContent(), "安");
    assert.ok((await page.locator(".examples li").count()) >= 2);
    await page.locator(".pg", { hasText: "い" }).click();
    await page.waitForURL(/#k-3044$/);
  }));

  test("が shows the dakuten sum and highlights the two ticks", T, () => withPage("k-304c", {}, async (page) => {
    assert.equal(await page.locator(".so-st.mark").count(), 2);
    assert.match(await page.locator(".equation").textContent(), /か.*\+.*=.*が/);
  }));

  test("combos explain themselves and open sequence practice", T, () => withPage("k-304d-3083", {}, async (page) => {
    assert.equal(await page.locator(".big-romaji").textContent(), "kya");
    await page.locator(".mode", { hasText: "Write" }).click();
    await page.waitForURL(/#w-304d-3083$/);
    await page.locator(".seq-c").first().waitFor();
    assert.equal(await page.locator(".seq-c").count(), 2);
  }));

  test("the speaker button says the kana", T, () => withPage("k-306c", {}, async (page) => {
    await page.locator(".so-tools .icon-btn").nth(1).click();
    assert.deepEqual(await page.evaluate(() => window.__said), ["ぬ"]);
  }));
});

describe("writing", () => {
  for (const [style, mark] of [["accuracy", ".teacher"], ["neon", ".neon-sign"], ["calligraphy", ".hanko"]]) {
    test(`writing あ well in ${style} style earns a top grade`, T, () => withPage("w-3042", { style }, async (page) => {
      assert.equal(await page.locator(".stage").getAttribute("data-style"), style);
      await writeChar(page);
      await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
      const score = Number(await page.locator(".result-score b").textContent());
      assert.ok(score >= 90, `score ${score}`);
      assert.equal(await page.locator(`.marks ${mark}`).count(), 1);
      assert.ok((await saved(page)).progress["あ"].best >= 90);
    }));
  }

  test("writing a later stroke first is called out as stroke order", T, () => withPage("w-305f", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[2]);
    assert.match(await feedback(page), /That's stroke 3\. Stroke order matters/);
    await drawPath(page, S[0]);
    assert.match(await feedback(page), /Stroke 1 ✓/);
  }));

  test("a reversed stroke is called out", T, () => withPage("w-3042", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0].slice().reverse());
    assert.match(await feedback(page), /wrong direction/);
  }));

  test("a scribble is rejected and the hint plays after misses", T, () => withPage("w-3042", { assist: "guide" }, async (page) => {
    const box = await page.locator(".cell .live").boundingBox();
    const zig = Array.from({ length: 12 }, (_, i) => ({ x: box.x + 10 + i * 4, y: box.y + box.height - 20 - (i % 2) * 10 }));
    assert.equal(await page.locator(".hint-path").count(), 0);
    await drawPath(page, zig);
    assert.match(await feedback(page), /Not quite/);
    await drawPath(page, zig);
    assert.equal(await page.locator(".hint-path").count(), 1, "hint shown after two misses");
  }));

  test("help levels change how much guidance is shown", T, () => withPage("w-3042", { assist: "trace" }, async (page) => {
    assert.ok((await page.locator(".ghost .gs").count()) === 3);
    assert.equal(await page.locator(".ghost .num").count(), 3);
    assert.equal(await page.locator(".hint-path").count(), 1);
    await page.locator(".assists .seg-b", { hasText: "Guide" }).click();
    assert.equal(await page.locator(".ghost .num").count(), 1);
    assert.equal(await page.locator(".hint-path").count(), 0);
    await page.locator(".assists .seg-b", { hasText: "Memory" }).click();
    assert.equal(await page.locator(".ghost .num").count(), 0);
    assert.equal(await page.locator(".hint-start").count(), 0);
    assert.equal((await saved(page)).settings.assist, "memory");
  }));

  test("memory mode lays the model over your writing at the end", T, () => withPage("w-3057", { assist: "memory" }, async (page) => {
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.equal(await page.locator(".ref-overlay").count(), 1);
  }));

  test("strokes are ignored while the demo plays", T, () => withPage("w-304f", {}, async (page) => {
    await page.locator(".actions .btn", { hasText: "Watch" }).click();
    await writeChar(page);
    assert.equal(await page.evaluate(() => document.querySelector(".result").hidden), true);
    await page.waitForFunction(() => /stroke/.test(document.querySelector(".feedback").textContent) && !/Watch/.test(document.querySelector(".feedback").textContent), null, { timeout: 8000 });
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
  }));

  test("switching style mid-character keeps the strokes", T, () => withPage("w-3042", { style: "accuracy" }, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0]);
    await page.locator(".styles .seg-b", { hasText: "Neon" }).click();
    await drawPath(page, S[1]);
    await drawPath(page, S[2]);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.equal(await page.locator(".marks .neon-sign").count(), 1);
  }));
});

describe("words and phrases", () => {
  test("difficulty chips filter the list", T, () => withPage("words", {}, async (page) => {
    const counts = await page.evaluate(() => [1, 2, 3].map((l) => NH.WORDS.filter((w) => w.level === l).length));
    assert.equal(await page.locator(".wcard").count(), counts.reduce((a, b) => a + b));
    await page.locator(".chip", { hasText: "Beginner" }).click();
    assert.equal(await page.locator(".wcard").count(), counts[0]);
  }));

  test("a word is written kana by kana with its scene behind it", T, () => withPage("word-umi", { style: "calligraphy" }, async (page) => {
    assert.equal(await page.locator(".backdrop .sumi.hero").count(), 1);
    assert.equal(await page.locator(".seq-c").count(), 2);
    await writeChar(page);
    await page.locator(".seq-c:nth-child(2).on").waitFor({ timeout: 5000 });
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.match(await page.locator(".result-word").textContent(), /うみ/);
    assert.equal(await page.locator(".seq-c.done").count(), 2);
    assert.ok((await page.evaluate(() => window.__said)).includes("うみ"));
  }));

  test("phrases open in the writer", T, () => withPage("phrases", {}, async (page) => {
    await page.locator(".wcard-main").first().click();
    await page.waitForURL(/#phrase-/);
    await page.locator(".seq-c").first().waitFor();
    assert.ok((await page.locator(".seq-c").count()) >= 2);
  }));
});

describe("quiz", () => {
  // Reads the question and picks the right option from the app's own data.
  const answer = (page) => page.evaluate(() => {
    const ask = document.querySelector(".qask").textContent;
    const prompt = document.querySelector(".qprompt").textContent;
    const opts = [...document.querySelectorAll(".qopt")].map((b) => b.textContent);
    if (/read this/.test(ask)) return NH.romajiOf(prompt);
    if (/Which kana is this/.test(ask)) return opts.find((o) => NH.romajiOf(o) === prompt);
    if (/hear/.test(ask)) return window.__said[window.__said.length - 1];
    return NH.WORDS.find((w) => w.kana === prompt).meaning;
  });

  test("answering everything right scores 10 / 10", T, () => withPage("quiz", {}, async (page) => {
    await page.locator(".chip", { hasText: "Word → meaning" }).click();
    await page.locator(".btn", { hasText: "Start quiz" }).click();
    for (let i = 0; i < 10; i++) {
      await page.locator(".qhead span", { hasText: `${i + 1} / 10` }).waitFor();
      await page.waitForTimeout(350); // listening questions speak after a beat
      const a = await answer(page);
      await page.locator(".qopt", { hasText: new RegExp(`^${a.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}$`) }).click();
    }
    await page.locator(".qsum").waitFor({ timeout: 3000 });
    assert.match(await page.locator(".qsum .result-score").textContent(), /10\s*\/\s*10/);
  }));

  test("a wrong answer is explained, waits for Next and is remembered", T, () => withPage("quiz", {}, async (page) => {
    await page.locator(".btn", { hasText: "Start quiz" }).click();
    await page.waitForTimeout(350);
    const a = await answer(page);
    await page.locator(".qopt", { hasNotText: a }).first().click();
    await page.locator(".qfoot .btn", { hasText: "Next" }).waitFor();
    assert.equal(await page.locator(".qopt.right").count(), 1);
    assert.equal(await page.locator(".qopt.wrong").count(), 1);
    const progress = (await saved(page)).progress;
    assert.equal(Object.values(progress).reduce((n, p) => n + p.wrong, 0), 1);
  }));
});

describe("settings", () => {
  test("toggles persist and Escape closes the sheet", T, () => withPage("hiragana", {}, async (page) => {
    await page.locator(".bar .icon-btn[aria-label=Settings]").click();
    await page.locator("#sound").check();
    assert.equal((await saved(page)).settings.sound, true);
    await page.locator("#rate").fill("0.6");
    assert.equal((await saved(page)).settings.rate, 0.6);
    await page.keyboard.press("Escape");
    assert.equal(await page.locator(".sheet").count(), 0);
  }));

  test("erasing progress asks first", T, () => withPage("w-3042", {}, async (page) => {
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    await page.locator(".stage-bar .icon-btn[aria-label=Settings]").click();
    await page.locator(".btn", { hasText: "Erase…" }).click();
    assert.ok((await saved(page)).progress["あ"], "nothing erased before confirming");
    await page.locator(".confirm .btn", { hasText: "Erase" }).click();
    assert.deepEqual((await saved(page)).progress, {});
  }));
});

describe("layout", () => {
  for (const width of [360, 412, 1280]) {
    test(`no sideways scrolling at ${width}px`, T, async () => {
      for (const route of ["home", "hiragana", "words", "quiz", "k-3042", "w-3042", "word-shinjuku"]) {
        await withPage(route, { width, height: width > 800 ? 800 : 780 }, async (page) => {
          const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
          assert.ok(over <= 0, `${route} overflows by ${over}px`);
          if (/^(w|word)-/.test(route)) {
            const cell = await page.locator(".cell").boundingBox();
            assert.ok(cell.width >= 240 && Math.abs(cell.width - cell.height) < 2, `${route} cell ${cell.width}x${cell.height}`);
          }
        });
      }
    });
  }
});

describe("word and phrase cards", () => {
  // Every piece of text stays inside its card and nothing overlaps (long phrases wrap).
  for (const width of [360, 412]) {
    test(`fit their content at ${width}px`, T, async () => {
      for (const route of ["words", "phrases"]) {
        await withPage(route, { width, height: 800 }, async (page) => {
          const bad = await page.evaluate(() => {
            const out = [];
            const box = (el) => el.getBoundingClientRect();
            const overlap = (a, b) => a.left < b.right - 1 && b.left < a.right - 1 && a.top < b.bottom - 1 && b.top < a.bottom - 1;
            for (const card of document.querySelectorAll(".wcard")) {
              const c = box(card);
              const parts = [".wk", ".wm b", ".wm > span", ".wlv", ".icon-btn"].map((q) => [q, card.querySelector(q)]).filter(([, el]) => el);
              for (const [q, el] of parts) {
                const r = box(el);
                if (r.left < c.left - 1 || r.right > c.right + 1 || r.bottom > c.bottom + 1) out.push(`${card.querySelector(".wk").textContent} ${q} sticks out`);
              }
              for (let i = 0; i < parts.length; i++) for (let j = i + 1; j < parts.length; j++) {
                if (overlap(box(parts[i][1]), box(parts[j][1]))) out.push(`${card.querySelector(".wk").textContent}: ${parts[i][0]} overlaps ${parts[j][0]}`);
              }
              const t = card.querySelector(".wm b");
              if (t.scrollWidth > t.clientWidth + 1) out.push(`${card.querySelector(".wk").textContent}: meaning is cut off`);
            }
            return out;
          });
          assert.deepEqual(bad, []);
        });
      }
    });
  }
});

describe("single-file build", () => {
  test("dist/kaku-standalone.html works on its own", T, async () => {
    execSync("node tools/build-artifact.mjs", { stdio: "ignore" });
    await withPage("home", {}, async () => {}); // warm-up keeps the error check honest
    const context = await browser.newContext({ viewport: { width: 412, height: 860 } });
    const page = await context.newPage();
    const errors = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(base + "dist/kaku-standalone.html#w-3044");
    await settle(page);
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.deepEqual(errors, []);
    await context.close();
  });
});

describe("stroke endings", () => {
  test("a hane stroke without its flick is accepted with a tip", T, () => withPage("w-3044", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0].slice(0, -6), { jitter: 0 });
    assert.match(await feedback(page), /ends with a hane/);
    assert.equal(await page.locator(".marks .hane-flash").count(), 1);
    assert.equal(await page.locator(".feedback.tip").count(), 1);
  }));

  test("writing the flick gets confirmed", T, () => withPage("w-3044", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0], { jitter: 0 });
    assert.match(await feedback(page), /clean hane/);
  }));

  test("the explain page names the hane strokes", T, () => withPage("k-3051", {}, async (page) => {
    assert.match(await page.locator(".notes").textContent(), /Stroke 1 ends with a hane/);
    assert.equal(await page.locator(".so-hane").count(), 1);
  }));
});

describe("settings: volume and vibration", () => {
  test("volume and vibration are saved", T, () => withPage("hiragana", {}, async (page) => {
    await page.locator(".bar .icon-btn[aria-label=Settings]").click();
    await page.locator("#volume").fill("0.3");
    assert.equal((await saved(page)).settings.volume, 0.3);
    await page.locator("#vibrate").uncheck();
    assert.equal((await saved(page)).settings.vibrate, false);
  }));

  test("strokes trigger vibration when it is on", T, () => withPage("w-304f", {}, async (page) => {
    await page.evaluate(() => { window.__buzz = []; navigator.vibrate = (p) => { window.__buzz.push(p); return true; }; NH.store.set("vibrate", true); });
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    const buzz = await page.evaluate(() => window.__buzz);
    assert.ok(buzz.length >= 2, JSON.stringify(buzz)); // stroke accepted + character complete
  }));
});
