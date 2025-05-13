## Input Group
👥 A combination of input fields and add-ons grouped together for related data entry.
- **Id:** InputGroup
- **Appearance:** A combination of input fields and buttons/icons grouped together in a single row. May include add-ons before or after the input.
- **Behavior:** All elements are visually and functionally grouped. Supports focus, disabled, and error states.
- **Used in blocks:** [Group Layout](../blocks/GroupLayout.md)

---

### Token Usage
The following table lists all design tokens used by the Input Group component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Group background           |
| Text        | color.neutral.12  | Group text color           |
| Border      | color.border.2    | Group border               |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for group  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Input Group variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Basic         | Simple input group  | Basic group of inputs       | Background, Text, Border   | Default  |
| WithIcon      | Includes icon       | Displays icon content       | Icon, Background, Border   |          |
| WithLabel     | Includes label      | Displays label text         | Background, Border, Text   |          |

---

### States
Input Group states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Group is visible, not focused or selected   | Background, Text, Border    |
| Focus     | Group is focused via keyboard               | Focus Ring, Border          |
| Disabled  | Group is not interactive                    | Disabled, Border            |
| Error     | Group is in error state                     | Border, Text                |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Input Group:
- Use ARIA roles (`group`, `textbox`, `aria-labelledby`).
- Announce group label and input status to screen readers.
- Support keyboard navigation between grouped inputs (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Input Group must be operable with assistive technologies and screen readers.
