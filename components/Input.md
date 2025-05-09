## Input
📝 A field for entering and editing a single line of text or data.
- **Id:** Input
- **Appearance:** A rectangular or pill-shaped text field with optional label, icon, or button. Shows placeholder text when empty.
- **Behavior:** Accepts user text input. Supports focus, disabled, and error states. May include clear or reveal button.
- **Used in blocks:**
  - [Authentication](blocks.md#authentication)
  - [Cart](blocks.md#cart)
  - [Checkout](blocks.md#checkout)
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
  - [DataTable](blocks.md#data-table)
  - [FAQ](blocks.md#faq)
  - [OnboardingSteps](blocks.md#onboarding-steps)
### Accessibility
- Use native `<input>` element.
- Provide associated label for input.
- Announce validation errors with `aria-describedby`.
- Support keyboard and screen reader interaction.

### Variants
#### Input - **Basic**
- **Id:** Basic
- **Appearance:** Simple input field.
- **Behavior:** Basic text input.
#### Input - **With icon**
- **Id:** WithIcon
- **Appearance:** Includes icon.
- **Behavior:** Displays icon content.
#### Input - **With button**
- **Id:** WithButton
- **Appearance:** Includes button.
- **Behavior:** Supports button actions.
