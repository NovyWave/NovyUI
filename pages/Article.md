## Article
A page for reading a single article, blog post, or news item. Includes title, author, publication date, content, and related articles or comments. Used in blogs, news sites, and knowledge bases.
- **Id:** Article
- **Appearance:** Article content with title, author, date, and related links.
- **Behavior:** Static content, may include comments or related articles.
- **Blocks:**
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Article page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Link         | color.primary.7   | Link color                         |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Article variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Standard      | Standard article layout.                     | Title, author, content, related links.     | All above           |       |
| WithComments  | Article with comments section.               | Comments below article.                    | All above           |       |

---

### States
Article states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of article.         | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link is hovered.                   | Link, Border          |

---

### Accessibility
Accessibility features and requirements for Article:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: region, link, and navigation.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
