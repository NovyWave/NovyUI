## Scrollspy
🕵️ A navigation aid that highlights links based on the user's scroll position in the page.
- **Id:** Scrollspy
- **Appearance:** A vertical or horizontal list of links. Highlights the link corresponding to the visible section.
- **Behavior:** Updates highlight as user scrolls. Clicking a link scrolls to the section. Supports smooth scroll and active state.
- **Used in blocks:** [Table Of Contents](../blocks/TableOfContents.md)

---

### Token Usage
The following table lists all design tokens used by the Scrollspy component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Scrollspy background       |
| Text        | color.neutral.12  | Scrollspy text color       |
| Border      | color.border.2    | Scrollspy border           |
| Active      | color.primary.7   | Active link color          |
| Focus Ring  | color.focus.1     | Focus indicator for links  |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Scrollspy variants are listed below:
| Variant Name           | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|-----------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| NavigationHighlights  | Highlights active link     | Updates highlight on scroll                | Background, Text, Border, Active | Default  |

---

### States
Scrollspy states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Links are visible, not focused or selected       | Background, Text, Border    |
| Focus                | Link is focused via keyboard                     | Focus Ring, Border          |
| Disabled             | Link is not interactive                          | Disabled, Border            |
| Active               | Link is active/selected                          | Active, Background, Border  |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Scrollspy:
- Provide keyboard navigation for all scrollspy controls.
- Use appropriate ARIA roles and attributes for navigation elements.
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
