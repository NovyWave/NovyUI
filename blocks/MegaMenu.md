## MegaMenu
A block for displaying a large, multi-column dropdown menu with grouped navigation links.
- **Id:** MegaMenu
- **Appearance:** Wide dropdown with columns of links, icons, and headings.
- **Behavior:** Opens on hover/click, allows navigation to grouped sections.
- **Components:**
  - [Menu](../components/Menu.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Navbars](../pages/Navbars.md)
  - [Landing](../pages/Landing.md)

---

### Token Usage
The following table lists all design tokens used by the MegaMenu block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Menu background                    |
| Text         | color.neutral.12  | Menu item text                     |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Menu border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported MegaMenu variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard multi-column menu.                  | Static columns of links.                   | All above           |       |
| WithIcons     | Menu items have icons.                       | Icon shown for each item.                  | All above           |       |
| WithImages    | Menu includes images or banners.             | Images in menu columns.                    | All above           |       |

---

### States
MegaMenu states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of menu.            | All above             |
| Focused   | Menu item is focused.              | Focus Ring            |
| Hovered   | Menu item is hovered.              | Border, Icon          |

---

### Accessibility
Accessibility features and requirements for MegaMenu block:
- Keyboard navigation: Tab/Arrow keys to menu items, Enter/Space to activate.
- ARIA roles/attributes: menu, menuitem, group, and navigation.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
