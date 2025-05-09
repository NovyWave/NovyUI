## Tooltip
💡 A small popup that displays additional information when hovering or focusing on an element.
- **Id:** Tooltip
- **Appearance:** A small popup with text, appearing near the trigger element. May have an arrow pointing to the trigger.
- **Behavior:** Appears on hover or focus. Disappears on mouse leave or blur. May have a delay.
- **Used in Blocks:**
  - [IconTooltips](../blocks/IconTooltips.md)
### Accessibility
- Use `role="tooltip"` and `aria-describedby`.
- Ensure tooltip content is accessible via keyboard focus.
- Provide sufficient delay for reading.

### Variants
#### Tooltip - **Basic**
- **Id:** Basic
- **Appearance:** Simple tooltip.
- **Behavior:** Basic tooltip display.
#### Tooltip - **With arrow**
- **Id:** WithArrow
- **Appearance:** Includes arrow.
- **Behavior:** Points to trigger element.
