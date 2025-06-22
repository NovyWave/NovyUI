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
# http://localhost:5173/manifest.json

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

# ✅ Manifest URL: http://localhost:5173/manifest.json
# ✅ Plugin loads from: dist/plugin.js (auto-updated on changes)

# 🔧 Type checking (optional, for catching errors):
npm run type-check

# 🏗️ Production build:
npm run build

# TypeScript will catch API errors during build
npm run build  # Catches non-existent methods like penpot.createFrame()

# NEVER assume auto-recompilation works - always verify manually!
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

## Development Workflow Memories
- remember to run dev servers (e.g. for penpot plugin) in background
- reload plugin dev server after changing code