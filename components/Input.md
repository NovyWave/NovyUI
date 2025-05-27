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
| Background  | color.neutral.1   | Input background           |
| Text        | color.neutral.9   | Input text color           |
| Border      | color.neutral.3   | Input border               |
| Placeholder | color.neutral.6   | Placeholder text color     |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.primary.5   | Focus indicator for input  |
| Disabled    | color.neutral.6   | Disabled text              |
| Error       | color.error.7     | Error state styling        |
| Corner      | cornerRadius.4px  | Border radius              |
| Spacing     | spacing.8px       | Internal padding           |
| Typography  | typography.size.16px | Font size                |

---

### Variants
All supported Input variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Text          | Basic text input           | Standard text entry                        | Background, Text, Border   | Default  |
| Email         | Email input type           | Email validation and keyboard              | Background, Text, Border   |          |
| Password      | Password input             | Hidden text with toggle visibility         | Background, Text, Border   | Eye icon |
| Search        | Search input               | Text input with clear button               | Background, Text, Border   | X button |
| Number        | Number input type          | Numeric entry with validation              | Background, Text, Border   |          |
| Tel           | Telephone input type       | Telephone number entry                     | Background, Text, Border   |          |
| URL           | URL input type             | URL validation and keyboard                | Background, Text, Border   |          |
| WithLeftIcon  | Input with left icon       | Icon displayed on the left side            | Icon, Background, Border   |          |
| WithRightIcon | Input with right icon      | Icon displayed on the right side           | Icon, Background, Border   |          |

---

### States
Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Input is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Input is focused via keyboard or click           | Focus Ring, Border          |
| Disabled             | Input is not interactive                         | Disabled, Border            |
| Readonly             | Input displays value but cannot be edited        | Background, Text, Border    |
| Error                | Input is in error state                          | Border, Text, Background    |
| Required             | Input is marked as required                      | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.primary.5`, error border uses `color.error.7`, etc.
- Icons adapt their color based on the current state (focused, error, disabled)
- Password inputs show toggle button only when not disabled
- Search inputs show clear button only when there is content and not disabled

---

### Accessibility
Accessibility features and requirements for Input:
- Use native `<input>` or appropriate ARIA roles (`textbox`, `searchbox`).
- Announce input value and validation status to screen readers.
- Support keyboard navigation and editing (Tab, Shift+Tab, Enter, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Input must be operable with assistive technologies and screen readers.
