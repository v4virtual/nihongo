// Browser smoke test: node tools/smoke.mjs <baseUrl> <outDir>
// Visits every screen, writes kana with a simulated pen and saves screenshots.
import { createRequire } from "node:module";
const { chromium } = createRequire(import.meta.url)("playwright");
const [base = "http://localhost:8765/", out = "."] = process.argv.slice(2);
const browser = await chromium.launch();
const page = await browser.newPage({ viewport: { width: 412, height: 860 }, deviceScaleFactor: 2 });
const errors = [];
page.on("pageerror", (e) => errors.push(e.message));
page.on("console", (m) => m.type() === "error" && errors.push(m.text()));

async function shot(name) { await page.waitForTimeout(500); await page.screenshot({ path: `${out}/${name}.png` }); }

// Draws every stroke of the current character along its reference path.
async function writeChar(jitter = 1.5, upto = 99, from = 0) {
  const strokes = await page.evaluate(() => {
    const w = document.querySelector(".cell");
    const r = w.querySelector(".live").getBoundingClientRect();
    const ch = document.querySelector(".seq-c.on span")?.textContent || document.querySelector(".bar-title b").textContent;
    return NH.Geo.strokesOf(ch).map((st) => st.pts.map((p) => ({ x: r.left + (p.x / 109) * r.width, y: r.top + (p.y / 109) * r.height })));
  });
  for (const pts of strokes.slice(from, upto)) {
    await page.mouse.move(pts[0].x, pts[0].y);
    await page.mouse.down();
    for (const p of pts) await page.mouse.move(p.x + (Math.random() - 0.5) * jitter, p.y + (Math.random() - 0.5) * jitter, { steps: 2 });
    await page.mouse.up();
    await page.waitForTimeout(150);
  }
}

await page.goto(base + "#home");
await shot("01-home");
await page.goto(base + "#hiragana");
await shot("02-symbols");
await page.goto(base + "#k-" + "3042");
await page.waitForTimeout(3000);
await shot("03-explain-a");
await page.goto(base + "#k-304c");
await page.waitForTimeout(4500);
await shot("04-explain-ga");
for (const style of ["accuracy", "neon", "calligraphy"]) {
  await page.goto(base + "#home");
  await page.goto(base + "#w-3042");
  await page.click(`.styles .seg-b >> text=${style[0].toUpperCase() + style.slice(1)}`);
  await page.waitForTimeout(600);
  await shot(`05-write-${style}-start`);
  await writeChar(1.5, 2);
  await shot(`05b-write-${style}-partial`);
  await writeChar(1.5, 99, 2);
  await page.waitForTimeout(1600);
  await shot(`06-write-${style}-done`);
}
// demo playback mid-way, in calligraphy
await page.goto(base + "#home");
await page.goto(base + "#w-306a");
await page.click(".styles .seg-b >> text=Calligraphy");
await page.click("text=Watch");
await page.waitForTimeout(2600);
await shot("06b-demo-calligraphy");
await page.goto(base + "#words");
await shot("07-words");
await page.evaluate(() => NH.store.set("style", "calligraphy"));
await page.goto(base + "#home");
await page.goto(base + "#word-" + (await page.evaluate(() => NH.WORDS.find((w) => w.scene.includes("sea"))?.id || NH.WORDS[0].id)));
await shot("08-word-calligraphy");
await page.evaluate(() => NH.store.set("style", "neon"));
await page.goto(base + "#home");
await page.goto(base + "#word-" + (await page.evaluate(() => NH.WORDS.find((w) => w.scene.includes("skytree"))?.id || NH.WORDS[0].id)));
await shot("09-word-neon");
await page.evaluate(() => NH.store.set("style", "accuracy"));
await page.goto(base + "#phrases");
await shot("10-phrases");
await page.goto(base + "#quiz");
await shot("11-quiz-setup");
await page.click("text=Start quiz");
await shot("12-quiz-q");
await page.click(".qopt >> nth=0");
await shot("13-quiz-answered");
console.log(errors.length ? "ERRORS:\n" + [...new Set(errors)].join("\n") : "no console errors");
await browser.close();
