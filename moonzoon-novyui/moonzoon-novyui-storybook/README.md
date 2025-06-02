# MoonZoon NovyUI Storybook

Interactive component showcase and documentation for the MoonZoon NovyUI component library. This Storybook application demonstrates all components with live examples, code snippets, and design guidelines.

## Features

- **Live Component Examples**: Interactive demonstrations of all UI components
- **Design System Documentation**: Complete design token system showcase
- **Theme Switching**: Toggle between light and dark themes
- **Component Navigation**: Easy browsing of all available components
- **Code Examples**: Real implementation examples for each component

## Getting Started

### Prerequisites

- Rust (latest stable)
- MoonZoon CLI tools

### Running the Storybook

1. Navigate to the storybook directory:
   ```bash
   cd moonzoon-novyui-storybook
   ```

2. Start the development server:
   ```bash
   mzoon start
   ```

3. Open your browser to `http://localhost:8080`

## Project Structure

```
moonzoon-novyui-storybook/
├── backend/           # MoonZoon backend
├── frontend/          # Storybook frontend application
│   ├── src/
│   │   ├── main.rs    # Application entry point
│   │   ├── stories/   # Component demonstrations
│   │   ├── router.rs  # Navigation routing
│   │   └── store.rs   # Application state
├── shared/            # Shared types
├── public/            # Static assets (fonts, icons, patterns)
├── MoonZoon.toml      # MoonZoon configuration
└── README.md
```

## Available Components

The Storybook showcases the following components from the `moonzoon-novyui` library:

### Form Components
- **Button**: Primary, secondary, outline, ghost, link, and destructive variants
- **Input**: Text inputs with validation, icons, and error states
- **Checkbox**: Checkboxes with indeterminate state support
- **Switch**: Toggle switches with icons and accessibility support
- **Select**: Dropdown selects with search and multi-selection
- **Textarea**: Multi-line text inputs with auto-resize

### Display Components
- **Badge**: Status indicators with multiple variants and removable functionality
- **Typography**: Headings, paragraphs, and text utilities
- **Icon**: Comprehensive icon system with multiple sizes and colors
- **Card**: Content containers with headers, bodies, and actions
- **List**: Flexible list components for data display
- **Avatar**: User profile images and placeholders

### Navigation Components
- **TreeView**: Hierarchical data display with expand/collapse
- **Accordion**: Collapsible content sections

### Feedback Components
- **Alert**: Contextual feedback messages
- **Kbd**: Keyboard shortcut display components

### Utility Components
- **FileInput**: File upload components
- **Pattern**: Background pattern utilities

## Design System

The Storybook also documents the complete design token system:

- **Color Palette**: Semantic color scales with light/dark theme support
- **Typography Scale**: Font families, sizes, weights, and line heights
- **Spacing System**: Consistent spacing scale from 4px to 150px
- **Border System**: Border widths and styles
- **Corner Radius**: Consistent border radius values
- **Shadow System**: Elevation system with multiple shadow levels
- **Animation Tokens**: Smooth transitions and timing functions

## Navigation

- **Home**: Overview of all components
- **Individual Components**: Dedicated pages for each component
- **Theme Toggle**: Switch between light and dark themes
- **URL Routing**: Direct links to specific components

## Development

This Storybook is built using the `moonzoon-novyui` component library as a dependency, demonstrating how to use the components in a real application.

### Adding New Stories

1. Create a new story file in `frontend/src/stories/`
2. Add the story to `frontend/src/stories/mod.rs`
3. Update the navigation in `frontend/src/main.rs`
4. Add routing in `frontend/src/router.rs`

## License

MIT
