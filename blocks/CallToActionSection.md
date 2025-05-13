## CallToActionSection
A block for prominent calls to action, such as sign-up, download, or contact prompts.
- **Id:** CallToActionSection
- **Appearance:** A visually distinct section with headline, supporting text, and action button(s).
- **Behavior:** Highlights a key action for the user. May animate or highlight on scroll.
- **Components:**
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Pricing](../pages/Pricing.md)

---

### Token Usage
The following table lists all design tokens used by the CallToActionSection block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.3   | Section background                 |
| Text         | color.neutral.12  | Headline and supporting text       |
| Button       | color.primary.7   | Action button background           |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for buttons        |

---

### Variants
All supported CallToActionSection variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Headline, text, and single action button.    | Static, prominent section.                 | All above           |       |
| WithImage     | Includes an illustration or image.           | Image displayed alongside text and button. | All above           |       |
| WithSecondary | Includes secondary action/button.            | Two buttons for primary/secondary actions. | All above           |       |

---

### States
CallToActionSection states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of section.         | All above             |
| Focused   | Button is focused.                 | Focus Ring            |
| Hover     | Button hovered.                    | Button                |
| Pressed   | Button pressed.                    | Button                |

---

### Accessibility
Accessibility features and requirements for CallToActionSection:
- Keyboard navigation: Tab to each button, Enter/Space to activate.
- ARIA roles/attributes: buttons and region landmark.
- Color contrast: Sufficient for all text and buttons.
- Focus indicator: Visible and uses the focus token.
