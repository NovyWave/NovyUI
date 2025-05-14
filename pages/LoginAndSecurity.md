## LoginAndSecurity
A page for user authentication, including two-factor verification.
- **Id:** LoginAndSecurity
- **Appearance:** Login form with optional two-factor authentication step. May include PinInput for code entry.
- **Behavior:** User logs in, then verifies with a code. Two-factor authentication form validates and submits code.
- **Blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [TwoFactorAuthentication](../blocks/TwoFactorAuthentication.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the LoginAndSecurity page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Form border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported LoginAndSecurity variants are listed below:
| Variant Name     | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|------------------|------------------------------------|------------------------------------|---------------------|-------|
| LoginWith2FA     | Login form with 2FA step           | Login, then two-factor code entry  | All above           |       |

---

### States
LoginAndSecurity states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of login form.      | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Error     | Error message shown.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for LoginAndSecurity:
- Keyboard navigation: Tab to all fields and buttons, Enter/Space to submit.
- ARIA roles/attributes: form, input, button, region.
- Color contrast: Sufficient for all text, forms, and buttons.
- Focus indicator: Visible and uses the focus token.
