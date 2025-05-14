## Product
A block for displaying a product card with image, title, price, and action buttons (e.g., add to cart, wishlist, remove). Used in e-commerce and retail pages.
- **Id:** Product
- **Appearance:** Card layout with product image, title, price, and action buttons. Supports grid or list display.
- **Behavior:** Users can add product to cart, remove from wishlist, or view details. Supports hover/focus states and responsive layout.
- **Components:**
  - [Button](../components/Button.md)
  - [Image](../components/Image.md)
  - [Badge](../components/Badge.md)
- **Used in pages:**
  - [Wishlist](../pages/Wishlist.md)

---

### Token Usage
The following table lists all design tokens used by the Product block:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Card         | background   | Product card background    |
| Title        | color        | Product title color        |
| Price        | color        | Product price color        |
| Button       | color        | Action button color        |

---

### Variants
All supported Product variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard product card      | Card with image, price, actions | background, color | |
| Sale         | Product on sale            | Badge, price highlight      | color, background | |
| OutOfStock   | Product unavailable        | Disabled actions, badge     | color, background | |

---

### States
Product states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Product available          | background, color |
| Hover        | Mouse over card            | background        |
| Focus        | Keyboard focus on card     | background        |
| Disabled     | Out of stock               | color, background |

---

### Accessibility
Accessibility features and requirements for Product:
- Keyboard navigation for all action buttons
- ARIA labels for product actions
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
