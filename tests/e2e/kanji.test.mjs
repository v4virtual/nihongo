// Kanji: the third line from the home screen, with a chart and stroke-count
// filter, explain pages with parts and readings, part-aware writing, words
// with furigana, a quiz, and kanji in Today.
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, serve, open, settle, strokesOnScreen, drawPath, writeChar, saved } from "../helpers/browser.mjs";

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

// Every basic hiragana started, so kanji can join Today. No new kana or words
// today, so the queue is just the new kanji.
const hiraganaStarted = `if (!sessionStorage.getItem("seeded")) { sessionStorage.setItem("seeded", "1");
  const now = Date.now(), cards = {}, d = new Date(now);
  for (const c of "あいうえおかきくけこさしすせそたちつてとなにぬねのはひふへほまみむめもやゆよらりるれろわをん") cards["k:" + c] = { s: 9, d: 5, reps: 1, lapses: 0, last: now, due: now + 9 * 864e5 };
  const day = { key: d.getFullYear() + "-" + (d.getMonth() + 1) + "-" + d.getDate(), kana: 0, other: 2, kanji: 0 };
  localStorage.setItem("kaku.v1", JSON.stringify({ settings: { sound: false, dailyNew: 0 }, progress: {}, srs: { cards, day } })); }`;

describe("kanji line", () => {
  test("the kanji sign opens it, with its own tabs", T, () => withPage("home", {}, async (page) => {
    await page.locator(".eki", { has: page.locator(".eki-name", { hasText: "漢字" }) }).click();
    await page.waitForURL(/#kanji-today$/);
    assert.deepEqual(await page.locator(".tab span:not(.tab-jp)").allTextContents(), ["Today", "Kanji", "Words", "Quiz"]);
    assert.match(await page.locator(".today-note").textContent(), /Kanji start once you've started all 46 basic hiragana/);
    assert.equal(await page.locator(".progress .pchip").count(), 80);
  }));

  test("the chart lists all 80 by theme and filters by stroke count", T, () => withPage("kanji", {}, async (page) => {
    assert.equal(await page.locator(".jcell").count(), 80);
    assert.equal(await page.locator(".ksec h2").count(), 8);
    await page.locator(".stroke-filter .chip[aria-label='1 stroke']").click();
    assert.deepEqual(await page.locator(".jc").allTextContents(), ["一"]);
    await page.locator(".stroke-filter .chip", { hasText: "All" }).click();
    assert.equal(await page.locator(".jcell").count(), 80);
    await page.locator(".jcell", { hasText: "休" }).click();
    await page.waitForURL(/#k-4f11$/);
  }));

  test("an explain page shows readings, radical, coloured parts and words with furigana", T, () => withPage("k-4f11", {}, async (page) => {
    assert.match(await page.locator(".readings").textContent(), /キュウ/);
    assert.match(await page.locator(".meta-row").textContent(), /6 strokes.*radical 亻/);
    assert.deepEqual(await page.locator(".parts .part b").allTextContents(), ["亻", "木"]);
    assert.equal(await page.locator(".so-st.part.p0").count(), 2);
    assert.equal(await page.locator(".so-st.part.p1").count(), 4);
    assert.ok((await page.locator(".examples rt").count()) > 0, "examples have furigana");
    await page.locator(".bar .icon-btn[aria-label='All kanji']").click();
    await page.waitForURL(/#kanji$/);
  }));

  test("writing a kanji says when each part is done", T, () => withPage("w-4f11", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0]);
    await drawPath(page, S[1]);
    assert.match(await page.locator(".feedback").textContent(), /^亻 \(.*\) done\./);
    for (const pts of S.slice(2)) await drawPath(page, pts);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    await page.locator(".btn", { hasText: "Next: 食" }).waitFor();
  }));

  test("a stroke from the wrong part is named by its part", T, () => withPage("w-4f11", { assist: "guide" }, async (page) => {
    const S = await strokesOnScreen(page);
    await drawPath(page, S[0]);
    await drawPath(page, S[2], { jitter: 0 });
    assert.match(await page.locator(".feedback").textContent(), /That's part of 木\. Finish 亻 first/);
  }));

  test("kanji words carry furigana, which can be turned off and stays off", T, () => withPage("kanji-words", {}, async (page) => {
    const n = await page.evaluate(() => NH.KANJI_WORDS.length);
    assert.equal(await page.locator(".wcard").count(), n);
    assert.ok((await page.locator(".wk rt").count()) >= n);
    const rt = page.locator(".wk rt").first();
    assert.equal(await rt.evaluate((el) => getComputedStyle(el).visibility), "visible");
    await page.locator(".furigana-toggle .chip", { hasText: "Off" }).click();
    assert.equal(await rt.evaluate((el) => getComputedStyle(el).visibility), "hidden");
    assert.equal((await saved(page)).settings.furigana, false);
    await page.reload();
    await settle(page);
    assert.equal(await page.evaluate(() => document.documentElement.dataset.furigana), "off");
  }));

  test("okurigana stay outside the furigana", T, () => withPage("kanji-words", {}, async (page) => {
    const html = await page.evaluate(() => { const d = document.createElement("div"); d.append(...NH.UI.ruby("食べる", "たべる")); return d.innerHTML; });
    assert.equal(html, "<ruby>食<rt>た</rt></ruby>べる");
    const whole = await page.evaluate(() => { const d = document.createElement("div"); d.append(...NH.UI.ruby("今日", "きょう")); return d.innerHTML; });
    assert.equal(whole, "<ruby>今日<rt>きょう</rt></ruby>");
  }));

  test("a kanji word is written character by character", T, () => withPage("kanji-words", {}, async (page) => {
    const w = await page.evaluate(() => NH.KANJI_WORDS.find((x) => [...x.text].length === 2));
    await page.goto(base + `#word-${w.id}`);
    for (let i = 0; i < 2; i++) {
      await page.locator(`.seq-c:nth-child(${i + 1}).on`).waitFor({ timeout: 5000 });
      await settle(page);
      await writeChar(page);
    }
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.match(await page.locator(".result-word").textContent(), new RegExp(w.meaning.replace(/[()]/g, ".")));
  }));

  test("the quiz asks what a kanji means", T, () => withPage("kanji-quiz", {}, async (page) => {
    await page.locator(".chip", { hasText: "Meaning → kanji" }).click();
    await page.locator(".btn", { hasText: "Start quiz" }).click();
    assert.equal(await page.locator(".qask").textContent(), "What does this kanji mean?");
    const k = await page.locator(".qprompt").textContent();
    const meaning = await page.evaluate((c) => NH.KANJI_INFO[c].meaning, k);
    await page.locator(".qopt", { hasText: meaning }).first().click();
    assert.equal(await page.locator(".qopt.right").textContent(), meaning);
  }));

  test("once the hiragana are started, Today introduces kanji two a day", T, () => withPage("kanji-today", { init: hiraganaStarted }, async (page) => {
    assert.equal(await page.locator(".today-note").count(), 0);
    assert.deepEqual(await page.locator(".today-preview span").allTextContents(), ["一", "二"]);
    assert.equal(await page.locator(".today-limit [aria-checked=true]").textContent(), "2 a day");
    await page.getByRole("button", { name: "Start", exact: true }).click();
    await page.waitForURL(/#kanji-session$/);
    assert.equal(await page.locator(".task-label").textContent(), "New kanji");
    assert.equal(await page.locator(".task-main").textContent(), "一");
    await page.locator(".btn", { hasText: "Write it" }).click();
    await settle(page);
    await writeChar(page);
    await page.waitForFunction(() => document.querySelector(".session-count")?.textContent === "2 of 2", null, { timeout: 5000 });
    assert.ok((await saved(page)).srs.cards["j:一"]);
  }));
});
