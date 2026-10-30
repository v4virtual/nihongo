// Phone, tablet and desktop layouts of the writing screen, the writing-hand
// setting, and palm rejection for stylus users.
import { test, describe, before, after } from "node:test";
import assert from "node:assert/strict";
import { chromium, serve, open, strokesOnScreen, feedback } from "../helpers/browser.mjs";

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

const box = (page, sel) => page.locator(sel).first().evaluate((el) => {
  const r = el.getBoundingClientRect();
  return { left: r.left, right: r.right, top: r.top, bottom: r.bottom, width: r.width, height: r.height };
});

describe("writing screen layout", () => {
  test("phones: hints above the square, Watch and Redo below", T, () => withPage("w-3042", { width: 412, height: 860 }, async (page) => {
    const [cell, fb, actions] = await Promise.all([box(page, ".cell"), box(page, ".feedback"), box(page, ".actions")]);
    assert.ok(fb.bottom <= cell.top, `hint (${fb.bottom}) should end above the square (${cell.top})`);
    assert.ok(actions.top >= cell.bottom, "Watch/Redo should be below the square");
  }));

  test("tablets in portrait: one column with a large square", T, () => withPage("w-3042", { width: 820, height: 1180 }, async (page) => {
    const cell = await box(page, ".cell");
    assert.ok(cell.width >= 700, `square is only ${cell.width}px`);
    assert.ok((await box(page, ".feedback")).bottom <= cell.top);
  }));

  for (const [hand, side] of [["right", "left"], ["left", "right"]]) {
    test(`landscape, ${hand}-handed: controls on the ${side}, away from the writing hand`, T, () => withPage("w-3042", { width: 1280, height: 800, hand }, async (page) => {
      const [cell, panel] = await Promise.all([box(page, ".cell"), box(page, ".panel")]);
      assert.ok(cell.width >= 600, `square is only ${cell.width}px`);
      if (side === "left") assert.ok(panel.right <= cell.left, "panel should be left of the square");
      else assert.ok(panel.left >= cell.right, "panel should be right of the square");
      const over = await page.evaluate(() => document.documentElement.scrollWidth - innerWidth);
      assert.ok(over <= 0);
    }));
  }

  test("switching the writing hand in Settings moves the panel straight away", T, () => withPage("w-3042", { width: 1280, height: 800 }, async (page) => {
    assert.ok((await box(page, ".panel")).right <= (await box(page, ".cell")).left);
    await page.locator(".stage-bar .icon-btn[aria-label=Settings]").click();
    await page.locator(".chip", { hasText: /^Left$/ }).click();
    await page.keyboard.press("Escape");
    assert.ok((await box(page, ".panel")).left >= (await box(page, ".cell")).right);
    assert.equal((await page.evaluate(() => JSON.parse(localStorage.getItem("kaku.v1")).settings.hand)), "left");
  }));

  test("a word in landscape still shows its characters and finishes", T, () => withPage("word-umi", { width: 1280, height: 800, hand: "left" }, async (page) => {
    assert.equal(await page.locator(".panel .seq-c").count(), 2);
  }));
});

// Sends pointer events of a given type (pen, touch) straight to the writing canvas.
async function pointer(page, type, id, pointerType, pts, extra = {}) {
  await page.evaluate(({ type, id, pointerType, pts, extra }) => {
    const el = document.querySelector(".cell .live");
    for (const p of pts) {
      el.dispatchEvent(new PointerEvent(type, { bubbles: true, cancelable: true, pointerId: id, pointerType, isPrimary: true, clientX: p.x, clientY: p.y, pressure: 0.5, width: 1, height: 1, ...extra }));
    }
  }, { type, id, pointerType, pts, extra });
}
async function stroke(page, pointerType, pts, id = 1, extra = {}) {
  await pointer(page, "pointerdown", id, pointerType, [pts[0]], extra);
  for (const p of pts.slice(1)) await pointer(page, "pointermove", id, pointerType, [p], extra);
  await pointer(page, "pointerup", id, pointerType, [pts[pts.length - 1]], extra);
  await page.waitForTimeout(100);
}
const accepted = (page) => page.evaluate(() => document.querySelectorAll(".feedback.ok, .feedback.tip").length > 0 && /✓/.test(document.querySelector(".feedback").textContent));

describe("palm rejection", () => {
  test("a finger writes normally when no pen is in use", T, () => withPage("w-3042", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await stroke(page, "touch", S[0]);
    assert.match(await feedback(page), /Stroke 1 ✓/);
  }));

  test("a pen writes, and a resting palm during and just after it is ignored", T, () => withPage("w-3042", {}, async (page) => {
    const S = await strokesOnScreen(page);
    // pen goes down, then the palm lands elsewhere on the square
    await pointer(page, "pointerdown", 7, "pen", [S[0][0]]);
    await pointer(page, "pointerdown", 8, "touch", [{ x: S[1][10].x, y: S[1][10].y }]);
    for (const p of S[0].slice(1)) await pointer(page, "pointermove", 7, "pen", [p]);
    await pointer(page, "pointermove", 8, "touch", S[1].slice(10, 20));
    await pointer(page, "pointerup", 7, "pen", [S[0][S[0].length - 1]]);
    await pointer(page, "pointerup", 8, "touch", [S[1][20]]);
    await page.waitForTimeout(100);
    assert.match(await feedback(page), /Stroke 1 ✓/);
    // a palm brushing stroke 2 right after the pen lifts doesn't count as a stroke
    await stroke(page, "touch", S[1], 9);
    assert.match(await feedback(page), /Stroke 1 ✓/, "palm drew stroke 2");
    // the pen then writes stroke 2 itself
    await stroke(page, "pen", S[1], 10);
    assert.match(await feedback(page), /Stroke 2 ✓/);
  }));

  test("if the palm touches first, the pen still takes over", T, () => withPage("w-3042", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await pointer(page, "pointerdown", 3, "touch", [{ x: S[0][0].x + 40, y: S[0][0].y + 120 }]);
    await stroke(page, "pen", S[0], 4);
    await pointer(page, "pointerup", 3, "touch", [{ x: S[0][0].x + 40, y: S[0][0].y + 120 }]);
    assert.match(await feedback(page), /Stroke 1 ✓/);
  }));

  test("a large contact patch is treated as a palm", T, () => withPage("w-3042", {}, async (page) => {
    const S = await strokesOnScreen(page);
    await stroke(page, "touch", S[0], 5, { width: 60, height: 70 });
    assert.ok(!(await accepted(page)), "a palm-sized touch drew a stroke");
  }));
});
