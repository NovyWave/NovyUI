## Resizable Panel
↔️ A container that can be resized by the user, often via a drag handle or border.
- **Id:** ResizablePanel
- **Appearance:** A container with a visible drag handle or border. Can be horizontal or vertical.
- **Behavior:** User drags handle to resize panel. Supports min/max size and snapping. May animate resize.
- **Used in Blocks:**
  - [SplitLayout](../blocks/SplitLayout.md)

### Accessibility
- Use `aria-label` to describe panel purpose.
- Ensure drag handles are keyboard accessible.
- Announce size changes to screen readers if relevant.

### Variants
#### Resizable Panel - **Horizontal**
- **Id:** Horizontal
- **Appearance:** Horizontal layout.
- **Behavior:** Resizes horizontally.
#### Resizable Panel - **Vertical**
- **Id:** Vertical
- **Appearance:** Vertical layout.
- **Behavior:** Resizes vertically.
#### Resizable Panel - **With content**
- **Id:** WithContent
- **Appearance:** Includes content.
- **Behavior:** Displays panel content.
