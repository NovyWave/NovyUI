## Navbars
A block for displaying a horizontal navigation bar with links, branding, and actions.
- **Id:** Navbars
- **Appearance:** Horizontal bar at the top with logo, links, and optional buttons.
- **Behavior:** Stays at the top, may include dropdowns, search, or user menu.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
  - [Menu](../components/Menu.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the Navbars block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Navbar background                  |
| Text         | color.neutral.12  | Navbar link and text               |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Navbar border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Navbars variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard navbar with links.                  | Static links and logo.                     | All above           |       |
| WithDropdowns | Navbar includes dropdown menus.              | Dropdowns for grouped links.               | All above           |       |
| WithSearch    | Navbar includes search input.                | Search field in navbar.                    | All above           |       |

---

### States
Navbars states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of navbar.          | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link or button is hovered.         | Border, Icon          |

---

### Accessibility
Accessibility features and requirements for Navbars block:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: navigation, menubar, menuitem, and button.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
