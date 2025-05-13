## Searchbox
🔍 A modal or dropdown for searching content or navigating quickly within an app.
- **Id:** Searchbox
- **Appearance:** A modal or dropdown with a search input and list of results. May include icons, categories, and keyboard shortcuts.
- **Behavior:** Opens with shortcut or button. Typing filters results. Selecting an item triggers navigation or action.
- **Used in blocks:**
  - [Headers](../blocks/Headers.md)
  - [Navbars](../blocks/Navbars.md)

---

### Token Usage
The following table lists all design tokens used by the Searchbox component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Searchbox background       |
| Text        | color.neutral.12  | Searchbox text color       |
| Border      | color.border.2    | Searchbox border           |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for searchbox |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Searchbox variants are listed below:
| Variant Name      | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| CommandPalette   | Displays command palette   | Filters commands                           | Background, Text, Border, Icon | Default  |
| Searchable       | Search input               | Filters search results                     | Background, Border, Text   |          |

---

### States
Searchbox states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Searchbox is visible, not focused or selected    | Background, Text, Border    |
| Focus                | Searchbox is focused via keyboard                | Focus Ring, Border          |
| Disabled             | Searchbox is not interactive                     | Disabled, Border            |
| Active               | Searchbox is active/has input                    | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Searchbox:
- Provide keyboard navigation for entering and clearing search queries.
- Use appropriate ARIA roles and attributes for search input fields.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
