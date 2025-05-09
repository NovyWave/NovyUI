## Authentication
A page for user login, registration, and password management, providing secure access to the application.
- **Id:** Authentication
- **Appearance:** A page with a centered card or form for login, registration, or password reset. Includes input fields, labels, buttons, and links for navigation between forms. May be centered or in a card.
- **Behavior:** Submits user credentials or registration info. Shows validation errors and loading state. May redirect or show success message on completion.
- **Blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [Footers](../blocks/Footers.md)
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
