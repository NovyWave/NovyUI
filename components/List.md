## List
📋 A vertical or horizontal arrangement of items, often with icons, avatars, or actions.
- **Id:** List
- **Appearance:** A vertical stack of items, each with text and optional icon or avatar. May be ordered (numbered) or unordered (bulleted).
- **Behavior:** Static or interactive (clickable, selectable, or reorderable). Supports keyboard navigation and nested lists.
- **Used in blocks:**
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Cart](../blocks/Cart.md)
  - [Comments](../blocks/Comments.md)
  - [DragAndDrop](../blocks/DragAndDrop.md)
  - [FeaturesSection](../blocks/FeaturesSection.md)
  - [ResponsiveColumns](../blocks/ResponsiveColumns.md)
  - [Sidebar](../blocks/Sidebar.md)
  - [TableOfContents](../blocks/TableOfContents.md)
  - [TeamSection](../blocks/TeamSection.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)

---

### Token Usage
The following table lists all design tokens used by the List component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | List background            |
| Text        | color.neutral.12  | List item text color       |
| Border      | color.border.2    | List border                |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator for items  |
| Disabled    | color.neutral.7   | Disabled item text         |

---

### Variants
All supported List variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Unordered     | Unordered list             | Bulleted list                              | Background, Text, Border   | Default  |
| Ordered       | Ordered list               | Numbered list                              | Background, Text, Border   |          |
| WithIcons     | Includes icons             | Displays icon content                      | Icon, Background, Border   |          |
| WithActions   | Includes action buttons    | Displays action controls                   | Background, Border, Text   |          |

---

### States
List states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Item is visible, not focused or selected         | Background, Text, Border    |
| Focus                | Item is focused via keyboard                     | Focus Ring, Border          |
| Selected             | Item is selected                                 | Background, Text            |
| Disabled             | Item is not interactive                          | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for List:
- Use semantic list markup (`<ul>`, `<ol>`, `<li>`) and appropriate ARIA roles/attributes.
- Announce list structure and item status to screen readers.
- Support keyboard navigation to and from list items (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- List must be operable with assistive technologies and screen readers.
