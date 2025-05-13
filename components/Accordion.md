## Accordion 
🔽 A vertically stacked set of expandable/collapsible items, used to show and hide sections of related content.
- **Id:** Accordion
- **Appearance:** A vertically stacked list of items, each with a header. Clicking a header expands or collapses its content. Optionally, headers may include icons indicating state (expanded/collapsed).
- **Behavior:** Only one (single) or multiple (multiple) items can be open at a time. Clicking a header toggles its content. Supports keyboard navigation and smooth transitions.
- **Used in blocks:**
  - [AccordionFAQ](../blocks/AccordionFAQ.md)

### Token Usage
The following table lists all design tokens used by the Accordion component:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Accordion item background          |
| Text         | color.neutral.12  | Header and content text            |
| Border       | color.border.2    | Border between items               |
| Radius       | radii.2           | Border radius for item container   |
| Icon         | color.primary.7   | Expand/collapse icon color         |
| Focus Ring   | color.focus.1     | Focus indicator for header         |
| Shadow       | shadow.1          | Optional shadow for expanded item  |

---

### Variants
All supported Accordion variants are listed below:
| Variant Name | Description                                 | Appearance/Behavior                                              | Tokens Used                | Notes    |
|--------------|---------------------------------------------|------------------------------------------------------------------|----------------------------|----------|
| Single       | Only one item expanded at a time            | Collapses others when one expands                               | Background, Border, Icon   | Default  |
| Multiple     | Multiple items can be expanded              | No auto-collapse; each item can be expanded/collapsed            | Background, Border, Icon   |          |
| WithIcons    | Headers include expand/collapse icons       | Icon rotates/changes on expand/collapse; works with any variant  | Icon, Background           |          |

---

### States
Accordion states and their token usage:
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
Accessibility features and requirements for Accordion:
- Uses appropriate ARIA roles (`region`, `button`, `aria-expanded`, `aria-controls`) for headers and panels.
- Supports keyboard navigation: users can move between headers with arrow keys and toggle with Enter/Space.
- Focus is managed so that only one header is tab-focusable at a time (roving tabindex pattern).
- Content panels are accessible to screen readers and hidden panels are not focusable.
- Ensures sufficient color contrast for text and icons (WCAG AA compliant).
- Focus indicators are visible and use the designated focus token.
