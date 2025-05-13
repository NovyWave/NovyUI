## Collapse
➖ A container that can expand or collapse to show or hide its content.
- **Id:** Collapse
- **Appearance:** A container with a header and hidden or visible content. Header may include an icon indicating expanded/collapsed state. Content area animates open/closed.
- **Behavior:** Clicking the header toggles visibility of the content. Supports smooth transitions and keyboard navigation. Can be used standalone or in groups.
- **Used in blocks:**
  - [FAQ](../blocks/FAQ.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)

---

### Token Usage
The following table lists all design tokens used by the Collapse component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Panel background           |
| Text        | color.neutral.12  | Header and content text    |
| Border      | color.border.2    | Panel border               |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for header |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Collapse variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple collapse            | Basic toggle                               | Background, Text, Border   | Default  |
| WithAnimation | Includes animation         | Smooth transitions                         | Background, Border, Icon   |          |
| Panel         | Panel styling              | Panel toggle                               | Background, Border, Text   |          |
| NestedPanels  | Nested panel styling       | Nested panel toggle                        | Background, Border, Text   |          |

---

### States
Collapse states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Panel is visible, not focused or expanded        | Background, Text, Border    |
| Focus                | Header is focused via keyboard                   | Focus Ring, Border          |
| Expanded             | Panel is expanded                                | Background, Border, Icon    |
| Collapsed            | Panel is collapsed                               | Background, Border, Icon    |
| Disabled             | Panel is not interactive                         | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Collapse:
- Use ARIA roles (`button`, `region`, `aria-expanded`, `aria-controls`).
- Announce expanded/collapsed state to screen readers.
- Support keyboard toggle and focus management (Tab, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Collapse must be operable with assistive technologies and screen readers.
