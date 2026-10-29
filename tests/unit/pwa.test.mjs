import { test } from "node:test";
import assert from "node:assert/strict";
import { readFileSync, existsSync } from "node:fs";

const src = (p) => new URL(`../../src/${p}`, import.meta.url);
const html = readFileSync(src("index.html"), "utf8");
const sw = readFileSync(src("sw.js"), "utf8");
const manifest = JSON.parse(readFileSync(src("manifest.webmanifest"), "utf8"));

test("the offline cache lists every script and stylesheet the page loads", () => {
  const list = sw.match(/const FILES = \[([\s\S]*?)\];/)[1];
  const files = [...list.matchAll(/"([^"]+)"/g)].map((m) => m[1]);
  const used = [...html.matchAll(/<(?:script|link)[^>]+(?:src|href)="([^":]+)"/g)].map((m) => m[1]);
  for (const f of used) assert.ok(files.includes(f), `sw.js does not cache ${f}`);
  for (const f of files.filter((f) => f !== "./")) assert.ok(existsSync(src(f)), `sw.js caches missing file ${f}`);
});

test("the deploy step can stamp the cache name", () => {
  assert.match(sw, /const CACHE = "kaku-dev";/);
});

test("the manifest is installable on Android", () => {
  assert.equal(manifest.display, "standalone");
  assert.ok(manifest.start_url && manifest.name && manifest.short_name);
  const png = (size, purpose) => manifest.icons.find((i) => i.type === "image/png" && i.sizes === size && i.purpose.includes(purpose));
  assert.ok(png("192x192", "any"), "192px PNG icon");
  assert.ok(png("512x512", "any"), "512px PNG icon");
  assert.ok(png("512x512", "maskable"), "maskable icon");
  for (const i of manifest.icons) assert.ok(existsSync(src(i.src)), `missing ${i.src}`);
  // Relative URLs keep the app working under a project path like /nihongo/.
  for (const u of [manifest.start_url, manifest.scope, ...manifest.icons.map((i) => i.src)]) assert.doesNotMatch(u, /^\//, u);
});
