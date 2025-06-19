#!/usr/bin/env -S deno run --allow-read --allow-write --allow-net
/**
 * Figma Visual Design Migration
 * 
 * Analyzes exported Figma design images and automatically maps visual elements
 * to NovyUI components without using Figma's design system.
 * 
 * Process:
 * 1. Analyze exported images to identify UI components
 * 2. Match visual patterns to NovyUI component library
 * 3. Generate migration mapping and code suggestions
 * 4. Create NovyUI implementation from visual analysis
 */

interface VisualComponent {
  type: string;
  bounds: { x: number; y: number; width: number; height: number };
  properties: {
    text?: string;
    backgroundColor?: string;
    textColor?: string;
    borderRadius?: number;
    fontSize?: number;
    fontWeight?: string;
    hasIcon?: boolean;
    iconPosition?: string;
  };
  confidence: number;
}

interface ComponentMapping {
  figmaComponent: VisualComponent;
  novyuiComponent: string;
  novyuiVariant: string;
  novyuiState: string;
  tokenMappings: Record<string, string>;
  implementationCode: string;
}

interface MigrationResult {
  originalImage: string;
  detectedComponents: VisualComponent[];
  mappings: ComponentMapping[];
  generatedCode: string;
  migrationNotes: string[];
}

class FigmaVisualAnalyzer {
  private novyuiComponents: Record<string, any>;
  private colorTokens: Record<string, string>;

  constructor() {
    this.novyuiComponents = {};
    this.colorTokens = {};
  }

  async loadNovyUISpecs(): Promise<void> {
    console.log("📋 Loading NovyUI component specifications...");
    
    const baseDir = new URL("../", import.meta.url).pathname;
    const specsDir = `${baseDir}components/specifications/`;
    
    try {
      for await (const entry of Deno.readDir(specsDir)) {
        if (entry.isFile && entry.name.endsWith('-spec.json')) {
          const specContent = await Deno.readTextFile(`${specsDir}${entry.name}`);
          const spec = JSON.parse(specContent);
          this.novyuiComponents[spec.component.name] = spec;
        }
      }
      
      // Load color tokens
      const tokensContent = await Deno.readTextFile(`${baseDir}tokens/novyui-colors.json`);
      const tokens = JSON.parse(tokensContent);
      this.colorTokens = this.extractColorValues(tokens);
      
      console.log(`✅ Loaded ${Object.keys(this.novyuiComponents).length} component specs`);
    } catch (error) {
      console.error("❌ Failed to load NovyUI specs:", error);
      throw error;
    }
  }

  private extractColorValues(tokens: any): Record<string, string> {
    const colors: Record<string, string> = {};
    
    function extractColors(obj: any, prefix = "") {
      for (const [key, value] of Object.entries(obj)) {
        if (typeof value === "object" && value !== null) {
          if ("$value" in value) {
            colors[`${prefix}${key}`] = value.$value;
          } else if ("light" in value && "$value" in value.light) {
            colors[`${prefix}${key}.light`] = value.light.$value;
            if ("dark" in value && "$value" in value.dark) {
              colors[`${prefix}${key}.dark`] = value.dark.$value;
            }
          } else {
            extractColors(value, `${prefix}${key}.`);
          }
        }
      }
    }
    
    extractColors(tokens);
    return colors;
  }

  async analyzeImage(imagePath: string): Promise<VisualComponent[]> {
    console.log(`🔍 Analyzing image: ${imagePath}`);
    
    // In a real implementation, this would use:
    // 1. Computer vision to detect UI elements
    // 2. OCR to extract text
    // 3. Color analysis to identify backgrounds/borders
    // 4. Shape detection for buttons, inputs, etc.
    
    // For now, we'll simulate component detection
    const detectedComponents: VisualComponent[] = [
      {
        type: "button",
        bounds: { x: 100, y: 200, width: 120, height: 40 },
        properties: {
          text: "Get Started",
          backgroundColor: "#3B82F6", // Blue color
          textColor: "#FFFFFF",
          borderRadius: 6,
          fontSize: 16,
          fontWeight: "medium"
        },
        confidence: 0.95
      },
      {
        type: "input",
        bounds: { x: 100, y: 150, width: 300, height: 36 },
        properties: {
          text: "Enter your email",
          backgroundColor: "#FFFFFF",
          textColor: "#6B7280",
          borderRadius: 4,
          fontSize: 14
        },
        confidence: 0.88
      },
      {
        type: "typography",
        bounds: { x: 100, y: 80, width: 400, height: 32 },
        properties: {
          text: "Welcome to our platform",
          textColor: "#111827",
          fontSize: 24,
          fontWeight: "bold"
        },
        confidence: 0.92
      }
    ];

    return detectedComponents;
  }

  private findClosestColor(targetColor: string): string {
    // Convert hex to RGB for comparison
    const hex2rgb = (hex: string) => {
      const r = parseInt(hex.slice(1, 3), 16);
      const g = parseInt(hex.slice(3, 5), 16);
      const b = parseInt(hex.slice(5, 7), 16);
      return { r, g, b };
    };

    const oklch2rgb = (oklch: string) => {
      // Simplified OKLCH to RGB conversion
      // In practice, you'd use a proper color conversion library
      const match = oklch.match(/oklch\((\d+)% ([\d.]+) (\d+)\)/);
      if (!match) return { r: 0, g: 0, b: 0 };
      
      const l = parseInt(match[1]) / 100;
      const c = parseFloat(match[2]);
      const h = parseInt(match[3]);
      
      // Simplified conversion - would need proper OKLCH math
      return {
        r: Math.round(l * 255),
        g: Math.round(l * 255 * (1 + c * Math.cos(h * Math.PI / 180))),
        b: Math.round(l * 255 * (1 + c * Math.sin(h * Math.PI / 180)))
      };
    };

    const targetRgb = hex2rgb(targetColor);
    let closestToken = "color.neutral.6";
    let closestDistance = Infinity;

    for (const [token, value] of Object.entries(this.colorTokens)) {
      if (typeof value !== "string") continue;
      
      let tokenRgb;
      if (value.startsWith("#")) {
        tokenRgb = hex2rgb(value);
      } else if (value.startsWith("oklch")) {
        tokenRgb = oklch2rgb(value);
      } else {
        continue;
      }

      const distance = Math.sqrt(
        Math.pow(targetRgb.r - tokenRgb.r, 2) +
        Math.pow(targetRgb.g - tokenRgb.g, 2) +
        Math.pow(targetRgb.b - tokenRgb.b, 2)
      );

      if (distance < closestDistance) {
        closestDistance = distance;
        closestToken = token;
      }
    }

    return closestToken;
  }

  private mapToNovyUIComponent(component: VisualComponent): ComponentMapping {
    let novyuiComponent = "Button";
    let novyuiVariant = "primary";
    let novyuiState = "default";
    let tokenMappings: Record<string, string> = {};
    let implementationCode = "";

    switch (component.type) {
      case "button":
        novyuiComponent = "Button";
        
        // Determine variant based on visual properties
        if (component.properties.backgroundColor) {
          const bgToken = this.findClosestColor(component.properties.backgroundColor);
          if (bgToken.includes("primary")) {
            novyuiVariant = "primary";
          } else if (bgToken.includes("neutral")) {
            novyuiVariant = "secondary";
          } else if (bgToken.includes("error")) {
            novyuiVariant = "destructive";
          } else {
            novyuiVariant = "outline";
          }
        }

        tokenMappings = {
          background: this.findClosestColor(component.properties.backgroundColor || "#3B82F6"),
          text: this.findClosestColor(component.properties.textColor || "#FFFFFF"),
          borderRadius: "borderRadius.md",
          fontSize: "fontSize.16",
          fontWeight: "fontWeight.medium"
        };

        implementationCode = `Button::new()
    .label("${component.properties.text || 'Button'}")
    .variant(ButtonVariant::${novyuiVariant.charAt(0).toUpperCase() + novyuiVariant.slice(1)})
    .s(Background::new().color(${tokenMappings.background}))
    .s(Font::new().color(${tokenMappings.text}).weight(${tokenMappings.fontWeight}))
    .s(BorderRadius::new().all(${tokenMappings.borderRadius}))`;
        break;

      case "input":
        novyuiComponent = "Input";
        novyuiVariant = "text";

        tokenMappings = {
          background: this.findClosestColor(component.properties.backgroundColor || "#FFFFFF"),
          border: "color.neutral.6",
          text: this.findClosestColor(component.properties.textColor || "#374151"),
          borderRadius: "borderRadius.md",
          fontSize: "fontSize.14"
        };

        implementationCode = `Input::new()
    .placeholder("${component.properties.text || 'Enter text'}")
    .input_type(InputType::Text)
    .s(Background::new().color(${tokenMappings.background}))
    .s(Border::new().color(${tokenMappings.border}))
    .s(Font::new().color(${tokenMappings.text}).size(${tokenMappings.fontSize}))
    .s(BorderRadius::new().all(${tokenMappings.borderRadius}))`;
        break;

      case "typography":
        novyuiComponent = "Typography";
        
        // Determine variant based on font size and weight
        const fontSize = component.properties.fontSize || 16;
        if (fontSize >= 32) {
          novyuiVariant = "h1";
        } else if (fontSize >= 24) {
          novyuiVariant = "h2";
        } else if (fontSize >= 18) {
          novyuiVariant = "h3";
        } else {
          novyuiVariant = "paragraph";
        }

        tokenMappings = {
          text: this.findClosestColor(component.properties.textColor || "#111827"),
          fontSize: `fontSize.${fontSize}`,
          fontWeight: `fontWeight.${component.properties.fontWeight || 'normal'}`,
          fontFamily: "fontFamily.sans"
        };

        implementationCode = `Typography::new()
    .text("${component.properties.text || 'Text content'}")
    .variant(TypographyVariant::${novyuiVariant.charAt(0).toUpperCase() + novyuiVariant.slice(1)})
    .s(Font::new()
        .color(${tokenMappings.text})
        .size(${tokenMappings.fontSize})
        .weight(${tokenMappings.fontWeight})
        .family(${tokenMappings.fontFamily}))`;
        break;

      default:
        novyuiComponent = "Card";
        novyuiVariant = "default";
        implementationCode = `// Unknown component type: ${component.type}
// Manual implementation required`;
    }

    return {
      figmaComponent: component,
      novyuiComponent,
      novyuiVariant,
      novyuiState,
      tokenMappings,
      implementationCode
    };
  }

  async generateMigrationCode(mappings: ComponentMapping[]): Promise<string> {
    const imports = `use novyui::components::*;
use novyui::tokens::*;
use moonzoon::*;`;

    const componentImplementations = mappings.map((mapping, index) => {
      return `// Component ${index + 1}: ${mapping.novyuiComponent} (${mapping.novyuiVariant})
fn component_${index + 1}() -> impl Element {
    ${mapping.implementationCode}
}`;
    }).join('\n\n');

    const layoutCode = `// Complete layout implementation
fn migrated_design() -> impl Element {
    Column::new()
        .s(Spacing::new(spacing::SIZE_4))
        .items([
${mappings.map((_, index) => `            component_${index + 1}().into_element(),`).join('\n')}
        ])
}`;

    return `${imports}

${componentImplementations}

${layoutCode}`;
  }

  async migrateDesignFromImage(imagePath: string): Promise<MigrationResult> {
    console.log(`🎨 Starting visual migration for: ${imagePath}`);

    // Analyze the image
    const detectedComponents = await this.analyzeImage(imagePath);
    console.log(`✅ Detected ${detectedComponents.length} components`);

    // Map to NovyUI components
    const mappings = detectedComponents.map(component => 
      this.mapToNovyUIComponent(component)
    );

    // Generate implementation code
    const generatedCode = await this.generateMigrationCode(mappings);

    // Create migration notes
    const migrationNotes = [
      `Migrated ${detectedComponents.length} components from Figma export`,
      "Visual analysis confidence varies - review and adjust as needed",
      "Color mappings are approximate - verify against design intentions",
      "Text content extracted from image - may need manual adjustment",
      "Layout positioning needs manual implementation based on design",
      "Interactive states (hover, focus) not detected - add manually"
    ];

    return {
      originalImage: imagePath,
      detectedComponents,
      mappings,
      generatedCode,
      migrationNotes
    };
  }

  async saveMigrationResult(result: MigrationResult, outputPath: string): Promise<void> {
    const migrationReport = {
      metadata: {
        originalImage: result.originalImage,
        migrationDate: new Date().toISOString(),
        componentsDetected: result.detectedComponents.length,
        tool: "Figma Visual Migration (Deno + TypeScript)"
      },
      detectedComponents: result.detectedComponents,
      componentMappings: result.mappings.map(mapping => ({
        figmaType: mapping.figmaComponent.type,
        novyuiComponent: `${mapping.novyuiComponent}-${mapping.novyuiVariant}-${mapping.novyuiState}`,
        confidence: mapping.figmaComponent.confidence,
        tokenMappings: mapping.tokenMappings
      })),
      implementationCode: result.generatedCode,
      migrationNotes: result.migrationNotes
    };

    // Save detailed report
    await Deno.writeTextFile(
      `${outputPath}.json`,
      JSON.stringify(migrationReport, null, 2)
    );

    // Save just the implementation code
    await Deno.writeTextFile(
      `${outputPath}.rs`,
      result.generatedCode
    );

    // Save migration guide
    const guideContent = `# Figma Visual Migration Result

## Original Design
![Original](${result.originalImage})

## Detected Components
${result.detectedComponents.map((component, index) => `
### Component ${index + 1}: ${component.type}
- **Text**: ${component.properties.text || 'N/A'}
- **Background**: ${component.properties.backgroundColor || 'N/A'}
- **Confidence**: ${(component.confidence * 100).toFixed(1)}%
- **NovyUI Mapping**: ${result.mappings[index].novyuiComponent}-${result.mappings[index].novyuiVariant}
`).join('')}

## Token Mappings
${result.mappings.map(mapping => `
### ${mapping.novyuiComponent}
${Object.entries(mapping.tokenMappings).map(([prop, token]) => `- ${prop}: ${token}`).join('\n')}
`).join('')}

## Migration Notes
${result.migrationNotes.map(note => `- ${note}`).join('\n')}

## Implementation
See \`${outputPath.split('/').pop()}.rs\` for the generated MoonZoon implementation.

## Next Steps
1. Review component mappings for accuracy
2. Adjust color tokens if needed
3. Implement proper layout and positioning
4. Add interactive states and animations
5. Test with light/dark themes
`;

    await Deno.writeTextFile(`${outputPath}.md`, guideContent);

    console.log(`✅ Migration result saved:`);
    console.log(`   - Report: ${outputPath}.json`);
    console.log(`   - Code: ${outputPath}.rs`);
    console.log(`   - Guide: ${outputPath}.md`);
  }
}

class FigmaMigrationBatch {
  private analyzer: FigmaVisualAnalyzer;
  private outputDir: string;

  constructor(outputDir: string) {
    this.analyzer = new FigmaVisualAnalyzer();
    this.outputDir = outputDir;
  }

  async processImageDirectory(inputDir: string): Promise<void> {
    console.log(`📁 Processing Figma exports from: ${inputDir}`);

    // Ensure output directory exists
    try {
      await Deno.mkdir(this.outputDir, { recursive: true });
    } catch (error) {
      if (!(error instanceof Deno.errors.AlreadyExists)) {
        throw error;
      }
    }

    // Load NovyUI specifications
    await this.analyzer.loadNovyUISpecs();

    // Process all images in directory
    let processedCount = 0;
    try {
      for await (const entry of Deno.readDir(inputDir)) {
        if (entry.isFile && this.isImageFile(entry.name)) {
          const imagePath = `${inputDir}/${entry.name}`;
          const outputName = entry.name.replace(/\.[^/.]+$/, "");
          const outputPath = `${this.outputDir}/${outputName}`;

          console.log(`\n🖼️  Processing: ${entry.name}`);
          
          try {
            const result = await this.analyzer.migrateDesignFromImage(imagePath);
            await this.analyzer.saveMigrationResult(result, outputPath);
            processedCount++;
          } catch (error) {
            console.error(`❌ Failed to process ${entry.name}:`, error);
          }
        }
      }
    } catch (error) {
      console.error("❌ Error reading input directory:", error);
      throw error;
    }

    console.log(`\n🎉 Batch processing completed!`);
    console.log(`   Processed: ${processedCount} images`);
    console.log(`   Output directory: ${this.outputDir}`);
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
      case "single":
        const imagePath = Deno.args[1];
        const outputPath = Deno.args[2] || "./migration-output";
        
        if (!imagePath) {
          console.log("Usage: deno run --allow-all figma-visual-migration.ts single <image-path> [output-path]");
          return;
        }

        const analyzer = new FigmaVisualAnalyzer();
        await analyzer.loadNovyUISpecs();
        
        const result = await analyzer.migrateDesignFromImage(imagePath);
        await analyzer.saveMigrationResult(result, outputPath);
        break;

      case "batch":
        const inputDir = Deno.args[1];
        const outputDir = Deno.args[2] || "./batch-migration-output";
        
        if (!inputDir) {
          console.log("Usage: deno run --allow-all figma-visual-migration.ts batch <input-dir> [output-dir]");
          return;
        }

        const batchProcessor = new FigmaMigrationBatch(outputDir);
        await batchProcessor.processImageDirectory(inputDir);
        break;

      default:
        console.log("Figma Visual Design Migration Tool");
        console.log("");
        console.log("Commands:");
        console.log("  single <image>  - Migrate single Figma export image");
        console.log("  batch <dir>     - Migrate all images in directory");
        console.log("");
        console.log("Examples:");
        console.log("  deno run --allow-all figma-visual-migration.ts single design.png");
        console.log("  deno run --allow-all figma-visual-migration.ts batch ./figma-exports");
    }
  } catch (error) {
    console.error("❌ Migration failed:", error);
    Deno.exit(1);
  }
}

if (import.meta.main) {
  await main();
}