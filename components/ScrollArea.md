## Scroll Area
🖱️ A container with custom scrollbars for overflowing content.
- **Id:** ScrollArea
- **Appearance:** A container with custom scrollbars. May show only when needed or always visible.
- **Behavior:** Scrolls content horizontally or vertically. Supports keyboard and mouse interaction. May auto-scroll or snap.
- **Used in blocks:** [Sidebar](../blocks/Sidebar.md)

---

### Token Usage
The following table lists all design tokens used by the Scroll Area component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Scroll area background     |
| Border      | color.border.2    | Scrollbar and area border  |
| Thumb       | color.primary.7   | Scrollbar thumb color      |
| Focus Ring  | color.focus.1     | Focus indicator for area   |
| Disabled    | color.neutral.7   | Disabled overlay           |

---

### Variants
All supported Scroll Area variants are listed below:
| Variant Name       | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|-------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| CustomScrollbars  | Custom scrollbar design    | Custom scroll interaction                  | Background, Border, Thumb  | Default  |
| ScrollableContent | Scrollable container       | Scrolls content                            | Background, Border         |          |

---

### States
Scroll Area states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Area is visible, not focused or selected         | Background, Border          |
| Focus                | Area is focused via keyboard                     | Focus Ring, Border          |
| Disabled             | Area is not interactive                          | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, thumb uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Scroll Area:
- Use ARIA roles (`region`, `scrollbar`, `aria-label`).
- Announce scroll position and content to screen readers.
- Support keyboard navigation and scrolling (Tab, Arrow keys, PageUp/PageDown).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for scrollbar, text, and background in all states (WCAG AA compliant).
- Scroll Area must be operable with assistive technologies and screen readers.
