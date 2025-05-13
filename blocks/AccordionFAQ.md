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
The following table lists all design tokens used by the Accordion FAQ block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | FAQ item background                |
| Text         | color.neutral.12  | Question and answer text           |
| Border       | color.border.2    | Border between FAQ items           |
| Radius       | radii.2           | Border radius for FAQ container    |
| Icon         | color.primary.7   | Expand/collapse icon color         |
| Focus Ring   | color.focus.1     | Focus indicator for question header|
| Shadow       | shadow.1          | Optional shadow for expanded item  |

---

### Variants
All supported Accordion FAQ variants are listed below:
| Variant Name | Description                                 | Appearance/Behavior                                              | Tokens Used                | Notes    |
|--------------|---------------------------------------------|------------------------------------------------------------------|----------------------------|----------|
| Basic        | Simple accordion list of questions and answers| Static or interactive, depending on configuration                | Background, Border, Icon   | Default  |
| WithSearch   | Accordion list with a search input           | User can search and filter questions; filtered results update    | Background, Border, Icon   |          |

---

### States
Accordion FAQ states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Item is collapsed and not focused                | Background, Border, Text    |
| Hover (header)       | Header is hovered by pointer                     | Background, Border, Icon    |
| Focus (header)       | Header is focused via keyboard                   | Focus Ring, Border, Icon    |
| Active (header)      | Header is being pressed/clicked                  | Background, Border, Icon    |
| Disabled             | Item is not interactive                          | Text (muted), Icon (muted)  |
| Expanded             | Item is expanded, content visible                | Background, Shadow, Border  |
| Collapsed            | Item is collapsed, content hidden                | Background, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, hover uses `color.surface.2` for background, etc.

---

### Accessibility
- Accordion headers use ARIA roles and attributes (`button`, `aria-expanded`, `aria-controls`).
- Keyboard navigation: arrow keys to move, Enter/Space to expand/collapse.
- Focus indicators are visible and use the focus token.
- Sufficient color contrast for all text and icons.
- Panels are hidden from tab order when collapsed.
