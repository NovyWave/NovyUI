## ResponsiveColumns
A block for arranging content in responsive columns that adapt to screen size.
- **Id:** ResponsiveColumns
- **Appearance:** Multiple columns that stack or resize on smaller screens.
- **Behavior:** Adjusts layout based on viewport width.
- **Components:**
  - [Grid](../components/Grid.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the ResponsiveColumns block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Column background                  |
| Text         | color.neutral.12  | Column text                        |
| Border       | color.border.2    | Column border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ResponsiveColumns variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard responsive columns.                 | Columns stack on small screens.            | All above           |       |
| WithGaps      | Columns have spacing/gaps.                   | Gaps between columns.                      | All above           |       |
| WithCards     | Columns contain card components.             | Cards in each column.                      | All above           |       |

---

### States
ResponsiveColumns states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of columns.         | All above             |
| Focused   | Column or content is focused.      | Focus Ring            |
| Selected  | Column is selected.                | Background, Border    |

---

### Accessibility
Accessibility features and requirements for ResponsiveColumns block:
- Keyboard navigation: Tab to columns and content, Enter/Space to activate (if interactive).
- ARIA roles/attributes: region, group, and column.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
