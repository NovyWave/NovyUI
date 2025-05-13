## Wishlist
A block for displaying a user's saved or favorite items in a list or grid.
- **Id:** Wishlist
- **Appearance:** Grid or list of product cards with images, titles, and actions.
- **Behavior:** Allows users to view, add, or remove items from their wishlist.
- **Components:**
  - [Card](../components/Card.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Profile](../pages/Profile.md)
  - [Wishlist](../pages/Wishlist.md)

---

### Token Usage
The following table lists all design tokens used by the Wishlist block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Card/list background               |
| Text         | color.neutral.12  | Product title and info text        |
| Icon         | color.primary.7   | Action icon color                  |
| Border       | color.border.2    | Card/list border                   |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Wishlist variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard wishlist grid/list.                 | Static product cards and actions.          | All above           |       |
| WithActions   | Includes action buttons for each item.       | Add/remove from wishlist.                  | All above           |       |
| WithGroups    | Items grouped by category.                   | Group headings for categories.             | All above           |       |

---

### States
Wishlist states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of wishlist.        | All above             |
| Focused   | Button or item is focused.         | Focus Ring            |
| Selected  | Item is selected.                  | Background, Border    |

---

### Accessibility
Accessibility features and requirements for Wishlist block:
- Keyboard navigation: Tab to cards and buttons, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and group.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
