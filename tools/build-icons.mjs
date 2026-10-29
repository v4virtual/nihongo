// Renders the PNG app icons Android and iOS need from src/icon.svg:
//   icon-192.png, icon-512.png       – the icon as drawn ("any")
//   icon-maskable-512.png            – inset onto a full-bleed square so
//                                      Android's circle/squircle masks don't clip it
//   apple-touch-icon.png (180)       – full-bleed square; iOS rounds the corners
// Usage: node tools/build-icons.mjs   (needs Playwright with Chromium)
import { readFile } from "node:fs/promises";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const req = createRequire(import.meta.url);
let pw;
try { pw = req("playwright"); } catch { pw = req(join(execSync("npm root -g").toString().trim(), "playwright")); }

const svg = await readFile(join(root, "src/icon.svg"), "utf8");
const BG = "#0e1424";
const page = (size, inset) => `<!doctype html><html><body style="margin:0;background:${inset ? BG : "transparent"}">
  <div style="width:${size}px;height:${size}px;display:grid;place-items:center">
    <div style="width:${size * (inset || 1)}px;height:${size * (inset || 1)}px">${svg.replace("<svg ", '<svg width="100%" height="100%" ')}</div>
  </div></body></html>`;

const browser = await pw.chromium.launch();
for (const [name, size, inset] of [["icon-192.png", 192], ["icon-512.png", 512], ["icon-maskable-512.png", 512, 0.72], ["apple-touch-icon.png", 180, 0.84]]) {
  const p = await browser.newPage({ viewport: { width: size, height: size } });
  await p.setContent(page(size, inset));
  await p.screenshot({ path: join(root, "src", name), omitBackground: !inset });
  await p.close();
  console.log("wrote src/" + name);
}
await browser.close();
