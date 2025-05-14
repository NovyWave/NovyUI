## StickyCartSummary
A sticky summary of the shopping cart, visible as users scroll through checkout or product pages.
- **Id:** StickyCartSummary
- **Appearance:** Fixed summary bar or card, shows cart items, total, and checkout button. Stays visible while scrolling.
- **Behavior:** Updates as cart changes, supports removing items, and links to checkout. May collapse/expand on mobile.
- **Blocks:**
  - [StickyCartSummary](../blocks/StickyCartSummary.md)
  - [Cart](../blocks/Cart.md)
- **Components:**
  - [Button](../components/Button.md)
  - [Image](../components/Image.md)
  - [PriceTag](../components/PriceTag.md)

---

### Token Usage
The following table lists all design tokens used by the StickyCartSummary page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Summary      | background   | Summary background color   |
| Divider      | border       | Divider color/style        |
| Layout       | spacing      | Padding/margin             |

---

### Variants
All supported StickyCartSummary variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Collapsed    | Collapsed summary bar      | Minimal info, expand button| background, border, spacing | |
| Expanded     | Full summary visible       | All cart items, checkout   | background, border, spacing | |

---

### States
StickyCartSummary states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Cart summary visible       | background, border, spacing |
| Empty        | No items in cart           | background, border         |
| Updated      | Item added/removed         | background, border         |

---

### Accessibility
Accessibility features and requirements for StickyCartSummary:
- ARIA live region for cart updates
- Keyboard accessible controls for actions
- Sufficient color contrast for summary and controls
- Visible focus indicator for all interactive elements
