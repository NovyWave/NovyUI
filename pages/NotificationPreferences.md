## NotificationPreferences
A page for managing user notification settings and preferences.
- **Id:** NotificationPreferences
- **Appearance:** List or grid of notification types with toggles, checkboxes, or dropdowns for preferences.
- **Behavior:** Allows users to enable/disable notifications, set preferences, and save changes.
- **Blocks:**
  - [NotificationPreferences](../blocks/NotificationPreferences.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the NotificationPreferences page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported NotificationPreferences variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of notification types with toggles.     | List view, toggles, save button.           | All above           |       |
| Grid          | Grid of notification types with toggles.     | Grid view, toggles, save button.           | All above           |       |

---

### States
NotificationPreferences states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of preferences.     | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Saved     | Preferences have been saved.       | Border, Text          |

---

### Accessibility
Accessibility features and requirements for NotificationPreferences:
- Keyboard navigation: Tab to all inputs and controls, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, inputs, and controls.
- Focus indicator: Visible and uses the focus token.
