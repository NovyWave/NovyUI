## Statistic
📊 A component for displaying key metrics, numbers, or trends in a visually prominent way.
- **Id:** Statistic
- **Appearance:** A number with label, icon, or trend indicator. May be displayed in a card or grid.
- **Behavior:** Updates dynamically to reflect data changes. May animate value changes.
- **Used in blocks:**
  - [Stats](../blocks/Stats.md)

---

### Token Usage
The following table lists all design tokens used by the Statistic component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Statistic background       |
| Text        | color.neutral.12  | Statistic text color       |
| Border      | color.border.2    | Statistic border           |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for statistic |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Statistic variants are listed below:
| Variant Name      | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| NumberWithLabel  | Includes label             | Displays number with label                 | Background, Text, Border   | Default  |
| Trend            | Includes trend indicator   | Displays trend data                        | Icon, Background, Border   |          |
| Icon             | Includes icon              | Displays icon content                      | Icon, Background, Border   |          |

---

### States
Statistic states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Statistic is visible, not focused or selected    | Background, Text, Border    |
| Focus                | Statistic is focused via keyboard                | Focus Ring, Border          |
| Disabled             | Statistic is not interactive                     | Disabled, Border            |
| Updated              | Statistic value has updated                      | Text, Icon                  |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Statistic:
- Use semantic HTML for presenting statistics.
- Ensure sufficient color contrast for all statistic elements (WCAG AA compliant).
- Support keyboard navigation and screen readers.
- Use ARIA roles/attributes where appropriate.
- Focus indicators must be visible and use the designated focus token.
