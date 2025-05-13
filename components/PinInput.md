## Pin Input
🔑 A set of input fields for entering a fixed-length code, such as a PIN or verification code.
- **Id:** PinInput
- **Appearance:** A row of small input boxes for entering a fixed-length numeric or alphanumeric code.
- **Behavior:** Typing moves focus to next box. Supports paste, backspace, and validation. May mask input for security.
- **Used in blocks:**
  - [TwoFactorAuthentication](../blocks/TwoFactorAuthentication.md)

---

### Token Usage
The following table lists all design tokens used by the Pin Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Pin input background       |
| Text        | color.neutral.12  | Pin text color             |
| Border      | color.border.2    | Pin input border           |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Pin Input variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| FourDigit     | Four input boxes           | Accepts 4-digit code                       | Background, Text, Border   | Default  |
| SixDigit      | Six input boxes            | Accepts 6-digit code                       | Background, Border, Text   |          |

---

### States
Pin Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| Error                | Input is in error state                          | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Pin Input:
- Use ARIA roles (`textbox`, `aria-label`, `aria-describedby`).
- Announce input value and validation status to screen readers.
- Support keyboard navigation and editing (Tab, Arrow keys, Enter, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Pin Input must be operable with assistive technologies and screen readers.
