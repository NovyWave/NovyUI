## Wishlist
A wishlist page where users can save products or items for future reference or purchase. Includes product images, prices, and actions to move items to cart or remove them. Used in e-commerce and retail sites.
- **Id:** Wishlist
- **Appearance:** List or grid of saved products with images, prices, and action buttons. May include empty state and move-to-cart option.
- **Behavior:** Users can add/remove items, move to cart, and view product details. Supports empty state and persistent storage.
- **Blocks:**
  - [Product](../blocks/Product.md)
  - [ProductDetails](../blocks/ProductDetails.md)
  - [Cart](../blocks/Cart.md)
- **Components:**
  - [Button](../components/Button.md)
  - [Image](../components/Image.md)
  - [Badge](../components/Badge.md)

---

### Token Usage
The following table lists all design tokens used by the Wishlist page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Product      | background   | Product card background    |
| Button       | color        | Action button color        |
| Price        | color        | Price text color           |

---

### Variants
All supported Wishlist variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard wishlist          | List/grid, action buttons  | background, color | |
| Empty        | No items in wishlist       | Empty state illustration   | color, background | |

---

### States
Wishlist states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Items in wishlist          | background, color |
| Empty        | No items saved             | color, background |
| Moved        | Item moved to cart         | color             |

---

### Accessibility
Accessibility features and requirements for Wishlist:
- Keyboard navigation for all action buttons
- ARIA labels for product actions
- Sufficient color contrast for text and controls
- Visible focus indicator for all interactive elements
