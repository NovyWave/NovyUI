# NovyUI → PenPot Design System Migration

This directory contains the complete migration of NovyUI design system from MoonZoon to PenPot format.

## Project Structure

```
PenPot/
├── README.md                    # This file
├── docs/                        # Migration documentation
│   ├── migration-plan.md        # Detailed migration plan
│   ├── penpot-format.md         # PenPot file format research
│   ├── component-mapping.md     # Component migration mapping
│   └── lessons-learned.md       # Migration insights
├── tokens/                      # W3C design token JSON files
│   ├── colors.json             # Color system tokens
│   ├── typography.json         # Typography tokens
│   ├── spacing.json            # Spacing and sizing tokens
│   └── shadows.json            # Shadow and elevation tokens
├── components/                  # Component specifications
│   ├── screenshots/            # Component screenshots from storybook
│   ├── specifications/         # Component spec sheets
│   └── state-matrices/         # Component state documentation
├── assets/                     # Exported design assets
│   ├── icons/                  # 77 Lucide icons in SVG format
│   ├── fonts/                  # Font files for PenPot
│   └── patterns/               # Background patterns
├── scripts/                    # Automation and tooling
│   ├── token-converter.js      # NovyUI → W3C token converter
│   ├── component-scraper.js    # Screenshot automation
│   └── mcp-integration.py      # PenPot MCP automation
└── output/                     # Generated PenPot files
    ├── novyui-design-system.penpot
    └── component-libraries/
```

## Migration Status

- [x] **Phase 1**: Foundation Setup (Directory structure, MCP setup)
- [ ] **Phase 2**: Design Token Migration (98 color tokens, typography, spacing)
- [ ] **Phase 3**: Component Documentation (18 components, 336+ variants)
- [ ] **Phase 4**: Manual PenPot Creation (Component library, variants)
- [ ] **Phase 5**: Automation & Integration (MCP automation, sync scripts)

## Key Features Being Migrated

### Design System Components (18 total)
- **Form Components**: Input, TextArea, Checkbox, Select, Switch, FileInput
- **Display Components**: Typography, Icon, Badge, Avatar, Card, Alert
- **Navigation Components**: Button, Accordion, TreeView, Kbd
- **Layout Components**: List, Pattern

### Design Tokens (15+ categories)
- **98 color tokens** (OKLCH color space, light/dark themes)
- **43 typography combinations** (3 fonts, multiple sizes/weights)
- **15 spacing tokens** (4px base unit)
- **Visual tokens** (radii, shadows, opacity, borders)
- **Animation tokens** (durations, easing functions)

### Assets
- **77 Lucide icons** in 4 sizes
- **3 font families** (Inter, FiraCode, Audiowide)
- **5 background patterns** (Hero Patterns)

## Tools & Technologies

- **PenPot MCP Server**: montevive/penpot-mcp for automation
- **W3C Design Tokens**: Standard-compliant token format
- **MoonZoon Source**: Primary implementation for component behavior
- **Live Storybook**: https://moonzoon-novyui-storybook.kavik.cz/

## Setup and Usage

### Prerequisites
- **Deno** (for TypeScript scripts) - Install from [deno.com](https://deno.com/)
- PenPot account or self-hosted instance  
- Git (for cloning and version control)

### Installation

1. **Install Deno** (if not already installed):
   ```bash
   # macOS/Linux
   curl -fsSL https://deno.land/install.sh | sh
   
   # Windows (PowerShell)
   irm https://deno.land/install.ps1 | iex
   
   # Or visit https://deno.com/ for other installation methods
   ```

2. **Navigate to PenPot scripts directory**:
   ```bash
   cd PenPot/scripts
   ```

3. **Configure PenPot credentials** (optional for automation):
   ```bash
   cp ../.env.template ../.env
   # Edit .env file with your PenPot credentials
   ```

### **🤖 Full Automation**

**Complete PenPot Migration (313 components):**
```bash
# Full automated migration pipeline
deno run --allow-all penpot-automation.ts full

# Or run individual steps:
deno run --allow-all mcp-server-setup.ts setup     # Setup MCP server
deno run --allow-all penpot-automation.ts tokens-only      # Import tokens only
deno run --allow-all penpot-automation.ts components-only  # Create components only
```

**Visual Figma Design Migration:**
```bash
# Migrate single Figma export image  
deno run --allow-all figma-visual-migration.ts single design.png

# Batch process directory of Figma exports
deno run --allow-all figma-visual-migration.ts batch ./figma-exports
```

**Interactive Demo:**
```bash
# Try the interactive automation demo
deno run --allow-all automation-demo.ts
```

### **📋 Manual Regeneration**

Individual script execution for development:

```bash
# Regenerate design tokens (W3C-compliant JSON files)
deno run --allow-read --allow-write token-converter.ts

# Regenerate component specifications and documentation
deno run --allow-read --allow-write component-analyzer.ts

# Setup PenPot integration and test connection
deno run --allow-read --allow-net --allow-env penpot-client.ts setup

# Create new PenPot project
deno run --allow-read --allow-net --allow-env penpot-client.ts create-project
```

### Usage

1. **View Migration Progress**: Check `docs/migration-plan.md`
2. **Import Tokens**: Use JSON files in `tokens/` directory
3. **Reference Components**: See `components/specifications/`
4. **Use Final Library**: Import `.penpot` files from `output/`

### File Organization
- `tokens/` - Generated W3C design token JSON files
- `components/` - Generated component specifications and documentation  
- `scripts/` - **Deno TypeScript automation tools** (regenerable)
- `docs/` - Migration guides and documentation
- `assets/` - Design assets (icons, fonts, patterns)
- `output/` - Final PenPot files

## Contributing

This migration serves as a template for other design system migrations to PenPot. Contributions to documentation, automation scripts, and PenPot community tools are welcome.