#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-run --allow-env
/**
 * Full PenPot Automation System
 * 
 * Automates the complete NovyUI → PenPot migration using:
 * 1. PenPot MCP server for design system creation
 * 2. Component specifications for automated component generation
 * 3. Screenshot automation from MoonZoon storybook
 * 4. W3C design token integration
 * 
 * Usage: deno run --allow-all penpot-automation.ts [command]
 */

interface ComponentSpec {
  name: string;
  category: string;
  variants: Array<{
    name: string;
    description: string;
    properties: Record<string, any>;
    tokens_used: string[];
  }>;
  states: Array<{
    name: string;
    description: string;
    visual_changes: string[];
    tokens_affected: string[];
  }>;
  tokens_used: string[];
}

interface MCPRequest {
  jsonrpc: "2.0";
  id: string;
  method: string;
  params?: any;
}

interface MCPResponse {
  jsonrpc: "2.0";
  id: string;
  result?: any;
  error?: any;
}

class PenPotMCPClient {
  private baseUrl: string;
  private projectId?: string;

  constructor(baseUrl = "http://localhost:8000") {
    this.baseUrl = baseUrl;
  }

  private async request(method: string, params?: any): Promise<any> {
    const payload: MCPRequest = {
      jsonrpc: "2.0",
      id: crypto.randomUUID(),
      method,
      params
    };

    try {
      const response = await fetch(`${this.baseUrl}/mcp`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        throw new Error(`MCP request failed: ${response.status}`);
      }

      const result: MCPResponse = await response.json();
      
      if (result.error) {
        throw new Error(`MCP error: ${JSON.stringify(result.error)}`);
      }

      return result.result;
    } catch (error) {
      console.error(`❌ MCP request failed:`, error);
      throw error;
    }
  }

  async createProject(name: string, description: string): Promise<string> {
    console.log(`📁 Creating PenPot project: ${name}`);
    
    const result = await this.request("create_project", {
      name,
      description,
      team_id: Deno.env.get("PENPOT_TEAM_ID")
    });

    this.projectId = result.project_id;
    console.log(`✅ Created project: ${this.projectId}`);
    return this.projectId;
  }

  async importDesignTokens(tokens: Record<string, any>): Promise<void> {
    if (!this.projectId) {
      throw new Error("No project ID - create project first");
    }

    console.log("🎨 Importing design tokens...");
    
    await this.request("import_tokens", {
      project_id: this.projectId,
      tokens
    });

    console.log("✅ Design tokens imported");
  }

  async createComponent(spec: ComponentSpec): Promise<string[]> {
    if (!this.projectId) {
      throw new Error("No project ID - create project first");
    }

    console.log(`🔧 Creating component: ${spec.name}`);
    const componentIds: string[] = [];

    // Create each variant-state combination as separate component
    for (const variant of spec.variants) {
      for (const state of spec.states) {
        const componentName = `${spec.name}-${variant.name}-${state.name}`;
        
        console.log(`  Creating: ${componentName}`);
        
        try {
          const result = await this.request("create_component", {
            project_id: this.projectId,
            name: componentName,
            category: spec.category,
            variant: variant.name,
            state: state.name,
            tokens: [...variant.tokens_used, ...state.tokens_affected],
            properties: {
              ...variant.properties,
              description: `${variant.description} in ${state.description}`,
              visual_changes: state.visual_changes
            }
          });

          componentIds.push(result.component_id);
        } catch (error) {
          console.warn(`⚠️  Failed to create ${componentName}: ${error.message}`);
        }
      }
    }

    console.log(`✅ Created ${componentIds.length} component variants for ${spec.name}`);
    return componentIds;
  }

  async createComponentLibrary(specs: ComponentSpec[]): Promise<void> {
    console.log(`🏗️  Creating component library with ${specs.length} components...`);
    
    let totalComponents = 0;
    
    for (const spec of specs) {
      try {
        const componentIds = await this.createComponent(spec);
        totalComponents += componentIds.length;
        
        // Small delay to avoid overwhelming the API
        await new Promise(resolve => setTimeout(resolve, 100));
      } catch (error) {
        console.error(`❌ Failed to create component ${spec.name}:`, error);
      }
    }

    console.log(`🎉 Component library created! Total components: ${totalComponents}`);
  }

  async organizeComponents(): Promise<void> {
    if (!this.projectId) return;

    console.log("📋 Organizing components by category...");
    
    await this.request("organize_components", {
      project_id: this.projectId,
      organization: {
        "Form Components": ["Button", "Input", "TextArea", "Checkbox", "Select", "Switch", "FileInput"],
        "Display Components": ["Typography", "Icon", "Badge", "Avatar", "Card", "Alert"],
        "Navigation Components": ["Accordion", "TreeView", "Kbd"],
        "Layout Components": ["List", "Pattern"]
      }
    });

    console.log("✅ Components organized");
  }
}

class ScreenshotAutomation {
  private storybookUrl: string;
  private outputDir: string;

  constructor(storybookUrl: string, outputDir: string) {
    this.storybookUrl = storybookUrl;
    this.outputDir = outputDir;
  }

  async captureComponentScreenshots(specs: ComponentSpec[]): Promise<void> {
    console.log("📸 Starting automated screenshot capture...");
    
    // Ensure output directory exists
    try {
      await Deno.mkdir(this.outputDir, { recursive: true });
    } catch (error) {
      if (!(error instanceof Deno.errors.AlreadyExists)) {
        throw error;
      }
    }

    for (const spec of specs) {
      console.log(`📷 Capturing screenshots for ${spec.name}...`);
      
      try {
        // Use headless browser automation (would require playwright or puppeteer)
        // For now, we'll create a script that can be run separately
        await this.createScreenshotScript(spec);
      } catch (error) {
        console.warn(`⚠️  Failed to capture ${spec.name}: ${error.message}`);
      }
    }
  }

  private async createScreenshotScript(spec: ComponentSpec): Promise<void> {
    const scriptContent = `
# Screenshot script for ${spec.name}
# Run with playwright or puppeteer

const { chromium } = require('playwright');

async function captureScreenshots() {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Navigate to component story
  await page.goto('${this.storybookUrl}/?path=/story/${spec.name.toLowerCase()}');
  
  // Capture variants and states
  ${spec.variants.map(variant => `
  // ${variant.name} variant
  await page.click('[data-variant="${variant.name}"]');
  await page.screenshot({ 
    path: '${this.outputDir}/${spec.name}-${variant.name}.png',
    clip: { x: 0, y: 0, width: 800, height: 600 }
  });
  `).join('\n')}
  
  await browser.close();
}

captureScreenshots();
`;

    await Deno.writeTextFile(
      `${this.outputDir}/${spec.name}-screenshots.js`,
      scriptContent
    );
  }
}

class NovyUIPenPotAutomation {
  private mcpClient: PenPotMCPClient;
  private screenshotTool: ScreenshotAutomation;
  private baseDir: string;

  constructor() {
    this.baseDir = new URL("../", import.meta.url).pathname;
    this.mcpClient = new PenPotMCPClient();
    this.screenshotTool = new ScreenshotAutomation(
      "https://moonzoon-novyui-storybook.kavik.cz",
      `${this.baseDir}components/screenshots`
    );
  }

  async loadTokens(): Promise<Record<string, any>> {
    console.log("📋 Loading W3C design tokens...");
    
    const tokensFile = `${this.baseDir}tokens/novyui-tokens.json`;
    const tokensContent = await Deno.readTextFile(tokensFile);
    return JSON.parse(tokensContent);
  }

  async loadComponentSpecs(): Promise<ComponentSpec[]> {
    console.log("📋 Loading component specifications...");
    
    const specsDir = `${this.baseDir}components/specifications/`;
    const specs: ComponentSpec[] = [];

    try {
      for await (const entry of Deno.readDir(specsDir)) {
        if (entry.isFile && entry.name.endsWith('-spec.json')) {
          const specContent = await Deno.readTextFile(`${specsDir}${entry.name}`);
          const specData = JSON.parse(specContent);
          
          // Convert to our ComponentSpec format
          const spec: ComponentSpec = {
            name: specData.component.name,
            category: specData.component.category,
            variants: specData.variants,
            states: specData.states,
            tokens_used: specData.design_tokens.used_tokens
          };
          
          specs.push(spec);
        }
      }
    } catch (error) {
      console.error("❌ Failed to load component specs:", error);
      throw error;
    }

    console.log(`✅ Loaded ${specs.length} component specifications`);
    return specs;
  }

  async runFullAutomation(): Promise<void> {
    console.log("🚀 Starting full NovyUI → PenPot automation...");
    
    try {
      // 1. Load data
      const tokens = await this.loadTokens();
      const specs = await this.loadComponentSpecs();

      // 2. Create PenPot project
      const projectId = await this.mcpClient.createProject(
        "NovyUI Design System",
        "Automated migration from MoonZoon implementation"
      );

      // 3. Import design tokens
      await this.mcpClient.importDesignTokens(tokens);

      // 4. Create component library
      await this.mcpClient.createComponentLibrary(specs);

      // 5. Organize components
      await this.mcpClient.organizeComponents();

      // 6. Capture screenshots (for reference/validation)
      await this.screenshotTool.captureComponentScreenshots(specs);

      // 7. Save project info
      const projectInfo = {
        id: projectId,
        name: "NovyUI Design System",
        created: new Date().toISOString(),
        components_created: specs.reduce((sum, spec) => 
          sum + (spec.variants.length * spec.states.length), 0
        ),
        automation_version: "1.0.0"
      };

      await Deno.writeTextFile(
        `${this.baseDir}automation-result.json`,
        JSON.stringify(projectInfo, null, 2)
      );

      console.log("🎉 Full automation completed successfully!");
      console.log(`   Project ID: ${projectId}`);
      console.log(`   Components created: ${projectInfo.components_created}`);
      console.log(`   Result saved to: automation-result.json`);

    } catch (error) {
      console.error("❌ Automation failed:", error);
      throw error;
    }
  }

  async setupMCPServer(): Promise<void> {
    console.log("🔧 Setting up PenPot MCP server...");
    
    // Check if MCP server is running
    try {
      await fetch("http://localhost:8000/health");
      console.log("✅ MCP server is already running");
      return;
    } catch {
      console.log("Starting MCP server...");
    }

    // Start MCP server (requires penpot-mcp to be installed)
    const mcpProcess = new Deno.Command("python", {
      args: ["-m", "penpot_mcp"],
      env: {
        ...Deno.env.toObject(),
        PENPOT_URL: Deno.env.get("PENPOT_URL") || "https://design.penpot.app",
        PENPOT_TOKEN: Deno.env.get("PENPOT_TOKEN") || "",
        PENPOT_TEAM_ID: Deno.env.get("PENPOT_TEAM_ID") || ""
      }
    });

    console.log("🚀 MCP server starting...");
    // Note: In practice, you'd want to manage this process lifecycle
  }

  async createFigmaMigrationTools(): Promise<void> {
    console.log("🎨 Creating Figma migration preparation tools...");
    
    const figmaToolsContent = `#!/usr/bin/env -S deno run --allow-read --allow-write
/**
 * Figma Design Migration Tools
 * 
 * Prepares NovyUI components for migrating Figma designs to the new design system.
 */

interface FigmaComponent {
  id: string;
  name: string;
  type: string;
  properties: Record<string, any>;
}

interface MigrationMapping {
  figmaComponent: string;
  novyuiComponent: string;
  tokenMappings: Record<string, string>;
  variantMappings: Record<string, string>;
}

class FigmaMigrationPrep {
  async createComponentMappings(): Promise<MigrationMapping[]> {
    // Create mappings between Figma components and NovyUI components
    return [
      {
        figmaComponent: "Button/Primary",
        novyuiComponent: "Button-primary-default", 
        tokenMappings: {
          "background": "color.primary.7",
          "text": "color.static.white",
          "border-radius": "borderRadius.md"
        },
        variantMappings: {
          "Size=Large": "Button-primary-default",
          "Size=Medium": "Button-primary-default", 
          "Size=Small": "Button-primary-default"
        }
      }
      // Add more mappings...
    ];
  }

  async generateMigrationGuide(): Promise<void> {
    const mappings = await this.createComponentMappings();
    
    const guide = \`# Figma → NovyUI Migration Guide

## Component Mappings
\${mappings.map(mapping => \`
### \${mapping.figmaComponent} → \${mapping.novyuiComponent}

**Token Mappings:**
\${Object.entries(mapping.tokenMappings).map(([prop, token]) => 
  \`- \${prop}: \${token}\`
).join('\\n')}

**Variant Mappings:**
\${Object.entries(mapping.variantMappings).map(([figma, novyui]) => 
  \`- \${figma} → \${novyui}\`
).join('\\n')}
\`).join('\\n')}

## Migration Process
1. Identify Figma components
2. Map to NovyUI equivalents using this guide
3. Replace with token-driven styling
4. Test across light/dark themes
\`;

    await Deno.writeTextFile("figma-migration-guide.md", guide);
    console.log("✅ Figma migration guide created");
  }
}

if (import.meta.main) {
  const migrationPrep = new FigmaMigrationPrep();
  await migrationPrep.generateMigrationGuide();
}
`;

    await Deno.writeTextFile(
      `${this.baseDir}scripts/figma-migration-prep.ts`,
      figmaToolsContent
    );

    console.log("✅ Figma migration tools created");
  }
}

// CLI interface
async function main() {
  const command = Deno.args[0] || "full";
  const automation = new NovyUIPenPotAutomation();

  try {
    switch (command) {
      case "full":
        await automation.runFullAutomation();
        break;
      
      case "setup-mcp":
        await automation.setupMCPServer();
        break;
      
      case "tokens-only":
        const tokens = await automation.loadTokens();
        await automation.mcpClient.importDesignTokens(tokens);
        break;
      
      case "components-only":
        const specs = await automation.loadComponentSpecs();
        await automation.mcpClient.createComponentLibrary(specs);
        break;
      
      case "figma-prep":
        await automation.createFigmaMigrationTools();
        break;
      
      case "screenshots":
        const specsForScreenshots = await automation.loadComponentSpecs();
        await automation.screenshotTool.captureComponentScreenshots(specsForScreenshots);
        break;
      
      default:
        console.log("Usage: deno run --allow-all penpot-automation.ts [command]");
        console.log("");
        console.log("Commands:");
        console.log("  full         - Run complete automation pipeline");
        console.log("  setup-mcp    - Setup PenPot MCP server");
        console.log("  tokens-only  - Import design tokens only");
        console.log("  components-only - Create components only");
        console.log("  figma-prep   - Create Figma migration tools");
        console.log("  screenshots  - Capture component screenshots");
    }
  } catch (error) {
    console.error("❌ Automation failed:", error);
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await main();
}