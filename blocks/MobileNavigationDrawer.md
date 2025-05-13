## MobileNavigationDrawer
A block for displaying a slide-in navigation menu on mobile devices.
- **Id:** MobileNavigationDrawer
- **Appearance:** Drawer panel with navigation links and icons, slides in from the side.
- **Behavior:** Opens/closes with animation, overlays content, supports nested navigation.
- **Components:**
  - [Drawer](../components/Drawer.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Mobile](../pages/Mobile.md)
  - [Navbars](../pages/Navbars.md)

---

### Token Usage
The following table lists all design tokens used by the MobileNavigationDrawer block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Drawer background                  |
| Text         | color.neutral.12  | Navigation link text               |
| Icon         | color.primary.7   | Navigation icon color              |
| Border       | color.border.2    | Drawer border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported MobileNavigationDrawer variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard slide-in drawer.                    | Static list of links.                      | All above           |       |
| WithProfile   | Drawer includes user profile section.        | Profile info at top.                       | All above           |       |
| WithSections  | Drawer has grouped navigation sections.      | Section headings for links.                | All above           |       |

---

### States
MobileNavigationDrawer states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Drawer closed.                     | All above             |
| Open      | Drawer open and visible.           | Background, Border    |
| Focused   | Link or button is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for MobileNavigationDrawer block:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: navigation, dialog, and button.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
