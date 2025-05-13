## Anchor Navigation
🔗 A navigation aid that links to and highlights sections within a page as the user scrolls.
- **Id:** AnchorNavigation
- **Appearance:** A vertical or horizontal list of links to page sections. Highlights the active section as user scrolls.
- **Behavior:** Clicking a link scrolls to the section. Updates highlight as user scrolls. Supports smooth scroll and offset.
- **Used in blocks:**
  - [TableOfContents](../blocks/TableOfContents.md)

### Token Usage
The following table lists all design tokens used by the Anchor Navigation component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.1   | Navigation background                    |
| Text         | color.neutral.12  | Link text color                          |
| Active Link  | color.primary.7   | Highlight color for active link          |
| Border       | color.border.2    | Border for navigation container          |
| Focus Ring   | color.focus.1     | Focus indicator for links                |
| Hover        | color.surface.2   | Background on link hover                 |

---

### Variants
All supported Anchor Navigation variants are listed below:
| Variant Name        | Description                        | Appearance/Behavior                                 | Tokens Used                | Notes    |
|--------------------|------------------------------------|-----------------------------------------------------|----------------------------|----------|
| StickySectionLinks | Sticky links to page sections      | Stays visible, highlights active section           | Background, Active Link    | Default  |
| HorizontalNav      | Horizontal navigation bar          | Links arranged horizontally, highlights on scroll  | Background, Active Link    |          |
| VerticalNav        | Vertical navigation bar            | Links arranged vertically, highlights on scroll    | Background, Active Link    |          |

---

### States
Anchor Navigation states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Link is not active or hovered                    | Text, Background            |
| Active               | Link is for the current section                  | Active Link, Background     |
| Hover                | Link is hovered                                  | Hover, Border               |
| Focus                | Link is focused via keyboard                     | Focus Ring, Border          |
| Disabled             | Link is not interactive                          | Text (muted), Border        |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, active uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Anchor Navigation:
- Uses semantic navigation elements (`<nav>`, `<a>`).
- Highlights active section for screen readers (e.g., `aria-current`).
- Supports keyboard navigation between links (Tab, Arrow keys).
- Focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text and active link (WCAG AA compliant).
- Navigation is operable with assistive technologies and screen readers.
