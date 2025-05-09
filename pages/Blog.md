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
### Variants
#### Blog - **Blog home**
- **Id:** BlogHome
- **Appearance:** List or grid of articles with images, excerpts, author, and tags.
- **Behavior:** Allows filtering, pagination, and navigation to article details.
#### Blog - **Article Detail**
- **Id:** ArticleDetail
- **Appearance:** Full content of a single article with comments section and table of contents.
- **Behavior:** Allows commenting, sharing, and navigation within the article.
#### Blog - **Author profile**
- **Id:** AuthorProfile
- **Appearance:** Profile of the author with bio, avatar, and list of articles.
- **Behavior:** Static display of author information only.
#### Blog - **Categories and Tags**
- **Id:** CategoriesAndTags
- **Appearance:** List of categories or tags for filtering articles.
- **Behavior:** Allows filtering articles by category or tag.
#### Blog - **Comments**
- **Id:** Comments
- **Appearance:** List of comments with input field for new comments, may be threaded.
- **Behavior:** Allows adding, replying, editing, and moderating comments.
