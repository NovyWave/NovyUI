// This script checks that every RULE id in doc-structure.md is present in enforce-doc-structure.ts and vice versa.
// Usage: deno run --allow-read scripts/check-rule-coverage.ts

const decoder = new TextDecoder();
const docStructure = Deno.readFileSync("doc-structure.md");
const enforceScript = Deno.readFileSync("scripts/enforce-doc-structure.ts");

function extractRuleIds(text: string, pattern: RegExp): Set<string> {
  const ids = new Set<string>();
  let match;
  while ((match = pattern.exec(text)) !== null) {
    ids.add(match[1]);
  }
  return ids;
}

const docRulePattern = /<!--\s*RULE:([a-zA-Z0-9_-]+)\s*-->/g;
const codeRulePattern = /\/\/\s*RULE:([a-zA-Z0-9_-]+)/g;

const docIds = extractRuleIds(decoder.decode(docStructure), docRulePattern);
const codeIds = extractRuleIds(decoder.decode(enforceScript), codeRulePattern);

let ok = true;
for (const id of docIds) {
  if (!codeIds.has(id)) {
    console.error(`❌ Rule '${id}' is in doc-structure.md but not enforced in enforce-doc-structure.ts`);
    ok = false;
  }
}
for (const id of codeIds) {
  if (!docIds.has(id)) {
    console.error(`❌ Rule '${id}' is in enforce-doc-structure.ts but not documented in doc-structure.md`);
    ok = false;
  }
}
if (ok) {
  console.log("✅ All rule IDs are covered in both files.");
  Deno.exit(0);
} else {
  Deno.exit(1);
}
