## Onboarding
A multi-step guide or wizard to help new users get started with the application.
- **Id:** Onboarding
- **Appearance:** A multi-step guide or wizard with progress indicator, instructions, and forms. May include illustrations, checklists, and video instructions.
- **Behavior:** Navigates between steps, validates input, and shows completion message. Supports back/next navigation. May include video instructions for each step.
- **Blocks:**
  - [OnboardingSteps](../blocks/OnboardingSteps.md)
  - [Footers](../blocks/Footers.md)
### Variants
#### Onboarding - **Welcome**
- **Id:** Welcome
- **Appearance:** Introduction screen with welcome message and instructions.
- **Behavior:** Static display with navigation to next step.
#### Onboarding - **Step-by-step guide**
- **Id:** StepByStepGuide
- **Appearance:** Multi-step form with progress indicator. May include video instructions.
- **Behavior:** Validates input and navigates between steps.
#### Onboarding - **Completion**
- **Id:** Completion
- **Appearance:** Final screen with completion message and next steps.
- **Behavior:** Static display with possible navigation options.
