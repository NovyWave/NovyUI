## Settings
A page for managing user or application preferences, grouped into categories like general, security, and notifications.
- **Id:** Settings
- **Appearance:** Grouped settings forms, toggles, and inputs. May use tabs or sections for categories (general, security, notifications, billing). Includes keyboard shortcuts help and image brightness adjustment.
- **Behavior:** Allows updating settings, toggling switches, and saving changes. Shows validation and success/error messages. Tabs organize settings by category; keyboard shortcuts help and image brightness adjustment are interactive.
- **Blocks:**
  - [Headers](../blocks/Headers.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
  - [Footers](../blocks/Footers.md)
  - [SettingsTabs](../blocks/SettingsTabs.md)
  - [KeyboardShortcutsHelp](../blocks/KeyboardShortcutsHelp.md)
  - [ImageBrightnessAdjustment](../blocks/ImageBrightnessAdjustment.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Settings page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section/form border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Settings variants are listed below:
| Variant Name       | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|--------------------|------------------------------------|------------------------------------|---------------------|-------|
| GeneralSettings    | General settings form              | Update/save general settings       | All above           |       |
| Security           | Security settings form             | Update/save security settings      | All above           |       |
| Notifications      | Notification settings form         | Update/save notification prefs     | All above           |       |
| Billing            | Billing settings form              | Update/save billing info           | All above           |       |

---

### States
Settings states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of settings.        | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Saved     | Settings have been saved.          | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Settings:
- Keyboard navigation: Tab to all fields and controls, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, fields, and controls.
- Focus indicator: Visible and uses the focus token.
