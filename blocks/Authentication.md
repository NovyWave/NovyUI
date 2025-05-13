## Authentication
A block containing forms for user login, registration, or password management.
- **Id:** Authentication
- **Appearance:** A form for user login, registration, or password reset. Includes input fields, labels, buttons, and optional links (e.g., forgot password). May be centered on the page or in a card.
- **Behavior:** Submits user credentials or registration info. Shows validation errors and loading state. May redirect or show success message on completion.
- **Components:**
  - [Input](../components/Input.md)
  - [Button](../components/Button.md)
  - [Checkbox](../components/Checkbox.md)
  - [Alert](../components/Alert.md)
- **Used in pages:**
  - [Authentication](../pages/Authentication.md)
  - [LoginAndSecurity](../pages/LoginAndSecurity.md)

---

### Token Usage
The following table lists all design tokens used by the Authentication block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Form/card background               |
| Text         | color.neutral.12  | Main text                          |
| Input        | color.surface.2   | Input field background             |
| Input Border | color.border.2    | Input border                       |
| Button       | color.primary.7   | Button background                  |
| Error        | color.danger.7    | Error message text                 |
| Focus Ring   | color.focus.1     | Focus indicator for inputs/buttons |

---

### Variants
All supported Authentication variants are listed below:
| Variant Name     | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|------------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Login            | Shows username/email and password fields, login button, and optional 'forgot password' link. | Submits credentials for authentication. | All above           |       |
| Register         | Shows fields for new account creation.      | Submits registration data to create account.| All above           |       |
| ForgotPassword   | Shows email input and submit button for password reset request. | Sends password reset instructions to email. | All above           |       |
| ResetPassword    | Shows new password and confirm password fields. | Submits new password to reset credentials. | All above           |       |

---

### States
Authentication states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of form.            | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Validation error shown.            | Error, Input Border   |
| Disabled  | Button or input is disabled.       | Button, Input         |

---

### Accessibility
Accessibility features and requirements for Authentication:
- Keyboard navigation: Tab to each input and button, Enter/Space to submit.
- ARIA roles/attributes: form, alert, and required fields.
- Color contrast: Sufficient for all text, inputs, and buttons.
- Focus indicator: Visible and uses the focus token.
