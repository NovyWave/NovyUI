## Section
A block for grouping related content into a visually distinct section.
- **Id:** Section
- **Appearance:** Container with optional heading, background, and spacing.
- **Behavior:** Organizes content and separates it from other sections.
- **Components:**
  - [Typography](../components/Typography.md)
  - [Card](../components/Card.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Dashboard](../pages/Dashboard.md)

---

### Token Usage
The following table lists all design tokens used by the Section block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Section background                 |
| Text         | color.neutral.12  | Section heading and content text   |
| Border       | color.border.2    | Section border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Section variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard section with heading.               | Static content and heading.                | All above           |       |
| WithBackground| Section with colored background.             | Different background token.                | All above           |       |
| WithCard      | Section content inside a card.               | Card component for content.                | All above           |       |

---

### States
Section states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of section.         | All above             |
| Focused   | Heading or content is focused.     | Focus Ring            |
| Selected  | Section is selected.               | Background, Border    |

---

### Accessibility
Accessibility features and requirements for Section block:
- Keyboard navigation: Tab to heading and content, Enter/Space to activate (if interactive).
- ARIA roles/attributes: region, group, and heading.
- Color contrast: Sufficient for all text, backgrounds, and borders.
- Focus indicator: Visible and uses the focus token.
