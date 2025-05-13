## Color Input
🎨 An input field for selecting or entering color values, often with a color picker UI.
- **Id:** ColorInput
- **Appearance:** An input field with a color swatch. May include a color picker dialog, palette, or eyedropper tool. Shows selected color as background or border.
- **Behavior:** Clicking opens a color picker or palette. Selecting a color updates the value and swatch. May support manual hex/RGB input and validation.
- **Used in blocks:**
  - [ProfileThemeCustomization](../blocks/ProfileThemeCustomization.md)

---

### Token Usage
The following table lists all design tokens used by the Color Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input and picker bg        |
| Text        | color.neutral.12  | Input text color           |
| Border      | color.border.2    | Input and picker border    |
| Swatch      | color.primary.7   | Swatch color               |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Color Input variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| ColorPicker   | Includes color picker dialog| Opens color picker                         | Background, Border, Swatch | Default  |
| Swatch        | Displays color swatch       | Shows selected color                       | Swatch, Border, Background |          |
| EyeDropper    | Includes eyedropper tool    | Selects color from screen                  | Swatch, Border, Background |          |
| Palette       | Includes color palette      | Selects color from palette                 | Swatch, Border, Background |          |

---

### States
Color Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| PickerOpen           | Color picker is open                             | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, swatch uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Color Input:
- Use `aria-label` to describe the color input.
- Ensure color picker dialog is keyboard accessible.
- Provide text alternatives for color values.
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Color Input must be operable with assistive technologies and screen readers.
