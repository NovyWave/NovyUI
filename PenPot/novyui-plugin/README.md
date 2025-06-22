# NovyUI PenPot Plugin

A PenPot plugin that recreates the complete NovyUI design system from MoonZoon implementation, featuring automatic token import and component generation.

## 🚀 Features

- **Complete Button System**: 6 variants × 5 states + 3 sizes (36 components total)
- **Design Token Import**: All NovyUI tokens (colors, spacing, typography, etc.)
- **Theme Support**: Light/Dark theme token sets ready for PenPot
- **Exact Recreation**: MoonZoon button specifications with proper styling
- **Auto-recompilation**: Instant development workflow with file watching

## 📦 Development Setup

### ✅ **HTTPS Development Workflow**

**⚠️ HTTPS Required**: PenPot (https://design.penpot.app) requires plugins to be served over HTTPS to avoid Mixed Content security restrictions.

1. **Install dependencies:**
```bash
npm install
```

2. **Generate SSL certificate (first time only):**
```bash
openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/C=US/ST=Dev/L=Dev/O=Dev/CN=localhost"
```
*This creates `cert.pem` and `key.pem` files for HTTPS development.*

3. **Start development (auto-recompiles on changes):**
```bash
npm run dev
```
*Runs vite with HTTPS, auto-reload, and CORS support.*

4. **Accept the SSL certificate:**
   - Visit https://localhost:5173/manifest.json in your browser
   - Click through the "Your connection is not private" warning
   - Click "Advanced" → "Proceed to localhost (unsafe)"
   - *This is normal for self-signed certificates in development*

5. **Install in PenPot:**
   - Go to Plugins → Manage Plugins  
   - Click "Install plugin from URL"
   - Enter: `https://localhost:5173/manifest.json` (**HTTPS required**)
   - Click Install

### 🔧 **Development Commands**

```bash
# Start development with auto-recompilation
npm run dev

# Type checking (catches errors)
npm run type-check

# Production build
npm run build

# Preview built plugin
npm run serve
```

## 🎨 Components Available

### **Button System** (Complete MoonZoon Recreation)
- **6 Variants**: Primary, Secondary, Outline, Ghost, Link, Destructive
- **5 States**: Normal, Hover, Focus, Disabled, Loading  
- **3 Sizes**: Small (88×32px), Medium (104×40px), Large (116×48px)
- **Exact Styling**: Uses proper NovyUI tokens (colors, spacing, typography)

### **Token Categories**
- **Colors**: Primary, Neutral, Success, Warning, Error (Light/Dark)
- **Spacing**: 0-150px scale
- **Typography**: Font sizes, weights, families
- **Corner Radius**: 0-16px + full
- **Opacity**: Disabled, hover, focus states
- **Shadows**: Themed shadow system

## 🔧 Plugin Usage

1. **Create Buttons**: Click "Create Buttons" for complete button system
2. **Import Tokens**: Creates comprehensive token demonstration  
3. **Remove Tokens**: Cleanup functionality
4. **Test API**: Verify PenPot plugin capabilities

## 🛠️ Technical Architecture

- **Framework**: TypeScript + Vite (optimized for plugin development)
- **API**: PenPot Plugin API with full content permissions
- **Tokens**: OKLCH → Hex conversion for PenPot compatibility  
- **Structure**: 
  - `src/plugin.ts` - Main plugin logic
  - `src/main.ts` - UI interface
  - `src/novyui-tokens-hex.ts` - All design tokens
  - `manifest.json` - Plugin configuration

## 📊 Migration Status

### ✅ **Completed**
- Complete button system recreation
- All design token categories
- Auto-recompilation workflow
- TypeScript integration
- Transparent color handling

### 🔄 **In Progress**  
- Additional component systems (Input, Card, Badge, etc.)
- Component state matrices
- Advanced animations
- Focus ring implementations

## 🚀 Production Deployment

1. **Build for production:**
```bash
npm run build
```

2. **Deploy the `dist` folder** to any web server

3. **Share manifest URL:** `https://your-domain.com/manifest.json`

## 📋 Known Limitations

- **Font Weight**: PenPot supports 400 only (500+ converted to 400)
- **Text Decoration**: Underlines need separate elements
- **Token References**: Manual JSON import required for dynamic tokens
- **Theme Switching**: Static components (theme switching via token import)

## 🔄 Development Workflow

The plugin features **instant HTTPS auto-recompilation**:

1. Start dev server: `npm run dev` (serves HTTPS on port 5173)
2. Make changes to `src/plugin.ts` or other files
3. Vite automatically rebuilds in <2 seconds  
4. Browser auto-reloads with latest changes
5. TypeScript errors caught during compilation

**Benefits:**
- ✅ **HTTPS**: Works with PenPot's security requirements
- ✅ **Auto-reload**: No manual refreshing needed
- ✅ **CORS**: Proper cross-origin headers
- ✅ **No conflicts**: Single vite process handles everything

**No more manual restarts, CORS errors, or cache issues!**

## 🤝 Contributing

Part of the NovyUI design system migration from MoonZoon to PenPot. 

**Architecture follows**:
- MoonZoon button specifications
- WCAG accessibility standards
- PenPot plugin best practices
- Token-based design principles