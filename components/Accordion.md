## Accordion 
🔽 A vertically stacked set of expandable/collapsible items, used to show and hide sections of related content.
- **Id:** Accordion
- **Appearance:** A vertically stacked list of items, each with a header. Clicking a header expands or collapses its content. Optionally, headers may include icons indicating state (expanded/collapsed).
- **Behavior:** Only one (single) or multiple (multiple) items can be open at a time. Clicking a header toggles its content. Supports keyboard navigation and smooth transitions.
- **Used in blocks:**

### Accessibility
- Uses appropriate ARIA roles (`region`, `button`, `aria-expanded`, `aria-controls`) for headers and panels.
- Supports keyboard navigation: users can move between headers with arrow keys and toggle with Enter/Space.
- Focus is managed so that only one header is tab-focusable at a time (roving tabindex pattern).
- Content panels are accessible to screen readers and hidden panels are not focusable.

### Variants
#### Accordion - **Single**
- **Id:** Single
- **Appearance:** Only one item is visually expanded at a time; others are collapsed.
- **Behavior:** Expanding a new item automatically collapses the previously open item.
#### Accordion - **Multiple**
- **Id:** Multiple
- **Appearance:** Multiple items can be visually expanded at once.
- **Behavior:** Each item can be expanded or collapsed independently; no auto-collapse.
#### Accordion - **With icons**
- **Id:** WithIcons
- **Appearance:** Each header includes an icon that rotates or changes to indicate expanded/collapsed state.
- **Behavior:** Icon state updates in sync with expansion/collapse; otherwise, behavior matches selected mode (single/multiple).
