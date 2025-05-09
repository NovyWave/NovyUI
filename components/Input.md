## Input
📝 A field for entering and editing a single line of text or data.
- **Id:** Input
- **Appearance:** A rectangular or pill-shaped text field with optional label, icon, or button. Shows placeholder text when empty.
- **Behavior:** Accepts user text input. Supports focus, disabled, and error states. May include clear or reveal button.
- **Used in blocks:**
  - [Authentication](../blocks/Authentication.md)
  - [Cart](../blocks/Cart.md)
  - [Checkout](../blocks/Checkout.md)
  - [Comments](../blocks/Comments.md)
  - [ContactCard](../blocks/ContactCard.md)
  - [DataTable](../blocks/DataTable.md)
  - [FAQ](../blocks/Faq.md)
  - [OnboardingSteps](../blocks/OnboardingSteps.md)
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
