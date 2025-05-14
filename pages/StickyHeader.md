## StickyHeader
A header that remains visible at the top of the page as users scroll.
- **Id:** StickyHeader
- **Appearance:** Fixed header bar, may shrink or add shadow on scroll. Can include navigation, logo, and action buttons.
- **Behavior:** Remains visible while scrolling, may shrink or hide on scroll. Supports navigation and actions.
- **Blocks:**
  - [StickyHeader](../blocks/StickyHeader.md)
  - [Navbars](../blocks/Navbars.md)
- **Components:**
  - [Button](../components/Button.md)
  - [Logo](../components/Logo.md)
  - [Menu](../components/Menu.md)

---

### Token Usage
The following table lists all design tokens used by the StickyHeader page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Header       | background   | Header background color    |
| Divider      | border       | Bottom border color/style  |
| Shadow       | shadow       | Drop shadow for elevation  |

---

### Variants
All supported StickyHeader variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard sticky header     | Fixed, always visible      | background, border, shadow | |
| Shrinking    | Shrinks on scroll          | Height reduces on scroll   | background, border, shadow | |
| WithActions  | Includes action buttons    | Navigation, actions        | background, border, shadow | |

---

### States
StickyHeader states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Header visible             | background, border, shadow |
| Scrolled     | User has scrolled down     | background, border, shadow |
| Hidden       | Header hidden              | background, border, shadow |

---

### Accessibility
Accessibility features and requirements for StickyHeader:
- ARIA landmarks for header and navigation
- Keyboard navigation for header actions
- Sufficient color contrast for header and actions
- Visible focus indicator for all interactive elements
