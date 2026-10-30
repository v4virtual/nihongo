// Shared setup for the end-to-end tests: a static server for src/ and dist/,
// one Chromium per test file, and helpers that write kana with a fake pen.
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("../../", import.meta.url));
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".webmanifest": "application/manifest+json", ".png": "image/png" };

// Use the project's Playwright if installed, else the machine-wide one.
function loadPlaywright() {
  const req = createRequire(import.meta.url);
  try { return req("playwright"); } catch {}
  return req(join(execSync("npm root -g").toString().trim(), "playwright"));
}
export const { chromium } = loadPlaywright();

export function serve() {
  const server = createServer(async (req, res) => {
    const url = new URL(req.url, "http://x");
    let path = normalize(decodeURIComponent(url.pathname)).replace(/^(\.\.[/\\])+/, "");
    if (path.endsWith("/")) path += "index.html";
    const file = path.startsWith("/dist/") ? join(ROOT, path) : join(ROOT, "src", path);
    try {
      const body = await readFile(file);
      res.writeHead(200, { "content-type": TYPES[extname(file)] || "application/octet-stream" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end("not found");
    }
  });
  return new Promise((resolve) => server.listen(0, "127.0.0.1", () => resolve({ server, base: `http://127.0.0.1:${server.address().port}/` })));
}

/* Opens a fresh page (clean storage) and collects page errors. Speech is
 * replaced by a recorder so tests can check what would have been said. */
export async function open(browser, base, route = "home", { width = 412, height = 860, style, assist, text, theme, hand, scheme = "dark", init } = {}) {
  const context = await browser.newContext({ viewport: { width, height }, colorScheme: scheme });
  const page = await context.newPage();
  const errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  page.on("console", (m) => { if (m.type() === "error" && !/fonts\.(googleapis|gstatic)/.test(m.text())) errors.push(m.text()); });
  await page.addInitScript(({ style, assist, text, theme, hand }) => {
    const settings = { sound: false, ...(style && { style }), ...(assist && { assist }), ...(text && { text }), ...(theme && { theme }), ...(hand && { hand }) };
    // Seed only a fresh store, so a reload keeps what the test changed.
    try { if (!localStorage.getItem("kaku.v1")) localStorage.setItem("kaku.v1", JSON.stringify({ settings, progress: {} })); } catch {}
    window.__said = [];
  }, { style, assist, text, theme, hand });
  // Optional page setup that must run before the app, e.g. a fake recogniser.
  if (init) await page.addInitScript(init);
  await page.goto(base + "#" + route);
  await settle(page);
  await page.evaluate(() => { NH.TTS.speak = (t) => { window.__said.push(t); return true; }; });
  page.errors = errors;
  return page;
}

// Waits two animation frames: the writer loads its character on the next frame.
export const settle = (page) => page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))));

// Reference strokes of the character in the cell, mapped to screen pixels.
export async function strokesOnScreen(page) {
  return page.evaluate(() => {
    const r = document.querySelector(".cell .live").getBoundingClientRect();
    const ch = document.querySelector(".cell[data-char]")?.dataset.char || document.querySelector(".seq-c.on span")?.textContent || document.querySelector(".bar-title b").textContent;
    return NH.Geo.strokesOf(ch).map((st) => st.pts.map((p) => ({ x: r.left + (p.x / 109) * r.width, y: r.top + (p.y / 109) * r.height })));
  });
}

export async function drawPath(page, pts, { jitter = 1.2 } = {}) {
  await page.mouse.move(pts[0].x, pts[0].y);
  await page.mouse.down();
  for (const p of pts) await page.mouse.move(p.x + (Math.random() - 0.5) * jitter, p.y + (Math.random() - 0.5) * jitter, { steps: 2 });
  await page.mouse.up();
  await page.waitForTimeout(120);
}

// Writes the current character stroke by stroke, the right way.
export async function writeChar(page, opts) {
  for (const pts of await strokesOnScreen(page)) await drawPath(page, pts, opts);
}

export const feedback = (page) => page.locator(".feedback").textContent();
export const saved = (page) => page.evaluate(() => JSON.parse(localStorage.getItem("kaku.v1")));
