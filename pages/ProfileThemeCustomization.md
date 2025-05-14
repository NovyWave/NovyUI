## ProfileThemeCustomization
A page that allows users to personalize the appearance of their profile with theme options and visual settings.
- **Id:** ProfileThemeCustomization
- **Appearance:** Sections for selecting color themes, toggling dark/light mode, and previewing changes. Includes icons, tooltips, and interactive controls.
- **Behavior:** Users can select and preview different themes, toggle settings, and see instant feedback. Tooltips provide guidance for each option. Changes are saved automatically or with a save button.
- **Blocks:**
  - [IconTooltips](../blocks/IconTooltips.md)
  - [SettingsTabs](../blocks/SettingsTabs.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the ProfileThemeCustomization page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section/card border                |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ProfileThemeCustomization variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Simple theme selection and preview.          | User selects a theme and sees preview.     | All above           |       |
| Advanced      | Advanced options (custom colors, gradients, accessibility settings). | User customizes theme with more controls. | All above           |       |

---

### States
ProfileThemeCustomization states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of customization.   | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Changed   | Theme has been changed.            | Border, Text          |

---

### Accessibility
Accessibility features and requirements for ProfileThemeCustomization:
- Keyboard navigation: Tab to all controls and previews, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, previews, and controls.
- Focus indicator: Visible and uses the focus token.
