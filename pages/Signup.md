## Signup
A signup or registration page for new users to create an account. Collects user information, validates input, and provides feedback. May include social login options and terms of service agreement.
- **Id:** Signup
- **Appearance:** Form with fields for user info, password, and social login buttons. May include terms of service checkbox and submit button.
- **Behavior:** Validates input, provides feedback, and submits registration. May redirect on success or show errors.
- **Blocks:**
  - [Form](../blocks/Form.md)
  - [Button](../blocks/Button.md)
- **Components:**
  - [Input](../components/Input.md)
  - [Checkbox](../components/Checkbox.md)
  - [SocialLogin](../components/SocialLogin.md)

---

### Token Usage
The following table lists all design tokens used by the Signup page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Form         | spacing      | Controls form spacing      |
| Button       | color        | Button color               |
| Input        | border       | Input border color         |

---

### Variants
All supported Signup variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard signup form       | Basic form, submit button  | spacing, color, border | |
| Social       | With social login options  | Social buttons, OAuth      | color, spacing        | |

---

### States
Signup states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Form ready for input       | spacing, color    |
| Loading      | Submitting registration    | color             |
| Error        | Input validation failed    | color, border     |

---

### Accessibility
Accessibility features and requirements for Signup:
- Keyboard navigation for all fields and buttons
- ARIA labels for form fields and error messages
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
