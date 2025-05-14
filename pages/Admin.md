## Admin
A dashboard for managing users, content, and system settings.
- **Id:** Admin
- **Appearance:** Admin dashboard with navigation, analytics, and management panels.
- **Behavior:** Allows administrators to view analytics, manage users/content, and configure settings. Includes navigation, tables, and action buttons.
- **Blocks:**
  - [DataTable](../blocks/DataTable.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)

---

### Token Usage
The following table lists all design tokens used by the Admin page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Dashboard background               |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Panel/table border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Admin variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| UserManagement| User management dashboard.                   | Table of users, actions.                   | All above           |       |
| ContentMgmt   | Content management dashboard.                | Table of content, actions.                 | All above           |       |
| Analytics     | Analytics dashboard.                         | Charts, stats, tables.                     | All above           |       |

---

### States
Admin states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of admin content.   | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Hovered   | Link or button is hovered.         | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Admin:
- Keyboard navigation: Tab to all controls, Enter/Space to activate.
- ARIA roles/attributes: region, navigation, table, button.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
