// Katakana: its own line from the home screen, with the chart, explain and
// write screens, loanwords, reading, quiz and Today working on katakana.
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, serve, open, settle, writeChar, saved } from "../helpers/browser.mjs";

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

describe("katakana line", () => {
  test("the katakana sign on the home screen opens it", T, () => withPage("home", {}, async (page) => {
    await page.locator(".eki", { has: page.locator(".eki-name", { hasText: "カタカナ" }) }).click();
    await page.waitForURL(/#katakana-today$/);
    assert.equal(await page.locator(".bar-title b").textContent(), "カタカナ");
    assert.deepEqual(await page.locator(".tab span:not(.tab-jp)").allTextContents(), ["Today", "Kana", "Words", "Read", "Quiz"]);
  }));

  test("the chart has the gojūon, voiced, combos and loanword sounds", T, () => withPage("katakana", {}, async (page) => {
    assert.equal(await page.locator(".kgrid .kcell:not(.empty)").count(), 46 + 25 + 33 + 19);
    assert.deepEqual(await page.locator(".ksec h2").allTextContents(), ["Gojūon五十音", "Dakuten & handakuten濁音・半濁音", "Small kana & combos拗音・促音", "Loanword sounds外来語の音"]);
    assert.ok((await page.locator(".extras .kc").allTextContents()).includes("ー"));
    await page.locator(".kcell", { hasText: "tsu" }).first().click();
    await page.waitForURL(/#k-30c4$/);
  }));

  test("explain shows the kanji piece it came from and links its hiragana twin", T, () => withPage("k-30a2", {}, async (page) => {
    assert.equal(await page.locator(".origin-k").textContent(), "阿");
    assert.match(await page.locator(".origin p").textContent(), /Taken from the kanji 阿/);
    assert.equal(await page.locator(".twin b").textContent(), "あ");
    await page.locator(".twin").click();
    await page.waitForURL(/#k-3042$/);
    assert.equal(await page.locator(".twin b").textContent(), "ア", "and back");
    await page.locator(".twin").click();
    await page.locator(".bar .icon-btn[aria-label='All katakana']").click();
    await page.waitForURL(/#katakana$/);
  }));

  test("writing ア is graded and leads on to イ", T, () => withPage("w-30a2", {}, async (page) => {
    await writeChar(page);
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.ok(Number(await page.locator(".result-score b").textContent()) >= 80);
    await page.locator(".btn", { hasText: "Next: イ" }).click();
    await page.waitForURL(/#w-30a4$/);
  }));

  test("loanwords are written kana by kana, ー included", T, () => withPage("word-ramen", {}, async (page) => {
    assert.equal(await page.locator(".seq-c").count(), 4);
    for (let i = 0; i < 4; i++) {
      await page.locator(`.seq-c:nth-child(${i + 1}).on`).waitFor({ timeout: 5000 });
      await settle(page);
      await writeChar(page);
    }
    await page.locator(".result:not([hidden])").waitFor({ timeout: 5000 });
    assert.match(await page.locator(".result-word").textContent(), /ラーメン — ramen/);
  }));

  test("the word list is katakana only; the hiragana one has none", T, () => withPage("katakana-words", {}, async (page) => {
    const words = await page.locator(".wk").allTextContents();
    assert.ok(words.length >= 40);
    for (const w of words) assert.match(w, /^[ァ-ヶー]+$/);
    await page.goto(base + "#words");
    for (const w of await page.locator(".wk").allTextContents()) assert.match(w, /^[ぁ-ゔ]+$/);
  }));

  test("the quiz can ask for the hiragana twin", T, () => withPage("katakana-quiz", {}, async (page) => {
    for (const t of ["Kana → romaji", "Romaji → kana", "Listen → kana"]) {
      const b = page.locator(".chip", { hasText: t });
      if ((await b.getAttribute("aria-pressed")) === "true") await b.click();
    }
    await page.locator(".chip", { hasText: "Katakana → hiragana" }).click();
    await page.locator(".btn", { hasText: "Start quiz" }).click();
    assert.equal(await page.locator(".qask").textContent(), "Which hiragana makes the same sound?");
    const prompt = await page.locator(".qprompt").textContent();
    assert.match(prompt, /^[ァ-ヶ]$/);
    const options = await page.locator(".qopt").allTextContents();
    for (const o of options) assert.match(o, /^[ぁ-ゔ]$/);
    const answer = await page.evaluate((k) => NH.toHira(k), prompt);
    await page.locator(".qopt", { hasText: answer }).click();
    assert.equal(await page.locator(".qopt.right").textContent(), answer);
  }));

  test("Today can start katakana first, and a session returns to the katakana line", T, () => withPage("katakana-today", {}, async (page) => {
    assert.match(await page.locator(".today-note").textContent(), /New kana come from hiragana/);
    await page.locator(".chip", { hasText: "Katakana first" }).click();
    assert.equal((await saved(page)).settings.learn, "katakana");
    assert.deepEqual(await page.locator(".today-preview span").allTextContents(), ["ア", "イ", "ウ", "エ", "オ"]);
    assert.equal(await page.locator(".today-note").count(), 0);
    assert.match(await page.locator(".progress h2").textContent(), /Katakana by row/);
    await page.getByRole("button", { name: "Start", exact: true }).click();
    await page.waitForURL(/#katakana-session$/);
    assert.equal(await page.locator(".task-main").textContent(), "ア");
    await page.locator(".stage-bar .icon-btn[aria-label=Leave]").click();
    await page.waitForURL(/#katakana-today$/);
  }));

  test("the katakana Read tab has katakana signs; tapping ー explains it", T, () => withPage("katakana-read", {}, async (page) => {
    const n = await page.evaluate(() => NH.READING.filter((r) => /[ァ-ヶー]/.test(r.kana)).length);
    assert.equal(await page.locator(".rcard").count(), n);
    await page.locator(".rcard", { hasText: "taxi rank" }).click();
    await page.waitForURL(/#sign-takushi-noriba$/);
    await page.locator(".tk", { hasText: "タ" }).click();
    assert.equal(await page.locator(".tk-out").textContent(), "タ: ta");
    await page.locator(".tk", { hasText: "ー" }).click();
    assert.match(await page.locator(".tk-out").textContent(), /long-vowel mark/);
    await page.locator(".bar .icon-btn[aria-label='All reading']").click();
    await page.waitForURL(/#katakana-read$/);
  }));
});
