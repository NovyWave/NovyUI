## StickyHeader
A block for displaying a header that remains visible at the top of the page as the user scrolls.
- **Id:** StickyHeader
- **Appearance:** Fixed header bar with title, navigation, and actions.
- **Behavior:** Stays at the top, may shrink or change style on scroll.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the StickyHeader block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Header background                  |
| Text         | color.neutral.12  | Header text                        |
| Border       | color.border.2    | Header border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported StickyHeader variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard sticky header.                      | Static title and actions.                  | All above           |       |
| WithShrink    | Header shrinks on scroll.                    | Reduced height on scroll.                  | All above           |       |
| WithShadow    | Header adds shadow on scroll.                | Shadow effect on scroll.                   | All above           |       |

---

### States
StickyHeader states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of header.          | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Shrunk    | Header is shrunk.                  | Background, Border    |

---

### Accessibility
Accessibility features and requirements for StickyHeader block:
- Keyboard navigation: Tab to buttons and links, Enter/Space to activate.
- ARIA roles/attributes: banner, navigation, and button.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
