## Hover Card
🪧 A floating card that appears when hovering over an element, showing additional information or actions.
- **Id:** HoverCard
- **Appearance:** A floating card that appears when hovering over a target element. Contains text, image, or actions. May have an arrow pointing to the target.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. Supports delay and interactive content.
- **Used in blocks:**
  - [HoverCardBlock](../blocks/HoverCardBlock.md)
### Accessibility
- Ensure hover card content is accessible via keyboard (focus/focusin events).
- Use `aria-describedby` to link trigger and card.
- Dismiss card on Esc key.

### Variants
#### Hover Card - **Appears on hover**
- **Id:** AppearsOnHover
- **Appearance:** Appears on hover.
- **Behavior:** Displays hover card.
#### Hover Card - **With actions**
- **Id:** WithActions
- **Appearance:** Includes actions.
- **Behavior:** Supports interactive actions.
