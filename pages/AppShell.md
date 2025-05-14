## AppShell
A structural layout providing navigation, sidebar, and main content area for app-like experiences.
- **Id:** AppShell
- **Appearance:** Layout with sidebar, topbar, and main content area. Includes navigation links, user info, and responsive design. Navbars and sidebars may include logo, links, user avatar, search, and dropdown/mega menus.
- **Behavior:** Sidebar may collapse/expand. Navigation links update main content. Supports keyboard navigation, accessibility, and responsive design. Global command palette opens with shortcut. Mobile navigation drawer and mega menu open on click/hover.
- **Blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Sidebar](../blocks/Sidebar.md)
  - [Footers](../blocks/Footers.md)
  - [GlobalCommandPalette](../blocks/GlobalCommandPalette.md)
  - [MobileNavigationDrawer](../blocks/MobileNavigationDrawer.md)
  - [MegaMenu](../blocks/MegaMenu.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the AppShell page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | App shell background               |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Sidebar/topbar border              |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported AppShell variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| SidebarLayout | Collapsible sidebar and main content area.   | Sidebar can be collapsed/expanded.         | All above           |       |
| TopbarLayout  | Topbar and main content area.                | Topbar with navigation/user info.          | All above           |       |
| ResponsiveShell| Responsive layout for all screens.          | Adapts to screen size.                     | All above           |       |

---

### States
AppShell states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of app shell.       | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link or button is hovered.         | Border, Text          |

---

### Accessibility
Accessibility features and requirements for AppShell:
- Keyboard navigation: Tab to all navigation and controls, Enter/Space to activate.
- ARIA roles/attributes: region, navigation, button.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
