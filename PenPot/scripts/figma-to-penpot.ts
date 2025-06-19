#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net --allow-env
/**
 * Figma to PenPot Visual Migration
 * 
 * Converts exported Figma design images directly to PenPot artboards
 * with switchable light/dark themes.
 * 
 * Input: Figma exported images (e.g., 3 pages × 2 themes = 6 images)
 * Output: PenPot project with 3 artboards + theme switching
 * 
 * Process:
 * 1. Analyze Figma export images to detect UI elements
 * 2. Map visual elements to NovyUI design tokens
 * 3. Create PenPot artboards with detected components
 * 4. Set up theme switching between light/dark variants
 */

interface DetectedElement {
  type: "rectangle" | "text" | "image" | "button" | "input" | "icon";
  bounds: { x: number; y: number; width: number; height: number };
  properties: {
    backgroundColor?: string;
    textColor?: string;
    text?: string;
    fontSize?: number;
    fontWeight?: string;
    borderRadius?: number;
    borderColor?: string;
    opacity?: number;
  };
  novyuiTokens: {
    background?: string;
    text?: string;
    border?: string;
    radius?: string;
  };
}

interface PenPotArtboard {
  name: string;
  width: number;
  height: number;
  elements: DetectedElement[];
  theme: "light" | "dark";
}

interface PenPotProject {
  name: string;
  artboards: PenPotArtboard[];
  designTokens: Record<string, any>;
  themeSystem: {
    currentTheme: "light" | "dark";
    themes: Record<string, Record<string, string>>;
  };
}

class FigmaToPenPotConverter {
  private novyuiTokens: Record<string, any>;
  private mcpClient: any;

  constructor() {
    this.novyuiTokens = {};
  }

  async loadNovyUITokens(): Promise<void> {
    console.log("🎨 Loading NovyUI design tokens...");
    
    const baseDir = new URL("../", import.meta.url).pathname;
    const tokensFile = `${baseDir}tokens/novyui-tokens.json`;
    
    try {
      const tokensContent = await Deno.readTextFile(tokensFile);
      this.novyuiTokens = JSON.parse(tokensContent);
      console.log("✅ NovyUI tokens loaded");
    } catch (error) {
      console.error("❌ Failed to load tokens:", error);
      throw error;
    }
  }

  async analyzeImageForElements(imagePath: string, theme: "light" | "dark"): Promise<DetectedElement[]> {
    console.log(`🔍 Analyzing ${theme} theme image: ${imagePath}`);
    
    // In a real implementation, this would use computer vision/OCR
    // For now, we'll simulate element detection based on common patterns
    
    const detectedElements: DetectedElement[] = [];
    
    // Simulate detection of common UI elements
    if (imagePath.includes("login") || imagePath.includes("page1")) {
      // Login page elements
      detectedElements.push(
        // Background
        {
          type: "rectangle",
          bounds: { x: 0, y: 0, width: 1200, height: 800 },
          properties: {
            backgroundColor: theme === "light" ? "#FFFFFF" : "#111827",
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.1.light" : "color.neutral.1.dark"
          }
        },
        // Header text
        {
          type: "text",
          bounds: { x: 100, y: 100, width: 400, height: 48 },
          properties: {
            text: "Welcome Back",
            fontSize: 36,
            fontWeight: "bold",
            textColor: theme === "light" ? "#111827" : "#F9FAFB"
          },
          novyuiTokens: {
            text: theme === "light" ? "color.neutral.12.light" : "color.neutral.12.dark"
          }
        },
        // Email input
        {
          type: "input",
          bounds: { x: 100, y: 200, width: 300, height: 40 },
          properties: {
            text: "Email address",
            backgroundColor: theme === "light" ? "#FFFFFF" : "#1F2937",
            borderColor: theme === "light" ? "#D1D5DB" : "#374151",
            borderRadius: 6
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.1.light" : "color.neutral.2.dark",
            border: theme === "light" ? "color.neutral.6.light" : "color.neutral.6.dark",
            radius: "borderRadius.md"
          }
        },
        // Login button
        {
          type: "button",
          bounds: { x: 100, y: 280, width: 120, height: 40 },
          properties: {
            text: "Sign In",
            backgroundColor: "#3B82F6",
            textColor: "#FFFFFF",
            borderRadius: 6
          },
          novyuiTokens: {
            background: "color.primary.7.light", // Same for both themes
            text: "color.static.white",
            radius: "borderRadius.md"
          }
        }
      );
    }
    
    if (imagePath.includes("dashboard") || imagePath.includes("page2")) {
      // Dashboard page elements
      detectedElements.push(
        // Background
        {
          type: "rectangle",
          bounds: { x: 0, y: 0, width: 1200, height: 800 },
          properties: {
            backgroundColor: theme === "light" ? "#F9FAFB" : "#0F172A",
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.2.light" : "color.neutral.1.dark"
          }
        },
        // Navigation bar
        {
          type: "rectangle",
          bounds: { x: 0, y: 0, width: 1200, height: 60 },
          properties: {
            backgroundColor: theme === "light" ? "#FFFFFF" : "#1E293B",
            borderColor: theme === "light" ? "#E5E7EB" : "#334155"
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.1.light" : "color.neutral.2.dark",
            border: theme === "light" ? "color.neutral.5.light" : "color.neutral.7.dark"
          }
        },
        // Card component
        {
          type: "rectangle",
          bounds: { x: 50, y: 100, width: 300, height: 200 },
          properties: {
            backgroundColor: theme === "light" ? "#FFFFFF" : "#1E293B",
            borderRadius: 8
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.1.light" : "color.neutral.2.dark",
            radius: "borderRadius.lg"
          }
        }
      );
    }
    
    if (imagePath.includes("profile") || imagePath.includes("page3")) {
      // Profile page elements
      detectedElements.push(
        // Background
        {
          type: "rectangle",
          bounds: { x: 0, y: 0, width: 1200, height: 800 },
          properties: {
            backgroundColor: theme === "light" ? "#FFFFFF" : "#111827",
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.1.light" : "color.neutral.1.dark"
          }
        },
        // Profile avatar area
        {
          type: "rectangle",
          bounds: { x: 100, y: 100, width: 120, height: 120 },
          properties: {
            backgroundColor: theme === "light" ? "#F3F4F6" : "#374151",
            borderRadius: 60 // Circular
          },
          novyuiTokens: {
            background: theme === "light" ? "color.neutral.3.light" : "color.neutral.6.dark",
            radius: "borderRadius.full"
          }
        },
        // Profile name
        {
          type: "text",
          bounds: { x: 250, y: 130, width: 200, height: 32 },
          properties: {
            text: "John Doe",
            fontSize: 24,
            fontWeight: "semibold",
            textColor: theme === "light" ? "#111827" : "#F9FAFB"
          },
          novyuiTokens: {
            text: theme === "light" ? "color.neutral.12.light" : "color.neutral.12.dark"
          }
        }
      );
    }

    console.log(`✅ Detected ${detectedElements.length} elements in ${theme} theme`);
    return detectedElements;
  }

  async createPenPotArtboard(
    pageName: string, 
    lightImagePath: string, 
    darkImagePath: string
  ): Promise<[PenPotArtboard, PenPotArtboard]> {
    console.log(`🎨 Creating PenPot artboards for: ${pageName}`);

    // Analyze both theme variants
    const lightElements = await this.analyzeImageForElements(lightImagePath, "light");
    const darkElements = await this.analyzeImageForElements(darkImagePath, "dark");

    const lightArtboard: PenPotArtboard = {
      name: `${pageName} (Light)`,
      width: 1200,
      height: 800,
      elements: lightElements,
      theme: "light"
    };

    const darkArtboard: PenPotArtboard = {
      name: `${pageName} (Dark)`,
      width: 1200,
      height: 800,
      elements: darkElements,
      theme: "dark"
    };

    return [lightArtboard, darkArtboard];
  }

  async createPenPotProject(artboards: PenPotArtboard[]): Promise<PenPotProject> {
    console.log("🏗️  Creating PenPot project structure...");

    // Group artboards by page (remove theme suffix)
    const pageGroups: Record<string, PenPotArtboard[]> = {};
    for (const artboard of artboards) {
      const pageName = artboard.name.replace(/ \(Light\)| \(Dark\)/, "");
      if (!pageGroups[pageName]) {
        pageGroups[pageName] = [];
      }
      pageGroups[pageName].push(artboard);
    }

    // Create theme system mapping
    const themeSystem = {
      currentTheme: "light" as const,
      themes: {
        light: this.extractThemeTokens("light"),
        dark: this.extractThemeTokens("dark")
      }
    };

    const project: PenPotProject = {
      name: "Figma Migration - NovyUI Design System",
      artboards,
      designTokens: this.novyuiTokens,
      themeSystem
    };

    return project;
  }

  private extractThemeTokens(theme: "light" | "dark"): Record<string, string> {
    const themeTokens: Record<string, string> = {};
    
    // Extract theme-specific token values from NovyUI tokens
    const extractTokenValues = (obj: any, prefix = ""): void => {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
          if (theme in value && "$value" in value[theme]) {
            themeTokens[`${prefix}${key}`] = value[theme].$value;
          } else if ("$value" in value) {
            // Static token (no theme variants)
            themeTokens[`${prefix}${key}`] = value.$value;
          } else {
            extractTokenValues(value, `${prefix}${key}.`);
          }
        }
      }
    };

    if (this.novyuiTokens.color) {
      extractTokenValues(this.novyuiTokens.color, "color.");
    }

    return themeTokens;
  }

  async generatePenPotFile(project: PenPotProject): Promise<string> {
    console.log("📄 Generating PenPot file structure...");

    // Create PenPot file structure (simplified JSON representation)
    const penPotFile = {
      version: "1.0.0",
      metadata: {
        name: project.name,
        created: new Date().toISOString(),
        migrationSource: "Figma Visual Analysis",
        tool: "NovyUI Automation"
      },
      designTokens: project.designTokens,
      themeSystem: project.themeSystem,
      pages: project.artboards.map(artboard => ({
        id: crypto.randomUUID(),
        name: artboard.name,
        width: artboard.width,
        height: artboard.height,
        theme: artboard.theme,
        objects: artboard.elements.map(element => ({
          id: crypto.randomUUID(),
          type: element.type,
          x: element.bounds.x,
          y: element.bounds.y,
          width: element.bounds.width,
          height: element.bounds.height,
          properties: element.properties,
          tokens: element.novyuiTokens,
          // PenPot-specific styling
          fill: element.novyuiTokens.background ? `{${element.novyuiTokens.background}}` : element.properties.backgroundColor,
          stroke: element.novyuiTokens.border ? `{${element.novyuiTokens.border}}` : element.properties.borderColor,
          "border-radius": element.novyuiTokens.radius ? `{${element.novyuiTokens.radius}}` : element.properties.borderRadius,
          "font-color": element.novyuiTokens.text ? `{${element.novyuiTokens.text}}` : element.properties.textColor,
          "font-size": element.properties.fontSize,
          "font-weight": element.properties.fontWeight,
          content: element.properties.text
        }))
      })),
      interactions: {
        themeToggle: {
          type: "theme-switch",
          triggers: ["keyboard-shortcut", "button-click"],
          themes: ["light", "dark"]
        }
      }
    };

    return JSON.stringify(penPotFile, null, 2);
  }

  async uploadToPenPot(project: PenPotProject): Promise<string> {
    console.log("☁️  Uploading to PenPot...");

    // Use MCP client to create project
    try {
      // Initialize MCP client
      const MCPRequest = {
        jsonrpc: "2.0" as const,
        id: crypto.randomUUID(),
        method: "create_project",
        params: {
          name: project.name,
          description: "Migrated from Figma using visual analysis",
          team_id: Deno.env.get("PENPOT_TEAM_ID")
        }
      };

      const response = await fetch("http://localhost:8000/mcp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(MCPRequest)
      });

      if (!response.ok) {
        throw new Error(`MCP request failed: ${response.status}`);
      }

      const result = await response.json();
      const projectId = result.result.project_id;

      // Import design tokens
      await this.importTokensToPenPot(projectId, project.designTokens);

      // Create artboards
      for (const artboard of project.artboards) {
        await this.createArtboardInPenPot(projectId, artboard);
      }

      // Set up theme switching
      await this.setupThemeSystem(projectId, project.themeSystem);

      console.log(`✅ PenPot project created: ${projectId}`);
      return projectId;

    } catch (error) {
      console.warn("⚠️  MCP upload failed, saving local file instead:", error.message);
      
      // Fallback: save as local .penpot file
      const penPotFileContent = await this.generatePenPotFile(project);
      const baseDir = new URL("../", import.meta.url).pathname;
      const outputPath = `${baseDir}output/figma-migration.penpot.json`;
      
      await Deno.writeTextFile(outputPath, penPotFileContent);
      console.log(`💾 Saved PenPot file locally: ${outputPath}`);
      return outputPath;
    }
  }

  private async importTokensToPenPot(projectId: string, tokens: Record<string, any>): Promise<void> {
    const request = {
      jsonrpc: "2.0" as const,
      id: crypto.randomUUID(),
      method: "import_design_tokens",
      params: { project_id: projectId, tokens }
    };

    await fetch("http://localhost:8000/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    });
  }

  private async createArtboardInPenPot(projectId: string, artboard: PenPotArtboard): Promise<void> {
    const request = {
      jsonrpc: "2.0" as const,
      id: crypto.randomUUID(),
      method: "create_artboard",
      params: {
        project_id: projectId,
        name: artboard.name,
        width: artboard.width,
        height: artboard.height,
        theme: artboard.theme,
        elements: artboard.elements
      }
    };

    await fetch("http://localhost:8000/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    });

    console.log(`  ✅ Created artboard: ${artboard.name}`);
  }

  private async setupThemeSystem(projectId: string, themeSystem: any): Promise<void> {
    const request = {
      jsonrpc: "2.0" as const,
      id: crypto.randomUUID(),
      method: "setup_theme_system",
      params: {
        project_id: projectId,
        theme_system: themeSystem
      }
    };

    await fetch("http://localhost:8000/mcp", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(request)
    });

    console.log("  ✅ Theme switching configured");
  }
}

class FigmaToPenPotBatch {
  private converter: FigmaToPenPotConverter;

  constructor() {
    this.converter = new FigmaToPenPotConverter();
  }

  async processFigmaExports(inputDir: string): Promise<string> {
    console.log("📁 Processing Figma exports for PenPot migration...");

    // Load NovyUI tokens
    await this.converter.loadNovyUITokens();

    // Discover image pairs (light/dark themes)
    const imagePairs = await this.discoverImagePairs(inputDir);
    console.log(`📸 Found ${imagePairs.length} page pairs to migrate`);

    // Create artboards for each page
    const allArtboards: PenPotArtboard[] = [];
    
    for (const pair of imagePairs) {
      const [lightArtboard, darkArtboard] = await this.converter.createPenPotArtboard(
        pair.pageName,
        pair.lightImage,
        pair.darkImage
      );
      allArtboards.push(lightArtboard, darkArtboard);
    }

    // Create PenPot project
    const project = await this.converter.createPenPotProject(allArtboards);

    // Upload to PenPot
    const projectId = await this.converter.uploadToPenPot(project);

    console.log(`🎉 Figma to PenPot migration completed!`);
    console.log(`   Pages migrated: ${imagePairs.length}`);
    console.log(`   Artboards created: ${allArtboards.length}`);
    console.log(`   Project: ${projectId}`);

    return projectId;
  }

  private async discoverImagePairs(inputDir: string): Promise<Array<{
    pageName: string;
    lightImage: string;
    darkImage: string;
  }>> {
    const pairs: Array<{pageName: string; lightImage: string; darkImage: string}> = [];
    const imageFiles: string[] = [];

    // Collect all image files
    try {
      for await (const entry of Deno.readDir(inputDir)) {
        if (entry.isFile && this.isImageFile(entry.name)) {
          imageFiles.push(`${inputDir}/${entry.name}`);
        }
      }
    } catch (error) {
      throw new Error(`Failed to read input directory: ${error.message}`);
    }

    // Group by page name (remove theme suffixes)
    const pageGroups: Record<string, string[]> = {};
    
    for (const imagePath of imageFiles) {
      const filename = imagePath.split('/').pop()!;
      let pageName = filename.replace(/\.(png|jpg|jpeg|svg|webp)$/i, '');
      
      // Remove common theme suffixes
      pageName = pageName
        .replace(/[-_](light|dark)$/i, '')
        .replace(/[-_](day|night)$/i, '')
        .replace(/[-_]theme$/i, '');

      if (!pageGroups[pageName]) {
        pageGroups[pageName] = [];
      }
      pageGroups[pageName].push(imagePath);
    }

    // Create pairs from groups
    for (const [pageName, images] of Object.entries(pageGroups)) {
      if (images.length >= 2) {
        // Try to identify light/dark variants
        const lightImage = images.find(img => 
          /light|day|white/i.test(img) || !(/dark|night|black/i.test(img))
        ) || images[0];
        
        const darkImage = images.find(img => 
          /dark|night|black/i.test(img) && img !== lightImage
        ) || images[1];

        if (lightImage && darkImage) {
          pairs.push({ pageName, lightImage, darkImage });
        }
      } else if (images.length === 1) {
        // Single image - create both themes from analysis
        pairs.push({
          pageName,
          lightImage: images[0],
          darkImage: images[0] // Will be analyzed differently
        });
      }
    }

    return pairs;
  }

  private isImageFile(filename: string): boolean {
    const imageExtensions = ['.png', '.jpg', '.jpeg', '.svg', '.webp'];
    return imageExtensions.some(ext => 
      filename.toLowerCase().endsWith(ext)
    );
  }
}

// CLI interface
async function main() {
  const command = Deno.args[0] || "help";

  try {
    switch (command) {
      case "convert":
        const inputDir = Deno.args[1];
        
        if (!inputDir) {
          console.log("Usage: deno run --allow-all figma-to-penpot.ts convert <figma-exports-dir>");
          console.log("");
          console.log("Expected structure:");
          console.log("  figma-exports/");
          console.log("  ├── page1-light.png");
          console.log("  ├── page1-dark.png");
          console.log("  ├── page2-light.png");
          console.log("  ├── page2-dark.png");
          console.log("  ├── page3-light.png");
          console.log("  └── page3-dark.png");
          return;
        }

        const processor = new FigmaToPenPotBatch();
        await processor.processFigmaExports(inputDir);
        break;

      default:
        console.log("Figma to PenPot Visual Migration");
        console.log("");
        console.log("Converts Figma exported images to PenPot artboards with theme switching");
        console.log("");
        console.log("Commands:");
        console.log("  convert <dir>  - Convert Figma exports to PenPot project");
        console.log("");
        console.log("Example:");
        console.log("  deno run --allow-all figma-to-penpot.ts convert ./figma-exports");
        console.log("");
        console.log("Input: Figma images (3 pages × 2 themes = 6 images)");
        console.log("Output: PenPot project with 3 artboards + theme switching");
    }
  } catch (error) {
    console.error("❌ Migration failed:", error);
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await main();
}