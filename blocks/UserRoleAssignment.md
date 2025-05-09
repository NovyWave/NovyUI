## User Role Assignment
A block for assigning roles or permissions to users.
- **Id:** UserRoleAssignment
- **Appearance:** A list or table of users with role selectors (dropdowns, checkboxes, etc.).
- **Behavior:** Allows changing user roles, saving changes, and showing success/error messages.
- **Components:**
  - [Select](components.md#select)
  - [Checkbox](components.md#checkbox)
  - [Button](components.md#button)
  - [Alert](components.md#alert)
- **Used in pages:**
  - [Settings](pages.md#settings)
### Variants
#### User Role Assignment - **Basic**
- **Id:** Basic
- **Appearance:** Simple list of users with role selectors.
- **Behavior:** Static display, no interactivity.
#### User Role Assignment - **With permissions**
- **Id:** WithPermissions
- **Appearance:** Includes permission checkboxes for each user.
- **Behavior:** Allows toggling permissions per user.
