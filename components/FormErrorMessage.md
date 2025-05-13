## Form Error Message
❗ A message or indicator that displays validation errors or feedback for form fields.
- **Id:** FormErrorMessage
- **Appearance:** A small text message below or beside a form field, often colored red or with an error icon.
- **Behavior:** Appears when validation fails. May disappear on correction or after a timeout. Supports accessibility roles.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [Checkout](../blocks/Checkout.md)
  - [OnboardingSteps](../blocks/OnboardingSteps.md)

---

### Token Usage
The following table lists all design tokens used by the Form Error Message component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Error message background   |
| Text        | color.danger.7    | Error text color           |
| Border      | color.danger.7    | Error border               |
| Icon        | color.danger.7    | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for error  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Form Error Message variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Basic         | Simple error message| Basic error display         | Background, Text, Border   | Default  |
| WithIcon      | Includes icon       | Displays icon content       | Icon, Background, Border   |          |
| Inline        | Inline error message| Displays error inline with input | Background, Border, Text   |          |

---

### States
Form Error Message states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Error is visible, not focused or selected   | Background, Text, Border    |
| Focus     | Error is focused via keyboard               | Focus Ring, Border          |
| Disabled  | Error is not interactive                    | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.danger.7`, etc.

---

### Accessibility
Accessibility features and requirements for Form Error Message:
- Use ARIA roles (`alert`, `status`).
- Announce error messages to screen readers.
- Ensure error messages are associated with form fields using `aria-describedby`.
- Support keyboard navigation to and from error messages (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text and background (WCAG AA compliant).
- Form Error Message must be operable with assistive technologies and screen readers.
