#!/usr/bin/env -S deno run --allow-all
/**
 * NovyUI PenPot Automation Demo
 * 
 * Interactive demo script showing the full automation capabilities
 * for both PenPot migration and Figma visual analysis.
 */

async function displayBanner() {
  const banner = `
╔═══════════════════════════════════════════════════════════════╗
║                    NovyUI Automation Demo                     ║
║                                                               ║
║  🎨 PenPot Design System Migration                           ║
║  🖼️  Visual Figma Design Analysis                            ║
║  🤖 Fully Automated Component Generation                     ║
╚═══════════════════════════════════════════════════════════════╝
`;
  console.log(banner);
}

async function showStats() {
  console.log("📊 **Migration Capabilities:**\n");
  
  const stats = [
    ["Components to create", "313", "(18 base × variants × states)"],
    ["Design tokens", "98", "(OKLCH colors with themes)"],
    ["Typography combinations", "43", "(3 fonts × sizes × weights)"],
    ["Icons available", "77", "(Lucide icons in 4 sizes)"],
    ["Automation time", "~15 min", "(complete PenPot migration)"],
    ["Figma processing", "~30 images/min", "(visual component detection)"]
  ];

  stats.forEach(([metric, value, description]) => {
    console.log(`  • **${metric}**: ${value} ${description}`);
  });
  
  console.log("");
}

async function checkPrerequisites() {
  console.log("🔍 **Checking Prerequisites...**\n");
  
  const checks = [
    {
      name: "Deno",
      command: "deno --version",
      required: true
    },
    {
      name: "Python",
      command: "python3 --version", 
      required: true
    },
    {
      name: "Git",
      command: "git --version",
      required: false
    }
  ];

  for (const check of checks) {
    try {
      const result = await new Deno.Command(check.command.split(' ')[0], {
        args: check.command.split(' ').slice(1),
        stdout: "piped",
        stderr: "piped"
      }).output();

      if (result.success) {
        const version = new TextDecoder().decode(result.stdout).trim().split('\n')[0];
        console.log(`  ✅ ${check.name}: ${version}`);
      } else {
        throw new Error("Command failed");
      }
    } catch {
      if (check.required) {
        console.log(`  ❌ ${check.name}: Not found (REQUIRED)`);
      } else {
        console.log(`  ⚠️  ${check.name}: Not found (optional)`);
      }
    }
  }
  
  console.log("");
}

async function promptUser(question: string): Promise<string> {
  console.log(question);
  
  const buf = new Uint8Array(1024);
  const n = await Deno.stdin.read(buf) ?? 0;
  return new TextDecoder().decode(buf.subarray(0, n)).trim();
}

async function runDemo() {
  await displayBanner();
  await showStats();
  await checkPrerequisites();
  
  console.log("🎯 **Available Demos:**\n");
  console.log("  1. Generate W3C Design Tokens");
  console.log("  2. Create Component Specifications");  
  console.log("  3. Setup PenPot MCP Server");
  console.log("  4. Run PenPot Migration (requires setup)");
  console.log("  5. Demo Figma Visual Migration");
  console.log("  6. Show Example Migration Output");
  console.log("  7. Exit");
  console.log("");

  const choice = await promptUser("Select demo (1-7): ");

  switch (choice) {
    case "1":
      await demoTokenGeneration();
      break;
    case "2":
      await demoComponentSpecs();
      break;
    case "3":
      await demoMCPSetup();
      break;
    case "4":
      await demoPenPotMigration();
      break;
    case "5":
      await demoFigmaMigration();
      break;
    case "6":
      await showExampleOutput();
      break;
    case "7":
      console.log("👋 Thanks for trying NovyUI automation!");
      return;
    default:
      console.log("❌ Invalid choice. Please select 1-7.");
      await runDemo();
  }
}

async function demoTokenGeneration() {
  console.log("\n🎨 **Generating W3C Design Tokens...**\n");
  
  try {
    const result = await new Deno.Command("deno", {
      args: ["run", "--allow-read", "--allow-write", "token-converter.ts"],
      stdout: "piped",
      stderr: "piped"
    }).output();

    if (result.success) {
      const output = new TextDecoder().decode(result.stdout);
      console.log(output);
    } else {
      const error = new TextDecoder().decode(result.stderr);
      console.log("❌ Token generation failed:");
      console.log(error);
    }
  } catch (error) {
    console.log("❌ Failed to run token converter:", error.message);
  }

  await promptUser("\nPress Enter to continue...");
  await runDemo();
}

async function demoComponentSpecs() {
  console.log("\n📋 **Creating Component Specifications...**\n");
  
  try {
    const result = await new Deno.Command("deno", {
      args: ["run", "--allow-read", "--allow-write", "component-analyzer.ts"],
      stdout: "piped",
      stderr: "piped"
    }).output();

    if (result.success) {
      const output = new TextDecoder().decode(result.stdout);
      console.log(output);
    } else {
      const error = new TextDecoder().decode(result.stderr);
      console.log("❌ Component analysis failed:");
      console.log(error);
    }
  } catch (error) {
    console.log("❌ Failed to run component analyzer:", error.message);
  }

  await promptUser("\nPress Enter to continue...");
  await runDemo();
}

async function demoMCPSetup() {
  console.log("\n🔧 **Setting up PenPot MCP Server...**\n");
  console.log("This will:");
  console.log("  • Create Python virtual environment");
  console.log("  • Install penpot-mcp package");
  console.log("  • Create server management scripts");
  console.log("");

  const confirm = await promptUser("Continue with MCP setup? (y/N): ");
  
  if (confirm.toLowerCase() !== 'y') {
    console.log("Skipped MCP setup.");
    await runDemo();
    return;
  }

  try {
    const result = await new Deno.Command("deno", {
      args: ["run", "--allow-all", "mcp-server-setup.ts", "setup"],
      stdout: "piped",
      stderr: "piped"
    }).output();

    if (result.success) {
      const output = new TextDecoder().decode(result.stdout);
      console.log(output);
    } else {
      const error = new TextDecoder().decode(result.stderr);
      console.log("❌ MCP setup failed:");
      console.log(error);
    }
  } catch (error) {
    console.log("❌ Failed to setup MCP server:", error.message);
  }

  await promptUser("\nPress Enter to continue...");
  await runDemo();
}

async function demoPenPotMigration() {
  console.log("\n🚀 **PenPot Migration Demo**\n");
  console.log("⚠️  This requires:");
  console.log("  • PenPot account credentials");
  console.log("  • MCP server setup");
  console.log("  • Internet connection");
  console.log("");
  console.log("This demo will show the automation command without actually running it.");
  console.log("");

  const demoCommand = `deno run --allow-all penpot-automation.ts full`;
  console.log("**Command to run full automation:**");
  console.log(`\`\`\`bash`);
  console.log(demoCommand);
  console.log(`\`\`\``);
  console.log("");

  console.log("**What this would do:**");
  console.log("  1. 📁 Create PenPot project");
  console.log("  2. 🎨 Import 98 design tokens");
  console.log("  3. 🔧 Create 313 components");
  console.log("  4. 📋 Organize by categories");
  console.log("  5. 📸 Capture screenshots");
  console.log("");

  console.log("**Expected output:**");
  console.log("```");
  console.log("🚀 Starting full NovyUI → PenPot automation...");
  console.log("📁 Creating project: NovyUI Design System");
  console.log("✅ Created project: abc123-def456-ghi789");
  console.log("🎨 Importing design tokens...");
  console.log("✅ Design tokens imported");
  console.log("🔧 Creating component: Button");
  console.log("  Creating: Button-primary-default");
  console.log("  Creating: Button-primary-hover");
  console.log("  Creating: Button-primary-active");
  console.log("  ...(36 total Button variants)");
  console.log("✅ Created 36 component variants for Button");
  console.log("🔧 Creating component: Input");
  console.log("  ...(35 total Input variants)");
  console.log("[... continues for all 18 components ...]");
  console.log("📋 Organizing components by category...");
  console.log("✅ Components organized");
  console.log("🎉 Component library created! Total components: 313");
  console.log("```");

  await promptUser("\nPress Enter to continue...");
  await runDemo();
}

async function demoFigmaMigration() {
  console.log("\n🖼️  **Figma Visual Migration Demo**\n");
  
  console.log("This demo shows how to migrate Figma designs using visual analysis:");
  console.log("");

  // Create a sample demo image description
  console.log("**Example: Processing a Figma export**");
  console.log("```bash");
  console.log("deno run --allow-all figma-visual-migration.ts single design.png");
  console.log("```");
  console.log("");

  console.log("**Sample detection output:**");
  console.log("```");
  console.log("🔍 Analyzing image: design.png");
  console.log("✅ Detected 3 components");
  console.log("");
  console.log("Component 1: button");
  console.log("  • Text: 'Get Started'");
  console.log("  • Background: #3B82F6");
  console.log("  • Confidence: 95%");
  console.log("  • Mapped to: Button-primary-default");
  console.log("");
  console.log("Component 2: input");
  console.log("  • Placeholder: 'Enter your email'"); 
  console.log("  • Background: #FFFFFF");
  console.log("  • Confidence: 88%");
  console.log("  • Mapped to: Input-text-default");
  console.log("");
  console.log("Component 3: typography");
  console.log("  • Text: 'Welcome to our platform'");
  console.log("  • Font size: 24px");
  console.log("  • Confidence: 92%");
  console.log("  • Mapped to: Typography-h2-default");
  console.log("```");
  console.log("");

  console.log("**Generated MoonZoon code:**");
  console.log("```rust");
  console.log("use novyui::components::*;");
  console.log("use novyui::tokens::*;");
  console.log("");
  console.log("fn migrated_design() -> impl Element {");
  console.log("    Column::new()");
  console.log("        .s(Spacing::new(spacing::SIZE_4))");
  console.log("        .items([");
  console.log("            Typography::new()");
  console.log("                .text(\"Welcome to our platform\")");
  console.log("                .variant(TypographyVariant::H2)");
  console.log("                .s(Font::new().color(color::neutral_11())),");
  console.log("");
  console.log("            Input::new()");
  console.log("                .placeholder(\"Enter your email\")");
  console.log("                .input_type(InputType::Text)");
  console.log("                .s(Background::new().color(color::static_white())),");
  console.log("");
  console.log("            Button::new()");
  console.log("                .label(\"Get Started\")");
  console.log("                .variant(ButtonVariant::Primary)");
  console.log("                .s(Background::new().color(color::primary_7()))");
  console.log("        ])");
  console.log("}");
  console.log("```");

  await promptUser("\nPress Enter to continue...");
  await runDemo();
}

async function showExampleOutput() {
  console.log("\n📁 **Example Migration Output Structure**\n");
  
  const fileStructure = `
PenPot/
├── automation-result.json        # Full automation results
├── tokens/
│   ├── novyui-tokens.json       # Complete W3C token set  
│   ├── novyui-colors.json       # 98 color tokens
│   ├── novyui-typography.json   # Typography system
│   └── IMPORT_GUIDE.md          # PenPot import instructions
├── components/
│   ├── specifications/
│   │   ├── button-spec.json     # Button component spec
│   │   ├── input-spec.json      # Input component spec
│   │   └── [16 more specs...]
│   ├── state-matrices/
│   │   ├── button-states.json   # All Button states
│   │   └── [17 more matrices...]
│   ├── screenshots/
│   │   ├── Button-primary.png   # Auto-captured screenshots
│   │   └── [312 more images...]
│   └── component-summary.json   # Overall system summary
└── migration-output/
    ├── login-page.rs            # Generated MoonZoon code
    ├── login-page.json          # Migration analysis
    ├── login-page.md            # Migration guide
    ├── dashboard.rs             # Another migrated design
    └── [more migrations...]
`;

  console.log("**Generated file structure:**");
  console.log("```");
  console.log(fileStructure.trim());
  console.log("```");
  console.log("");

  console.log("**Key outputs:**");
  console.log("  • **JSON specs**: Machine-readable component definitions");
  console.log("  • **Rust code**: Ready-to-use MoonZoon implementations");
  console.log("  • **Screenshots**: Visual reference for each component state");
  console.log("  • **Migration guides**: Human-readable documentation");
  console.log("  • **Token files**: W3C-compliant design system");
  console.log("");

  console.log("**Usage in your project:**");
  console.log("```rust");
  console.log("// Copy generated code into your MoonZoon app");
  console.log("mod migrated_components {");
  console.log("    include!(\"../PenPot/migration-output/login-page.rs\");");
  console.log("}");
  console.log("");
  console.log("// Use in your app");
  console.log("fn app() -> impl Element {");
  console.log("    migrated_components::migrated_design()");
  console.log("}");
  console.log("```");

  await promptUser("\nPress Enter to continue...");
  await runDemo();
}

if (import.meta.main) {
  try {
    await runDemo();
  } catch (error) {
    console.error("❌ Demo failed:", error);
    Deno.exit(1);
  }
}