# Icon

## Icon

**Id:** Icon
**Appearance:** Inline SVG or font-based symbol, scalable, monochrome or multicolor, inherits parent color by default.
**Behavior:** Non-interactive by default; can be wrapped in a button or link for interactive use. Supports accessibility labeling.
**Used in blocks:**
- [TextEditorToolbar](../blocks/TextEditorToolbar.md)
- [IconTooltips](../blocks/IconTooltips.md)

---

### Token Usage
The following table lists all design tokens used by the Icon component:
| Part   | Token Example         | Description                |
|--------|----------------------|----------------------------|
| Color  | color.icon.primary   | Icon fill/stroke color     |
| Size   | size.icon.md         | Icon size (width/height)   |
| Stroke | border.icon.thin     | Icon stroke width (if SVG) |

---

### Variants
All supported Icon variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used           | Notes                |
|--------------|---------------------------|----------------------------|-----------------------|----------------------|
| Default      | Standard icon             | Inherits parent color      | color.icon.primary    |                      |
| Multicolor   | Multi-tone SVG icon       | Uses multiple fill colors  | color.icon.secondary  |                      |
| Button       | Icon in a button          | Interactive, focusable     | color.icon.button     | Use with [Button]    |
| Disabled     | Disabled state            | Reduced opacity, no action | color.icon.disabled   |                      |

---

### States
Icon states and their token usage:
| State    | Description                | Token(s) affected         |
|----------|----------------------------|---------------------------|
| Default  | Normal display             | color.icon.primary        |
| Hover    | On hover (if interactive)  | color.icon.hover          |
| Active   | On click/press (if button) | color.icon.active         |
| Disabled | Disabled state             | color.icon.disabled       |

---

### Accessibility
Accessibility features and requirements for Icon:
- Keyboard navigation
- ARIA roles/attributes (e.g., `aria-label`, `aria-hidden`, `role="img"`)
- Sufficient color contrast for all icon states
- Visible focus indicator when interactive
