## Blog
A content-driven page listing articles, with support for reading, commenting, and filtering posts.
- **Id:** Blog
- **Appearance:** A page with a list or grid of articles, each with image, title, excerpt, author avatar, tags, and action buttons. Article page shows full content, comments, and related posts. May include section dividers and navigation.
- **Behavior:** Clicking an article opens the full post. Supports pagination, filtering, and commenting. Comments may be threaded and support moderation. Table of contents enables navigation within articles.
- **Blocks:**
  - [Navbars](../blocks/Navbars.md)
  - [Headers](../blocks/Headers.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [TableOfContents](../blocks/TableOfContents.md)
  - [Comments](../blocks/Comments.md)
  - [Footers](../blocks/Footers.md)
  - [Section](../blocks/Section.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Blog page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Link         | color.primary.7   | Link color                         |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Blog variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| BlogHome      | List or grid of articles.                    | Article cards, filters, pagination.        | All above           |       |
| ArticleDetail | Full article with comments.                  | Article content, comments section.         | All above           |       |
| AuthorProfile | Author profile with bio and articles.        | Author info, list of articles.             | All above           |       |

---

### States
Blog states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of blog.            | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link is hovered.                   | Link, Border          |

---

### Accessibility
Accessibility features and requirements for Blog:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: region, link, navigation, list.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
