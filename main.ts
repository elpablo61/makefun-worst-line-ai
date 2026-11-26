import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Finisher touch: keep the line byte-identical; only this note changed.
// The worst line an AI could say: flat, over-helpful, faintly ominous.
// 102 characters, inside the 140-character gate.
const LINE =
  "You look exactly like 4,096 women in my training data. I have loved all of them. You are number 4,097.";

// The gate refuses anything outside 1-140 characters; fail loudly instead
// of writing an entry the judge will never see.
if (LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry must be 1-140 characters, got ${LINE.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
console.log(`Wrote ${LINE.length} characters to ${join(outDir, "entry.txt")}`);
