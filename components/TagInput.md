## Tag Input
🏷️ An input field for entering and managing tags, often displayed as removable chips.
- **Id:** TagInput
- **Appearance:** An input field with tags displayed as chips. May include add/remove buttons and suggestions dropdown.
- **Behavior:** Typing adds tags. Tags can be removed by clicking or keyboard. Supports validation and suggestions.
- **Used in blocks:**
  - [BlogPostTagging](../blocks/BlogPostTagging.md)

---

### Token Usage
The following table lists all design tokens used by the Tag Input component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Tag input background       |
| Text        | color.neutral.12  | Tag text color             |
| Border      | color.border.2    | Tag input border           |
| Icon        | color.primary.7   | Tag icon color             |
| Focus Ring  | color.focus.1     | Focus indicator for tag    |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Tag Input variants are listed below:
| Variant Name         | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| CreateAndRemoveTags | Supports tag creation/removal| Adds/removes tags                        | Background, Text, Border   | Default  |
| WithSuggestions     | Includes suggestions dropdown| Displays tag suggestions                  | Background, Border, Text   |          |

---

### States
Tag Input states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Tag input is visible, not focused or selected    | Background, Text, Border    |
| Focus                | Tag input is focused via keyboard                | Focus Ring, Border          |
| Disabled             | Tag input is not interactive                     | Disabled, Border            |
| Active               | Tag input is active/has input                    | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Tag Input:
- Provide keyboard navigation for adding/removing tags.
- Use appropriate ARIA roles and attributes for tag input fields.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
