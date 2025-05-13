## ProfileThemeCustomization
A block for allowing users to customize their profile theme or appearance.
- **Id:** ProfileThemeCustomization
- **Appearance:** Panel or modal with color pickers, theme options, and preview.
- **Behavior:** Lets users select colors, themes, and preview changes in real time.
- **Components:**
  - [ColorInput](../components/ColorInput.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Profile](../pages/Profile.md)
  - [Settings](../pages/Settings.md)

---

### Token Usage
The following table lists all design tokens used by the ProfileThemeCustomization block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Customization panel background     |
| Text         | color.neutral.12  | Label and option text              |
| Picker       | color.primary.7   | Color picker/option color          |
| Border       | color.border.2    | Panel border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ProfileThemeCustomization variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard theme customization.                | Color pickers and options.                 | All above           |       |
| WithPreview   | Live preview of theme changes.               | Preview area updates in real time.         | All above           |       |
| WithPresets   | Preset theme options available.              | User can select from presets.              | All above           |       |

---

### States
ProfileThemeCustomization states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of customization.   | All above             |
| Focused   | Picker or button is focused.       | Focus Ring            |
| Selected  | Option is selected.                | Picker, Border        |

---

### Accessibility
Accessibility features and requirements for ProfileThemeCustomization block:
- Keyboard navigation: Tab to pickers and buttons, Enter/Space to activate.
- ARIA roles/attributes: group, button, and color input.
- Color contrast: Sufficient for all text, pickers, and borders.
- Focus indicator: Visible and uses the focus token.
