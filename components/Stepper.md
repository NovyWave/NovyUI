## Stepper
🪜 A sequence of steps or stages, often used for multi-step forms or processes.
- **Id:** Stepper
- **Appearance:** A horizontal or vertical sequence of steps, each with a label and icon. Current step is highlighted.
- **Behavior:** Clicking a step navigates to it. Supports linear or non-linear progression, validation, and completion state.
- **Used in blocks:**
  - [OnboardingSteps](../blocks/OnboardingSteps.md)
### Accessibility
- Use ARIA roles (`list`, `listitem`, `progressbar`).
- Announce current step and progress.
- Support keyboard navigation between steps.

### Variants
#### Stepper - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal layout.
- **Behavior:** Displays horizontal steps.
#### Stepper - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical layout.
- **Behavior:** Displays vertical steps.
#### Stepper - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
#### Stepper - **With progress**
- **Id:** WithProgress
- **Appearance:** Includes progress indicator.
- **Behavior:** Displays step progress.
