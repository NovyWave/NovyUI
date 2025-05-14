## Section
A page for displaying a reusable content section or layout block.
- **Id:** Section
- **Appearance:** Section with heading, content, and optional actions or visuals.
- **Behavior:** Static or interactive section, may include collapsible or expandable content.
- **Blocks:**
  - [Section](../blocks/Section.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Section page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Section background                 |
| Text         | color.neutral.12  | Section text                       |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Section variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Static        | Static section.                              | Heading, content, actions.                 | All above           |       |
| Collapsible   | Collapsible/expandable section.              | Expand/collapse, content, actions.         | All above           |       |

---

### States
Section states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of section.         | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Expanded  | Section is expanded.               | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Section:
- Keyboard navigation: Tab to all content and controls, Enter/Space to activate.
- ARIA roles/attributes: region, button, heading.
- Color contrast: Sufficient for all text, content, and controls.
- Focus indicator: Visible and uses the focus token.
