## Hero
A block for displaying a prominent hero section with headline, description, and call-to-action.
- **Id:** Hero
- **Appearance:** Large section with background, headline, subtext, and button(s).
- **Behavior:** Highlights main message or offer, may include image or illustration.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Product](../pages/Product.md)

---

### Token Usage
The following table lists all design tokens used by the Hero block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Hero background                    |
| Text         | color.neutral.12  | Headline and description text      |
| Button       | color.primary.7   | Call-to-action button color        |
| Border       | color.border.2    | Hero border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Hero variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard hero with headline and button.      | Static content.                            | All above           |       |
| WithImage     | Hero includes image or illustration.         | Image beside or behind text.               | All above           |       |
| WithForm      | Hero includes a form (e.g., signup).         | Form fields in hero section.               | All above           |       |

---

### States
Hero states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of hero.            | All above             |
| Focused   | Button or input is focused.        | Focus Ring            |
| Hovered   | Button is hovered.                 | Button, Border        |

---

### Accessibility
Accessibility features and requirements for Hero block:
- Keyboard navigation: Tab to buttons and inputs, Enter/Space to activate.
- ARIA roles/attributes: region, heading, and button.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
