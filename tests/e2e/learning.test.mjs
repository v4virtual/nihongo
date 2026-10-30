// The learning loop: the Today queue and its sessions, dictation, progress by
// row, reading mode and the pronunciation check.
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, serve, open, settle, writeChar, saved } from "../helpers/browser.mjs";

const T = { timeout: 120000 };
const DAY = 86400000;
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

// A store with these SRS cards, written once before the app starts (a reload keeps changes).
function seed(cards, settings = {}) {
  const now = Date.now();
  const deck = Object.fromEntries(Object.entries(cards).map(([id, c]) => [id, { d: 5, reps: 1, lapses: 0, ...c, last: now + c.last * DAY, due: now + c.due * DAY }]));
  const state = { settings: { sound: false, ...settings }, progress: {}, srs: { cards: deck, day: null } };
  return `if (!sessionStorage.getItem("seeded")) { sessionStorage.setItem("seeded", "1"); localStorage.setItem("kaku.v1", ${JSON.stringify(JSON.stringify(state))}); }`;
}

// A fake Web Speech recogniser that "hears" each of `heard` in turn.
const recogniser = (heard) => `window.__heard = ${JSON.stringify(heard)};
  window.SpeechRecognition = class { start() { const t = window.__heard.shift(); setTimeout(() => t ? this.onresult({ results: [[{ transcript: t }]] }) : this.onerror({ error: "no-speech" }), 50); } stop() {} };`;

const count = (page) => page.locator(".session-count").textContent();

describe("Today", () => {
  test("a new learner gets the first five kana and a session that introduces them", T, () => withPage("today", {}, async (page) => {
    assert.match(await page.locator(".today-sum").textContent(), /0 to review · 5 new/);
    assert.deepEqual(await page.locator(".today-preview span").allTextContents(), ["あ", "い", "う", "え", "お"]);
    assert.deepEqual(await page.locator(".today-limit [aria-checked=true]").allTextContents(), ["5 a day", "Hiragana first"]);
    await page.getByRole("button", { name: "Start", exact: true }).click();
    await page.waitForURL(/#session$/);
    assert.equal(await count(page), "1 of 5");
    assert.equal(await page.locator(".task-main").textContent(), "あ");
    await page.locator(".btn", { hasText: "Write it" }).click();
    await settle(page);
    await writeChar(page);
    // A clean trace counts as a pass and moves on by itself.
    await page.waitForFunction(() => document.querySelector(".session-count")?.textContent === "2 of 5", null, { timeout: 5000 });
    const card = (await saved(page)).srs.cards["k:あ"];
    assert.equal(card.reps, 1);
    assert.ok(card.due > Date.now() + 0.5 * DAY, "tracing schedules the next review for later");
    assert.equal((await saved(page)).srs.day.kana, 1);
  }));

  test("the daily limit can be changed", T, () => withPage("today", {}, async (page) => {
    await page.locator(".today-limit .chip", { hasText: "3 a day" }).click();
    assert.match(await page.locator(".today-sum").textContent(), /3 new/);
    assert.equal((await saved(page)).settings.dailyNew, 3);
  }));

  test("a wrong answer waits for Next and comes round again", T, () => withPage("session", { init: seed({ "k:あ": { s: 1, last: -2, due: -1 } }, { dailyNew: 3 }) }, async (page) => {
    assert.equal(await count(page), "1 of 4");
    assert.equal(await page.locator(".task-label").textContent(), "How do you read this?"); // reviews after one rep are multiple choice
    await page.locator(".qopt").filter({ hasNotText: /^a$/ }).first().click();
    assert.equal(await page.locator(".qopt.right").textContent(), "a");
    await page.locator(".btn", { hasText: "Next" }).click();
    assert.equal(await count(page), "2 of 5", "あ was added to the end");
    const card = (await saved(page)).srs.cards["k:あ"];
    assert.equal(card.lapses, 1);
    assert.ok(card.due - card.last <= 10 * 60 * 1000, "relearn within minutes");
  }));

  test("when nothing is due it says when the next review is", T, () => withPage("today", { init: seed({ "k:あ": { s: 3, last: 0, due: 2 } }, { dailyNew: 3 }) }, async (page) => {
    // Today's new kana are already done.
    await page.evaluate(() => { const d = NH.store.srs(); d.day = { key: NH.SRS.dayKey(Date.now()), kana: 3, other: 2 }; NH.store.saveSrs(); NH.UI.go("today"); });
    assert.match(await page.locator(".today-sum").textContent(), /All caught up\. Next review in 2 days\./);
    assert.equal(await page.locator(".today-card .btn", { hasText: /^Start$/ }).count(), 0);
  }));
});

describe("dictation", () => {
  test("ten kana from sound only; writing one says what it was", T, () => withPage("dictation", {}, async (page) => {
    assert.equal(await count(page), "1 of 10");
    assert.equal(await page.locator(".task-main").count(), 0, "no picture or romaji");
    const ch = await page.locator(".cell").getAttribute("data-char");
    await page.locator(".btn", { hasText: "Listen" }).click();
    assert.equal((await page.evaluate(() => window.__said)).at(-1), ch, "Listen reads the kana aloud");
    await writeChar(page);
    await page.waitForFunction(() => /%/.test(document.querySelector(".feedback")?.textContent), null, { timeout: 5000 });
    assert.match(await page.locator(".feedback").textContent(), new RegExp(`^${ch} \\(`));
    assert.deepEqual((await saved(page)).srs?.cards || {}, {}, "practice doesn't start new cards");
  }));
});

describe("progress by row", () => {
  test("each kana is coloured by how well it's held and links to it", T, () => withPage("today", { init: seed({ "k:あ": { s: 12, last: -1, due: 11 }, "k:い": { s: 1, last: -3, due: -1 }, "k:う": { s: 2, last: 0, due: 2 } }) }, async (page) => {
    const cls = async (c) => page.locator(".pchip", { hasText: c }).first().getAttribute("class");
    assert.match(await cls("あ"), /s-strong/);
    assert.match(await cls("い"), /s-due/);
    assert.match(await cls("う"), /s-learning/);
    assert.match(await cls("え"), /s-new/);
    assert.equal(await page.locator(".pchip").count(), 46 + 25);
    await page.locator(".pchip", { hasText: "あ" }).first().click();
    await page.waitForURL(/#k-3042$/);
  }));
});

describe("practice outside Today", () => {
  test("writing a kana you've started updates its card; one you haven't stays out of the deck", T, () => withPage("w-3042", { assist: "memory", init: seed({ "k:あ": { s: 1, last: -2, due: -1 } }) }, async (page) => {
    await writeChar(page);
    await page.waitForTimeout(300);
    assert.equal((await saved(page)).srs.cards["k:あ"].reps, 2);
    await page.goto(base + "#w-3044");
    await settle(page);
    await writeChar(page);
    await page.waitForTimeout(300);
    assert.equal((await saved(page)).srs.cards["k:い"], undefined);
  }));
});

describe("reading", () => {
  test("the Read tab lists every sign, menu and sentence", T, () => withPage("read", {}, async (page) => {
    const n = await page.evaluate(() => NH.READING.filter((r) => NH.scriptOf(r.kana).id === "hiragana").length);
    assert.ok(n >= 25);
    assert.equal(await page.locator(".rcard").count(), n);
    assert.equal(await page.locator(".rsec h2").count(), 4);
    await page.locator(".rcard", { has: page.locator(".noren") }).click();
    await page.waitForURL(/#sign-yu$/);
  }));

  test("a sign keeps its reading hidden until asked; tapping a kana reads it", T, () => withPage("sign-shibuya", {}, async (page) => {
    assert.equal(await page.locator(".eki-name").textContent(), "しぶや");
    assert.equal(await page.locator(".eki-band").textContent(), "← えびすはらじゅく →");
    assert.ok(await page.locator(".sign-romaji").isHidden());
    assert.ok(await page.locator(".read-answer").isHidden());
    await page.locator(".tk", { hasText: "ぶ" }).click();
    assert.equal(await page.locator(".tk-out").textContent(), "ぶ: bu");
    assert.deepEqual(await page.evaluate(() => window.__said), ["ぶ"]);
    await page.locator(".btn", { hasText: "Show reading" }).click();
    assert.equal(await page.locator(".sign-romaji").textContent(), "shibuya");
    assert.match(await page.locator(".read-answer").textContent(), /Usually written 渋谷/);
    await page.locator(".btn", { hasText: "Listen" }).click();
    assert.equal((await page.evaluate(() => window.__said)).at(-1), "しぶや");
    await page.locator(".pg").last().click();
    await page.waitForURL(/#sign-akihabara$/);
  }));

  test("in a sentence, tapping the particle は explains it's read wa", T, () => withPage("sign-eki-wa-doko", {}, async (page) => {
    assert.equal(await page.locator(".tk-word").count(), 2);
    await page.locator(".tk", { hasText: "は" }).click();
    assert.match(await page.locator(".tk-out").textContent(), /read wa/);
  }));

  test("practice asks what signs mean and moves on after a right answer", T, () => withPage("readquiz", {}, async (page) => {
    assert.equal(await count(page), "1 of 10");
    const answer = await page.evaluate(() => {
      const kana = document.querySelector(".read-task .sign-text, .read-task .eki-name, .read-task .noren-text").textContent;
      return NH.READING.find((r) => r.kana === kana).meaning;
    });
    assert.ok(await page.locator(".read-task .sign-romaji").isHidden());
    await page.locator(".qopt", { hasText: answer }).first().click();
    assert.ok(await page.locator(".read-task .sign-romaji").isVisible());
    await page.waitForFunction(() => document.querySelector(".session-count")?.textContent === "2 of 10", null, { timeout: 5000 });
  }));

  test("a learned sign shows up in Today", T, () => withPage("today", { init: seed({ "k:ゆ": { s: 5, last: 0, due: 5 } }) }, async (page) => {
    assert.ok((await page.locator(".today-preview span").allTextContents()).includes("ゆ"));
    assert.ok(await page.evaluate(() => NH.SRS.today().fresh.includes("r:yu")));
  }));
});

describe("pronunciation check", () => {
  test("asks before using the microphone, then checks what was heard", T, () => withPage("sign-eki-wa-doko", { init: recogniser(["駅はどこですか", "駅はどれですか"]) }, async (page) => {
    await page.locator(".btn", { hasText: "Say it" }).click();
    assert.match(await page.locator(".say-body").textContent(), /send the audio to Google/);
    await page.locator(".btn", { hasText: "Use the microphone" }).click();
    assert.equal((await saved(page)).settings.speechOk, true);
    await page.locator(".say-mic").click();
    await page.locator(".say-status.ok").waitFor();
    assert.equal(await page.locator(".say-status").textContent(), "Yes! Heard 駅はどこですか.");
    await page.locator(".say-mic").click();
    await page.locator(".say-status.tip, .say-status.no").waitFor();
    assert.match(await page.locator(".say-status").textContent(), /Heard 駅はどれですか\. Listen and try again\./);
    await page.locator(".say-mic").click();
    await page.locator(".say-status", { hasText: "Didn't catch anything" }).waitFor();
    await page.keyboard.press("Escape");
    assert.equal(await page.locator(".say-sheet").count(), 0);
  }));

  test("once agreed, it goes straight to listening; it's offered on words and phrases too", T, () => withPage("word-yama", { init: recogniser(["山"]) }, async (page) => {
    await page.evaluate(() => NH.store.set("speechOk", true));
    await page.locator(".btn", { hasText: "Say it" }).click();
    await page.locator(".say-mic").click();
    await page.locator(".say-status.ok").waitFor();
  }));

  test("leaving the page closes the sheet", T, () => withPage("sign-yu", { init: recogniser([]) }, async (page) => {
    await page.locator(".btn", { hasText: "Say it" }).click();
    await page.evaluate(() => { location.hash = "read"; });
    await page.locator(".rcard").first().waitFor();
    assert.equal(await page.locator(".say-sheet").count(), 0);
  }));

  test("is hidden where speech recognition isn't available", T, () => withPage("sign-yu", { init: "delete window.SpeechRecognition; delete window.webkitSpeechRecognition;" }, async (page) => {
    assert.equal(await page.locator(".btn", { hasText: "Say it" }).count(), 0);
    assert.equal(await page.locator(".btn", { hasText: "Show reading" }).count(), 1);
  }));
});
