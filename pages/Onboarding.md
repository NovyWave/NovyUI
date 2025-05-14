## Onboarding
A multi-step guide or wizard to help new users get started with the application.
- **Id:** Onboarding
- **Appearance:** Multi-step guide or wizard with progress indicator, instructions, and forms. May include illustrations, checklists, and video instructions.
- **Behavior:** Navigates between steps, validates input, and shows completion message. Supports back/next navigation.
- **Blocks:**
  - [OnboardingSteps](../blocks/OnboardingSteps.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Onboarding page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Step/card border                   |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Onboarding variants are listed below:
| Variant Name         | Description                        | Appearance/Behavior                | Tokens Used         | Notes |
|---------------------|------------------------------------|------------------------------------|---------------------|-------|
| Welcome             | Introduction screen with welcome message and instructions. | Static, navigation to next step.  | All above           |       |
| StepByStepGuide     | Multi-step form with progress indicator.                   | Validates input, navigation.      | All above           |       |
| Completion          | Final screen with completion message and next steps.       | Static, navigation options.       | All above           |       |

---

### States
Onboarding states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of onboarding.      | All above             |
| Focused   | Input or button is focused.        | Focus Ring            |
| Completed | Onboarding is completed.           | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Onboarding:
- Keyboard navigation: Tab to all steps and controls, Enter/Space to activate.
- ARIA roles/attributes: form, button, region, progressbar.
- Color contrast: Sufficient for all text, steps, and controls.
- Focus indicator: Visible and uses the focus token.
