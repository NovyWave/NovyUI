# PenPot Limitations for NovyUI Automation

## 🔎 TL;DR

**PenPot automation is currently impractical for NovyUI design systems due to 4 critical limitations:**

1. **No Component Variants** → Need 313 individual components instead of 18 with variants
2. **No Dynamic Token References** → Must duplicate all components for light/dark themes *(plugin API only, manual GUI works)*
3. **Broken Layout System** → Gap/padding properties don't work, requires complex spacer workarounds *(plugin API only, manual GUI works)*
4. **Limited Plugin API** → Can't programmatically manage tokens or set theme-aware properties

**Bottom line**: 2-3x more manual work than expected, maintenance becomes nearly impossible due to hardcoded values. **Wait for component variants and better token API before attempting full automation.**

---

## 🚨 Critical Issues

### 1. **No Component Variants**
The biggest problem. Instead of 18 components with variants, you need 313 individual components. Button alone needs 36 separate components (6 variants × 6 states). Community calls this "the deciding factor for Figma vs PenPot."

**Workaround**: Create separate components with naming like "Button-Primary-Normal", "Button-Primary-Hover", etc.

### 2. **No Dynamic Token References (Plugin API)**
Can't set `{color.primary.7}` token references via plugin. Only hardcoded hex values work. This breaks the whole point of design tokens.

**Impact**: Must create duplicate components for light/dark themes. Everything is hardcoded.

```typescript
// ❌ Doesn't work
element.fills = [{ fillColor: "{color.primary.7}" }];

// ✅ Only this works (but breaks theming)
element.fills = [{ fillColor: "#3B82F6" }]; // hardcoded
```

### 3. **Layout System Issues (Plugin API)**
Gap and padding properties don't work in the plugin API. Elements touch borders despite setting padding. Works fine in the GUI though.

**Workaround**: Use transparent spacer rectangles between elements.

```typescript
// ❌ Doesn't work
layout.gap = 16; 
layout.paddingLeft = 12; // elements still touch borders

// ✅ Workaround
const spacer = penpot.createRectangle();
spacer.resize(12, height);
spacer.fills = []; // transparent
container.appendChild(spacer);
```

---

## ⚠️ Other Issues

### **HTTPS/CORS Setup Pain**
Cloud PenPot needs HTTPS plugins, but the official templates use HTTP. You get cryptic CORS errors instead of clear "use HTTPS" messages.

**Fix**: Generate SSL cert and serve plugin over HTTPS.

### **API Authentication Weirdness**
Tokens are more secure but have limited functionality. Username/password gives full access. MCP servers had to use username/password because tokens can't export images.

### **Plugin Performance**
Plugins block the main browser thread during component creation. UI becomes unresponsive but doesn't break functionality.

## 🗓️ What's Being Fixed

**Component Variants**: Active development happening (PRs #6051, #5876, #6131) but PenPot doesn't give timeline estimates. They say: *"When innovating, commitments can be tricky."*

**Token API**: No timeline for plugin improvements.

**Layout Issues**: Not acknowledged as bugs yet.

---

## 💡 What Actually Works

- **Individual shape creation**: Basic plugin automation works fine
- **Design tokens in GUI**: PenPot has excellent W3C-compliant token system (just not via plugin API)
- **Manual layout**: Gap/padding work perfectly when done through the interface
- **Plugin ecosystem**: Well-documented with good examples

## 🔧 Current Workarounds

**Component Variants**: Name them "Button-Primary-Normal", "Button-Primary-Hover", etc.

**Token References**: Create everything twice - light theme container and dark theme container with hardcoded colors.

**Layout Spacing**: Use transparent spacer rectangles instead of gap/padding properties.

**HTTPS Setup**: Generate SSL cert and serve plugins over HTTPS (not documented in official guides).

---

PenPot automation for design systems isn't ready yet. The plugin API is too limited, and the missing component variants make it impractical. You'll spend 2-3x more time creating everything manually than using existing design system tools.

**Wait for**: Component variants support and better plugin API token management.

**Use now for**: Individual component creation or manual design work where PenPot's open-source nature matters more than automation efficiency.

---

**Research date**: June 2025 | **Based on**: PenPot 2.3+ plugin system