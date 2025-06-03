# MoonZoon NovyUI Workspace

A comprehensive UI component library and Storybook for MoonZoon applications. This workspace contains two main crates that work together to provide a complete design system solution.

## Workspace Structure

```
moonzoon-novyui/
├── moonzoon-novyui/              # 🎨 UI Component Library
│   ├── src/
│   │   ├── lib.rs                # Library entry point
│   │   ├── components/           # All UI components
│   │   └── tokens/               # Design token system
│   └── README.md
├── moonzoon-novyui-storybook/    # 📚 Interactive Storybook
│   ├── backend/                  # MoonZoon backend
│   ├── frontend/                 # Storybook application
│   ├── public/                   # Static assets
│   └── README.md
└── Cargo.toml                    # Workspace configuration
```

## Crates

### 🎨 `moonzoon-novyui` - Component Library

The core UI component library that provides:

- **18+ Production-Ready Components**: Button, Badge, Input, Switch, Checkbox, Select, and more
- **Complete Design System**: Comprehensive token system for colors, spacing, typography
- **Type Safety**: Full Rust type safety with compile-time guarantees
- **Accessibility**: Built-in ARIA support and keyboard navigation
- **Theming**: Light/dark theme support with smooth transitions
- **Zero Dependencies**: Only depends on `zoon` from MoonZoon

**Use this crate when**: Building production MoonZoon applications that need UI components.

### 📚 `moonzoon-novyui-storybook` - Interactive Documentation

A complete Storybook application that showcases the component library:

- **Live Component Examples**: Interactive demonstrations of all components
- **Design Documentation**: Complete design system showcase
- **Theme Switching**: Toggle between light and dark themes
- **Component Navigation**: Easy browsing with URL routing
- **Real Implementation**: Shows how to use the component library

**Use this crate when**: Exploring components, learning the API, or contributing to the library.

## Quick Start

### Using the Component Library

1. Add the component library to your MoonZoon project:

```toml
[dependencies]
moonzoon-novyui = { path = "../path/to/moonzoon-novyui/moonzoon-novyui" }
zoon = { git = "https://github.com/MoonZoon/MoonZoon", rev = "4428421b26fbb8b62670c44d911c9ba4c7f0c11b" }
```

2. Import and use components:

```rust
use moonzoon_novyui::*;
use zoon::*;

fn my_app() -> impl Element {
    Column::new()
        .item(
            button("Get Started")
                .variant(ButtonVariant::Primary)
                .size(ButtonSize::Large)
                .on_press(|| { /* handle click */ })
                .build()
        )
        .item(
            badge("New")
                .variant(BadgeVariant::Success)
                .build()
        )
}
```

### Running the Storybook

#### Prerequisites

First, install MoonZoon CLI by following the [MoonZoon installation guide](https://github.com/MoonZoon/MoonZoon?tab=readme-ov-file#create--run-project).

#### Running the Storybook

1. Navigate to the storybook directory:
   ```bash
   cd moonzoon-novyui-storybook
   ```

2. Start the development server:
   ```bash
   mzoon start
   ```

3. Open `http://localhost:8080` in your browser

## Available Components

- **Button**: Primary, secondary, outline, ghost, link, destructive variants
- **Badge**: Status indicators with removable functionality
- **Input**: Text inputs with validation and icons
- **Switch**: Toggle switches with accessibility support
- **Checkbox**: Checkboxes with indeterminate state
- **Select**: Dropdown selects with search and multi-selection
- **Typography**: Headings, paragraphs, and text utilities
- **Icon**: Comprehensive icon system (100+ icons)
- **TreeView**: Hierarchical data display
- **Kbd**: Keyboard shortcut display
- **Card**: Content containers
- **List**: Flexible list components
- **Avatar**: User profile images
- **Textarea**: Multi-line text inputs
- **Accordion**: Collapsible content sections
- **Alert**: Contextual feedback messages
- **FileInput**: File upload components

## Design System

Complete design token system including:

- **Colors**: Semantic color scales (primary, neutral, success, warning, error)
- **Spacing**: Consistent scale from 4px to 150px
- **Typography**: Font families, sizes, weights, line heights
- **Borders**: Border widths and styles
- **Corner Radius**: Consistent border radius values
- **Shadows**: Elevation system with multiple levels
- **Animation**: Smooth transitions and timing functions

### Contributing

1. Make changes to components in `moonzoon-novyui/src/components/`
2. Update stories in `moonzoon-novyui-storybook/frontend/src/stories/`
3. Test changes by running the Storybook
4. Ensure all components work in both light and dark themes

## Architecture Benefits

This workspace structure provides:

- **Clean Separation**: Component library is independent of Storybook
- **Easy Integration**: Component library can be used in any MoonZoon project
- **Development Workflow**: Storybook provides immediate feedback during development
- **Documentation**: Live examples serve as both docs and tests
- **Modularity**: Each crate has a single, focused responsibility

## License

MIT
