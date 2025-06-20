# NovyUI PenPot Plugin

A PenPot plugin that imports NovyUI design tokens and creates components, bypassing Cloudflare API restrictions.

## 🚀 Features

- **Token Import**: Import NovyUI color tokens as visual swatches
- **Component Creation**: Generate NovyUI components with proper styling
- **API Testing**: Verify PenPot plugin capabilities
- **Batch Operations**: Create multiple component variants at once

## 📦 Installation

### Development Mode

1. Install dependencies:
```bash
npm install
```

2. Start development server:
```bash
npm run dev
```

3. In PenPot:
   - Go to Plugins → Manage Plugins
   - Click "Install plugin from URL"
   - Enter: `http://localhost:5173/manifest.json`
   - Click Install

### Production Build

1. Build the plugin:
```bash
npm run build
```

2. Host the `dist` folder on any web server
3. Share the manifest URL for installation

## 🔧 Usage

1. **Test Capabilities**: Click "Test Plugin API" to see available methods
2. **Import Tokens**: Creates color swatches from NovyUI tokens
3. **Create Components**: 
   - "Create Test Button" - Single button example
   - "Create All Components" - Batch create variants

## 🎨 Components Created

- **Button**: Primary, Secondary, Outline variants
- **Input**: Text, Email, Password types
- **Card**: Default, Elevated, Outlined styles
- **Badge**: Default, Success, Warning, Error states

## 🛠️ Technical Details

- **Framework**: TypeScript + Vite
- **API**: PenPot Plugin API with content:read/write permissions
- **Tokens**: Converted from OKLCH to hex for compatibility
- **Architecture**: Separate plugin.ts (API) and main.ts (UI)

## 📋 Limitations

- Cannot create new projects (current page only)
- Text creation depends on PenPot version
- Shadow effects may not be directly settable
- Component organization is manual

## 🚀 Future Enhancements

- [ ] Full component library (18 components)
- [ ] Theme switching (light/dark)
- [ ] Typography token import
- [ ] Spacing system application
- [ ] Component state variations
- [ ] Auto-organization by category

## 🤝 Contributing

This plugin is part of the NovyUI design system migration project.