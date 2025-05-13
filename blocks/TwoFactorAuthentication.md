## TwoFactorAuthentication
A block for displaying and managing two-factor authentication (2FA) setup and verification.
- **Id:** TwoFactorAuthentication
- **Appearance:** Panel or modal with input fields, QR code, and instructions.
- **Behavior:** Guides users through enabling, verifying, or disabling 2FA.
- **Components:**
  - [Input](../components/Input.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Settings](../pages/Settings.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the TwoFactorAuthentication block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Panel/modal background             |
| Text         | color.neutral.12  | Label and input text               |
| Border       | color.border.2    | Panel/modal border                 |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported TwoFactorAuthentication variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard 2FA setup/verification.             | Input for code, enable/disable actions.    | All above           |       |
| WithQR        | Includes QR code for authenticator apps.     | QR code image shown.                       | All above           |       |
| WithBackup    | Shows backup codes for recovery.             | List of backup codes.                      | All above           |       |

---

### States
TwoFactorAuthentication states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of 2FA panel.       | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Disabled  | Actions are disabled.              | Text, Border          |

---

### Accessibility
Accessibility features and requirements for TwoFactorAuthentication block:
- Keyboard navigation: Tab to inputs and buttons, Enter/Space to activate.
- ARIA roles/attributes: form, input, button, and region.
- Color contrast: Sufficient for all text, borders, and backgrounds.
- Focus indicator: Visible and uses the focus token.
