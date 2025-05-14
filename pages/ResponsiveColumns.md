## ResponsiveColumns
A page for displaying content in columns that adapt to screen size and device.
- **Id:** ResponsiveColumns
- **Appearance:** Multi-column layout that stacks or reflows on smaller screens.
- **Behavior:** Columns adjust responsively, may include cards, images, or text blocks.
- **Blocks:**
  - [ResponsiveColumns](../blocks/ResponsiveColumns.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the ResponsiveColumns page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Column/card border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ResponsiveColumns variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| TwoColumn     | Two responsive columns.                      | Stacks on small screens.                   | All above           |       |
| ThreeColumn   | Three responsive columns.                    | Stacks on small screens.                   | All above           |       |

---

### States
ResponsiveColumns states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of columns.         | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Stacked   | Columns are stacked (mobile).      | Border, Text          |

---

### Accessibility
Accessibility features and requirements for ResponsiveColumns:
- Keyboard navigation: Tab to all columns and controls, Enter/Space to activate.
- ARIA roles/attributes: region, button, grid.
- Color contrast: Sufficient for all text, columns, and controls.
- Focus indicator: Visible and uses the focus token.
