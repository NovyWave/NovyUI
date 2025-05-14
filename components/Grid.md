# Grid

**Id:** Grid
**Appearance:** Responsive grid layout with rows and columns, adjustable gaps, and optional borders or background colors.
**Behavior:** Arranges child elements in a flexible grid. Supports responsive breakpoints, column/row spans, and reordering.
**Components:**
- [Card](../components/Card.md) (for grid items)
- [Image](../components/Image.md) (for image grids)
- [Button](../components/Button.md) (for grid actions)
**Used in pages:**
- [ResponsiveColumns](../pages/ResponsiveColumns.md)

---

## Grid

A layout component for arranging content in a flexible, responsive grid of rows and columns.

---

### Token Usage
The following table lists all design tokens used by the Grid component:
| Part         | Token Example         | Description                      |
|--------------|----------------------|----------------------------------|
| Gap          | spacing.grid.gap     | Space between grid items         |
| Column       | size.grid.column     | Column width                     |
| Row          | size.grid.row        | Row height                       |
| Border       | border.grid          | Grid border style                |
| Background   | color.bg.grid        | Grid background color            |

---

### Variants
All supported Grid variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used           | Notes                |
|--------------|---------------------------|----------------------------|-----------------------|----------------------|
| Default      | Standard grid             | Responsive, equal columns  | spacing.grid.gap      |                      |
| Masonry      | Masonry-style layout      | Variable row heights       | size.grid.row         |                      |
| With Cards   | Grid of cards             | Uses [Card] component      | color.bg.grid         |                      |
| With Images  | Image grid                | Uses [Image] component     | color.bg.grid         |                      |
| With Actions | Grid with action buttons  | Uses [Button] component    | color.bg.grid         |                      |

---

### States
Grid states and their token usage:
| State    | Description                | Token(s) affected         |
|----------|----------------------------|---------------------------|
| Default  | Normal display             | color.bg.grid             |
| Hover    | Grid item hovered          | color.bg.hover            |
| Selected | Grid item selected         | color.bg.selected         |
| Disabled | Grid disabled              | color.bg.disabled         |

---

### Accessibility
Accessibility features and requirements for Grid:
- Use semantic roles (`grid`, `row`, `cell`) for interactive grids.
- Ensure keyboard navigation for all interactive grid items.
- Provide visible focus indicators for grid items.
- Announce grid structure and item position to assistive technology.
- Ensure sufficient color contrast for all grid elements.
- Include ARIA roles/attributes as needed for interactive grids.
