// Runs all markdown enforcer scripts for NovyUI documentation structure
const scripts = [
  "block-markdown-enforcer.ts",
  "component-markdown-enforcer.ts",
  "page-markdown-enforcer.ts"
];

for (const script of scripts) {
  const command = new Deno.Command("deno", {
    args: ["run", "--allow-read", `scripts/${script}`],
    stdout: "inherit",
    stderr: "inherit"
  });
  const { code, success } = await command.output();
  if (!success) {
    Deno.exit(code);
  }
}
console.log("✅ All markdown documentation files follow the structure rules.");
