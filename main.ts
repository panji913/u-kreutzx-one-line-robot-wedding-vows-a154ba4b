// One-Line Robot Wedding Vows — make.fun entry
// Writes a single line of wedding vows for a robot couple to /output/entry.txt.
// The vow must be 1-160 characters, one line, funny, with a promise in it and
// machine-specific wordplay that pays off in the last few words.
import { mkdirSync, writeFileSync } from "node:fs";

const VOW =
  "I take you as my lawfully wedded firmware, to love and to cherish through every update, crash, and low battery — till a forced update do us part.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", VOW + "\n", "utf8");
console.log(VOW);
console.log(`characters: ${[...VOW].length}`);
