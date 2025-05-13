## Drawer
🗄️ A panel that slides in from the edge of the screen to display additional content or actions.
- **Id:** Drawer
- **Appearance:** A panel that slides in from the edge of the screen, overlaying content. Contains title, content, and actions. May include close button.
- **Behavior:** Opens in response to user action. Can be closed by button, overlay click, or escape key. Traps focus and disables background interaction.
- **Used in blocks:**
  - [MobileNavigationDrawer](../blocks/MobileNavigationDrawer.md)

---

### Token Usage
The following table lists all design tokens used by the Drawer component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Drawer background          |
| Text        | color.neutral.12  | Drawer text color          |
| Border      | color.border.2    | Drawer border              |
| Focus Ring  | color.focus.1     | Focus indicator for drawer |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Drawer variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Left          | Drawer slides from left    | Left-side drawer                           | Background, Text, Border   | Default  |
| Right         | Drawer slides from right   | Right-side drawer                          | Background, Text, Border   |          |
| Top           | Drawer slides from top     | Top-side drawer                            | Background, Text, Border   |          |
| Bottom        | Drawer slides from bottom  | Bottom-side drawer                         | Background, Text, Border   |          |
| Fullscreen    | Fullscreen drawer          | Covers entire viewport                     | Background, Text, Border   |          |

---

### States
Drawer states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Drawer is visible, not focused or selected       | Background, Text, Border    |
| Focus                | Drawer is focused via keyboard                   | Focus Ring, Border          |
| Disabled             | Drawer is not interactive                        | Disabled, Border            |
| Open                 | Drawer is open                                   | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Drawer:
- Use ARIA roles (`dialog`, `document`).
- Announce drawer open/close and navigation to screen readers.
- Support keyboard navigation and focus trap (Tab, Shift+Tab, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Drawer must be operable with assistive technologies and screen readers.
