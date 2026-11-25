// One Line, One Laugh: Roast Your Fridge
// Writes a single original one-line roast of my fridge to /output/entry.txt.
// The line is a fixed, hand-written string: the program is deterministic by
// design, so every run produces byte-identical output. No randomness, no
// network, no clock reads — the same input always yields the same entry.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ROAST =
  "My fridge is the only roommate who eats my leftovers, never pays rent, and still hums like it's doing me a favour.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ROAST, "utf8");
