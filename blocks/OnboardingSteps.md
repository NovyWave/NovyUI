## Onboarding Steps
A block for multi-step onboarding or setup flows.
- **Id:** OnboardingSteps
- **Appearance:** A sequence of steps with progress indicator, instructions, and forms.
- **Behavior:** Navigates between steps, validates input, and shows completion message.
- **Components:**
  - [Stepper](components.md#stepper)
  - [Form Error Message](components.md#form-error-message)
  - [Button](components.md#button)
  - [Input](components.md#input)
- **Used in pages:**
  - [Onboarding](pages.md#onboarding)
### Variants
#### Onboarding Steps - **Basic**
- **Id:** Basic
- **Appearance:** Simple onboarding steps with progress indicator.
- **Behavior:** Static display, no interactivity.
#### Onboarding Steps - **With video**
- **Id:** WithVideo
- **Appearance:** Includes video instructions for each step.
- **Behavior:** Videos play as user progresses through steps.
