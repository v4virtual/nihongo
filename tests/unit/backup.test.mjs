import { test, describe } from "node:test";
import assert from "node:assert/strict";
import { load, ALL_DATA } from "../helpers/load.mjs";

const T0 = new Date(2026, 9, 1, 9).getTime();
const card = (last, extra = {}) => ({ s: 3, d: 5, reps: 1, lapses: 0, last, due: last + 3 * 864e5, ...extra });
const plain = (o) => JSON.parse(JSON.stringify(o));

describe("backups", () => {
  test("a backup round-trips through text", () => {
    const NH = load(ALL_DATA);
    NH.SRS.review("k:あ", NH.SRS.GOOD, T0);
    NH.store.recordWrite("あ", 88);
    const text = JSON.stringify(NH.store.backup());
    const data = NH.readBackup(text);
    assert.equal(data.app, "kaku");
    assert.ok(data.srs.cards["k:あ"]);
    assert.equal(data.progress["あ"].best, 88);
  });

  test("anything else is refused with a message to show", () => {
    const NH = load(ALL_DATA);
    assert.throws(() => NH.readBackup("hello"), /couldn't be read/);
    assert.throws(() => NH.readBackup('{"app":"other"}'), /isn't a Kaku backup/);
    assert.throws(() => NH.readBackup('{"app":"kaku","format":9,"progress":{},"srs":{"cards":{}}}'), /newer Kaku/);
    assert.throws(() => NH.readBackup('{"app":"kaku","format":1,"progress":{}}'), /incomplete/);
    assert.throws(() => NH.readBackup('{"app":"kaku","format":1,"progress":{},"srs":{"cards":{"k:あ":{"s":"x"}}}}'), /damaged/);
  });

  test("merging keeps the more recently reviewed copy of each card and the higher scores", () => {
    const NH = load(ALL_DATA);
    const here = { settings: { style: "neon" }, progress: { あ: { best: 90, last: 70, tries: 3, right: 1, wrong: 0 } }, srs: { cards: { "k:あ": card(T0 + 5), "k:い": card(T0) }, day: { key: "x" } } };
    const there = { settings: { style: "accuracy" }, progress: { あ: { best: 80, last: 80, tries: 9, right: 4, wrong: 2 }, う: { best: 50, last: 50, tries: 1, right: 0, wrong: 0 } }, srs: { cards: { "k:あ": card(T0), "k:い": card(T0 + 9, { reps: 4 }), "j:日": card(T0) } } };
    const m = plain(NH.mergeBackup(here, there));
    assert.equal(m.srs.cards["k:あ"].last, T0 + 5, "this device's あ is newer");
    assert.equal(m.srs.cards["k:い"].reps, 4, "the backup's い is newer");
    assert.ok(m.srs.cards["j:日"], "cards only in the backup are added");
    assert.deepEqual(m.progress["あ"], { best: 90, last: 70, tries: 9, right: 4, wrong: 2 });
    assert.ok(m.progress["う"]);
    assert.equal(m.settings.style, "neon", "this device keeps its settings");
    assert.deepEqual(m.srs.day, { key: "x" });
  });

  test("restore replaces everything, or merges", () => {
    const NH = load(ALL_DATA);
    NH.SRS.review("k:あ", NH.SRS.GOOD, T0);
    const backup = { app: "kaku", format: 1, settings: { style: "calligraphy" }, progress: {}, srs: { cards: { "k:か": card(T0) } } };
    NH.store.restore(NH.readBackup(JSON.stringify(backup)), { merge: true });
    assert.deepEqual(Object.keys(NH.store.srs().cards).sort(), ["k:あ", "k:か"]);
    assert.equal(NH.store.settings.style, "accuracy");
    NH.store.restore(backup);
    assert.deepEqual(Object.keys(NH.store.srs().cards), ["k:か"]);
    assert.equal(NH.store.settings.style, "calligraphy");
    assert.equal(NH.store.settings.dailyNew, 5, "missing settings fall back to defaults");
  });
});
