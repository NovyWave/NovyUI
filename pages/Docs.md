## Docs
A documentation page for guides, API references, or help content.
- **Id:** Docs
- **Appearance:** Structured content with headings, navigation, and code samples.
- **Behavior:** Static or interactive documentation, may include search, navigation, and code highlighting.
- **Blocks:**
  - [TableOfContents](../blocks/TableOfContents.md)
  - [Section](../blocks/Section.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Docs page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Docs variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Guide         | Step-by-step guide layout.                   | Headings, steps, code samples.             | All above           |       |
| APIReference  | API reference layout.                        | Navigation, code blocks, search.           | All above           |       |

---

### States
Docs states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of docs.            | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link is hovered.                   | Link, Border          |

---

### Accessibility
Accessibility features and requirements for Docs:
- Keyboard navigation: Tab to all links, sections, and controls, Enter/Space to activate.
- ARIA roles/attributes: region, navigation, link, button.
- Color contrast: Sufficient for all text, sections, and controls.
- Focus indicator: Visible and uses the focus token.
