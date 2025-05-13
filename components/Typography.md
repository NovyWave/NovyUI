## Typography
🔤 A set of styled text elements for headings, paragraphs, lists, and more.
- **Id:** Typography
- **Appearance:** Text elements styled as headings, paragraphs, blockquotes, lists, code, or highlights. Follows design system type scale and spacing.
- **Behavior:** Static display. May support copy, selection, or inline editing.
- **Used in blocks:**
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [AppDownloadSection](../blocks/AppDownloadSection.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Banners](../blocks/Banners.md)
  - [Checkout](../blocks/Checkout.md)
  - [Comments](../blocks/Comments.md)
  - [ContactCard](../blocks/ContactCard.md)
  - [Error](../blocks/Error.md)
  - [FeaturesSection](../blocks/FeaturesSection.md)
  - [Footers](../blocks/Footers.md)
  - [Headers](../blocks/Headers.md)
  - [Hero](../blocks/Hero.md)
  - [Legal](../blocks/Legal.md)
  - [OrderHistory](../blocks/OrderHistory.md)
  - [PricingTable](../blocks/PricingTable.md)
  - [ProductDetails](../blocks/ProductDetails.md)
  - [ResponsiveColumns](../blocks/ResponsiveColumns.md)
  - [Roadmap](../blocks/Roadmap.md)
  - [Section](../blocks/Section.md)
  - [SplitLayout](../blocks/SplitLayout.md)
  - [Stats](../blocks/Stats.md)
  - [TeamSection](../blocks/TeamSection.md)
  - [Testimonials](../blocks/Testimonials.md)
  - [Wishlist](../blocks/Wishlist.md)

---

### Token Usage
The following table lists all design tokens used by the Typography component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Text        | color.neutral.12  | Main text color            |
| Heading     | color.neutral.12  | Headings color             |
| Link        | color.primary.7   | Link color                 |
| Blockquote  | color.neutral.9   | Blockquote/citation color  |
| Code        | color.info.7      | Code block color           |
| Highlight   | color.warning.7   | Highlight/callout color    |
| Focus Ring  | color.focus.1     | Focus indicator for links  |
| Disabled    | color.neutral.7   | Disabled text color        |

---

### Variants
All supported Typography variants are listed below:
| Variant Name         | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Headings            | Styled as headings         | Displays heading text                      | Heading, Text              | Default  |
| Paragraphs          | Styled as paragraphs       | Displays paragraph text                    | Text                       |          |
| Blockquotes         | Styled as blockquotes      | Displays blockquote text                   | Blockquote, Text           |          |
| Lists               | Styled as lists            | Displays list items                        | Text                       |          |
| CodeBlock           | Styled as code blocks      | Displays code content                      | Code, Text                 |          |
| HighlightAndCallout | Highlighted/callout text  | Displays highlighted/callout text          | Highlight, Text            |          |

---

### States
Typography states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Text is visible, not focused or hovered          | Text, Heading               |
| Link Hover           | Link is hovered                                  | Link, Focus Ring            |
| Link Focus           | Link is focused via keyboard                     | Focus Ring, Link            |
| Disabled             | Text is not interactive                          | Disabled                    |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, link uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Typography:
- Provide semantic HTML elements for text (e.g., <h1>-<h6>, <p>, <span>).
- Ensure sufficient color contrast for text and background (WCAG AA compliant).
- Support keyboard navigation and screen readers.
- Use ARIA roles/attributes where appropriate.
- Avoid using color as the only means of conveying information.
- Ensure font size and line height are accessible.
- Focus indicators must be visible and use the designated focus token.
