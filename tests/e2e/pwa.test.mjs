// The installed app (service worker) under a project path like GitHub Pages:
// it must work offline and pick up a new deploy without reinstalling.
import { test, before, after } from "node:test";
import assert from "node:assert/strict";
import { createServer } from "node:http";
import { readFile } from "node:fs/promises";
import { join, extname, normalize } from "node:path";
import { fileURLToPath } from "node:url";
import { chromium } from "../helpers/browser.mjs";

const SRC = fileURLToPath(new URL("../../src/", import.meta.url));
const TYPES = { ".html": "text/html", ".js": "text/javascript", ".css": "text/css", ".svg": "image/svg+xml", ".png": "image/png", ".webmanifest": "application/manifest+json" };
const overrides = new Map(); // path → replacement body, to simulate a new deploy

let server, base, browser;
before(async () => {
  server = createServer(async (req, res) => {
    let path = decodeURIComponent(new URL(req.url, "http://x").pathname);
    if (!path.startsWith("/nihongo/")) { res.writeHead(404); return res.end(); }
    path = normalize(path.slice("/nihongo/".length) || "index.html").replace(/^(\.\.[/\\])+/, "");
    try {
      const body = overrides.get(path) ?? (await readFile(join(SRC, path)));
      res.writeHead(200, { "content-type": TYPES[extname(path)] || "application/octet-stream", "cache-control": "no-cache" });
      res.end(body);
    } catch {
      res.writeHead(404);
      res.end();
    }
  });
  await new Promise((r) => server.listen(0, "127.0.0.1", r));
  base = `http://127.0.0.1:${server.address().port}/nihongo/`;
  browser = await chromium.launch();
});
after(async () => {
  await browser?.close();
  server?.close();
});

test("works offline once installed, and updates on the next online visit", { timeout: 120000 }, async () => {
  const context = await browser.newContext();
  const page = await context.newPage();
  await page.goto(base + "#home");
  await page.waitForFunction(() => navigator.serviceWorker && navigator.serviceWorker.controller, null, { timeout: 15000 });
  const scope = await page.evaluate(async () => (await navigator.serviceWorker.ready).scope);
  assert.equal(new URL(scope).pathname, "/nihongo/");

  // Offline: the whole app still loads from the cache.
  await context.setOffline(true);
  await page.reload();
  await page.locator(".eki").first().waitFor();
  assert.equal(await page.locator(".eki").count(), 3);
  await page.goto(base + "#w-3042");
  await page.locator(".cell canvas.live").waitFor();

  // A new deploy: back online, the next load shows the new version.
  await context.setOffline(false);
  const html = await readFile(join(SRC, "index.html"), "utf8");
  overrides.set("index.html", html.replace("<title>Kaku Hiragana</title>", "<title>Kaku Hiragana (new deploy)</title>"));
  try {
    await page.goto(base + "#home");
    await page.reload();
    assert.equal(await page.title(), "Kaku Hiragana (new deploy)");
  } finally {
    overrides.clear();
    await context.close();
  }
});
