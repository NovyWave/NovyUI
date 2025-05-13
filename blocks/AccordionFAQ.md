## Accordion FAQ
A block for displaying a list of frequently asked questions using an accordion UI.
- **Id:** AccordionFAQ
- **Appearance:** A vertical list of questions, each expandable/collapsible using an accordion component.
- **Behavior:** Clicking a question expands/collapses its answer. Only one or multiple questions can be open at a time, depending on configuration. Supports keyboard navigation.
- **Components:**
  - [Accordion](../components/Accordion.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [FAQ](../pages/FAQ.md)

### Token Usage
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | FAQ item background                |
| Text         | color.neutral.12  | Question and answer text           |
| Border       | color.border.2    | Border between FAQ items           |
| Radius       | radii.2           | Border radius for FAQ container    |
| Icon         | color.primary.7   | Expand/collapse icon color         |
| Focus Ring   | color.focus.1     | Focus indicator for question header|
| Shadow       | shadow.1          | Optional shadow for expanded item  |

### Accessibility
- Accordion headers use ARIA roles and attributes (`button`, `aria-expanded`, `aria-controls`).
- Keyboard navigation: arrow keys to move, Enter/Space to expand/collapse.
- Focus indicators are visible and use the focus token.
- Sufficient color contrast for all text and icons.
- Panels are hidden from tab order when collapsed.

### Variants
#### Accordion FAQ - **Basic**
- **Id:** Basic
- **Appearance:** Simple accordion list of questions and answers.
- **Behavior:** Static or interactive, depending on configuration.
#### Accordion FAQ - **With search**
- **Id:** WithSearch
- **Appearance:** Accordion list with a search input for filtering questions.
- **Behavior:** User can search and filter questions; filtered results update the accordion list.
