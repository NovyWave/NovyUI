## Timeline
🕒 A vertical or horizontal display of events in chronological order.
- **Id:** Timeline
- **Appearance:** A vertical or horizontal line with events marked by dots, icons, or cards. Each event includes label, date, and content.
- **Behavior:** Static or interactive (expand/collapse, click for details). May animate on scroll or highlight current event.
- **Used in blocks:**
  - [Roadmap](../blocks/Roadmap.md)

---

### Token Usage
The following table lists all design tokens used by the Timeline component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Timeline background        |
| Text        | color.neutral.12  | Event text color           |
| Border      | color.border.2    | Timeline line and event border |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for events |
| Disabled    | color.neutral.7   | Disabled event text        |

---

### Variants
All supported Timeline variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Vertical      | Vertical layout            | Displays vertical timeline                 | Background, Text, Border   | Default  |
| Horizontal    | Horizontal layout          | Displays horizontal timeline               | Background, Border, Text   |          |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithImages    | Includes images            | Displays image content                     | Background, Border, Text   |          |

---

### States
Timeline states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Event is visible, not focused or selected        | Background, Text, Border    |
| Focus                | Event is focused via keyboard                    | Focus Ring, Border          |
| Selected             | Event is selected                                | Background, Text            |
| Disabled             | Event is not interactive                         | Disabled, Border            |
| Current              | Event is current/active                          | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Timeline:
- Use semantic HTML for timeline events and labels.
- Ensure sufficient color contrast for all timeline elements (WCAG AA compliant).
- Support keyboard navigation and screen readers.
- Use ARIA roles/attributes where appropriate.
- Focus indicators must be visible and use the designated focus token.
