## List
📋 A vertical or horizontal arrangement of items, often with icons, avatars, or actions.
- **Id:** List
- **Appearance:** A vertical stack of items, each with text and optional icon or avatar. May be ordered (numbered) or unordered (bulleted).
- **Behavior:** Static or interactive (clickable, selectable, or reorderable). Supports keyboard navigation and nested lists.
- **Used in blocks:**
  - [ActivityFeed](blocks.md#activity-feed)
  - [ArticleCards](blocks.md#article-cards)
  - [Cart](blocks.md#cart)
  - [Comments](blocks.md#comments)
  - [DragAndDrop](blocks.md#drag-and-drop)
  - [FeaturesSection](blocks.md#features-section)
  - [ResponsiveColumns](blocks.md#responsive-columns)
  - [Sidebar](blocks.md#sidebar)
  - [TableOfContents](blocks.md#table-of-contents)
  - [TeamSection](blocks.md#team-section)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Accessibility
- Use semantic list elements (`<ul>`, `<ol>`, `<li>`).
- Ensure interactive list items are keyboard accessible.
- Announce selection or focus changes.

### Variants
#### List - **Ordered**
- **Id:** Ordered
- **Appearance:** Numbered list.
- **Behavior:** Ordered list items.
#### List - **Unordered**
- **Id:** Unordered
- **Appearance:** Bulleted list.
- **Behavior:** Unordered list items.
#### List - **Description**
- **Id:** Description
- **Appearance:** Description list.
- **Behavior:** Displays descriptions.
#### List - **With actions**
- **Id:** WithActions
- **Appearance:** Includes actions.
- **Behavior:** Supports interactive actions.
#### List - **With avatars**
- **Id:** WithAvatars
- **Appearance:** Includes avatars.
- **Behavior:** Displays avatar content.
