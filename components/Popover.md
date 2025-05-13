## Popover
💬 A floating panel anchored to a trigger element, used for displaying additional content or actions.
- **Id:** Popover
- **Appearance:** A floating panel anchored to a trigger element. Contains content, actions, or forms. May have an arrow pointing to the trigger.
- **Behavior:** Opens on click, hover, or focus. Closes on outside click or escape. Supports interactive content and keyboard navigation.
- **Used in blocks:**
  - [UserProfilePopover](../blocks/UserProfilePopover.md)

---

### Token Usage
The following table lists all design tokens used by the Popover component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Popover background         |
| Text        | color.neutral.12  | Popover text color         |
| Border      | color.border.2    | Popover border             |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for popover|
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Popover variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple popover             | Basic popover interaction                  | Background, Text, Border   | Default  |
| WithMenu      | Includes menu              | Displays menu content                      | Icon, Background, Border   |          |
| WithForm      | Includes form elements     | Supports form submission                   | Background, Border, Text   |          |

---

### States
Popover states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Popover is visible, not focused or selected      | Background, Text, Border    |
| Focus                | Popover is focused via keyboard                  | Focus Ring, Border          |
| Disabled             | Popover is not interactive                       | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Popover:
- Use ARIA roles (`dialog`, `tooltip`, `aria-describedby`).
- Announce popover open/close and content to screen readers.
- Support keyboard navigation and focus trap (Tab, Shift+Tab, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Popover must be operable with assistive technologies and screen readers.
