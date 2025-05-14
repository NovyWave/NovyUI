## Reviews
A page for displaying user or product reviews, ratings, and feedback. Supports review submission, moderation, and filtering.
- **Id:** Reviews
- **Appearance:** List or grid of reviews, star ratings, and review submission form. May include filters and sorting options.
- **Behavior:** Users can submit, edit, or delete reviews. Supports moderation and filtering by rating or date.
- **Blocks:**
  - [ProductReview](../blocks/ProductReview.md)
  - [FAQ](../blocks/FAQ.md)
- **Components:**
  - [Rating](../components/Rating.md)
  - [Input](../components/Input.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Reviews page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Review       | background   | Review card background     |
| Rating       | color        | Star color                 |
| Form         | spacing      | Controls form spacing      |

---

### Variants
All supported Reviews variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Default      | Standard reviews list      | List/grid, static display  | background, color, spacing | |
| WithForm     | Includes submission form   | Form for new reviews       | color, spacing            | |

---

### States
Reviews states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | Reviews visible            | background, color |
| Loading      | Fetching reviews           | color             |
| Error        | Failed to load reviews     | color, background |

---

### Accessibility
Accessibility features and requirements for Reviews:
- Keyboard navigation for all review actions
- ARIA roles/attributes for review list and form
- Sufficient color contrast for text and backgrounds
- Visible focus indicator for all interactive elements
