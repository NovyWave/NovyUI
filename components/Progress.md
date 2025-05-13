## Progress
📈 A visual indicator of task completion or ongoing activity, such as a bar or spinner.
- **Id:** Progress
- **Appearance:** A horizontal bar or circular indicator showing completion percentage. May include label or value.
- **Behavior:** Fills or animates to indicate progress. Can be determinate (fixed value) or indeterminate (loading).
- **Used in blocks:**
  - [Stats](../blocks/Stats.md)

---

### Token Usage
The following table lists all design tokens used by the Progress component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Progress background        |
| Text        | color.neutral.12  | Progress text color        |
| Border      | color.border.2    | Progress border            |
| Indicator   | color.primary.7   | Progress indicator color   |
| Focus Ring  | color.focus.1     | Focus indicator for progress |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Progress variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Linear        | Horizontal bar             | Indicates linear progress                  | Background, Text, Border, Indicator | Default  |
| Circular      | Circular indicator         | Indicates circular progress                | Background, Border, Indicator        |          |

---

### States
Progress states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Progress is visible, not focused or selected     | Background, Text, Border    |
| Focus                | Progress is focused via keyboard                 | Focus Ring, Border          |
| Disabled             | Progress is not interactive                      | Disabled, Border            |
| Indeterminate        | Progress is in indeterminate state               | Indicator, Background       |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, indicator uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Progress:
- Use ARIA roles (`progressbar`, `status`, `aria-valuenow`, `aria-valuemax`, `aria-valuemin`).
- Announce progress updates and completion to screen readers.
- Support keyboard navigation to and from progress indicators (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for bar, text, and background (WCAG AA compliant).
- Progress must be operable with assistive technologies and screen readers.
