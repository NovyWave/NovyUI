## Password Input
🔒 A text input that hides entered characters, used for sensitive information like passwords.
- **Id:** PasswordInput
- **Appearance:** An input field with obscured text (dots or asterisks). Includes a button to toggle visibility.
- **Behavior:** Accepts password input. Toggle button reveals/hides text. Supports validation and error state.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)

---

### Token Usage
The following table lists all design tokens used by the Password Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input background           |
| Text        | color.neutral.12  | Input text color           |
| Border      | color.border.2    | Input border               |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Password Input variants are listed below:
| Variant Name         | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic               | Simple password input      | Basic password entry                       | Background, Text, Border   | Default  |
| WithVisibilityToggle| Includes visibility toggle | Displays toggle button for password reveal | Icon, Background, Border   |          |

---

### States
Password Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| Error                | Input is in error state                          | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Password Input:
- Use ARIA roles (`textbox`, `password`, `aria-label`).
- Announce input value and validation status to screen readers.
- Support keyboard navigation and editing (Tab, Shift+Tab, Enter, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Password Input must be operable with assistive technologies and screen readers.
