## Slider
🎚️ A control for selecting a value or range by sliding a handle along a track.
- **Id:** Slider
- **Appearance:** A horizontal or vertical track with a draggable thumb. May show value, min/max labels, and ticks.
- **Behavior:** Dragging the thumb or clicking the track changes the value. Supports keyboard navigation, range selection, and disabled state.
- **Used in blocks:**
  - [SliderInputBlock](../blocks/SliderInputBlock.md)
### Accessibility
- Use `role="slider"` with `aria-valuenow`, `aria-valuemax`, `aria-valuemin`.
- Announce value changes to screen readers.
- Support keyboard and mouse interaction.

### Variants
#### Slider - **Single value**
- **Id:** SingleValue
- **Appearance:** Single value slider.
- **Behavior:** Adjusts single value.
#### Slider - **Range**
- **Id:** Range
- **Appearance:** Range slider.
- **Behavior:** Adjusts range of values.
