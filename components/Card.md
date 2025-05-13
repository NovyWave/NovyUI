## Card
🗂️ A container that groups related information, actions, or media in a visually distinct block.
- **Id:** Card
- **Appearance:** A rectangular container with optional shadow, border, or background. Can include image, title, description, actions, and footer. Used to group related content.
- **Behavior:** Static by default. May be clickable, expandable, or support hover effects. Can contain interactive elements (buttons, links).
- **Used in blocks:**
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Carousels](../blocks/Carousels.md)
  - [Comments](../blocks/Comments.md)
  - [FeaturesSection](../blocks/FeaturesSection.md)
  - [ProductDetails](../blocks/ProductDetails.md)
  - [ResponsiveColumns](../blocks/ResponsiveColumns.md)
  - [Roadmap](../blocks/Roadmap.md)
  - [Stats](../blocks/Stats.md)
  - [TeamSection](../blocks/TeamSection.md)
  - [Testimonials](../blocks/Testimonials.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
  - [Wishlist](../blocks/Wishlist.md)

---

### Token Usage
The following table lists all design tokens used by the Card component:
| Part           | Token Example      | Description                                 |
|----------------|-------------------|---------------------------------------------|
| Background     | color.surface.1   | Card background                             |
| Text           | color.neutral.12  | Card text color                             |
| Border         | color.border.2    | Card border color                           |
| Shadow         | shadow.2          | Card shadow                                 |
| Focus Ring     | color.focus.1     | Focus indicator for interactive cards       |
| Hover          | color.surface.2   | Background on card hover                    |
| Footer Bg      | color.surface.2   | Footer background                           |
| Disabled Text  | color.neutral.7   | Text color for disabled state               |

---

### Variants
All supported Card variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| WithImage     | Includes an image          | Displays image content                     | Background, Border, Text   |          |
| WithActions   | Includes action buttons    | Supports interactive actions               | Background, Border, Text   |          |
| Simple        | Basic card                 | Static display                             | Background, Border, Text   | Default  |

---

### States
Card states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Card is visible, not focused or hovered          | Background, Text, Border    |
| Hover                | Card is hovered                                  | Hover, Shadow, Border       |
| Focus                | Card is focused via keyboard (if interactive)    | Focus Ring, Border          |
| Disabled             | Card is not interactive                          | Disabled Text, Background   |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, hover uses `color.surface.2`, etc.

---

### Accessibility
Accessibility features and requirements for Card:
- Use appropriate ARIA roles (e.g., `group`, `region`) and attributes (`aria-label`, `aria-labelledby`) for interactive or grouped cards.
- Ensure interactive elements inside cards are keyboard accessible and have visible focus indicators using the designated focus token.
- Use semantic elements for content (e.g., headings, lists).
- Provide alt text for images.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- If card is interactive, ensure it is operable with assistive technologies and screen readers.
