## Sticky Header
A block that provides a header which remains visible at the top of the page as the user scrolls.
- **Id:** StickyHeader
- **Appearance:** A header bar fixed to the top of the viewport, possibly with navigation, logo, and actions.
- **Behavior:** Remains visible as the user scrolls. May hide/reveal on scroll direction or shrink on scroll.
- **Components:**
  - [Affix](../components/Affix.md)
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [AppShell](../pages/AppShell.md)
### Variants
#### Sticky Header - **Basic**
- **Id:** Basic
- **Appearance:** Simple sticky header with logo and navigation.
- **Behavior:** Remains fixed at the top.
#### Sticky Header - **Hide on scroll**
- **Id:** HideOnScroll
- **Appearance:** Header hides when scrolling down, reappears when scrolling up.
- **Behavior:** Uses scroll events to show/hide header.
