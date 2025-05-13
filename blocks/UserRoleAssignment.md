## UserRoleAssignment
A block for displaying and managing user roles and permissions.
- **Id:** UserRoleAssignment
- **Appearance:** Table or list with user names, roles, and action buttons.
- **Behavior:** Allows admins to assign, change, or remove roles for users.
- **Components:**
  - [DataTable](../components/DataTable.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Admin](../pages/Admin.md)
  - [Team](../pages/Team.md)

---

### Token Usage
The following table lists all design tokens used by the UserRoleAssignment block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Table/list background              |
| Text         | color.neutral.12  | User name and role text            |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Table/list border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported UserRoleAssignment variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard user role table/list.               | Static info and actions.                   | All above           |       |
| WithActions   | Includes action buttons for each user.       | Assign/remove role buttons.                | All above           |       |
| WithGroups    | Users grouped by role/team.                  | Group headings for roles.                  | All above           |       |

---

### States
UserRoleAssignment states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of user roles.      | All above             |
| Focused   | Button or row is focused.          | Focus Ring            |
| Selected  | User is selected.                  | Background, Border    |

---

### Accessibility
Accessibility features and requirements for UserRoleAssignment block:
- Keyboard navigation: Tab to rows and buttons, Enter/Space to activate.
- ARIA roles/attributes: table, row, cell, button, and group.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
