## Two-Factor Authentication
A block for entering and verifying a two-factor authentication code.
- **Id:** TwoFactorAuthentication
- **Appearance:** Input fields for entering a verification code, with submit button and optional resend link.
- **Behavior:** Validates and submits the code. May show error or success messages, and allow resending the code.
- **Components:**
  - [PinInput](../components/Pininput.md)
  - [Button](../components/Button.md)
  - [Alert](../components/Alert.md)
- **Used in pages:**
  - [LoginAndSecurity](../pages/LoginAndSecurity.md)
### Variants
#### Two-Factor Authentication - **Basic**
- **Id:** Basic
- **Appearance:** Simple code input and submit button.
- **Behavior:** Static display, no interactivity.
#### Two-Factor Authentication - **With resend**
- **Id:** WithResend
- **Appearance:** Includes a resend code link or button.
- **Behavior:** User can request a new code.
