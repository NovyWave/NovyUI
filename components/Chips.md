## Chips
🏷️ Compact elements representing tags, selections, or actions, often removable or selectable.
- **Id:** Chips
- **Appearance:** Small, rounded rectangles with text and/or icon. Often used for tags, filters, or selections. May include a close (remove) icon.
- **Behavior:** Can be static or interactive (selectable, removable, or clickable). Supports keyboard navigation. May be used in groups for multi-select.
- **Used in blocks:**
  - [ArticleCards](../blocks/ArticleCards.md)

---

### Token Usage
The following table lists all design tokens used by the Chips component:
| Part           | Token Example      | Description                                 |
|----------------|-------------------|---------------------------------------------|
| Background     | color.surface.2   | Chip background                             |
| Text           | color.neutral.12  | Chip text color                             |
| Border         | color.border.2    | Chip border color                           |
| Icon           | color.primary.7   | Icon color                                  |
| Focus Ring     | color.focus.1     | Focus indicator for chip                    |
| Hover          | color.surface.3   | Background on hover                         |
| Selected Bg    | color.primary.7   | Background when selected                    |
| Selected Text  | color.neutral.1   | Text color when selected                    |
| Disabled Bg    | color.surface.3   | Background when disabled                    |
| Disabled Text  | color.neutral.7   | Text color when disabled                    |

---

### Variants
All supported Chips variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Selectable    | Can be selected            | Visual state for selected chip             | Selected Bg, Selected Text | Default  |
| Removable     | Can be removed             | Close icon for removal                     | Icon, Background, Border   |          |
| WithIcons     | Includes icons             | Icon displayed in chip                     | Icon, Background, Border   |          |

---

### States
Chips states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Chip is visible, not focused or hovered          | Background, Text, Border    |
| Hover                | Chip is hovered                                  | Hover, Text, Border         |
| Focus                | Chip is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Chip is selected                                 | Selected Bg, Selected Text  |
| Disabled             | Chip is not interactive                          | Disabled Bg, Disabled Text  |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, selected uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Chips:
- Use `role="listbox"` and `role="option"` for selectable chips.
- Removable chips should have accessible remove buttons (`aria-label`).
- Support keyboard navigation and selection (Tab, Arrow keys, Space/Enter).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Chips must be operable with assistive technologies and screen readers.
