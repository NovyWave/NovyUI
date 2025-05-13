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
  - [FAQ](../blocks/FAQ.md)
  - [OnboardingSteps](../blocks/OnboardingSteps.md)

---

### Token Usage
The following table lists all design tokens used by the Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Input background           |
| Text        | color.neutral.12  | Input text color           |
| Border      | color.border.2    | Input border               |
| Placeholder | color.neutral.7   | Placeholder text color     |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for input  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Input variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple input               | Basic text input                           | Background, Text, Border   | Default  |
| WithIcon      | Includes icon              | Displays icon content                      | Icon, Background, Border   |          |
| WithLabel     | Includes label             | Displays label text                        | Background, Border, Text   |          |
| Password      | Password input             | Obscures input text                        | Background, Border, Text   |          |

---

### States
Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard                    | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| Error                | Input is in error state                          | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Input:
- Use native `<input>` or appropriate ARIA roles (`textbox`, `searchbox`).
- Announce input value and validation status to screen readers.
- Support keyboard navigation and editing (Tab, Shift+Tab, Enter, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Input must be operable with assistive technologies and screen readers.
