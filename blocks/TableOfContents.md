## TableOfContents
A block for displaying a navigable table of contents for a page or section.
- **Id:** TableOfContents
- **Appearance:** List or sidebar with links to headings/sections.
- **Behavior:** Allows users to jump to sections, highlights current section.
- **Components:**
  - [List](../components/List.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Docs](../pages/Docs.md)
  - [Blog](../pages/Blog.md)

---

### Token Usage
The following table lists all design tokens used by the TableOfContents block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | TOC background                     |
| Text         | color.neutral.12  | TOC link and text                  |
| Active Link  | color.primary.7   | Highlighted/active link            |
| Border       | color.border.2    | TOC border                         |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported TableOfContents variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard TOC list.                           | Static links to sections.                  | All above           |       |
| WithHighlight | Highlights current section.                  | Active link highlighted.                   | All above           |       |
| Collapsible   | TOC can be collapsed/expanded.               | Toggle button for collapse.                | All above           |       |

---

### States
TableOfContents states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of TOC.             | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Active    | Link is active/highlighted.        | Active Link, Border   |

---

### Accessibility
Accessibility features and requirements for TableOfContents block:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: navigation, list, and link.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
