## Mobile
A mobile navigation or landing page optimized for smartphones and tablets. Features touch-friendly navigation, mobile-specific layouts, and responsive design.
- **Id:** Mobile
- **Appearance:** Mobile-optimized layout, touch-friendly navigation, and responsive components.
- **Behavior:** Supports touch gestures, mobile navigation drawers, and adapts to screen size.
- **Blocks:**
  - [MobileNavigationDrawer](../blocks/MobileNavigationDrawer.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Mobile page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Navigation drawer border           |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Mobile variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Navigation    | Mobile navigation drawer.                    | Drawer, touch gestures, responsive.        | All above           |       |
| Landing       | Mobile landing page.                         | Responsive layout, touch-friendly.         | All above           |       |

---

### States
Mobile states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of mobile page.     | All above             |
| Focused   | Button or nav item is focused.     | Focus Ring            |
| Open      | Navigation drawer is open.         | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Mobile:
- Keyboard navigation: Tab to all nav items and controls, Enter/Space to activate.
- ARIA roles/attributes: navigation, button, region.
- Color contrast: Sufficient for all text, nav, and controls.
- Focus indicator: Visible and uses the focus token.
