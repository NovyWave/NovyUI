## Form Error Message
❗ A message or indicator that displays validation errors or feedback for form fields.
- **Id:** FormErrorMessage
- **Appearance:** A small text message below or beside a form field, often colored red or with an error icon.
- **Behavior:** Appears when validation fails. May disappear on correction or after a timeout. Supports accessibility roles.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [Checkout](../blocks/Checkout.md)
  - [OnboardingSteps](../blocks/OnboardingSteps.md)
### Accessibility
- Use `role="alert"` for error messages.
- Associate error message with form field using `aria-describedby`.
- Ensure error text is clear and specific.

### Variants
#### Form Error Message - **Inline error**
- **Id:** InlineError
- **Appearance:** Inline error message.
- **Behavior:** Displays inline error.
#### Form Error Message - **Tooltip error**
- **Id:** TooltipError
- **Appearance:** Tooltip error message.
- **Behavior:** Displays tooltip error.
