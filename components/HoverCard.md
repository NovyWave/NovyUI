## Hover Card
🪧 A floating card that appears when hovering over an element, showing additional information or actions.
- **Id:** HoverCard
- **Appearance:** A floating card that appears when hovering over a target element. Contains text, image, or actions. May have an arrow pointing to the target.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. Supports delay and interactive content.
- **Used in Blocks:**
  - [UserProfilePopover](../blocks/UserProfilePopover.md)

---

### Token Usage
The following table lists all design tokens used by the Hover Card component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Card background            |
| Text        | color.neutral.12  | Card text color            |
| Border      | color.border.2    | Card border                |
| Shadow      | shadow.1          | Card shadow                |
| Focus Ring  | color.focus.1     | Focus indicator for card   |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Hover Card variants are listed below:
| Variant Name   | Description         | Appearance/Behavior         | Tokens Used         | Notes    |
|---------------|---------------------|-----------------------------|---------------------|----------|
| Basic         | Simple hover card   | Basic card on hover         | Background, Text, Border   | Default  |
| WithImage     | Includes image      | Displays image content      | Background, Border, Text   |          |
| WithActions   | Includes action buttons | Displays action controls | Background, Border, Text   |          |

---

### States
Hover Card states and their token usage:
| State     | Description                                 | Token(s) affected   |
|-----------|---------------------------------------------|---------------------|
| Default   | Card is visible, not focused or hovered     | Background, Text, Border    |
| Hover     | Card is hovered                             | Background, Border, Shadow  |
| Focus     | Card is focused via keyboard                | Focus Ring, Border          |
| Disabled  | Card is not interactive                     | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`.

---

### Accessibility
Accessibility features and requirements for Hover Card:
- Use ARIA roles (`dialog`, `tooltip`, `aria-describedby`).
- Announce hover card open/close and navigation to screen readers.
- Support keyboard navigation and focus trap (Tab, Shift+Tab, Escape).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Hover Card must be operable with assistive technologies and screen readers.
