## Authentication
A page for user login, registration, or authentication flows.
- **Id:** Authentication
- **Appearance:** Login/register form with fields, buttons, and error messages.
- **Behavior:** Handles authentication, validation, and error display.
- **Blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Authentication page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Input border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Authentication variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Login         | Standard login form.                         | Email/password fields, submit button.      | All above           |       |
| Register      | Registration form.                           | Name/email/password fields, submit button. | All above           |       |

---

### States
Authentication states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of authentication.  | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Error message shown.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Authentication:
- Keyboard navigation: Tab to all fields and buttons, Enter/Space to submit.
- ARIA roles/attributes: form, input, button, alert.
- Color contrast: Sufficient for all text, inputs, and buttons.
- Focus indicator: Visible and uses the focus token.
