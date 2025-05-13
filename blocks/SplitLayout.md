## SplitLayout
A block for displaying content in two or more resizable or fixed sections side by side.
- **Id:** SplitLayout
- **Appearance:** Horizontal or vertical split with draggable divider.
- **Behavior:** Allows users to resize or collapse sections.
- **Components:**
  - [Divider](../components/Divider.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Editor](../pages/Editor.md)

---

### Token Usage
The following table lists all design tokens used by the SplitLayout block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Section background                 |
| Text         | color.neutral.12  | Section text                       |
| Divider      | color.border.2    | Divider color                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported SplitLayout variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard horizontal split.                   | Two sections side by side.                 | All above           |       |
| Vertical      | Vertical split layout.                       | Sections stacked vertically.               | All above           |       |
| Collapsible   | One section can be collapsed.                | Collapse/expand button.                    | All above           |       |

---

### States
SplitLayout states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of split.           | All above             |
| Focused   | Divider or section is focused.     | Focus Ring            |
| Collapsed | Section is collapsed.              | Background, Divider   |

---

### Accessibility
Accessibility features and requirements for SplitLayout block:
- Keyboard navigation: Tab to divider and sections, Arrow keys to resize.
- ARIA roles/attributes: group, separator, and region.
- Color contrast: Sufficient for all text, backgrounds, and divider.
- Focus indicator: Visible and uses the focus token.
