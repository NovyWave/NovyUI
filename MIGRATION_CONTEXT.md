# NovyUI to MoonZoon Migration Context

## Project Overview & Key Decisions

### **Project Scope**
- **Source**: NovyUI Storybook component library (Vue.js + TypeScript)
- **Target**: MoonZoon-based Rust web application
- **Components**: 18 custom UI components + comprehensive design token system
- **Deployment**: Frontend-only static site (Netlify/Vercel compatible)
- **Location**: `./moonzoon-novyui/` subdirectory within existing NovyUI repository

### **Architecture Decisions**
- **Framework**: MoonZoon (Rust fullstack framework)
- **Pattern**: Builder pattern for component APIs
- **State Management**: MoonZoon's `Mutable<T>` and `Signal<T>`
- **Styling**: MoonZoon's styling system with design tokens
- **Assets**: Static files in `public/` directory
- **Routing**: MoonZoon Router for component showcase navigation

---

## Technical Patterns & Conventions (Research-Validated)

### **Component Structure Pattern**
```rust
// Standard component pattern to follow (confirmed in production)
pub struct ComponentBuilder {
    // Properties with sensible defaults
}

impl ComponentBuilder {
    pub fn new() -> Self { /* defaults */ }
    pub fn property(mut self, value: Type) -> Self { /* setter */ }
    pub fn build(self) -> impl Element { /* render */ }
}

// Usage pattern
ComponentBuilder::new()
    .property(value)
    .build()
```

### **Animation Patterns** (✅ VALIDATED)
```rust
// 1. Smooth value transitions using Tweened
let (height_tween, height_signal) = Tweened::new_and_signal(
    0.0, Duration::milliseconds(300), ease::cubic_out
);

// 2. Continuous animations using Oscillator
static SPINNER: Lazy<Oscillator> = Lazy::new(|| {
    let osc = Oscillator::new(Duration::seconds(1));
    osc.cycle_wrap(); // Continuous rotation
    osc
});

// 3. CSS Transitions for simple property changes
.s(Transitions::new([
    Transition::background_color().duration(300),
    Transition::transform().duration(200)
]))

// 4. Transform with signals for complex animations
.s(Transform::with_signal_self(
    is_expanded.signal().map(|expanded| {
        Transform::new().rotate(if expanded { 180.0 } else { 0.0 })
    })
))
```

### **File Upload Patterns** (✅ VALIDATED from ringrev_private)
```rust
// Drag-and-drop event handling
.update_raw_el(|raw_el| {
    raw_el
        .event_handler_with_options(
            EventOptions::new().preventable(),
            |event: events::DragOver| {
                event.prevent_default();
                event.data_transfer().unwrap_throw().set_drop_effect("copy");
            },
        )
        .event_handler_with_options(
            EventOptions::new().preventable(),
            |event: events::Drop| {
                event.prevent_default();
                let file_list = event.data_transfer().unwrap_throw().files().unwrap_throw();
                handle_files(file_list);
            },
        )
})

// Async file processing
fn handle_files(file_list: web_sys::FileList) {
    Task::start(async move {
        for index in 0..file_list.length() {
            let file = file_list.get(index).unwrap_throw();
            // Validation and processing
        }
    });
}
```

### **Design Token Pattern**
```rust
// Theme-reactive tokens
pub fn token_name() -> impl Signal<Item = &'static str> {
    theme().map(|t| match t {
        Theme::Light => "light_value",
        Theme::Dark => "dark_value",
    })
}

// Static tokens
pub fn static_token() -> &'static str {
    "static_value"
}
```

### **State Management Pattern**
```rust
// Global state
static GLOBAL_STATE: Lazy<Mutable<StateType>> = Lazy::new(|| Mutable::new(default));

// Component state
let local_state = Mutable::new(initial_value);
let signal = local_state.signal();
```

---

## Component Migration Priorities

### **Phase 1: Foundation (Week 1)**
1. Project setup and configuration
2. Asset migration (fonts, icons, patterns)
3. Design token system implementation
4. Theme switching functionality

### **Phase 2: Core Components (Weeks 2-4)**
1. **Icon** - Foundation for all other components
2. **Button** - Used by Input, FileInput, and others
3. **Input** - Complex component with multiple features
4. **Typography** - Text rendering components

### **Phase 3: Complex Components (Weeks 5-7)**
1. **Accordion** - State management complexity
2. **TreeView** - Hierarchical data handling
3. **Select** - Dropdown and search functionality
4. **FileInput** - File handling and drag-drop
5. **List** - Flexible data display
6. **Card, Badge, Avatar, Switch, Checkbox, TextArea, Kbd** - Remaining components

### **Phase 4: Application Shell (Week 8)**
1. Router implementation
2. Component showcase pages
3. Navigation and search
4. Final integration and optimization

---

## Critical Implementation Details

### **Asset Management**
- **Location**: All assets in `./moonzoon-novyui/public/`
- **Icons**: 60+ SVG icons from Lucide
- **Fonts**: Inter (sans), FiraCode (mono), Audiowide (display)
- **Patterns**: 5 SVG background patterns
- **Loading**: Use MoonZoon's static file serving
- **Performance**: Implement asset preloading for critical resources
- **WASM Considerations**: Test asset loading performance in WASM environment

### **Design Token System**
- **Colors**: OKLCH color space with theme switching
- **Spacing**: Pixel-based spacing scale (4px, 6px, 8px, 12px, 16px, etc.)
- **Typography**: Size, weight, line-height, letter-spacing tokens
- **Responsive**: No responsive breakpoints in current system
- **Theme Storage**: localStorage persistence for theme preference

### **Component Feature Requirements**
- **Accessibility**: ARIA attributes, keyboard navigation, focus management
- **Theming**: All components must support light/dark themes
- **Variants**: Maintain all existing component variants and states
- **Events**: Preserve all event handling functionality
- **Performance**: Optimize for WASM bundle size

---

## Reference Repositories & Patterns

### **MoonZoon Examples Used**
- **Fast2D/examples/browser_example**: Latest standalone app structure
- **ringrev_private**: State management and routing patterns (preferred)
- **examples/todomvc**: Simple state management examples
- **examples/pages**: Router implementation patterns

### **Key MoonZoon APIs**
- **Elements**: `Button`, `El`, `Row`, `Column`, `Text`
- **Styling**: `.s()` method with styling objects
- **Signals**: `Mutable<T>`, `Signal<T>`, `.signal()`, `.map()`
- **Events**: `.on_press()`, `.on_change()`, `.on_focus()`
- **Router**: `Router<Route>`, `#[route]` macro

---

## Development Workflow

### **Setup Commands**
```bash
# Install MoonZoon CLI
cargo install mzoon --git https://github.com/MoonZoon/MoonZoon --locked

# Create new project
mzoon new moonzoon-novyui

# Development server
mzoon start --open

# Production build
mzoon build --release --frontend-dist netlify
```

### **Project Structure**
```
moonzoon-novyui/
├── Cargo.toml              # Workspace configuration
├── MoonZoon.toml          # MoonZoon configuration
├── backend/
│   ├── Cargo.toml
│   └── src/main.rs        # Minimal backend for frontend-only
├── frontend/
│   ├── Cargo.toml
│   └── src/
│       ├── main.rs        # App entry point
│       ├── components/    # UI components
│       ├── tokens/        # Design tokens
│       ├── pages/         # Application pages
│       └── router.rs      # Routing logic
└── public/                # Static assets
    ├── fonts/
    ├── icons/
    └── patterns/
```

---

## Quality Standards

### **Code Quality**
- **Documentation**: Rust doc comments for all public APIs
- **Testing**: Unit tests for component builders and logic
- **Error Handling**: Proper error handling for file operations
- **Performance**: Lazy loading for complex components

### **Visual Quality**
- **Pixel Perfect**: Components must match original Vue implementation
- **Responsive**: Maintain responsive behavior where it exists
- **Animations**: Preserve smooth transitions and animations
- **Accessibility**: WCAG 2.1 AA compliance maintained

### **Functional Quality**
- **Feature Parity**: All component features must be preserved
- **State Management**: Reactive updates working correctly
- **Event Handling**: All interactions working as expected
- **Theme Switching**: Seamless light/dark mode transitions

---

## Common Pitfalls & Solutions

### **State Management**
- **Issue**: Shared mutable state between components
- **Solution**: Use `Lazy<Mutable<T>>` for global state, clone `Mutable<T>` for sharing

### **Event Handling**
- **Issue**: Event handler lifetime issues
- **Solution**: Use `move` closures and clone necessary data

### **Styling**
- **Issue**: CSS-in-JS to MoonZoon styling conversion
- **Solution**: Create helper functions for common styling patterns

### **Asset Loading**
- **Issue**: Asset paths not resolving correctly
- **Solution**: Use `/` prefix for public assets, verify in browser network tab

### **Animation & Transitions**
- **Issue**: Vue CSS transitions not directly supported
- **Solution**: Use MoonZoon Transitions API + CSS injection for complex cases

### **File Upload (WASM)**
- **Issue**: Browser File API integration complexity
- **Solution**: Use web_sys for File API, MoonZoon signals for state management

### **Component Composition**
- **Issue**: Vue slots have no direct equivalent
- **Solution**: Use children() methods and conditional rendering patterns

### **Form Validation**
- **Issue**: Cross-component form state management
- **Solution**: Global form state with validation signals

---

## Progress Tracking

### **Files to Update**
- **MIGRATION_PROGRESS.md**: Update component status, phase progress, issues
- **This file**: Update patterns, decisions, lessons learned
- **Component files**: Document implementation notes and decisions

### **Success Metrics**
- **Functional**: All components working with feature parity
- **Performance**: Load time ≤ Vue version + 20%
- **Quality**: Accessibility and visual consistency maintained
- **Deployment**: Successful static site deployment

---

## Memory Prompts for AI Assistants

### **When Continuing This Project**
1. **Read this file first** to understand context and decisions
2. **Check MIGRATION_PROGRESS.md** for current status
3. **Follow established patterns** from this document
4. **Update progress tracking** after completing tasks
5. **Maintain consistency** with existing implementation decisions

### **Key Reminders**
- Use builder pattern for all components
- Implement theme switching for all color tokens
- Preserve accessibility features from Vue components
- Test components in both light and dark themes
- Update progress files after each milestone
- Follow MoonZoon conventions from reference repositories

### **Critical Success Factors**
- **Systematic approach**: Follow the phased migration plan
- **Quality first**: Don't compromise on accessibility or functionality
- **Documentation**: Keep progress and context files updated
- **Testing**: Verify each component before moving to the next
- **Consistency**: Maintain patterns established in early components

---

**Last Updated**: [Date when context is updated]
**Next Review**: [When context should be reviewed/updated]
