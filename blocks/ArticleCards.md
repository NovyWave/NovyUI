## Article Cards
A grid or list of cards showcasing articles, blog posts, or news items.
- **Id:** ArticleCards
- **Appearance:** A card layout for articles or blog posts, including image, title, excerpt, author avatar, tags, and action button(s).
- **Behavior:** Static by default. May be clickable, support hover effects, or include actions (e.g., share, bookmark).
- **Components:**
  - [Card](../components/Card.md)
  - [Image](../components/Image.md)
  - [Avatar](../components/Avatar.md)
  - [Chips](../components/Chips.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Blog](../pages/Blog.md)
  - [Dashboard](../pages/Dashboard.md)
  - [DataTable](../pages/DataTable.md)
  - [ECommerce](../pages/ECommerce.md)
  - [Portfolio](../pages/Portfolio.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the ArticleCards block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Card background                    |
| Text         | color.neutral.12  | Main text                          |
| Title        | color.primary.8   | Article title text                 |
| Excerpt      | color.neutral.10  | Article excerpt text               |
| Image Border | color.border.2    | Border around images               |
| Tag Chip     | color.secondary.7 | Tag chip background                |
| Button       | color.primary.7   | Action button background           |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ArticleCards variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Minimal card with title and excerpt only.    | Static display, no interactivity.          | All above           |       |
| WithImage     | Card includes a featured image.              | Image may be clickable or open in lightbox.| All above           |       |
| WithAuthor    | Card displays author avatar and name.        | Author info may link to profile/filter.    | All above           |       |
| WithTags      | Card displays tags or categories as chips.   | Tags may be clickable to filter articles.  | All above           |       |
| Featured      | Highlighted styling, larger card.            | May be prioritized in layout/carousel.     | All above           |       |
| Compact       | Smaller card with condensed content.         | Static, optimized for dense layouts.       | All above           |       |
| List          | Cards arranged in a vertical list.           | May support drag-and-drop/reordering.      | All above           |       |

---

### States
ArticleCards states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of cards.           | All above             |
| Hover     | Card hovered.                      | Card, Focus Ring      |
| Focused   | Card or button is focused.         | Focus Ring            |
| Selected  | Card is selected/bookmarked.       | Card, Button          |

---

### Accessibility
Accessibility features and requirements for ArticleCards:
- Keyboard navigation: Tab to each card and action button, Enter/Space to activate.
- ARIA roles/attributes: cards as articles, buttons/links for actions.
- Color contrast: Sufficient for all text, images, and buttons.
- Focus indicator: Visible and uses the focus token.
