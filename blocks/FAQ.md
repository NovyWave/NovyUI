## FAQ
A block for displaying frequently asked questions and answers.
- **Id:** FAQ
- **Appearance:** List or accordion of questions and answers, with optional search.
- **Behavior:** Allows expanding/collapsing answers, searching/filtering questions.
- **Components:**
  - [Collapse](../components/Collapse.md)
  - [Input](../components/Input.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [FAQ](../pages/FAQ.md)

### Token Usage
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | FAQ block background               |
| Text         | color.neutral.12  | Question and answer text           |
| Border       | color.border.2    | Border between FAQ items           |
| Radius       | radii.2           | Border radius for FAQ container    |
| Focus Ring   | color.focus.1     | Focus indicator for question header|
| Shadow       | shadow.1          | Optional shadow for expanded item  |

### Accessibility
- FAQ items use ARIA roles and attributes for expand/collapse.
- Keyboard navigation: arrow keys to move, Enter/Space to expand/collapse.
- Focus indicators are visible and use the focus token.
- Sufficient color contrast for all text and icons.
- Panels are hidden from tab order when collapsed.

### Variants
#### FAQ - **Basic**
- **Id:** Basic
- **Appearance:** Simple list of questions and answers.
- **Behavior:** Static display, no interactivity.
#### FAQ - **With search**
- **Id:** WithSearch
- **Appearance:** Includes a search input for filtering questions.
- **Behavior:** User can search and filter questions.
