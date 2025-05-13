## Transfer List
🔄 A component for transferring items between two lists or columns.
- **Id:** TransferList
- **Appearance:** Two lists with items that can be transferred between them. Includes transfer buttons in the middle.
- **Behavior:** Selecting items and clicking transfer buttons moves them between lists. Supports search, filtering, and bulk actions.
- **Used in blocks:**
  - [UserRoleAssignment](../blocks/UserRoleAssignment.md)

---

### Token Usage
The following table lists all design tokens used by the Transfer List component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | List background            |
| Text        | color.neutral.12  | Item text color            |
| Border      | color.border.2    | Border for lists           |
| Button      | color.primary.7   | Transfer button color      |
| Focus Ring  | color.focus.1     | Focus indicator for items  |
| Disabled    | color.neutral.7   | Disabled item text         |

---

### Variants
All supported Transfer List variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple transfer list       | Basic item transfer                        | Background, Text, Border   | Default  |
| WithSearch    | Includes search inputs     | Searches items in lists                    | Background, Border, Text   |          |
| WithFiltering | Includes filter controls   | Filters items in lists                     | Background, Border, Text   |          |

---

### States
Transfer List states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Item is visible, not focused or selected         | Background, Text, Border    |
| Focus                | Item is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Item is selected                                 | Background, Text            |
| Disabled             | Item is not interactive                          | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, button uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Transfer List:
- Provide keyboard navigation for moving items between lists.
- Use appropriate ARIA roles and attributes for lists and controls.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
