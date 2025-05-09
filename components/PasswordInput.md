## Password Input
🔒 A text input that hides entered characters, used for sensitive information like passwords.
- **Id:** PasswordInput
- **Appearance:** An input field with obscured text (dots or asterisks). Includes a button to toggle visibility.
- **Behavior:** Accepts password input. Toggle button reveals/hides text. Supports validation and error state.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
### Accessibility
- Use native `<input type="password">`.
- Provide label and instructions for visibility toggle.
- Announce validation errors and state changes.

### Variants
#### Password Input - **With visibility toggle**
- **Id:** WithVisibilityToggle
- **Appearance:** Includes visibility toggle button.
- **Behavior:** Toggles password visibility.
