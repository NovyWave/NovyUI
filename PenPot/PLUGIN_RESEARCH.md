# PenPot Plugin System Research - Cloudflare Workaround

## 🎯 **Plugin as Cloudflare Bypass Strategy**

PenPot plugins run **inside the PenPot application**, completely bypassing Cloudflare protection that blocks external API calls.

## 📋 **Plugin API Capabilities**

### **Available Methods (Confirmed):**
```typescript
// Shape Creation
penpot.createRectangle()
penpot.createEllipse()
penpot.createPath()
penpot.createBoard()

// Shape Manipulation
shape.resize(width, height)
shape.name = "component-name"
shape.fills = [{ fillColor: "#FF0000" }]
shape.borderRadius = 8
shape.strokes = [{ strokeColor: "#000000", strokeWidth: 2 }]

// UI Management
penpot.ui.open("Plugin Name", "plugin-url")
penpot.ui.onMessage<MessageType>()

// Viewport Control
penpot.viewport.center
```

### **Plugin Examples Available:**
- ✅ **Create Shape** - Basic shape creation
- ✅ **Components Library** - Component management
- ✅ **Colors Library** - Color system management
- ✅ **Theme** - Theme switching
- ✅ **FlexLayout/GridLayout** - Layout systems
- ❓ **Design Token Import** - Unknown scope

## 🚀 **NovyUI Plugin Strategy**

### **Phase 1: Token Import Plugin**
```typescript
// Concept: NovyUI Design Token Importer
interface NovyUIPlugin {
  importColorTokens(tokens: W3CColorTokens): void;
  importTypographyTokens(tokens: W3CTypographyTokens): void;
  importSpacingTokens(tokens: W3CSpacingTokens): void;
  setupThemeVariants(lightTheme: Theme, darkTheme: Theme): void;
}
```

### **Phase 2: Component Generator Plugin**
```typescript
// Concept: NovyUI Component Creator
interface ComponentGenerator {
  createButton(variant: ButtonVariant, state: ComponentState): Shape;
  createInput(variant: InputVariant, state: ComponentState): Shape;
  createCard(config: CardConfig): Shape;
  batchCreateComponents(specs: ComponentSpec[]): Shape[];
}
```

### **Phase 3: Design System Plugin**
```typescript
// Concept: Complete NovyUI Migration
interface DesignSystemPlugin {
  createComponentLibrary(components: ComponentSpec[]): void;
  organizeByCategory(): void;
  setupDesignTokens(): void;
  createDocumentation(): void;
}
```

## 📦 **Plugin Development Setup**

### **Requirements:**
```json
{
  "dependencies": {
    "@penpot/plugin-types": "latest"
  },
  "devDependencies": {
    "typescript": "latest",
    "vite": "latest"
  }
}
```

### **File Structure:**
```
novyui-plugin/
├── src/
│   ├── plugin.ts          # Main plugin logic (penpot object access)
│   ├── main.ts           # UI interface 
│   └── novyui-tokens.json # Our generated tokens
├── index.html            # Plugin UI
├── manifest.json         # Plugin metadata
└── package.json
```

### **Permissions Needed:**
```json
{
  "permissions": [
    "content:read",
    "content:write"
  ]
}
```

## 🔍 **Plugin Limitations & Unknowns**

### **❓ Unknown Capabilities:**
- Can plugins create **new projects**?
- Can plugins import **external files**?
- Can plugins access **team/workspace** APIs?
- What's the scope of **component creation**?
- Can plugins **batch import** design tokens?

### **✅ Confirmed Capabilities:**
- Shape creation and manipulation
- Color and style management
- UI interface development
- Message passing between plugin and UI
- Viewport control

### **🚫 Likely Limitations:**
- No direct file system access
- Limited to current project/page scope
- May not access team-level settings
- Uncertain project creation abilities

## 🎯 **Recommended Approach**

### **Option 1: Quick Plugin Test**
1. Create minimal NovyUI token import plugin
2. Test token application to shapes
3. Validate component creation capabilities
4. Assess automation potential

### **Option 2: Hybrid Approach**
1. Use email/password auth for project creation
2. Develop plugin for token/component import
3. Combine external automation + internal plugin
4. Maximum automation with working auth

### **Option 3: Full Plugin Development**
1. Research component library creation in plugins
2. Build comprehensive NovyUI migration plugin
3. Host plugin for easy installation
4. Complete Cloudflare bypass solution

## 📊 **Plugin vs API Comparison**

| Feature | Plugin API | External API |
|---------|------------|--------------|
| **Cloudflare** | ✅ Bypassed | ❌ Blocked |
| **Authentication** | ✅ Automatic | ❌ Complex |
| **Project Creation** | ❓ Unknown | ❌ Blocked |
| **Component Creation** | ✅ Confirmed | ❌ Blocked |
| **Token Import** | ✅ Likely | ❌ Blocked |
| **Automation** | ✅ UI-based | ❌ Script-based |
| **Distribution** | 🌐 URL install | 📦 Script package |

## 🎯 **Next Steps**

1. **Create minimal plugin** to test token import
2. **Test component creation** scope and limitations
3. **Evaluate project-level** plugin capabilities
4. **Decide on plugin vs email/password** approach
5. **Implement chosen solution** for NovyUI migration

**Conclusion:** Plugins offer a promising **Cloudflare bypass** but need testing to confirm automation scope for design system migration.