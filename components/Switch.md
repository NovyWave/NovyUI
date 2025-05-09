## Switch
🔀 A toggle control for switching between two states, such as on/off or enabled/disabled.
- **Id:** Switch
- **Appearance:** A toggle switch with a sliding thumb. May include labels or icons for on/off states.
- **Behavior:** Clicking or dragging toggles state. Supports keyboard navigation and disabled state. May animate thumb.
- **Used in blocks:**
  - [SwitchToggleBlock](../blocks/SwitchToggleBlock.md)
### Accessibility
- Use `role="switch"` with `aria-checked`.
- Announce state changes to screen readers.
- Support keyboard toggle (Space key).

### Variants
#### Switch - **With label**
- **Id:** WithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays label text.
#### Switch - **Without label**
- **Id:** WithoutLabel
- **Appearance:** No label.
- **Behavior:** Basic toggle switch.
#### Switch - **With icons**
- **Id:** WithIcons
- **Appearance:** Includes icons.
- **Behavior:** Displays icon content.
