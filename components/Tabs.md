## Tabs
🗂️ A set of tabbed buttons for switching between different views or content sections.
- **Id:** Tabs
- **Appearance:** A row or column of tab buttons with an active indicator. Each tab displays different content.
- **Behavior:** Clicking a tab shows its content. Supports keyboard navigation, icons, and orientation.
- **Used in blocks:**
  - [SettingsTabs](../blocks/SettingsTabs.md)

---

### Token Usage
The following table lists all design tokens used by the Tabs component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Tabs background            |
| Text        | color.neutral.12  | Tab text color             |
| Border      | color.border.2    | Tabs border and indicator  |
| Icon        | color.primary.7   | Tab icon color             |
| Focus Ring  | color.focus.1     | Focus indicator for tabs   |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Tabs variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Horizontal    | Horizontal layout          | Displays horizontal tabs                   | Background, Text, Border   | Default  |
| Vertical      | Vertical layout            | Displays vertical tabs                     | Background, Border, Text   |          |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |

---

### States
Tabs states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Tab is visible, not focused or selected          | Background, Text, Border    |
| Focus                | Tab is focused via keyboard                      | Focus Ring, Border          |
| Disabled             | Tab is not interactive                           | Disabled, Border            |
| Active               | Tab is active/selected                           | Background, Border, Text    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Tabs:
- Provide keyboard navigation (arrow keys, Tab, Enter/Space to switch tabs).
- Use appropriate ARIA roles (tablist, tab, tabpanel) and attributes (aria-selected, aria-controls).
- Ensure focus indicators are visible and use the designated focus token.
- Support screen readers and assistive technologies.
- Ensure sufficient color contrast for all states (WCAG AA compliant).
