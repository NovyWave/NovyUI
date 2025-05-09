## Anchor Navigation
🔗 A navigation aid that links to and highlights sections within a page as the user scrolls.
- **Id:** AnchorNavigation
- **Appearance:** A vertical or horizontal list of links to page sections. Highlights the active section as user scrolls.
- **Behavior:** Clicking a link scrolls to the section. Updates highlight as user scrolls. Supports smooth scroll and offset.
- **Used in blocks:**
  - [AnchorNavigationBlock](../blocks/AnchorNavigationBlock.md)
### Accessibility
- Uses semantic navigation elements (`<nav>`, `<a>`).
- Highlights active section for screen readers (e.g., `aria-current`).
- Supports keyboard navigation between links.

### Variants
#### Anchor Navigation - **Sticky section links**
- **Id:** StickySectionLinks
- **Appearance:** Sticky links.
- **Behavior:** Highlights active section.
