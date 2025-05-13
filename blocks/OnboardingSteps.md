## OnboardingSteps
A block for displaying a sequence of onboarding steps or progress indicators.
- **Id:** OnboardingSteps
- **Appearance:** Horizontal or vertical stepper with labels and icons.
- **Behavior:** Shows progress, allows navigation between steps.
- **Components:**
  - [Stepper](../components/Stepper.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Signup](../pages/Signup.md)
  - [Onboarding](../pages/Onboarding.md)

---

### Token Usage
The following table lists all design tokens used by the OnboardingSteps block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Stepper background                 |
| Text         | color.neutral.12  | Step label text                    |
| Icon         | color.primary.7   | Step icon color                    |
| Border       | color.border.2    | Stepper border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported OnboardingSteps variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard horizontal stepper.                 | Steps shown in a row.                      | All above           |       |
| Vertical      | Vertical stepper layout.                     | Steps shown in a column.                   | All above           |       |
| WithActions   | Stepper includes action buttons.             | Buttons for navigation.                    | All above           |       |

---

### States
OnboardingSteps states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of steps.           | All above             |
| Active    | Current step is active.            | Background, Icon      |
| Completed | Step is completed.                 | Icon, Border          |
| Focused   | Step or button is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for OnboardingSteps block:
- Keyboard navigation: Tab to steps and buttons, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and progressbar.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
