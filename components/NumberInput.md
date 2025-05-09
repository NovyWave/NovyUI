## Number Input
🔢 An input field for entering numeric values, often with increment/decrement controls.
- **Id:** NumberInput
- **Appearance:** An input field for numbers, often with up/down arrow buttons. May show min/max and step values.
- **Behavior:** Accepts numeric input. Arrow buttons increment/decrement value. Supports validation, min/max, and disabled state.
- **Used in blocks:**
  - [NumberInputBlock](blocks.md#number-input-block)
### Accessibility
- Use native `<input type="number">`.
- Provide associated label and instructions.
- Announce value changes to screen readers.

### Variants
#### Number Input - **With controls**
- **Id:** WithControls
- **Appearance:** Includes up/down arrow buttons.
- **Behavior:** Adjusts value with controls.
#### Number Input - **Without controls**
- **Id:** WithoutControls
- **Appearance:** No arrow buttons.
- **Behavior:** Adjusts value without controls.
