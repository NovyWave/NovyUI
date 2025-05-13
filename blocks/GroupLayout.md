## GroupLayout
A block for arranging content in grouped sections or layouts.
- **Id:** GroupLayout
- **Appearance:** Multiple grouped containers, each with a title and content.
- **Behavior:** Organizes related content visually and semantically.
- **Components:**
  - [Card](../components/Card.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the GroupLayout block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Group background                   |
| Text         | color.neutral.12  | Group title and content text       |
| Border       | color.border.2    | Group border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported GroupLayout variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard grouped layout.                     | Static groups of content.                  | All above           |       |
| WithHeaders   | Groups have section headers.                 | Header for each group.                     | All above           |       |
| WithActions   | Groups include action buttons.               | Actions for each group.                    | All above           |       |

---

### States
GroupLayout states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of groups.          | All above             |
| Focused   | Group or action is focused.        | Focus Ring            |
| Selected  | Group is selected.                 | Background, Border    |

---

### Accessibility
Accessibility features and requirements for GroupLayout block:
- Keyboard navigation: Tab to groups and actions, Enter/Space to activate.
- ARIA roles/attributes: group, region, and button.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
