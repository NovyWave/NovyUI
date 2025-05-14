## Footers
A page for displaying footer components, such as site links, copyright, and social media.
- **Id:** Footers
- **Appearance:** Footer bar or section at the bottom of the page, with links, copyright, and icons.
- **Behavior:** Static or sticky footer, may include navigation, legal, and social links.
- **Blocks:**
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Footers page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Footer background                  |
| Text         | color.neutral.12  | Footer text                        |
| Border       | color.border.2    | Footer border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Footers variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Simple        | Basic footer with links and copyright.       | Static, minimal.                           | All above           |       |
| Social        | Footer with social media icons.              | Social icons, links.                       | All above           |       |
| Legal         | Footer with legal/disclaimer links.          | Legal links, copyright.                    | All above           |       |

---

### States
Footers states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of footer.          | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for Footers:
- Keyboard navigation: Tab to all links and buttons, Enter/Space to activate.
- ARIA roles/attributes: contentinfo, link, button.
- Color contrast: Sufficient for all text, links, and icons.
- Focus indicator: Visible and uses the focus token.
