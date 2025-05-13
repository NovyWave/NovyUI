## Footers
A block for displaying site-wide footer content, links, and branding.
- **Id:** Footers
- **Appearance:** Horizontal section at the bottom of the page with links, copyright, and branding.
- **Behavior:** Stays at the bottom, may include navigation, social links, or legal info.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Legal](../pages/Legal.md)

---

### Token Usage
The following table lists all design tokens used by the Footers block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Footer background                  |
| Text         | color.neutral.12  | Footer text                        |
| Link         | color.primary.7   | Footer link color                  |
| Border       | color.border.2    | Footer border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Footers variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard footer with links.                  | Static links and copyright.                | All above           |       |
| WithSocial    | Footer includes social media links.          | Social icons/buttons.                      | All above           |       |
| WithNav       | Footer includes navigation sections.         | Multiple columns of links.                 | All above           |       |

---

### States
Footers states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of footer.          | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link is hovered.                   | Link, Border          |

---

### Accessibility
Accessibility features and requirements for Footers block:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: contentinfo, navigation, and link.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
