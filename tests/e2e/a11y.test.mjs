// Accessibility: an axe-core audit of every screen and style, plus the things
// axe can't check — Japanese language tags, focus handling, spoken strokes.
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { createRequire } from "node:module";
import { chromium, serve, open, strokesOnScreen, drawPath } from "../helpers/browser.mjs";

const axe = createRequire(import.meta.url)("axe-core");
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

async function withPage(route, opts, fn) {
  const page = await open(browser, base, route, opts);
  try {
    await fn(page);
    assert.deepEqual(page.errors, [], "page errors");
  } finally {
    await page.context().close();
  }
}

async function audit(page) {
  await page.addScriptTag({ content: axe.source });
  return page.evaluate(async () =>
    (await axe.run(document, { resultTypes: ["violations"] })).violations.map((v) => `${v.impact} ${v.id}: ${v.nodes.map((n) => n.target.join(" ")).slice(0, 3).join(" | ")}`));
}

describe("axe audit", () => {
  const screens = [
    ["home", "accuracy"], ["hiragana", "accuracy"], ["words", "accuracy"], ["phrases", "accuracy"], ["quiz", "accuracy"],
    ["k-3042", "accuracy"], ["k-304c", "accuracy"], ["w-3042", "accuracy"], ["w-3042", "neon"], ["w-3042", "calligraphy"], ["word-umi", "calligraphy"],
    ["today", "accuracy"], ["read", "accuracy"], ["sign-shibuya", "accuracy"], ["sign-yu", "accuracy"], ["sign-eki-wa-doko", "accuracy"],
    ["session", "accuracy"], ["session", "neon"], ["session", "calligraphy"], ["dictation", "neon"], ["readquiz", "calligraphy"],
    ["katakana", "accuracy"], ["katakana-today", "accuracy"], ["katakana-words", "accuracy"], ["katakana-read", "accuracy"], ["katakana-quiz", "accuracy"],
    ["k-30a2", "accuracy"], ["k-30fc", "accuracy"], ["w-30c4", "calligraphy"], ["word-ramen", "neon"], ["sign-attakai", "accuracy"],
  ];
  for (const [route, style] of screens) {
    test(`#${route} (${style}) has no violations`, T, () => withPage(route, { style }, async (page) => {
      await page.waitForTimeout(400);
      assert.deepEqual(await audit(page), []);
    }));
  }
  for (const route of ["home", "hiragana", "words", "phrases", "quiz", "k-3042", "k-304c", "today", "read", "sign-tomare", "katakana", "k-30a2", "katakana-read"]) {
    test(`#${route} in the light theme has no violations`, T, () => withPage(route, { scheme: "light" }, async (page) => {
      await page.waitForTimeout(400);
      assert.deepEqual(await audit(page), []);
    }));
  }
  for (const hand of ["right", "left"]) {
    test(`the landscape writing screen (${hand}-handed) has no violations`, T, () => withPage("w-3042", { width: 1280, height: 800, hand, style: "calligraphy" }, async (page) => {
      await page.waitForTimeout(400);
      assert.deepEqual(await audit(page), []);
    }));
  }
  test("the settings sheet has no violations", T, () => withPage("hiragana", {}, async (page) => {
    await page.locator(".bar .icon-btn[aria-label=Settings]").click();
    assert.deepEqual(await audit(page), []);
  }));
  test("the Say it sheet has no violations", T, () => withPage("sign-shibuya", {}, async (page) => {
    await page.locator(".btn", { hasText: "Say it" }).click();
    assert.deepEqual(await audit(page), []);
  }));
  test("a quiz question has no violations", T, () => withPage("quiz", {}, async (page) => {
    await page.locator(".btn", { hasText: "Start quiz" }).click();
    await page.locator(".qopt").first().waitFor();
    assert.deepEqual(await audit(page), []);
  }));
});

describe("screen readers", () => {
  test("Japanese text is tagged lang=ja, English text is not", T, () => withPage("hiragana", {}, async (page) => {
    const kana = await page.locator(".kcell .kc").first().getAttribute("lang");
    assert.equal(kana, "ja");
    assert.equal(await page.locator(".kcell .kr").first().getAttribute("lang"), null);
    assert.equal(await page.locator(".bar-title b").getAttribute("lang"), "ja");
  }));

  test("the writing area describes every stroke, and the next one after each stroke", T, () => withPage("w-3042", {}, async (page) => {
    const id = await page.locator(".cell .live").getAttribute("aria-describedby");
    const desc = await page.locator(`#${id}`).textContent();
    assert.match(desc, /3 strokes\. Stroke 1 starts at the top left, a line going right\./);
    assert.match(await page.locator(".feedback .vh").textContent(), /Stroke 1 starts at/);
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0]);
    assert.match(await page.locator(".feedback .vh").textContent(), /Stroke 2 starts at the top centre/);
  }));

  test("the explain page lists the strokes in words", T, () => withPage("k-3042", {}, async (page) => {
    assert.equal(await page.locator("ol.vh li").count(), 3);
  }));

  test("quiz answers are announced", T, () => withPage("quiz", {}, async (page) => {
    await page.locator(".btn", { hasText: "Start quiz" }).click();
    await page.locator(".qopt").first().click();
    await page.waitForFunction(() => /Correct|Not quite/.test(document.querySelector("[role=status].vh").textContent));
  }));
});

describe("keyboard and focus", () => {
  test("settings takes focus, keeps Tab inside and gives focus back on Escape", T, () => withPage("hiragana", {}, async (page) => {
    const gear = page.locator(".bar .icon-btn[aria-label=Settings]");
    await gear.focus();
    await page.keyboard.press("Enter");
    assert.equal(await page.evaluate(() => !!document.activeElement.closest(".sheet")), true);
    for (let i = 0; i < 25; i++) await page.keyboard.press("Tab");
    assert.equal(await page.evaluate(() => !!document.activeElement.closest(".sheet")), true, "focus escaped the sheet");
    await page.keyboard.press("Escape");
    assert.equal(await page.evaluate(() => document.activeElement.getAttribute("aria-label")), "Settings");
  }));
});

describe("text size", () => {
  test("Large and Extra large scale the text and are remembered", T, () => withPage("hiragana", {}, async (page) => {
    const size = () => page.locator(".ksec-head p").first().evaluate((el) => parseFloat(getComputedStyle(el).fontSize));
    const normal = await size();
    await page.locator(".bar .icon-btn[aria-label=Settings]").click();
    await page.locator(".chip", { hasText: "Extra large" }).click();
    assert.ok((await size()) > normal * 1.25, "text did not grow");
    assert.equal((await page.evaluate(() => JSON.parse(localStorage.getItem("kaku.v1")).settings.text)), "xl");
    await page.reload();
    assert.ok((await size()) > normal * 1.25, "size not restored after reload");
  }));

  test("Extra large text still fits at 360px", T, async () => {
    for (const route of ["home", "hiragana", "words", "phrases", "quiz", "k-3042", "w-3042", "word-shinjuku"]) {
      await withPage(route, { width: 360, height: 760, text: "xl" }, async (page) => {
        const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
        assert.ok(over <= 0, `${route} overflows by ${over}px`);
      });
    }
  });
});

describe("theme", () => {
  const bg = (page) => page.evaluate(() => getComputedStyle(document.body).backgroundColor);
  const bar = (page) => page.evaluate(() => document.querySelector('meta[name="theme-color"]').content);

  test("Auto follows the phone's light or dark setting", T, async () => {
    await withPage("hiragana", { scheme: "light" }, async (page) => {
      assert.equal(await bg(page), "rgb(238, 241, 245)");
      assert.equal(await bar(page), "#eef1f5");
    });
    await withPage("hiragana", { scheme: "dark" }, async (page) => {
      assert.equal(await bg(page), "rgb(14, 20, 36)");
      assert.equal(await bar(page), "#0e1424");
    });
  });

  test("Light or Dark in Settings overrides the phone and is remembered", T, () => withPage("hiragana", { scheme: "light" }, async (page) => {
    await page.locator(".bar .icon-btn[aria-label=Settings]").click();
    await page.locator(".chip", { hasText: /^Dark$/ }).click();
    assert.equal(await bg(page), "rgb(14, 20, 36)");
    await page.reload();
    assert.equal(await bg(page), "rgb(14, 20, 36)");
    assert.equal(await page.evaluate(() => document.documentElement.dataset.theme), "dark");
  }));

  test("the writing styles keep their own look in either theme", T, async () => {
    for (const scheme of ["light", "dark"]) {
      await withPage("w-3042", { scheme, style: "neon" }, async (page) => {
        assert.equal(await bar(page), "#05041a");
        await page.locator(".styles .seg-b", { hasText: "Accuracy" }).click();
        assert.equal(await bar(page), "#fbfbf7");
        assert.equal(await page.locator(".stage").evaluate((el) => getComputedStyle(el).color), "rgb(31, 37, 51)");
      });
    }
  });

  test("leaving the writing screen restores the theme's bar colour", T, () => withPage("w-3042", { scheme: "light", style: "neon" }, async (page) => {
    assert.equal(await bar(page), "#05041a");
    await page.locator(".stage-bar .icon-btn[aria-label=Back]").click();
    await page.waitForURL(/#k-3042$/);
    assert.equal(await bar(page), "#eef1f5");
  }));
});
