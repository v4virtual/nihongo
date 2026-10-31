/* Back up or restore progress without an account: save the backup as a file
 * (web) or copy it as text (anywhere, including the Android app, where
 * downloads don't work), then open or paste it on another device. */
window.NH = window.NH || {};

(function () {
  const { h, store } = NH;
  const UI = NH.UI;
  const native = () => !!window.Capacitor?.isNativePlatform?.();

  const summary = (data) => {
    const cards = Object.keys(data.srs.cards).length;
    const written = Object.keys(data.progress).length;
    return `${cards} item${cards === 1 ? "" : "s"} in Today's schedule, ${written} character${written === 1 ? "" : "s"} written`;
  };
  const dateOf = (iso) => { const d = new Date(iso); return isNaN(d) ? "an unknown date" : d.toLocaleDateString(undefined, { year: "numeric", month: "short", day: "numeric" }); };

  function open() {
    const bg = h("div.sheet-bg", { onclick: (e) => e.target === bg && close() });
    const opener = document.activeElement;
    const keys = (e) => { if (e.key === "Escape") close(); };
    const close = () => { bg.remove(); document.removeEventListener("keydown", keys); opener?.focus?.(); };
    document.addEventListener("keydown", keys);
    UI.onLeave(close);

    const text = () => JSON.stringify(store.backup());
    const status = h("p.backup-status", { "aria-live": "polite" });
    const say = (msg, cls = "") => { status.textContent = msg; status.className = "backup-status " + cls; };
    const copyBox = h("textarea.backup-text", { readonly: true, hidden: true, rows: 3, "aria-label": "Backup text" });

    function saveFile() {
      const url = URL.createObjectURL(new Blob([text()], { type: "application/json" }));
      const a = h("a", { href: url, download: `kaku-backup-${new Date().toISOString().slice(0, 10)}.json` });
      document.body.append(a);
      a.click();
      a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 1000);
      say("Backup saved to your downloads.", "ok");
    }
    async function copy() {
      const t = text();
      try {
        await navigator.clipboard.writeText(t);
        say("Backup copied. Paste it somewhere safe, or into Kaku on your other device.", "ok");
      } catch (_) {
        // No clipboard access: show the text to copy by hand.
        copyBox.value = t;
        copyBox.hidden = false;
        copyBox.select();
        say("Copy the text below and keep it somewhere safe.", "");
      }
    }

    // Restore: read a file or pasted text, then ask how to apply it.
    const file = h("input.vh", { type: "file", accept: "application/json,.json", tabindex: "-1", "aria-hidden": "true", onchange: async () => {
      const f = file.files?.[0];
      if (f) check(await f.text());
      file.value = "";
    } });
    const paste = h("textarea.backup-text", { rows: 3, placeholder: "…or paste backup text here", "aria-label": "Backup text to restore" });
    const choice = h("div.backup-choice", { hidden: true });
    function check(t) {
      try {
        const data = NH.readBackup(t.trim());
        choice.replaceChildren(
          h("p", h("b", `Backup from ${dateOf(data.saved)}`), h("br"), summary(data), "."),
          h("div.actions",
            UI.btn("Merge with this device", () => apply(data, true), "primary"),
            UI.btn("Replace this device's progress", () => apply(data, false), "danger"),
            UI.btn("Cancel", () => { choice.hidden = true; say(""); }, "ghost")),
          h("p.muted", "Merge keeps whichever copy of each item you reviewed most recently, and this device's settings. Replace swaps everything here for the backup."));
        choice.hidden = false;
        say("");
        choice.querySelector("button")?.focus();
      } catch (e) {
        choice.hidden = true;
        say(e.message, "no");
      }
    }
    function apply(data, merge) {
      store.restore(data, { merge });
      close();
      UI.toast(merge ? "Backup merged." : "Progress restored.");
      UI.go(location.hash.slice(1) || "home");
    }

    const here = store.backup();
    const sheet = h("div.sheet.backup-sheet", { role: "dialog", "aria-modal": "true", "aria-label": "Back up or restore", tabindex: "-1" },
      h("div.sheet-head", h("h2", "Back up or restore"), UI.iconBtn("close", "Close", close)),
      h("p", "Your progress lives only on this device. Back it up to keep it safe or to carry on on another phone or tablet."),
      h("h3", "Back up"),
      h("p.muted", `On this device: ${summary(here)}.`),
      h("div.actions",
        native() ? null : UI.btn("Save to a file", saveFile, "primary"),
        UI.btn("Copy as text", copy, native() ? "primary" : "ghost")),
      copyBox,
      h("h3", "Restore"),
      h("div.actions", UI.btn("Open a backup file", () => file.click(), "ghost"), file),
      paste,
      h("div.actions", UI.btn("Read pasted backup", () => (paste.value.trim() ? check(paste.value) : say("Paste the backup text first.", "no")), "ghost")),
      choice,
      status);
    bg.append(sheet);
    document.body.append(bg);
    sheet.focus();
  }

  NH.Backup = { open };
})();
