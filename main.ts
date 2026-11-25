// One Line to Stop the Scroll — entry program.
// Writes a single line of text (at most 200 characters) to /output/entry.txt.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My dog is a tiny manager: every night at nine he brings me his leash, files the paperwork for our walk, and stares at me, because in seven years I have never once been the one who is on time.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");

const chars = [...LINE].length;
console.log(`Wrote ${chars} characters to /output/entry.txt`);
if (chars < 1 || chars > 200) {
  throw new Error(`Entry must be 1-200 characters, got ${chars}`);
}
