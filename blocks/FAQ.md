## FAQ
A block for displaying frequently asked questions in an expandable/collapsible format.
- **Id:** FAQ
- **Appearance:** List of questions with expandable answers.
- **Behavior:** Allows users to expand/collapse answers for each question.
- **Components:**
  - [Accordion](../components/Accordion.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Help](../pages/Help.md)
  - [Support](../pages/Support.md)

---

### Token Usage
The following table lists all design tokens used by the FAQ block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | FAQ background                     |
| Text         | color.neutral.12  | Question and answer text           |
| Border       | color.border.2    | Border between questions           |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FAQ variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard FAQ list.                           | Expand/collapse answers.                   | All above           |       |
| WithIcons     | Questions have icons.                        | Icon shown next to each question.          | All above           |       |
| Grouped       | Questions grouped by category.               | Group headings for related questions.      | All above           |       |

---

### States
FAQ states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | All questions collapsed.           | All above             |
| Expanded  | Question is expanded.              | Background, Border    |
| Focused   | Question or answer is focused.     | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for FAQ block:
- Keyboard navigation: Tab to questions, Enter/Space to expand/collapse.
- ARIA roles/attributes: list, listitem, button, and region.
- Color contrast: Sufficient for all text and borders.
- Focus indicator: Visible and uses the focus token.
