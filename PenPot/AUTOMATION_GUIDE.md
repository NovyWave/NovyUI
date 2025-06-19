# NovyUI PenPot Automation Guide

Complete automation system for migrating NovyUI design system to PenPot and converting Figma designs using visual analysis.

## 🎯 **Automation Capabilities**

### **1. Full PenPot Migration Automation**
- **313 components** automatically created from specifications
- **W3C design tokens** imported with theme support
- **Component organization** by category and complexity
- **Screenshot capture** from live MoonZoon storybook

### **2. Visual Figma to PenPot Migration**
- **Image analysis** of exported Figma designs (6 images → 3 pages)
- **Component detection** using visual patterns
- **PenPot artboard creation** with switchable themes
- **Design token mapping** to NovyUI system

## 🛠️ **Tools Overview**

```
PenPot/scripts/
├── penpot-automation.ts          # Main automation orchestrator
├── mcp-server-setup.ts           # PenPot MCP server management
├── figma-visual-migration.ts     # Visual Figma design migration
├── token-converter.ts            # W3C design token generation
├── component-analyzer.ts         # Component specification creation
└── penpot-client.ts             # Direct PenPot API client
```

## 🚀 **Quick Start**

### **Prerequisites**
```bash
# Install Deno
curl -fsSL https://deno.land/install.sh | sh

# Install Python 3.8+ (for MCP server)
python3 --version

# Set up environment variables
cp PenPot/.env.template PenPot/.env
# Edit .env with your PenPot credentials
```

### **1. Complete PenPot Automation**
```bash
cd PenPot/scripts

# Setup MCP server environment
deno run --allow-all mcp-server-setup.ts setup

# Generate all specifications and tokens
deno run --allow-read --allow-write token-converter.ts
deno run --allow-read --allow-write component-analyzer.ts

# Start MCP server
deno run --allow-all mcp-server-setup.ts start &

# Run full automation
deno run --allow-all penpot-automation.ts full
```

### **2. Visual Figma Migration**
```bash
# Single image migration
deno run --allow-all figma-visual-migration.ts single design.png output-name

# Batch process directory of Figma exports
deno run --allow-all figma-visual-migration.ts batch ./figma-exports ./migration-output
```

## 📋 **Detailed Workflows**

### **PenPot Migration Workflow**

#### **Step 1: Environment Setup**
```bash
# Configure PenPot credentials
export PENPOT_URL="https://design.penpot.app"
export PENPOT_TOKEN="your_token_here"
export PENPOT_TEAM_ID="your_team_id_here"

# Or use .env file
echo "PENPOT_TOKEN=your_token" >> PenPot/.env
echo "PENPOT_TEAM_ID=your_team_id" >> PenPot/.env
```

#### **Step 2: Generate Specifications**
```bash
# Convert NovyUI tokens to W3C format
deno run --allow-read --allow-write token-converter.ts
# Output: 10 JSON files in /tokens/

# Analyze components and create specifications  
deno run --allow-read --allow-write component-analyzer.ts
# Output: 36 specification files in /components/
```

#### **Step 3: Setup MCP Server**
```bash
# Full setup (creates Python venv, installs packages)
deno run --allow-all mcp-server-setup.ts setup

# Start server
deno run --allow-all mcp-server-setup.ts start

# Test connection
deno run --allow-all mcp-server-setup.ts test
```

#### **Step 4: Run Automation**
```bash
# Complete automation pipeline
deno run --allow-all penpot-automation.ts full

# Or run individual steps:
deno run --allow-all penpot-automation.ts tokens-only      # Import tokens
deno run --allow-all penpot-automation.ts components-only  # Create components
deno run --allow-all penpot-automation.ts screenshots      # Capture screenshots
```

### **Figma Visual Migration Workflow**

#### **Step 1: Export Figma Designs**
1. Open your Figma design
2. Select frames/components to migrate
3. Export as PNG/JPG (high resolution recommended)
4. Save to a directory (e.g., `./figma-exports/`)

#### **Step 2: Run Visual Analysis**
```bash
# Single image analysis
deno run --allow-all figma-visual-migration.ts single design.png

# Batch process multiple exports
deno run --allow-all figma-visual-migration.ts batch ./figma-exports
```

#### **Step 3: Review Generated Code**
The tool generates:
- **`.rs` files**: MoonZoon implementation code
- **`.json` files**: Detailed analysis reports
- **`.md` files**: Migration guides with mappings

#### **Step 4: Integrate into Your Project**
```rust
// Example generated code
use novyui::components::*;
use novyui::tokens::*;

fn migrated_component() -> impl Element {
    Button::new()
        .label("Get Started")
        .variant(ButtonVariant::Primary)
        .s(Background::new().color(color::primary_7()))
        .s(Font::new().color(color::static_white()))
}
```

## 🔧 **Advanced Configuration**

### **MCP Server Configuration**
```typescript
// Custom MCP server settings
const config = {
  python_path: "python3",
  mcp_package: "penpot-mcp==0.1.1", 
  server_port: 8000,
  penpot_url: "https://design.penpot.app"
};
```

### **Visual Analysis Tuning**
```typescript
// Adjust component detection confidence
const detectionSettings = {
  minConfidence: 0.7,        // Minimum confidence for component detection
  colorTolerance: 30,        // RGB color matching tolerance
  fontSizeRounding: 2,       // Round font sizes to nearest N pixels
  borderRadiusSnap: [0, 4, 8, 16]  // Snap to common radius values
};
```

### **Token Mapping Customization**
```typescript
// Custom color mapping rules
const colorMappings = {
  "#3B82F6": "color.primary.7",    // Blue -> Primary
  "#EF4444": "color.error.7",      // Red -> Error  
  "#10B981": "color.success.7",    // Green -> Success
  "#F59E0B": "color.warning.7"     // Yellow -> Warning
};
```

## 📊 **Automation Results**

### **PenPot Migration Output**
- **✅ 313 components** created (18 base × variants × states)
- **✅ 98 color tokens** imported with light/dark themes
- **✅ 43 typography combinations** configured
- **✅ Component organization** by categories
- **✅ Token-driven styling** throughout

### **Figma Migration Output**
For each processed image:
```
design-name.png → 
├── design-name.rs          # MoonZoon implementation
├── design-name.json        # Detailed analysis report
└── design-name.md          # Migration guide
```

## 🎯 **Best Practices**

### **PenPot Automation**
1. **Test MCP connection** before running full automation
2. **Start small** - test with single components first
3. **Monitor API limits** - add delays if needed
4. **Backup projects** before bulk operations
5. **Verify token imports** work correctly

### **Figma Migration**
1. **High-resolution exports** improve detection accuracy
2. **Clean designs** with clear component boundaries work best
3. **Review generated mappings** - visual analysis isn't perfect
4. **Test with simple designs** before complex layouts
5. **Manual refinement** often needed for interactive states

## 🚨 **Troubleshooting**

### **Common PenPot Issues**

#### **MCP Server Won't Start**
```bash
# Check Python installation
python3 --version

# Recreate virtual environment
rm -rf PenPot/mcp-env
deno run --allow-all mcp-server-setup.ts setup

# Check environment variables
deno run --allow-all mcp-server-setup.ts test
```

#### **Token Import Fails**
```bash
# Validate token format
deno run --allow-read --allow-write token-converter.ts

# Check PenPot supports OKLCH colors
# May need to convert to RGB/HSL fallbacks
```

#### **Component Creation Errors**
```bash
# Test with single component
deno run --allow-all penpot-automation.ts components-only

# Check API rate limits
# Add delays between requests
```

### **Common Figma Migration Issues**

#### **Poor Component Detection**
- **Solution**: Use higher resolution exports
- **Solution**: Simplify design layouts  
- **Solution**: Adjust confidence thresholds

#### **Incorrect Color Mapping**
- **Solution**: Review generated token mappings
- **Solution**: Add custom color rules
- **Solution**: Manual color adjustment

#### **Missing Interactive States**
- **Solution**: Visual analysis can't detect hover/focus states
- **Solution**: Manually add state variations
- **Solution**: Reference NovyUI component specs

## 📈 **Performance & Scaling**

### **PenPot Automation Performance**
- **Component creation**: ~100ms per component
- **Token import**: ~5 seconds for full set
- **Screenshot capture**: ~30 seconds for all components
- **Total automation time**: ~10-15 minutes for complete system

### **Figma Migration Performance**
- **Single image analysis**: ~2-5 seconds
- **Batch processing**: ~30 images/minute
- **Code generation**: <1 second per component
- **Memory usage**: ~50MB per high-res image

## 🔮 **Future Enhancements**

### **Planned Improvements**
1. **Computer vision upgrades** for better component detection
2. **Layout analysis** to maintain spatial relationships
3. **Animation detection** from Figma prototypes
4. **Real-time preview** of migrated components
5. **Interactive state inference** from design patterns

### **Integration Opportunities**
1. **CI/CD integration** for automated design updates
2. **Figma plugin** for direct export to NovyUI
3. **VS Code extension** for component code generation
4. **Design system sync** between code and PenPot

## 📝 **Summary**

The NovyUI PenPot automation system provides:

**✅ Complete PenPot Migration**
- Automated component library creation
- Token-driven design system
- Professional design collaboration tools

**✅ Visual Figma Migration**  
- Image-based component detection
- Automatic NovyUI mapping
- Generated MoonZoon code

**✅ Scalable Workflows**
- Batch processing capabilities
- Configurable automation
- Comprehensive documentation

This automation eliminates manual work and ensures consistency between design and code implementations.