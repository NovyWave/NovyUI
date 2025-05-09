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
### Variants
#### Authentication - **Login**
- **Id:** Login
- **Appearance:** Shows username/email and password fields, login button, and optional 'forgot password' link.
- **Behavior:** Submits credentials for authentication.
#### Authentication - **Register**
- **Id:** Register
- **Appearance:** Shows fields for new account creation (e.g., name, email, password, confirm password).
- **Behavior:** Submits registration data to create a new account.
#### Authentication - **Forgot password**
- **Id:** ForgotPassword
- **Appearance:** Shows email input and submit button for password reset request.
- **Behavior:** Sends password reset instructions to email.
#### Authentication - **Reset password**
- **Id:** ResetPassword
- **Appearance:** Shows new password and confirm password fields.
- **Behavior:** Submits new password to reset account credentials.
