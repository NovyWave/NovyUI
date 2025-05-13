## Menubar
🍔 A horizontal or vertical bar containing navigation menus and actions.
- **Id:** Menubar
- **Appearance:** A horizontal bar with menu items, each optionally with an icon or dropdown. May be styled as tabs or buttons.
- **Behavior:** Clicking or hovering opens dropdowns. Supports keyboard navigation and active state indication.
- **Used in blocks:** [Navbars](../blocks/Navbars.md)

---

### Token Usage
The following table lists all design tokens used by the Menubar component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Menubar background         |
| Text        | color.neutral.12  | Menubar text color         |
| Border      | color.border.2    | Menubar border             |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for items  |
| Disabled    | color.neutral.7   | Disabled item text         |

---

### Variants
All supported Menubar variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple menubar             | Basic horizontal menu                      | Background, Text, Border   | Default  |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithGroups    | Grouped menu items         | Groups items by category                   | Background, Border, Text   |          |

---

### States
Menubar states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Item is visible, not focused or selected         | Background, Text, Border    |
| Focus                | Item is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Item is selected                                 | Background, Text            |
| Disabled             | Item is not interactive                          | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Menubar:
- Use ARIA roles (`menubar`, `menuitem`, `menu`, `aria-haspopup`, `aria-expanded`).
- Announce menu structure and navigation to screen readers.
- Support keyboard navigation and activation (Tab, Arrow keys, Enter/Space, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Menubar must be operable with assistive technologies and screen readers.
