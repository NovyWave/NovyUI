## Navbars
A navigation bar page demonstrating different navbar layouts, links, and responsive behaviors.
- **Id:** Navbars
- **Appearance:** Horizontal or vertical navigation bar with links, icons, and responsive layout.
- **Behavior:** Supports navigation, dropdowns, and adapts to screen size. May include sticky or collapsible navbars.
- **Blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Navbars page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Navbar background                  |
| Text         | color.neutral.12  | Navbar text                        |
| Border       | color.border.2    | Navbar border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Navbars variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Horizontal    | Horizontal navigation bar.                   | Top of page, links, icons, responsive.     | All above           |       |
| Vertical      | Vertical navigation bar.                     | Side of page, links, icons, responsive.    | All above           |       |
| Sticky        | Sticky navigation bar.                       | Stays at top on scroll.                    | All above           |       |
| Collapsible   | Collapsible navigation bar.                  | Can be expanded/collapsed.                 | All above           |       |

---

### States
Navbars states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of navbar.          | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Active    | Link is active/selected.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Navbars:
- Keyboard navigation: Tab to all links and controls, Enter/Space to activate.
- ARIA roles/attributes: navigation, link, button, region.
- Color contrast: Sufficient for all text, links, and controls.
- Focus indicator: Visible and uses the focus token.
