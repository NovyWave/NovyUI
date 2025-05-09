## Login and Security
A page for user authentication, including two-factor verification.
- **Id:** LoginAndSecurity
- **Appearance:** Login form with optional two-factor authentication step. May include PinInput for code entry.
- **Behavior:** User logs in, then verifies with a code. Two-factor authentication form validates and submits code.
- **Blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [TwoFactorAuthentication](../blocks/TwoFactorAuthentication.md)
### Variants
#### Login and Security - **Login with 2FA**
- **Id:** LoginWith2FA
- **Appearance:** Login form followed by two-factor authentication step with PinInput.
- **Behavior:** User logs in and verifies with a code.
