// Inlines src/ into one self-contained page for publishing as a Claude
// artifact (or any single-file host): node tools/build-artifact.mjs
// Output: dist/kaku.html (artifact body, no <html>/<head> wrapper) and
// dist/kaku-standalone.html (a normal full HTML document).
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const GOOGLE_FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com">\n<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>\n' +
  '<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Klee+One:wght@400;600&family=M+PLUS+Rounded+1c:wght@500;900&family=Yuji+Syuku&family=Zen+Kaku+Gothic+New:wght@400;700;900&display=swap">';
const src = (p) => join(root, "src", p);
const html = await readFile(src("index.html"), "utf8");

const scripts = [...html.matchAll(/<script src="([^"]+)"><\/script>/g)].map((m) => m[1]);
const js = (await Promise.all(scripts.map(async (p) => `/* ${p} */\n${await readFile(src(p), "utf8")}`))).join("\n");
const css = await readFile(src("css/app.css"), "utf8");
const icon = await readFile(src("icon.svg"), "utf8");

const head = html.slice(html.indexOf("<head>") + 6, html.indexOf("</head>"))
  .replace(/<meta charset[^>]*>\n?/, "")
  .replace(/<meta name="viewport"[^>]*>\n?/, "")
  .replace(/<link rel="manifest"[^>]*>\n?/, "")
  .replace(/<link rel="apple-touch-icon"[^>]*>\n?/, "")
  .replace(/<link rel="icon"[^>]*>/, `<link rel="icon" href="data:image/svg+xml,${encodeURIComponent(icon)}">`)
  .replace(/<link rel="stylesheet" href="css\/app.css">/, () => `<style>\n${css}\n</style>`)
  // A single file can't carry the bundled font files, so it loads them from Google Fonts.
  .replace(/<link rel="stylesheet" href="css\/fonts.css">/, () => GOOGLE_FONTS);
let body = html.slice(html.indexOf("<body>") + 6, html.indexOf("</body>"));
// Replacer functions, so "$&" and friends in the code are kept as written.
body = body.replace(/(<script src="[^"]+"><\/script>\n?)+/, () => `<script>\n${js.replace(/<\/script/gi, "<\\/script")}\n</script>\n`);

await mkdir(join(root, "dist"), { recursive: true });
await writeFile(join(root, "dist/kaku.html"), `${head.trim()}\n${body.trim()}\n`);
await writeFile(join(root, "dist/kaku-standalone.html"),
  `<!doctype html>\n<html lang="en">\n<head>\n<meta charset="utf-8">\n<meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover">\n${head.trim()}\n</head>\n<body>\n${body.trim()}\n</body>\n</html>\n`);
console.log(`dist/kaku.html: ${(js.length + css.length) / 1024 | 0} KB of code inlined from ${scripts.length} scripts`);
