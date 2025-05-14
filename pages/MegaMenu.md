## MegaMenu
A page for displaying a mega menu navigation component with categories and links.
- **Id:** MegaMenu
- **Appearance:** Large dropdown or overlay menu with grouped categories and links.
- **Behavior:** Allows users to navigate through categories and links, supports keyboard navigation and hover/focus interactions.
- **Blocks:**
  - [MegaMenu](../blocks/MegaMenu.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the MegaMenu page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Menu background                    |
| Text         | color.neutral.12  | Menu text                          |
| Border       | color.border.2    | Menu border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported MegaMenu variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Dropdown      | Dropdown mega menu.                          | Large dropdown, grouped links.             | All above           |       |
| Overlay       | Overlay mega menu.                           | Full-width overlay, grouped links.         | All above           |       |

---

### States
MegaMenu states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of menu.            | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Open      | Menu is open.                      | Border, Text          |

---

### Accessibility
Accessibility features and requirements for MegaMenu:
- Keyboard navigation: Tab to all links and categories, Arrow keys to navigate, Enter/Space to activate.
- ARIA roles/attributes: menu, menuitem, group, region.
- Color contrast: Sufficient for all text, links, and categories.
- Focus indicator: Visible and uses the focus token.
