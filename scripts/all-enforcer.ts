// Runs all markdown and asset enforcer scripts for NovyUI documentation and assets
const commands: [string, string[]][] = [
  ["deno", ["run", "--allow-read", "--allow-run", "scripts/all-markdown-enforcer.ts"]],
  ["deno", ["run", "--allow-read", "--allow-write", "--allow-net", "scripts/font-asset-enforcer.ts"]],
  ["deno", ["run", "--allow-read", "--allow-write", "--allow-net", "scripts/icon-asset-enforcer.ts"]],
];

for (const entry of commands) {
  const [cmd, args] = entry;
  const command = new Deno.Command(cmd, {
    args,
    stdout: "inherit",
    stderr: "inherit"
  });
  const { code, success } = await command.output();
  if (!success) {
    Deno.exit(code);
  }
}
console.log("✅ All documentation and asset files are valid and in sync.");
