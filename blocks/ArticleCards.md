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
### Variants
#### Article Cards - **Basic**
- **Id:** Basic
- **Appearance:** Minimal card with title and excerpt only.
- **Behavior:** Static display, no interactivity.
#### Article Cards - **With image**
- **Id:** WithImage
- **Appearance:** Card includes a featured image at the top or side.
- **Behavior:** Image may be clickable or open in a lightbox.
#### Article Cards - **With author**
- **Id:** WithAuthor
- **Appearance:** Card displays author avatar and name.
- **Behavior:** Author info may link to profile or filter by author.
#### Article Cards - **With tags**
- **Id:** WithTags
- **Appearance:** Card displays tags or categories as chips.
- **Behavior:** Tags may be clickable to filter articles.
#### Article Cards - **Featured**
- **Id:** Featured
- **Appearance:** Highlighted styling, larger or more prominent card.
- **Behavior:** May be prioritized in layout or carousel.
#### Article Cards - **Compact**
- **Id:** Compact
- **Appearance:** Smaller card with condensed content.
- **Behavior:** Static, optimized for dense layouts.
#### Article Cards - **List**
- **Id:** List
- **Appearance:** Cards are arranged in a vertical list rather than a grid.
- **Behavior:** May support drag-and-drop or reordering.
