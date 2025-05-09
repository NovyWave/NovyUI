## Pin Input
🔑 A set of input fields for entering a fixed-length code, such as a PIN or verification code.
- **Id:** PinInput
- **Appearance:** A row of small input boxes for entering a fixed-length numeric or alphanumeric code.
- **Behavior:** Typing moves focus to next box. Supports paste, backspace, and validation. May mask input for security.
- **Used in blocks:**
  - [TwoFactorAuthentication](blocks.md#two-factor-authentication)
### Accessibility
- Use `aria-label` for each input box.
- Announce focus and value changes.
- Support keyboard navigation and paste.

### Variants
#### Pin Input - **4-digit**
- **Id:** FourDigit
- **Appearance:** Four input boxes.
- **Behavior:** Accepts 4-digit code.
#### Pin Input - **6-digit**
- **Id:** SixDigit
- **Appearance:** Six input boxes.
- **Behavior:** Accepts 6-digit code.
