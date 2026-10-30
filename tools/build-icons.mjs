// Renders every PNG icon from src/icon.svg (needs Playwright with Chromium):
//   src/icon-192.png, src/icon-512.png  – web app icons ("any")
//   src/icon-maskable-512.png           – inset on a full-bleed square for Android masks
//   src/apple-touch-icon.png (180)      – full-bleed square; iOS rounds the corners
//   android/…/mipmap-*/ic_launcher*.png – launcher icons (legacy, round, adaptive foreground)
//   android/…/drawable*/splash.png      – launch screens
// Usage: node tools/build-icons.mjs
import { readFile, readdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { createRequire } from "node:module";
import { execSync } from "node:child_process";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const req = createRequire(import.meta.url);
let pw;
try { pw = req("playwright"); } catch { pw = req(join(execSync("npm root -g").toString().trim(), "playwright")); }

const svg = (await readFile(join(root, "src/icon.svg"), "utf8")).replace("<svg ", '<svg width="100%" height="100%" ');
const BG = "#0e1424";

// The icon centred on a w×h canvas at `scale` of the shorter side, on `bg`
// (transparent when null), optionally clipped to a circle.
const html = (w, h, scale, bg, circle) => `<!doctype html><html><body style="margin:0;background:transparent">
  <div style="width:${w}px;height:${h}px;display:grid;place-items:center;background:${bg || "transparent"};${circle ? "border-radius:50%;" : ""}">
    <div style="width:${Math.min(w, h) * scale}px;height:${Math.min(w, h) * scale}px">${svg}</div>
  </div></body></html>`;

const browser = await pw.chromium.launch();
async function render(path, w, h, scale, bg = null, circle = false) {
  const p = await browser.newPage({ viewport: { width: w, height: h } });
  await p.setContent(html(w, h, scale, bg, circle));
  await p.screenshot({ path: join(root, path), omitBackground: !bg || circle });
  await p.close();
  console.log("wrote", path);
}

await render("src/icon-192.png", 192, 192, 1);
await render("src/icon-512.png", 512, 512, 1);
await render("src/icon-maskable-512.png", 512, 512, 0.72, BG);
await render("src/apple-touch-icon.png", 180, 180, 0.84, BG);

const res = join(root, "android/app/src/main/res");
if (existsSync(res)) {
  const MIPMAP = { mdpi: 48, hdpi: 72, xhdpi: 96, xxhdpi: 144, xxxhdpi: 192 };
  for (const [d, px] of Object.entries(MIPMAP)) {
    const dir = `android/app/src/main/res/mipmap-${d}`;
    await render(`${dir}/ic_launcher.png`, px, px, 1);
    await render(`${dir}/ic_launcher_round.png`, px, px, 0.78, BG, true);
    // Adaptive icon foreground: 108dp canvas, visible content inside the central 66dp.
    await render(`${dir}/ic_launcher_foreground.png`, px * 2.25, px * 2.25, 0.6);
  }
  for (const dir of await readdir(res)) {
    if (!dir.startsWith("drawable")) continue;
    const file = join(res, dir, "splash.png");
    if (!existsSync(file)) continue;
    const { width, height } = await sizeOf(file);
    await render(`android/app/src/main/res/${dir}/splash.png`, width, height, 0.32, BG);
  }
}
await browser.close();

// PNG width/height from the IHDR chunk.
async function sizeOf(file) {
  const b = await readFile(file);
  return { width: b.readUInt32BE(16), height: b.readUInt32BE(20) };
}
