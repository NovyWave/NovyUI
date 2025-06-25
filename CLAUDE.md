# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**NovyUI** is a multi-framework design system providing consistent, accessible UI components across Rust/MoonZoon, Vue/TypeScript, and future Boon implementations. The project is currently migrating from Vue to MoonZoon as the primary implementation.

### Key Architecture Components
- **Token-based design system**: 15+ design token categories (colors, spacing, typography, etc.)
- **Multi-framework support**: Consistent API across different implementation languages
- **Accessibility-first**: WCAG compliance built into all components
- **Production usage**: Real-world usage in [NovyWave](https://github.com/NovyWave/NovyWave) Tauri desktop app

### Live Implementations
- **MoonZoon (Rust)**: [moonzoon-novyui-storybook.kavik.cz](https://moonzoon-novyui-storybook.kavik.cz/) - Primary implementation
- **Vue (TypeScript)**: [vue-novyui-storybook.kavik.cz](https://vue-novyui-storybook.kavik.cz/) - Legacy implementation

## Development Commands

### PenPot Plugin Development
```bash
# Navigate to plugin directory
cd PenPot/novyui-plugin

# Start dev server in background (ALWAYS run in background!)
npm run dev &

# Build plugin with changes
npm run build

# Watch mode for continuous development
npm run build:watch &

# Plugin URL for PenPot installation
# https://localhost:4400/manifest.json

# CRITICAL: Plugin development workflow - FIXED!
# ✅ SOLUTION: Simplified development with proper auto-recompilation

# 🎯 Start development (auto-recompiles on file changes):
cd /home/martinkavik/repos/NovyUI/PenPot/novyui-plugin
npm run dev

# This now runs: `vite build --watch`
# - Compiles TypeScript automatically
# - Watches for file changes and rebuilds instantly  
# - Outputs to dist/plugin.js (where manifest.json expects it)
# - No more conflicts between tsc and vite!

# ✅ Manifest URL: https://localhost:4400/manifest.json
# ✅ Plugin loads from: dist/plugin.js (auto-updated on changes)

# 🔧 Type checking (optional, for catching errors):
npm run type-check

# 🏗️ Production build:
npm run build

# TypeScript will catch API errors during build
npm run build  # Catches non-existent methods like penpot.createFrame()

# NEVER assume auto-recompilation works - always verify manually!

# IMPORTANT: When killing dev server on port 4400:
# - Only kill Node.js/npm processes, NOT browser processes
# - Use: ps aux | grep -E "(node|npm).*4400" to find the right process
# - Or use: lsof -i:4400 to check what's using the port first

# CRITICAL: manifest.json path configuration
# - The manifest.json "code" field should ALWAYS be "plugin.js" 
# - NEVER change it to "dist/plugin.js" - this breaks the plugin loading
# - The source file is public/manifest.json (not the root manifest.json)
# - Vite copies public/manifest.json to dist/manifest.json during build
# - Fix any "dist/plugin.js" references in public/manifest.json, not dist/manifest.json

# CRITICAL: PenPot Plugin Layout Rules - CORRECTED APPROACH
# - PenPot boards DO support appendChild() when used with addFlexLayout()
# - CORRECT APPROACH: 
#   1. Create board with buttonBoard = penpot.createBoard()
#   2. Add flex layout: flexLayout = buttonBoard.addFlexLayout()
#   3. Set layout properties: flexLayout.alignItems = "center", flexLayout.justifyContent = "center"
#   4. Add text as child: buttonBoard.appendChild(buttonText)
# - Layout automatically centers the text - no manual positioning needed
# - Include fallback positioning if appendChild() fails (API limitations)
# - This matches the PenPot UI behavior shown in user screenshots
#
# CRITICAL: PenPot Board Naming for Hidden Labels  
# - NEVER use empty string board.name = "" - PenPot shows "Board" fallback
# - Use invisible Unicode characters to hide board labels:
#   - "\u200B" (zero-width space) - for individual buttons
#   - "\u200C" (zero-width non-joiner) - for variant containers  
#   - "\u200D" (zero-width joiner) - for size containers
#   - "\u2060" (word joiner) - for size buttons
#   - "\u200B\u200B\u200B" (multiple zero-width spaces) - for theme backgrounds
# - Different invisible chars for each board type for uniqueness
# - For persistent "Board" issues, try multiple characters or combinations
# - No API properties exist to control board label visibility

# CRITICAL: PenPot Component Layout Architecture Pattern
# This documents the proven approach for creating complex component examples
# that work well with PenPot's native UI and layout system.

## Component Example Layout Pattern

### 1. **Section Structure** (Top-Level Organization)
```typescript
// Main section title (visible custom text)
const sectionTitle = penpot.createText('1. Component Variants & States');
sectionTitle.characters = '1. Component Variants & States';
sectionTitle.fills = [{ fillColor: neutral[9] }];
sectionTitle.fontSize = 20;
// Position at currentY, then currentY += 40
```

### 2. **Variant Row Structure** (For Each Component Variant)
```typescript
variants.forEach((variant) => {
  // A. Variant label (visible custom text above the row)
  const variantLabel = penpot.createText(variant.name);
  variantLabel.characters = variant.name; // "Primary", "Secondary", etc.
  variantLabel.fills = [{ fillColor: neutral[7] }];
  variantLabel.fontSize = 14;
  // Position at currentY, then currentY += 25
  
  // B. Container board (invisible, manages layout)
  const container = penpot.createBoard();
  container.name = "\u200B"; // Invisible Unicode character
  container.resize(750, 60); // Wide enough for all states
  container.fills = []; // Transparent
  
  // C. Flex layout on container
  const layout = container.addFlexLayout();
  layout.dir = "row";
  layout.alignItems = "center"; 
  layout.justifyContent = "space-between"; // Even distribution
  
  // D. Individual component boards as children
  states.forEach((state) => {
    const componentBoard = penpot.createBoard();
    componentBoard.name = "\u200C"; // Different invisible char
    componentBoard.resize(120, 40);
    
    // E. Component styling
    componentBoard.fills = [{ fillColor: state.bgColor }];
    componentBoard.borderRadius = cornerRadius;
    
    // F. Text content with flex centering
    const text = penpot.createText(state.name);
    const textLayout = componentBoard.addFlexLayout();
    textLayout.alignItems = "center";
    textLayout.justifyContent = "center";
    componentBoard.appendChild(text);
    
    // G. Add to container for automatic spacing
    container.appendChild(componentBoard);
  });
  
  currentY += 60; // Space between variant rows
});
```

### 3. **Size/Scale Examples Structure** (For Different Component Sizes)
```typescript
sizes.forEach((size, index) => {
  // A. Size label (visible custom text)
  const sizeLabel = penpot.createText(size.name);
  sizeLabel.characters = size.name; // "Small", "Medium", "Large"
  sizeLabel.x = buttonX; 
  sizeLabel.y = currentY;
  
  // B. Size container (optional, for centering)
  const sizeContainer = penpot.createBoard();
  sizeContainer.name = "\u200D"; // Different invisible char
  sizeContainer.y = currentY + 25; // Below label
  
  // C. Individual component board
  const componentBoard = penpot.createBoard();
  componentBoard.name = "\u2060"; // Different invisible char
  componentBoard.resize(size.width, size.height);
  
  // D. Component content and styling
  // ... styling specific to component type
  
  sizeContainer.appendChild(componentBoard);
});
```

## Key Architecture Principles

### **Hierarchy Levels**
1. **Section Titles** - Custom text elements for major sections
2. **Variant Labels** - Custom text elements for each variant row  
3. **Container Boards** - Invisible boards managing flex layout
4. **Component Boards** - Individual component instances
5. **Content Elements** - Text, icons, etc. within components

### **Invisible Board Strategy**
- Use different Unicode invisible chars for each board type:
  - `\u200B` (zero-width space) - Variant containers
  - `\u200C` (zero-width non-joiner) - Individual components  
  - `\u200D` (zero-width joiner) - Size containers
  - `\u2060` (word joiner) - Size components
- This creates unique identifiers while hiding native PenPot labels

### **Layout System Usage**
- **Container Level**: `space-between` for even distribution of children
- **Component Level**: `center` + `center` for centering content within components
- **Always use `addFlexLayout()`** then set properties on returned layout object
- **Always use `appendChild()`** to add children for layout to work

### **Spacing Strategy**
- Section spacing: 40px after titles
- Label spacing: 25px between label and components  
- Row spacing: 60-80px between variant rows
- Component sizing: Account for content + padding in resize()

### **Proven Patterns for Other Components**
- **Input Fields**: Same structure, different states (normal, focus, error, disabled)
- **Cards**: Container with image + text content as children
- **Badges**: Small components with text, various colors/styles
- **Navigation**: Horizontal containers with button/link children
- **Forms**: Vertical containers with label + input pairs

This architecture ensures:
✅ Clean visual hierarchy
✅ No label conflicts with PenPot's native UI  
✅ Proper responsive layout behavior
✅ Easy to adapt for any component type
✅ Consistent spacing and organization

### **Component-Specific Implementation Notes**

#### **Button Variants - Special Cases**
- **Link Buttons**: Must include visual underline to match MoonZoon implementation
  ```typescript
  if (variant.name === 'Link') {
    // Use column flex layout for text + underline stacking
    flexLayout.dir = "column";
    flexLayout.gap = 2; // Minimal gap between text and underline
    
    // Create underline rectangle
    const underline = penpot.createRectangle();
    underline.resize(textWidth, 1); // 1px height underline
    underline.fills = [{ fillColor: textColor }]; // Same color as text
    
    // Add both text and underline as children
    buttonBoard.appendChild(buttonText);
    buttonBoard.appendChild(underline);
  }
  ```
- **All Other Variants**: Use row layout with centered text only
- **Color Accuracy**: All button colors verified against MoonZoon implementation (100% match after state fixes)

## CRITICAL: Rust-to-PenPot Verification Process

### **The Problem That Must Be Solved**
Manual component synchronization between Rust NovyUI components and PenPot plugin leads to subtle but critical errors in state handling and styling. A systematic verification process is required.

### **Mandatory Verification Steps**

#### **1. State-by-State Analysis**
For EVERY component variant, extract from Rust code:
```typescript
// Required analysis template for each variant
{
  name: 'VariantName',
  states: {
    normal: { bgColor: 'exact_token', textColor: 'exact_token', borderColor: 'exact_token' },
    hover: { bgColor: 'exact_token', textColor: 'exact_token', borderColor: 'exact_token' },
    active: { bgColor: 'exact_token', textColor: 'exact_token', borderColor: 'exact_token' },
    focus: { bgColor: 'exact_token', textColor: 'exact_token', borderColor: 'exact_token' },
    disabled: { bgColor: 'exact_token', textColor: 'exact_token', borderColor: 'exact_token' },
    loading: { bgColor: 'exact_token', textColor: 'exact_token', borderColor: 'exact_token' }
  },
  specialBehavior: ['underline', 'opacity', 'focus-ring', etc.]
}
```

#### **2. Critical Error Patterns to Check**
- **❌ State Background Bleed**: Using `hoverBgColor` for Active state (common error)
- **❌ Universal Disabled Styling**: Applying same disabled background to all variants
- **❌ Missing Variant-Specific Logic**: Not handling transparent variants properly
- **❌ State Contradiction**: Applying backgrounds to variants that should always be transparent

#### **3. Verification Checklist**
For each component implementation:

```markdown
- [ ] Normal state uses `variant.bgColor` (not hardcoded)
- [ ] Hover state uses `variant.hoverBgColor` (correct)
- [ ] Active state uses `variant.bgColor` (NOT hoverBgColor)
- [ ] Focus state uses `variant.bgColor` with focus ring
- [ ] Disabled state respects variant background rules:
  - [ ] Transparent variants (Link, Ghost, Outline) stay transparent
  - [ ] Solid variants (Primary, Secondary, Destructive) get neutral background
- [ ] Loading state uses `variant.bgColor`
- [ ] Special behaviors implemented (underlines, etc.)
- [ ] All color values match Rust token references exactly
```

#### **4. Automated Cross-Reference Tools**
Future MCP server should provide:
- **Rust Code Parser**: Extract exact styling from `.rs` component files
- **Token Validator**: Verify color values match between Rust tokens and hex conversions
- **State Matrix Generator**: Create complete state × variant matrices for verification
- **Visual Diff Tool**: Compare PenPot output against Rust component screenshots

#### **5. Error Prevention Rules**
```typescript
// NEVER do this - state background bleed
states.forEach((state) => {
  const bgColor = state.name === 'Hover' ? variant.hoverBgColor : variant.hoverBgColor; // ❌ WRONG
});

// ALWAYS do this - state-specific logic
states.forEach((state) => {
  const bgColor = (() => {
    switch(state.name) {
      case 'Normal': case 'Focus': case 'Loading': return variant.bgColor;
      case 'Hover': return variant.hoverBgColor; 
      case 'Active': return variant.bgColor; // NOT hoverBgColor!
      case 'Disabled': return getDisabledBgColor(variant); // Variant-specific logic
      default: return variant.bgColor;
    }
  })();
});
```

### **Link Button Specific Fixes Applied**
- **Active State**: Fixed to use `transparent` instead of `primary[2]`
- **Disabled State**: Fixed to use `transparent` instead of gray
- **Underline**: Added visual underline with column flex layout
- **State Matrix**: Now 100% matches MoonZoon implementation

### **Future Component Development**
ALWAYS use this verification process before declaring any component "complete". The cost of manual verification is far less than the cost of user-reported accuracy issues.
```

## Development Commands

### MoonZoon Development (Primary)
```bash
# Navigate to MoonZoon storybook directory
cd moonzoon-novyui/moonzoon-novyui-storybook

# Start development server (http://localhost:8080)
mzoon start

# Build for production
mzoon build --release
```

### Vue Storybook (Legacy)
```bash
# Navigate to Vue storybook directory
cd storybook

# Start Storybook dev server (http://localhost:6006)
npm run storybook

# Build Storybook for production
npm run build-storybook
```

### Documentation and Asset Validation
```bash
# Run all documentation and asset checks
deno run --allow-read --allow-write --allow-net --allow-run scripts/all-enforcer.ts

# Individual checks
deno run --allow-read scripts/component-markdown-enforcer.ts
deno run --allow-read scripts/block-markdown-enforcer.ts
deno run --allow-read scripts/page-markdown-enforcer.ts
deno run --allow-read --allow-write --allow-net scripts/font-asset-enforcer.ts
deno run --allow-read --allow-write --allow-net scripts/icon-asset-enforcer.ts
deno run --allow-read --allow-write --allow-net scripts/pattern-asset-enforcer.ts
```

## Code Architecture

### Design System Structure
```
├── components/         # 50+ UI components (Button, Input, Modal, etc.)
├── blocks/             # 60+ composite UI blocks (Header, Footer, ProductCard, etc.)
├── pages/              # Complete page templates and layouts
├── tokens/             # Design tokens (colors, spacing, typography, etc.)
├── assets/             # Auto-managed fonts, icons, and patterns
├── scripts/            # Validation and asset management tools
├── moonzoon-novyui/    # Rust/MoonZoon implementation (PRIMARY)
└── storybook/          # Vue/TypeScript implementation (LEGACY)
```

### MoonZoon Component Architecture
Components use MoonZoon's signal-based reactive system with builder patterns:

```rust
// Component structure example
pub fn button() -> impl Element {
    Button::new()
        .label_signal(label.signal())
        .on_press(|| { /* handler */ })
        .s(Background::new().color_signal(theme_color()))
}

// Animation using MoonZoon's animation system
.s(Transitions::new([
    Transition::background_color().duration(animation::DURATION_NORMAL),
    Transition::transform().duration(animation::DURATION_FAST)
]))

// Theme integration
.s(Background::new().color_signal(
    THEME.signal().map(|theme| match theme {
        Theme::Light => color::primary_7_light(),
        Theme::Dark => color::primary_7_dark(),
    })
))
```

### Form Handling Patterns
```rust
// Form state structure
pub struct FormState<T> {
    pub value: Mutable<T>,
    pub error: Mutable<Option<String>>,
    pub touched: Mutable<bool>,
    pub loading: Mutable<bool>,
}

// Input component with validation
TextInput::new()
    .text_signal(form_state.value.signal_cloned())
    .on_change(clone!((form_state) move |text| {
        form_state.value.set(text);
        form_state.touched.set(true);
    }))
    .s(Outline::new().color_signal(
        form_state.error.signal_ref(|error| error.is_some())
            .map_bool(|| color::error_7(), || color::transparent())
    ))
```

### File Upload Implementation
```rust
// Proven pattern from ringrev
.update_raw_el(|raw_el| {
    raw_el
        .event_handler_with_options(
            EventOptions::new().preventable(),
            |event: events::Drop| {
                event.prevent_default();
                let file_list = event.data_transfer().unwrap_throw().files().unwrap_throw();
                handle_file_selection(file_list);
            },
        )
})
```

## Design Token Usage

All visual properties must use design tokens from `/tokens/`:
- **Colors**: `color.primary.7`, `color.neutral.11`, etc.
- **Spacing**: `spacing.4`, `spacing.8`, etc.
- **Typography**: `typography.body.size`, `typography.heading.weight`, etc.
- **Corner Radius**: `radii.2`, `radii.4`, etc.
- **Shadows**: `shadow.1`, `shadow.2`, etc.

### Color System
Uses OKLCH color space with light/dark theme variants. All colors should be referenced through the theme system for automatic dark mode support.

## Documentation Requirements

### Component Documentation Structure
Every component, block, and page must include:

1. **Token Usage Table** - All UI parts with corresponding tokens
2. **State/Variant Documentation** - All UI states (hover, active, disabled, focus)
3. **Accessibility Section** - Keyboard navigation, ARIA roles, focus management
4. **Consistent Token References** - No hardcoded values

Example structure:
```markdown
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.primary.7   | Main button background     |
| Text        | color.neutral.11  | Button label               |
| Border      | color.primary.5   | Border color               |
```

### Asset Management
- **Fonts**: Auto-downloaded from Google Fonts (Inter, FiraCode, Audiowide)
- **Icons**: Curated set from Lucide with semantic naming
- **Patterns**: Background patterns from Hero Patterns

All assets are validated and synchronized through Deno scripts.

## Migration Context

The project is actively migrating from Vue to MoonZoon. When working on components:
- **Primary focus**: MoonZoon implementation in `/moonzoon-novyui/`
- **Reference implementation**: Vue components in `/storybook/` for feature parity
- **Migration patterns**: See `/misc/TECHNICAL_DECISIONS.md` for proven implementation patterns

### Key Migration Patterns
- **Animations**: Use MoonZoon's `Tweened`, `Oscillator`, and `Transitions` APIs
- **State Management**: Signal-based reactive state with `Mutable<T>`
- **Event Handling**: Use `update_raw_el()` for complex DOM interactions
- **Theme System**: Global theme state with computed color signals
- **Accessibility**: Built-in ARIA helpers and keyboard navigation

## Testing and Validation

Before creating pull requests:
1. Run documentation enforcement: `deno run --allow-read --allow-write --allow-net --allow-run scripts/all-enforcer.ts`
2. Validate MoonZoon build: `cd moonzoon-novyui/moonzoon-novyui-storybook && mzoon build --release`
3. Check component accessibility compliance
4. Ensure design token usage (no hardcoded values)

## MCP Server Integration

### Available MCP Servers
This project uses official MCP servers for enhanced development workflow:

**Configuration**: `.mcp.json` in project root (project-specific scope)
```json
{
  "mcpServers": {
    "playwright": {
      "type": "stdio",
      "command": "npx",
      "args": ["@executeautomation/playwright-mcp-server"],
      "env": {
        "PLAYWRIGHT_USER_DATA_DIR": "./.playwright-browser-data",
        "PLAYWRIGHT_HEADLESS": "false",
        "..."
      }
    },
    "memory": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-memory"],
      "env": {
        "MCP_MEMORY_DATA_DIR": "./.mcp-data"
      }
    },
    "sequentialthinking": {
      "type": "stdio",
      "command": "npx",
      "args": ["-y", "@modelcontextprotocol/server-sequential-thinking"]
    }
  }
}
```

### Team Collaboration Setup

#### **For Team Members**
1. **Clone the repository** to any location on your system
2. **Run Claude Code from project root**: `cd /your/path/to/NovyUI && claude`
3. **MCP servers auto-configure** using relative paths to project directories

#### **Shared Resources**
- **Memory Storage**: `.mcp-data/` (committed to git for team knowledge sharing)
- **Playwright Data**: `.playwright-browser-data/` (gitignored, each developer has own browser state)
- **Configuration**: `.mcp.json` (committed, works for all team members)

#### **Cross-Platform Compatibility**
```bash
# Works on any system:
Windows: C:\Users\Alice\repos\NovyUI\.mcp-data
macOS:   /Users/Bob/projects/NovyUI/.mcp-data  
Linux:   /home/charlie/code/NovyUI/.mcp-data
```

#### **Override for Special Cases**
If a team member needs custom paths, create `.mcp.local.json`:
```json
{
  "mcpServers": {
    "memory": {
      "env": {
        "MCP_MEMORY_DATA_DIR": "/custom/path/memories"
      }
    }
  }
}
```
Add `.mcp.local.json` to `.gitignore` for personal overrides.

### Memory Server Usage Patterns

#### **Store Implementation Patterns**
```bash
# Component creation patterns
create_entities: 
  - name: "ButtonImplementation" 
  - type: "ComponentPattern"
  - observations: ["Uses 850x580px theme containers", "Unicode invisible chars for board names", "Flex layout with center alignment"]

# Color and theme strategies  
create_entities:
  - name: "DarkThemeColors"
  - type: "DesignPattern" 
  - observations: ["primary[6].light works better than primary[7].dark", "Need higher contrast for visibility", "Test all colors against dark backgrounds"]

# PenPot API workarounds
create_entities:
  - name: "PenPotLayoutSystem"
  - type: "TechnicalPattern"
  - observations: ["addFlexLayout() then set properties", "appendChild() required for layout", "No pixel positioning - use native layout only"]
```

#### **Component Relationships**
```bash
create_relations:
  - from: "ButtonImplementation"
  - to: "IconImplementation" 
  - relation: "serves as template for"

create_relations:
  - from: "ThemeContainerPattern"
  - to: "AllComponents"
  - relation: "applies to"
```

#### **Query Stored Knowledge**
```bash
# Before implementing new component
search_nodes: "component implementation"
search_nodes: "theme container patterns"
search_nodes: "PenPot layout"

# During troubleshooting
search_nodes: "dark theme contrast"
search_nodes: "board naming"
search_nodes: "flex layout"
```

### Sequential Thinking Usage Patterns

#### **Component Implementation Process**
Use sequential thinking for systematic component development:

**Thought 1**: "Analyzing MoonZoon component structure..."
- Read component .rs file
- Identify variants, sizes, states
- Extract color tokens and styling

**Thought 2**: "Designing PenPot equivalent structure..."
- Plan theme container layout
- Design variant showcase sections
- Map Rust tokens to hex colors

**Thought 3**: "Implementing with proper patterns..."
- Apply Button template structure
- Use stored memory patterns
- Implement flex layout correctly

**Thought 4**: "Testing and verification..."
- Check light/dark themes
- Verify against storybook
- Test all states and variants

**Thought 5**: "Storing lessons learned..."
- Update memory with new patterns
- Document any issues resolved
- Add to verification checklist

#### **Complex Problem Solving**
For challenging implementation decisions:
- Break down multi-variant components
- Analyze state interaction complexity  
- Design systematic testing approaches
- Explore alternative implementation paths
- Verify against MoonZoon reference

#### **Error Investigation**
When components don't render correctly:
- Systematically check each implementation step
- Compare against stored successful patterns
- Identify deviations from proven approaches
- Test incremental fixes
- Document solution for future reference

### Productive Usage Guidelines

#### **At Start of Component Implementation**
1. **Query Memory**: `search_nodes: "component template"`
2. **Sequential Planning**: Break down component into systematic steps
3. **Store Intent**: Create entity for new component with planned approach

#### **During Implementation**
1. **Reference Patterns**: Query memory for similar solved problems
2. **Document Decisions**: Add observations about what works/doesn't work
3. **Use Sequential Thinking**: For complex styling or layout decisions

#### **After Implementation**
1. **Store Success**: Add successful patterns to memory
2. **Document Lessons**: Update entities with new observations
3. **Create Relations**: Link new component to existing patterns

#### **Troubleshooting Workflow**
1. **Search Memory**: `search_nodes: "similar error"` or `search_nodes: "component name"`
2. **Sequential Analysis**: Break down problem systematically
3. **Test Solutions**: Apply stored solutions incrementally
4. **Update Memory**: Add new solution patterns

### Memory Content Strategy

#### **Entity Types to Maintain**
- **ComponentPattern**: Button, Icon, Kbd, Select, TreeView, Typography
- **DesignPattern**: ThemeContainer, ColorContrast, LayoutSystem
- **TechnicalPattern**: PenPotAPI, FlexLayout, BoardNaming
- **ErrorSolution**: SpecificFixes, Workarounds, DebuggingSteps

#### **Relation Types to Track**
- "extends pattern from" - Component inheritance
- "requires" - Dependencies between patterns
- "conflicts with" - Incompatible approaches  
- "solved by" - Error to solution mappings

#### **Critical Observations to Store**
- Working color combinations for light/dark themes
- Successful PenPot API usage patterns
- Component state logic that works correctly
- Layout configurations that render properly
- Unicode characters that hide board labels effectively

### Integration with Todo Lists

**Workflow**: Use MCP servers to enhance todo tracking:
1. **Sequential Thinking**: Plan todo breakdown systematically
2. **Memory Storage**: Store successful todo completion patterns
3. **Knowledge Query**: Reference previous similar todos for guidance

This integration ensures that every component implementation builds on previous successes and avoids repeating solved problems.

## Development Workflow Memories
- remember to run dev servers (e.g. for penpot plugin) in background
- reload plugin dev server after changing code
- use MCP memory to store successful patterns
- apply sequential thinking for complex component decisions
- query stored knowledge before starting new implementations