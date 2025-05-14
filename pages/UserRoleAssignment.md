## UserRoleAssignment
A page or dialog for assigning roles to users, managing permissions, and viewing current assignments.
- **Id:** UserRoleAssignment
- **Appearance:** Dialog or page with user list, role pickers, and assignment controls. May include bulk assignment and status messages.
- **Behavior:** Assign roles to users, manage permissions, and view assignments. Supports bulk actions and error handling.
- **Blocks:**
  - [UserRoleAssignment](../blocks/UserRoleAssignment.md)
- **Components:**
  - [List](../components/List.md)
  - [Button](../components/Button.md)
  - [Input](../components/Input.md)

---

### Token Usage
The following table lists all design tokens used by the UserRoleAssignment page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Dialog       | background   | Dialog background color    |
| List         | color        | List item text color       |
| Layout       | spacing      | Padding/margin             |

---

### Variants
All supported UserRoleAssignment variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| RoleList     | List of users and roles    | List, role pickers         | background, color, spacing | |
| Picker       | Role picker dialog         | Dialog, select input        | background, color, spacing | |
| BulkAssign   | Bulk assignment mode       | Multi-select, bulk actions  | background, color, spacing | |

---

### States
UserRoleAssignment states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Roles assigned             | background, color |
| Assigning    | Assigning roles            | color, background |
| Error        | Assignment failed          | color, background |

---

### Accessibility
Accessibility features and requirements for UserRoleAssignment:
- Keyboard navigation for all controls
- ARIA roles/attributes for dialog and controls
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
