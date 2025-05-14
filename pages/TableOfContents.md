## TableOfContents
A navigational component or page listing links to all documentation sections or pages.
- **Id:** TableOfContents
- **Appearance:** List or sidebar of links, may be collapsible or inline. Highlights active section.
- **Behavior:** Allows navigation to sections/pages. May support collapse/expand and highlight active link.
- **Blocks:**
  - [TableOfContents](../blocks/TableOfContents.md)
- **Components:**
  - [List](../components/List.md)
  - [AnchorNavigation](../components/AnchorNavigation.md)

---

### Token Usage
The following table lists all design tokens used by the TableOfContents page:
| Part         | Token Example | Description                |
|--------------|--------------|----------------------------|
| Link         | color        | Link color                 |
| List         | spacing      | List item spacing          |
| TOC          | background   | TOC background color       |

---

### Variants
All supported TableOfContents variants are listed below:
| Variant Name | Description                | Appearance/Behavior         | Tokens Used | Notes |
|--------------|----------------------------|----------------------------|-------------|-------|
| Sidebar      | Sidebar TOC                | Collapsible, vertical list | color, spacing, background | |
| Inline       | Inline TOC                 | Horizontal or inline list  | color, spacing, background | |
| Collapsible  | Collapsible TOC            | Expand/collapse sections   | color, spacing, background | |

---

### States
TableOfContents states and their token usage:
| State        | Description                | Token(s) affected |
|--------------|----------------------------|-------------------|
| Default      | TOC visible, links active  | color, background |
| ActiveLink   | Link is active/selected    | color, background |
| Collapsed    | TOC or section collapsed   | background        |

---

### Accessibility
Accessibility features and requirements for TableOfContents:
- ARIA navigation role for TOC
- Keyboard navigation for all links
- Sufficient color contrast for links and background
- Visible focus indicator for all interactive elements
