## Sidebar
A block for displaying a vertical navigation or content sidebar.
- **Id:** Sidebar
- **Appearance:** Vertical panel with links, icons, and optional actions.
- **Behavior:** Provides navigation or additional content alongside main content.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the Sidebar block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Sidebar background                 |
| Text         | color.neutral.12  | Sidebar link and text              |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Sidebar border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Sidebar variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard sidebar with links.                 | Static links and icons.                    | All above           |       |
| WithActions   | Sidebar includes action buttons.             | Buttons for actions.                       | All above           |       |
| Collapsible   | Sidebar can be collapsed/expanded.           | Toggle button for collapse.                | All above           |       |

---

### States
Sidebar states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of sidebar.         | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Collapsed | Sidebar is collapsed.              | Background, Border    |

---

### Accessibility
Accessibility features and requirements for Sidebar block:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: navigation, group, and button.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
