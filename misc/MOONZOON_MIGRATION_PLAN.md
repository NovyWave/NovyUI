# NovyUI to MoonZoon Migration Plan

## Executive Summary

This document outlines the comprehensive migration plan for converting the existing NovyUI Storybook component library (Vue.js/TypeScript) to a MoonZoon-based Rust web application. The migration will preserve all existing custom components while leveraging Rust's type safety and MoonZoon's reactive architecture.

## Current State Analysis

### Existing Component Inventory (18 Components)
- **Basic Components**: Button, Icon, Input, TextArea, Checkbox, Switch, Badge, Avatar
- **Complex Components**: Accordion, Card, List, TreeView, Select, FileInput, Kbd
- **Total Lines of Code**: ~6,000+ lines across Vue components
- **Design System**: Comprehensive token system with 477 lines of design tokens
- **Assets**: 60+ icons, 3 font families, 5 patterns

### Current Architecture
- **Frontend**: Vue 3 + TypeScript + Storybook
- **Design Tokens**: Reactive OKLCH color system with light/dark themes
- **Build System**: Vite + npm
- **Component Structure**: Single File Components (.vue) with scoped styles

## Target Architecture

### MoonZoon Application Structure
```
novyui/
├── Cargo.toml                 # Workspace configuration
├── MoonZoon.toml             # MoonZoon configuration
├── backend/
│   ├── Cargo.toml
│   └── src/
│       └── main.rs           # Backend entry point
├── frontend/
│   ├── Cargo.toml
│   └── src/
│       ├── main.rs           # Frontend entry point
│       ├── components/       # UI components
│       ├── tokens/           # Design tokens
│       ├── pages/            # Application pages
│       └── router.rs         # Routing logic
├── shared/
│   ├── Cargo.toml
│   └── src/
│       └── lib.rs            # Shared types/logic
└── public/                   # Static assets
    ├── fonts/
    ├── icons/
    └── patterns/
```

## Migration Strategy

### Phase 1: Foundation Setup (Week 1)
**Objective**: Establish MoonZoon project structure and basic infrastructure

**Tasks**:
1. **Project Initialization**
   - Create new MoonZoon project using `mzoon new novyui`
   - Configure `MoonZoon.toml` with development settings
   - Set up Cargo workspace with backend/frontend/shared crates

2. **Asset Migration**
   - Copy all fonts, icons, and patterns to `public/` directory
   - Verify asset loading in MoonZoon environment
   - Create asset helper functions

3. **Design Token System**
   - Convert Vue reactive tokens to Rust static/computed values
   - Implement theme switching mechanism using MoonZoon signals
   - Create token access patterns following MoonZoon conventions

**Deliverables**:
- Working MoonZoon project structure
- Asset loading verification
- Basic token system implementation

### Phase 2: Core Component Migration (Weeks 2-4)
**Objective**: Migrate fundamental components that other components depend on

**Priority Order**:
1. **Icon Component** (Foundation for all other components)
2. **Button Component** (Used by Input, FileInput, etc.)
3. **Input Component** (Complex component with multiple features)
4. **Typography/Text Components** (Used throughout)

**Migration Pattern for Each Component**:
```rust
// Example: Button component structure
pub fn button() -> ButtonBuilder {
    ButtonBuilder::new()
}

pub struct ButtonBuilder {
    variant: ButtonVariant,
    size: ButtonSize,
    // ... other properties
}

impl ButtonBuilder {
    pub fn variant(mut self, variant: ButtonVariant) -> Self {
        self.variant = variant;
        self
    }

    pub fn build(self) -> impl Element {
        // MoonZoon element implementation
    }
}
```

**Component Conversion Strategy (Research-Validated)**:
- ✅ **State Management**: Use `Mutable<T>` and `Signal<T>` for reactive state
- ✅ **Animations**: Use `Tweened` for smooth transitions, `Oscillator` for continuous
- ✅ **Events**: Use `EventOptions::preventable()` for complex event handling
- ✅ **Styling**: Use `.s()` method with signal-based dynamic styling
- ✅ **Async Operations**: Use `Task::start()` for file processing and API calls

**Research-Based Implementation Examples**:

**1. Accordion with Height Animation** (from MoonZoon animation research):
```rust
// Height animation using Tweened (confirmed working pattern)
let (height_tween, height_signal) = Tweened::new_and_signal(
    0.0, Duration::milliseconds(300), ease::cubic_out
);

// Expand/collapse with smooth animation
.s(Height::exact_signal(height_signal.map(|h| h as u32)))
.s(Transitions::new([Transition::height().duration(300)]))
```

**2. FileInput Drag-Drop** (from ringrev_private production code):
```rust
.update_raw_el(|raw_el| {
    raw_el.event_handler_with_options(
        EventOptions::new().preventable(),
        |event: events::Drop| {
            event.prevent_default();
            let file_list = event.data_transfer().unwrap_throw().files().unwrap_throw();
            handle_files(file_list);
        },
    )
})
```

**3. Form Validation** (from ringrev_private form patterns):
```rust
// Signal-based form state with reactive validation
.s(Outline::new().color_signal(
    error.signal().map_bool(|| color::error_7(), || color::transparent())
))
```

### Phase 3: Complex Component Migration (Weeks 5-7)
**Objective**: Migrate components with advanced functionality

**Components**:
- **Accordion**: Collapsible content with state management
- **TreeView**: Hierarchical data display with expand/collapse
- **Select**: Dropdown with search and selection
- **FileInput**: File upload with drag-and-drop
- **List**: Complex data display with various layouts

**Special Considerations**:
- State management patterns using MoonZoon Mutable/Signal
- Event handling for complex interactions
- Performance optimization for large data sets

### Phase 4: Application Shell & Routing (Week 8)
**Objective**: Create component showcase application with navigation

**Implementation**:
- Router setup following `examples/pages` pattern
- Page structure for component categories
- Navigation system between component examples
- Search functionality for components

**Router Structure**:
```rust
#[route]
#[derive(Clone)]
pub enum Route {
    #[route()]
    Home,
    #[route("components", component_name)]
    Component { component_name: String },
    #[route("tokens")]
    Tokens,
    #[route("about")]
    About,
}
```

## Technical Implementation Details

### Design Token Migration
**Current Vue System**:
```typescript
export const color = {
  primary: {
    '7': computed(() => theme.value === 'light' ? 'oklch(55% 0.16 250)' : 'oklch(65% 0.16 250)')
  }
}
```

**Target Rust System**:
```rust
pub fn primary_7() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(55% 0.16 250)",
        Theme::Dark => "oklch(65% 0.16 250)",
    })
}
```

### Component State Management
**Pattern**: Use MoonZoon's `Mutable<T>` and `Signal<T>` for reactive state
```rust
static THEME: Lazy<Mutable<Theme>> = Lazy::new(|| Mutable::new(Theme::Light));

pub fn theme() -> impl Signal<Item = Theme> {
    THEME.signal()
}

pub fn set_theme(new_theme: Theme) {
    THEME.set(new_theme);
}
```

### Event Handling Migration
**Vue Pattern**:
```vue
@click="handleClick"
@input="handleInput"
```

**MoonZoon Pattern**:
```rust
.on_press(|| { /* handle click */ })
.on_change(|value| { /* handle input */ })
```

## Risk Assessment & Mitigation (Updated Based on Research)

### ✅ RESOLVED - Previously High-Risk Areas
1. **Animation System**: ~~Complex CSS transitions~~ → **VALIDATED**
   - **Research Result**: MoonZoon provides comprehensive animation system
   - **Solution**: Transitions API + Tweened + Oscillator for all animation needs
   - **Risk Level**: LOW (was High)

2. **File Upload & Drag-Drop**: ~~WASM File API complexity~~ → **VALIDATED**
   - **Research Result**: Production-proven patterns found in ringrev_private
   - **Solution**: web_sys File API + EventOptions + async Task processing
   - **Risk Level**: LOW (was High)

3. **Form State Management**: ~~Cross-component validation~~ → **VALIDATED**
   - **Research Result**: Signal-based form patterns confirmed in production
   - **Solution**: FormState<T> + Mutable fields + reactive validation
   - **Risk Level**: LOW (was Medium)

### Remaining Medium-Risk Areas
1. **Component Composition**: Vue slots to MoonZoon patterns
   - **Status**: Needs research into MoonZoon element composition
   - **Mitigation**: Study existing MoonZoon component patterns

2. **Complex State Management**: TreeView, Accordion expand/collapse states
   - **Mitigation**: Use proven Mutable<Set<T>> patterns from research
   - **Risk Level**: MEDIUM (reduced from High)

3. **Asset Loading**: Font and icon integration
   - **Mitigation**: Early verification in Phase 1, fallback strategies
   - **Risk Level**: LOW

### Low-Risk Areas
1. **Styling System**: CSS-in-JS to MoonZoon styling conversion
   - **Research Result**: MoonZoon styling system is comprehensive
   - **Solution**: Use .s() method with styling objects + signal integration

2. **Accessibility**: ARIA attributes and keyboard navigation
   - **Research Result**: Built-in focus management and ARIA support
   - **Solution**: Use Focusable trait + attr() for ARIA attributes

## Success Criteria

### Functional Requirements
- [ ] All 18 components migrated with feature parity
- [ ] Theme switching (light/dark) working correctly
- [ ] All component variants and states functional
- [ ] Responsive design maintained
- [ ] Accessibility features preserved

### Performance Requirements
- [ ] Initial load time < 3 seconds
- [ ] Component rendering performance comparable to Vue version
- [ ] Memory usage within acceptable limits for WASM

### Development Experience
- [ ] Hot reload functionality working
- [ ] Component development workflow established
- [ ] Documentation and examples available
- [ ] Build and deployment process automated

## Timeline Summary (Revised Based on Research)

| Phase | Duration | Key Deliverables | Risk Level |
|-------|----------|------------------|------------|
| Phase 1 | Week 1 | Project setup, assets, animation utilities | ✅ LOW |
| Phase 2 | Weeks 2-3 | Core components (Icon, Button, Input, Typography) | ✅ LOW |
| Phase 3 | Weeks 4-6 | Complex components (Accordion, TreeView, Select, etc.) | ✅ LOW |
| Phase 4 | Week 7 | Application shell, routing, final integration | ✅ LOW |

**Total Duration**: 7 weeks (reduced from 8)
**Estimated Effort**: 150-200 hours (reduced from 200-250)

**Timeline Improvements**:
- ✅ **Animation complexity resolved**: MoonZoon provides complete animation system
- ✅ **File upload complexity resolved**: Production-proven patterns available
- ✅ **Form handling complexity resolved**: Signal-based patterns validated
- 🔄 **Reduced risk** allows for faster implementation and 1-week timeline reduction

## Next Steps

1. **Immediate Actions**:
   - Review and approve this migration plan
   - Set up development environment with MoonZoon
   - Begin Phase 1 implementation

2. **Questions for Clarification**:
   - Preferred deployment strategy (frontend-only vs full-stack)
   - Performance requirements and constraints
   - Timeline flexibility and resource allocation
   - Integration requirements with existing systems

3. **Preparation**:
   - Study reference repositories (Fast2D, ringrev_private) for patterns
   - Set up development tools and environment
   - Create initial project structure

This migration plan provides a systematic approach to converting the NovyUI component library to MoonZoon while maintaining functionality and improving type safety through Rust's powerful type system.

## Detailed Implementation Examples

### Component Migration Pattern

**Vue Component Structure**:
```vue
<template>
  <button :style="buttonStyle" @click="handleClick">
    <Icon v-if="leftIcon" :name="leftIcon" />
    <span>{{ label }}</span>
  </button>
</template>

<script setup>
const props = defineProps<{
  label: string;
  variant?: 'primary' | 'secondary';
  leftIcon?: string;
}>();

const emit = defineEmits<{
  click: [event: MouseEvent];
}>();
</script>
```

**MoonZoon Equivalent**:
```rust
use zoon::*;

#[derive(Clone, Copy)]
pub enum ButtonVariant {
    Primary,
    Secondary,
}

pub struct ButtonBuilder {
    label: String,
    variant: ButtonVariant,
    left_icon: Option<&'static str>,
    on_press: Option<Box<dyn Fn()>>,
}

impl ButtonBuilder {
    pub fn new() -> Self {
        Self {
            label: String::new(),
            variant: ButtonVariant::Primary,
            left_icon: None,
            on_press: None,
        }
    }

    pub fn label(mut self, label: impl Into<String>) -> Self {
        self.label = label.into();
        self
    }

    pub fn variant(mut self, variant: ButtonVariant) -> Self {
        self.variant = variant;
        self
    }

    pub fn left_icon(mut self, icon: &'static str) -> Self {
        self.left_icon = Some(icon);
        self
    }

    pub fn on_press<F>(mut self, handler: F) -> Self
    where
        F: Fn() + 'static
    {
        self.on_press = Some(Box::new(handler));
        self
    }

    pub fn build(self) -> impl Element {
        let background_color = match self.variant {
            ButtonVariant::Primary => color::primary_7(),
            ButtonVariant::Secondary => color::neutral_3(),
        };

        Button::new()
            .s(Background::new().color_signal(background_color))
            .s(Padding::new().x(12).y(8))
            .s(RoundedCorners::all(4))
            .label(
                Row::new()
                    .s(Align::center())
                    .s(Gap::new().x(8))
                    .item_signal(self.left_icon.map(|icon|
                        icon_component(icon)
                    ))
                    .item(Text::new(&self.label))
            )
            .on_press(move || {
                if let Some(handler) = &self.on_press {
                    handler();
                }
            })
    }
}

// Usage
pub fn create_button() -> impl Element {
    ButtonBuilder::new()
        .label("Click me")
        .variant(ButtonVariant::Primary)
        .left_icon("user")
        .on_press(|| println!("Button clicked!"))
        .build()
}
```

### Design Token Implementation

**Token Module Structure**:
```rust
// tokens/mod.rs
pub mod color;
pub mod spacing;
pub mod typography;
pub mod theme;

pub use color::*;
pub use spacing::*;
pub use typography::*;
pub use theme::*;

// tokens/theme.rs
use zoon::*;

#[derive(Clone, Copy, Debug, PartialEq)]
pub enum Theme {
    Light,
    Dark,
}

static THEME: Lazy<Mutable<Theme>> = Lazy::new(|| {
    // Load from localStorage or default to Light
    let stored_theme = local_storage()
        .get("novyui-theme")
        .unwrap_or_default()
        .unwrap_or_default();

    let initial_theme = match stored_theme.as_str() {
        "dark" => Theme::Dark,
        _ => Theme::Light,
    };

    Mutable::new(initial_theme)
});

pub fn theme() -> impl Signal<Item = Theme> {
    THEME.signal()
}

pub fn set_theme(new_theme: Theme) {
    THEME.set(new_theme);

    // Persist to localStorage
    let theme_str = match new_theme {
        Theme::Light => "light",
        Theme::Dark => "dark",
    };
    local_storage().insert("novyui-theme", theme_str);
}

// tokens/color.rs
use super::theme::{theme, Theme};
use zoon::*;

pub fn primary_1() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(98% 0.01 250)",
        Theme::Dark => "oklch(20% 0.01 250)",
    })
}

pub fn primary_7() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(55% 0.16 250)",
        Theme::Dark => "oklch(65% 0.16 250)",
    })
}

pub fn neutral_1() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "oklch(99% 0.025 255)",
        Theme::Dark => "oklch(12% 0.025 255)",
    })
}

// Helper for static colors that don't change with theme
pub fn transparent() -> &'static str {
    "transparent"
}
```

### State Management Patterns

**Global State Example**:
```rust
// store/mod.rs
use zoon::*;

#[derive(Clone)]
pub struct AppStore {
    pub current_page: Mutable<Page>,
    pub selected_component: Mutable<Option<String>>,
    pub search_query: Mutable<String>,
}

static STORE: Lazy<AppStore> = Lazy::new(|| AppStore {
    current_page: Mutable::new(Page::Home),
    selected_component: Mutable::new(None),
    search_query: Mutable::new(String::new()),
});

pub fn store() -> &'static AppStore {
    &STORE
}

#[derive(Clone, Copy, Debug)]
pub enum Page {
    Home,
    Components,
    Tokens,
    About,
}
```

**Component-Level State Example**:
```rust
// components/accordion.rs
use zoon::*;

pub struct AccordionBuilder {
    items: Vec<AccordionItem>,
    allow_multiple: bool,
}

#[derive(Clone)]
pub struct AccordionItem {
    pub title: String,
    pub content: String,
    pub expanded: Mutable<bool>,
}

impl AccordionBuilder {
    pub fn new() -> Self {
        Self {
            items: Vec::new(),
            allow_multiple: false,
        }
    }

    pub fn item(mut self, title: impl Into<String>, content: impl Into<String>) -> Self {
        self.items.push(AccordionItem {
            title: title.into(),
            content: content.into(),
            expanded: Mutable::new(false),
        });
        self
    }

    pub fn allow_multiple(mut self, allow: bool) -> Self {
        self.allow_multiple = allow;
        self
    }

    pub fn build(self) -> impl Element {
        let allow_multiple = self.allow_multiple;

        Column::new()
            .s(Gap::new().y(4))
            .items(self.items.into_iter().enumerate().map(|(index, item)| {
                let item_expanded = item.expanded.clone();
                let all_items = self.items.clone(); // For single-expand logic

                Column::new()
                    .item(
                        // Header button
                        Button::new()
                            .s(Width::fill())
                            .s(Padding::new().all(12))
                            .s(Background::new().color_signal(
                                item_expanded.signal().map_bool(
                                    || color::primary_3(),
                                    || color::neutral_2()
                                )
                            ))
                            .label(
                                Row::new()
                                    .s(Align::center())
                                    .s(JustifyContent::SpaceBetween)
                                    .item(Text::new(&item.title))
                                    .item(
                                        Icon::new()
                                            .name("chevron-down")
                                            .s(Transform::new().rotate_signal(
                                                item_expanded.signal().map_bool(
                                                    || 180.0,
                                                    || 0.0
                                                )
                                            ))
                                    )
                            )
                            .on_press(move || {
                                let current_expanded = item_expanded.get();

                                if !allow_multiple && !current_expanded {
                                    // Close all other items
                                    for other_item in &all_items {
                                        if !std::ptr::eq(other_item, &item) {
                                            other_item.expanded.set(false);
                                        }
                                    }
                                }

                                item_expanded.set(!current_expanded);
                            })
                    )
                    .item_signal(
                        item_expanded.signal().map_bool(
                            move || {
                                Some(
                                    El::new()
                                        .s(Padding::new().all(12))
                                        .s(Background::new().color(color::neutral_1()))
                                        .child(Text::new(&item.content))
                                )
                            },
                            || None
                        )
                    )
            }))
    }
}
```

### Asset Management

**Icon System**:
```rust
// assets/icons.rs
use zoon::*;

pub fn icon_component(name: &str) -> impl Element {
    let icon_url = format!("/icons/{}.svg", name);

    RawSvgEl::new()
        .attr("src", &icon_url)
        .attr("alt", "")
        .attr("role", "img")
        .s(Width::exact(20))
        .s(Height::exact(20))
}

// Alternative: Inline SVG for better performance
pub fn icon_inline(name: &str) -> impl Element {
    let svg_content = match name {
        "user" => include_str!("../../public/icons/user.svg"),
        "chevron-down" => include_str!("../../public/icons/chevron-down.svg"),
        _ => include_str!("../../public/icons/placeholder.svg"),
    };

    RawHtmlEl::new("div")
        .inner_markup(svg_content)
        .s(Width::exact(20))
        .s(Height::exact(20))
}
```

### Routing Implementation

**Router Setup**:
```rust
// router.rs
use zoon::*;
use crate::store::{store, Page};

static ROUTER: Lazy<Router<Route>> = Lazy::new(|| {
    Router::new(|route| async move {
        match route {
            Some(Route::Home) => {
                store().current_page.set(Page::Home);
            }
            Some(Route::Component { name }) => {
                store().current_page.set(Page::Components);
                store().selected_component.set(Some(name));
            }
            Some(Route::Tokens) => {
                store().current_page.set(Page::Tokens);
            }
            Some(Route::About) => {
                store().current_page.set(Page::About);
            }
            None => {
                store().current_page.set(Page::Home);
            }
        }
    })
});

#[route]
#[derive(Clone)]
pub enum Route {
    #[route()]
    Home,

    #[route("component", name)]
    Component { name: String },

    #[route("tokens")]
    Tokens,

    #[route("about")]
    About,
}

pub fn router() -> &'static Router<Route> {
    &ROUTER
}

pub fn navigate_to_component(component_name: &str) {
    router().go(Route::Component {
        name: component_name.to_string()
    });
}
```

This detailed implementation guide provides concrete examples of how Vue.js patterns translate to MoonZoon, ensuring a smooth migration process while maintaining the reactive nature and functionality of the original component library.

## Testing Strategy

### Component Testing Approach
```rust
// tests/components/button_test.rs
use zoon::*;
use crate::components::button::*;

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_button_builder_defaults() {
        let button = ButtonBuilder::new();
        assert_eq!(button.variant, ButtonVariant::Primary);
        assert_eq!(button.label, "");
        assert!(button.left_icon.is_none());
    }

    #[test]
    fn test_button_builder_chaining() {
        let button = ButtonBuilder::new()
            .label("Test Button")
            .variant(ButtonVariant::Secondary)
            .left_icon("user");

        assert_eq!(button.label, "Test Button");
        assert_eq!(button.variant, ButtonVariant::Secondary);
        assert_eq!(button.left_icon, Some("user"));
    }
}
```

### Integration Testing
```rust
// tests/integration/theme_switching_test.rs
use zoon::*;
use crate::tokens::{theme, set_theme, Theme, primary_7};

#[cfg(test)]
mod tests {
    use super::*;

    #[test]
    fn test_theme_switching_affects_colors() {
        // Test light theme
        set_theme(Theme::Light);
        let light_color = primary_7().sample();
        assert_eq!(light_color, "oklch(55% 0.16 250)");

        // Test dark theme
        set_theme(Theme::Dark);
        let dark_color = primary_7().sample();
        assert_eq!(dark_color, "oklch(65% 0.16 250)");
    }
}
```

### Visual Regression Testing
- Use Playwright for automated visual testing
- Compare screenshots between Vue and MoonZoon versions
- Ensure pixel-perfect migration of component appearance

## Deployment Strategy

### Development Deployment
```toml
# MoonZoon.toml
port = 8080
https = false
cache_busting = true
backend_log_level = "debug"

[watch]
frontend = [
    "public",
    "frontend/Cargo.toml",
    "frontend/src",
]
backend = [
    "backend/Cargo.toml",
    "backend/src",
]
```

### Production Deployment Options

**Option 1: Frontend-Only (Netlify/Vercel)**
```bash
# Build frontend-only distribution
mzoon build --release --frontend-dist netlify

# Deploy to Netlify
# Drag & drop frontend_dist directory
```

**Option 2: Full-Stack (Docker)**
```dockerfile
# Dockerfile
FROM rust:1
WORKDIR /app

RUN rustup target add wasm32-unknown-unknown
RUN cargo install mzoon --git https://github.com/MoonZoon/MoonZoon --locked

COPY . .
RUN mzoon build -r
RUN cp ./target/release/backend /usr/local/bin/novyui_app

ENTRYPOINT ["novyui_app"]
```

**Option 3: Static Site Generation**
```rust
// For component documentation site
pub async fn generate_static_pages() {
    let components = vec!["Button", "Input", "Card", "Accordion"];

    for component in components {
        let page_content = generate_component_page(&component).await;
        std::fs::write(
            format!("dist/{}.html", component.to_lowercase()),
            page_content
        ).expect("Failed to write static page");
    }
}
```

## Performance Optimization

### Bundle Size Optimization
```rust
// Use conditional compilation for development features
#[cfg(debug_assertions)]
pub fn debug_panel() -> impl Element {
    // Development-only debug panel
}

#[cfg(not(debug_assertions))]
pub fn debug_panel() -> impl Element {
    // Empty element for production
    El::new()
}
```

### Lazy Loading Strategy
```rust
// Lazy load complex components
pub fn load_component_page(component_name: &str) -> impl Element {
    match component_name {
        "TreeView" => {
            // Lazy load heavy TreeView component
            Task::start(async {
                let tree_component = import_tree_view().await;
                render_component(tree_component);
            });
            loading_spinner()
        }
        _ => {
            // Load lightweight components immediately
            render_standard_component(component_name)
        }
    }
}
```

### Memory Management
```rust
// Efficient signal cleanup
pub struct ComponentManager {
    active_signals: Vec<SignalHandle>,
}

impl ComponentManager {
    pub fn cleanup(&mut self) {
        // Properly dispose of signals when components unmount
        for handle in self.active_signals.drain(..) {
            handle.dispose();
        }
    }
}
```

## Migration Validation Checklist

### Functional Parity
- [ ] All component props/variants work identically
- [ ] Event handling behaves the same
- [ ] State management maintains consistency
- [ ] Theme switching works correctly
- [ ] Accessibility features preserved

### Performance Benchmarks
- [ ] Initial load time ≤ Vue version + 20%
- [ ] Component render time ≤ Vue version + 10%
- [ ] Memory usage within acceptable limits
- [ ] Bundle size optimized for production

### Browser Compatibility
- [ ] Chrome/Chromium (latest 2 versions)
- [ ] Firefox (latest 2 versions)
- [ ] Safari (latest 2 versions)
- [ ] Edge (latest 2 versions)

### Accessibility Compliance
- [ ] WCAG 2.1 AA compliance maintained
- [ ] Screen reader compatibility
- [ ] Keyboard navigation functional
- [ ] Focus management working correctly

## Maintenance and Documentation

### Code Documentation
```rust
/// A flexible button component with multiple variants and states.
///
/// # Examples
///
/// ```rust
/// use novyui::components::button::*;
///
/// // Basic button
/// let button = ButtonBuilder::new()
///     .label("Click me")
///     .build();
///
/// // Button with icon and custom variant
/// let icon_button = ButtonBuilder::new()
///     .label("Save")
///     .variant(ButtonVariant::Primary)
///     .left_icon("save")
///     .on_press(|| println!("Saved!"))
///     .build();
/// ```
///
/// # Accessibility
///
/// This component automatically handles:
/// - ARIA labels and roles
/// - Keyboard navigation (Enter/Space activation)
/// - Focus management
/// - Screen reader announcements
pub struct ButtonBuilder {
    // ...
}
```

### Migration Documentation
- Create migration guides for each component
- Document breaking changes and workarounds
- Provide side-by-side comparison examples
- Include performance impact analysis

### Continuous Integration
```yaml
# .github/workflows/ci.yml
name: CI
on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions-rs/toolchain@v1
        with:
          toolchain: stable
          target: wasm32-unknown-unknown
      - name: Install mzoon
        run: cargo install mzoon --git https://github.com/MoonZoon/MoonZoon --locked
      - name: Run tests
        run: cargo test
      - name: Build project
        run: mzoon build --release
      - name: Visual regression tests
        run: npm run test:visual
```

This comprehensive migration plan ensures a systematic, well-tested transition from Vue.js to MoonZoon while maintaining all functionality and improving type safety through Rust's powerful type system.
