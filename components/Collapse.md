## Collapse
➖ A container that can expand or collapse to show or hide its content.
- **Id:** Collapse
- **Appearance:** A container with a header and hidden or visible content. Header may include an icon indicating expanded/collapsed state. Content area animates open/closed.
- **Behavior:** Clicking the header toggles visibility of the content. Supports smooth transitions and keyboard navigation. Can be used standalone or in groups.
- **Used in blocks:**
  - [FAQ](blocks.md#faq)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
### Accessibility
- Use ARIA roles (`button`, `region`, `aria-expanded`, `aria-controls`).
- Announce expanded/collapsed state to screen readers.
- Support keyboard toggle and focus management.

### Variants
#### Collapse - **Basic**
- **Id:** Basic
- **Appearance:** Simple collapse.
- **Behavior:** Basic toggle.
#### Collapse - **With animation**
- **Id:** WithAnimation
- **Appearance:** Includes animation.
- **Behavior:** Smooth transitions.
#### Collapse - **Panel**
- **Id:** Panel
- **Appearance:** Panel styling.
- **Behavior:** Panel toggle.
#### Collapse - **Nested panels**
- **Id:** NestedPanels
- **Appearance:** Nested panel styling.
- **Behavior:** Nested panel toggle.
