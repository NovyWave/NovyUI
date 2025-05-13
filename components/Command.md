## Command
⌨️ A modal or dropdown for searching and executing actions or commands quickly.
- **Id:** Command
- **Appearance:** A modal or dropdown with a search input and a list of actions or commands. Each item may include an icon, description, and keyboard shortcut.
- **Behavior:** Opens with a shortcut or button. Typing filters commands. Selecting an item triggers its action. Supports keyboard navigation and grouping.
- **Used in blocks:**
  - [GlobalCommandPalette](../blocks/GlobalCommandPalette.md)

---

### Token Usage
The following table lists all design tokens used by the Command component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Command palette background |
| Text        | color.neutral.12  | Command text color         |
| Border      | color.border.2    | Command border             |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator            |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Command variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Basic command palette      | Simple command list                        | Background, Text, Border   | Default  |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithGroups    | Grouped commands           | Groups commands by category                | Background, Border, Text   |          |

---

### States
Command states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Command is visible, not focused or selected      | Background, Text, Border    |
| Focus                | Command is focused via keyboard                  | Focus Ring, Border          |
| Selected             | Command is selected                              | Background, Text            |
| Disabled             | Command is not interactive                       | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Command:
- Use ARIA roles (`listbox`, `option`).
- Announce selection and navigation to screen readers.
- Support keyboard navigation (Tab, Arrow keys, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Command must be operable with assistive technologies and screen readers.
