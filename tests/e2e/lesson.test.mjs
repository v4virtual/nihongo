// Narrated lessons: the animated lesson on explain pages, and the same
// narration talking you through writing.
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, serve, open, settle, strokesOnScreen, drawPath, saved } from "../helpers/browser.mjs";

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
const narrated = (page) => page.evaluate(() => window.__narrated);
const step = (page) => page.locator(".lesson").getAttribute("data-step");

describe("lesson on the explain page", () => {
  test("plays narrated steps with captions, and pauses", T, () => withPage("k-3042", {}, async (page) => {
    assert.equal(await page.locator(".lesson .ls-mark").count(), 9);
    assert.equal(await page.locator(".ls-caption").textContent(), "This is the hiragana あ, read “a”.");
    await page.locator(".ls-big-play").click();
    assert.equal((await narrated(page))[0], "This is the hiragana あ .");
    await page.waitForFunction(() => document.querySelector(".lesson").dataset.step === "1", null, { timeout: 5000 });
    assert.match(await page.locator(".ls-caption").textContent(), /grew from the kanji 安/);
    assert.equal(await page.locator(".ls-origin .ls-big").first().textContent(), "安");
    await page.locator(".ls-controls .icon-btn[aria-label='Pause lesson']").click();
    const at = await step(page);
    await page.waitForTimeout(1800);
    assert.equal(await step(page), at, "paused");
    assert.equal(await page.locator(".ls-controls .icon-btn[aria-label='Play lesson']").count(), 1);
  }));

  test("jumping to a stroke step draws that stroke", T, () => withPage("k-3042", {}, async (page) => {
    await page.locator(".ls-mark").nth(5).click();
    assert.match(await page.locator(".ls-caption").textContent(), /^Stroke 2 /);
    assert.equal(await page.locator(".ls-strokes .ls-st").count(), 2);
    assert.equal(await page.locator(".ls-strokes .ls-st.now").count(), 1);
  }));

  test("a kanji lesson shows its parts, and the narration names them", T, () => withPage("k-4f11", {}, async (page) => {
    await page.locator(".ls-mark").nth(2).click();
    assert.deepEqual(await page.locator(".ls-stage .ls-big.part").allTextContents(), ["亻", "木"]);
    await page.locator(".ls-mark").nth(7).click();
    assert.match(await page.locator(".ls-caption").textContent(), /^Now 木, tree\. Stroke 3/);
    assert.equal(await page.locator(".ls-strokes .ls-st.part.p1.now").count(), 1);
  }));

  test("leaving the page stops the narration", T, () => withPage("k-3042", {}, async (page) => {
    await page.locator(".ls-big-play").click();
    await page.evaluate(() => { location.hash = "hiragana"; });
    await page.locator(".kgrid").first().waitFor();
    const before = (await narrated(page)).length;
    await page.waitForTimeout(1600);
    assert.equal((await narrated(page)).length, before, "no more narration after leaving");
  }));
});

describe("lesson audio while writing", () => {
  test("talks through the lesson, then each stroke as you write; remembers the choice", T, () => withPage("w-3042", {}, async (page) => {
    const btn = page.locator(".btn", { hasText: "Lesson audio" });
    assert.equal(await btn.getAttribute("aria-pressed"), "false");
    await btn.click();
    assert.equal(await btn.getAttribute("aria-pressed"), "true");
    const intro = (await narrated(page)).at(-1);
    assert.match(intro, /^This is the hiragana あ/);
    assert.match(intro, /Stroke 1 starts at the top left/);
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0]);
    assert.match((await narrated(page)).at(-1), /^Stroke 2 starts/);
    await drawPath(page, S[2]);
    assert.match((await narrated(page)).at(-1), /Stroke order matters|That's stroke/);
    assert.equal((await saved(page)).settings.narrate, true);
    await btn.click();
    assert.equal((await narrated(page)).at(-1), "<stop>");
    await drawPath(page, S[1]);
    assert.equal((await narrated(page)).at(-1), "<stop>", "quiet once turned off");
  }));

  test("with lesson audio on, a word announces each character", T, () => withPage("word-umi", {}, async (page) => {
    await page.evaluate(() => NH.store.set("narrate", true));
    await page.reload();
    await settle(page);
    await page.evaluate(() => { window.__narrated = []; NH.TTS.narrate = (s) => { window.__narrated.push(s.map((x) => x.text.trim()).join(" ")); return { done: Promise.resolve(), cancel() {} }; }; NH.TTS.stop = () => {}; });
    await page.locator(".btn", { hasText: "Redo" }).click();
    assert.match((await narrated(page)).at(-1), /^う 2 strokes\. Stroke 1/);
  }));
});
