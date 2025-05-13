## Date Picker
📆 A calendar input for selecting a single date.
- **Id:** DatePicker
- **Appearance:** An input field with a calendar popup for picking a date.
- **Behavior:** Clicking input opens calendar. Selecting a date updates the value.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)

---

### Token Usage
The following table lists all design tokens used by the Date Picker component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Picker background          |
| Text        | color.neutral.12  | Picker text color          |
| Border      | color.border.2    | Picker border              |
| Selected Bg | color.primary.7   | Selected date background   |
| Focus Ring  | color.focus.1     | Focus indicator for cells  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Date Picker variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple date picker         | Basic calendar selection                   | Background, Text, Border   | Default  |
| WithRange     | Range selection            | Allows selecting a date range              | Selected Bg, Background    |          |
| WithTime      | Includes time selection    | Allows picking date and time               | Background, Border, Text   |          |

---

### States
Date Picker states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Picker is visible, not focused or selected       | Background, Text, Border    |
| Focus                | Cell is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Date is selected                                 | Selected Bg, Text           |
| Disabled             | Picker is not interactive                        | Disabled, Border            |
| Open                 | Picker is open                                   | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, selected uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Date Picker:
- Use ARIA roles (`dialog`, `grid`, `gridcell`, `button`).
- Announce selected date and navigation to screen readers.
- Support keyboard navigation (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Date Picker must be operable with assistive technologies and screen readers.
