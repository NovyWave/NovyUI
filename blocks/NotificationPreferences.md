## NotificationPreferences
A block for managing user notification settings and preferences.
- **Id:** NotificationPreferences
- **Appearance:** List or form of notification options with toggles or checkboxes.
- **Behavior:** Allows users to enable/disable notification types and channels.
- **Components:**
  - [Checkbox](../components/Checkbox.md)
  - [Switch](../components/Switch.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Settings](../pages/Settings.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the NotificationPreferences block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Preferences background             |
| Text         | color.neutral.12  | Option label text                  |
| Control      | color.primary.7   | Checkbox/switch color              |
| Border       | color.border.2    | Control border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported NotificationPreferences variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard list of preferences.                | Static list of toggles/checkboxes.         | All above           |       |
| WithChannels  | Preferences by notification channel.         | Grouped by email, SMS, etc.                | All above           |       |
| WithGroups    | Preferences grouped by type.                 | Group headings for options.                | All above           |       |

---

### States
NotificationPreferences states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of preferences.     | All above             |
| Focused   | Control or option is focused.      | Focus Ring            |
| Disabled  | Option is disabled.                | Text, Control         |

---

### Accessibility
Accessibility features and requirements for NotificationPreferences block:
- Keyboard navigation: Tab to controls and options, Enter/Space to toggle.
- ARIA roles/attributes: group, checkbox, switch, and label.
- Color contrast: Sufficient for all text, controls, and borders.
- Focus indicator: Visible and uses the focus token.
