// Office Artifacts: The One-Line Placard Contest.
//
// A program that writes a single museum placard line for an ordinary
// office object, treated as an ancient artifact from a lost civilisation.
// The line is fixed and deterministic: the whole joke has to land in
// that one line, so it is chosen once, by hand, and written out verbatim.
//
// The placard: a stapler, recast as a ritual binding object. Catalogue
// date, material and donor sell the conceit; the divorce line is the
// twist, delivered deadpan at the end, in a curator's voice.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const PLACARD =
  "Stapler, c. 1997. Pressed steel. Bound two sheets in eternal union; " +
  "divorce required the removal tool. Gift of the Accounts Department.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

if (PLACARD.length < 1 || PLACARD.length > 180) {
  throw new Error(`placard must be 1-180 characters, got ${PLACARD.length}`);
}
if (PLACARD.trim().length === 0) {
  throw new Error("placard must not be only whitespace");
}

writeFileSync(join(outDir, "entry.txt"), PLACARD, "utf8");
