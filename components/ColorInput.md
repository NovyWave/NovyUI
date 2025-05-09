## Color Input
🎨 An input field for selecting or entering color values, often with a color picker UI.
- **Id:** ColorInput
- **Appearance:** An input field with a color swatch. May include a color picker dialog, palette, or eyedropper tool. Shows selected color as background or border.
- **Behavior:** Clicking opens a color picker or palette. Selecting a color updates the value and swatch. May support manual hex/RGB input and validation.
- **Used in blocks:**
  - [ColorPickerSection](../blocks/ColorPickerSection.md)
### Accessibility
- Use `aria-label` to describe the color input.
- Ensure color picker dialog is keyboard accessible.
- Provide text alternatives for color values.

### Variants
#### Color Input - **Color picker**
- **Id:** ColorPicker
- **Appearance:** Includes color picker dialog.
- **Behavior:** Opens color picker.
#### Color Input - **Swatch**
- **Id:** Swatch
- **Appearance:** Displays color swatch.
- **Behavior:** Shows selected color.
#### Color Input - **EyeDropper**
- **Id:** EyeDropper
- **Appearance:** Includes eyedropper tool.
- **Behavior:** Selects color from screen.
#### Color Input - **Palette**
- **Id:** Palette
- **Appearance:** Includes color palette.
- **Behavior:** Selects color from palette.
