## Legal
A block for displaying legal information, terms, and privacy policies.
- **Id:** Legal
- **Appearance:** Section or page with headings, paragraphs, and links.
- **Behavior:** Presents legal content clearly, may include navigation or download links.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Legal](../pages/Legal.md)

---

### Token Usage
The following table lists all design tokens used by the Legal block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Legal section background           |
| Text         | color.neutral.12  | Legal text                         |
| Link         | color.primary.7   | Link color                         |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Legal variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard legal section.                      | Static text and links.                     | All above           |       |
| WithNav       | Includes navigation for sections.            | Sidebar or TOC for legal topics.           | All above           |       |
| Downloadable  | Includes download links for documents.       | Download buttons/links.                    | All above           |       |

---

### States
Legal states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of legal content.   | All above             |
| Focused   | Link or button is focused.         | Focus Ring            |
| Hovered   | Link is hovered.                   | Link, Border          |

---

### Accessibility
Accessibility features and requirements for Legal block:
- Keyboard navigation: Tab to links and buttons, Enter/Space to activate.
- ARIA roles/attributes: region, link, and navigation.
- Color contrast: Sufficient for all text, links, and borders.
- Focus indicator: Visible and uses the focus token.
