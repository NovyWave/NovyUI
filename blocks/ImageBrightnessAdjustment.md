## ImageBrightnessAdjustment
A block for adjusting the brightness of images with a slider or controls.
- **Id:** ImageBrightnessAdjustment
- **Appearance:** Image with overlay slider or buttons for brightness control.
- **Behavior:** Allows users to increase or decrease image brightness in real time.
- **Components:**
  - [Image](../components/Image.md)
  - [Slider](../components/Slider.md)
  - [Button](../components/Button.md)
- **Used in pages:**
  - [Editor](../pages/Editor.md)
  - [Profile](../pages/Profile.md)

---

### Token Usage
The following table lists all design tokens used by the ImageBrightnessAdjustment block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Slider background                  |
| Text         | color.neutral.12  | Label and value text               |
| Slider       | color.primary.7   | Slider track and thumb             |
| Border       | color.border.2    | Slider border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported ImageBrightnessAdjustment variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard slider for brightness.              | User drags slider to adjust.               | All above           |       |
| WithButtons   | Buttons for incremental adjustment.          | Plus/minus buttons.                        | All above           |       |
| WithPreview   | Live preview of brightness change.           | Image updates in real time.                | All above           |       |

---

### States
ImageBrightnessAdjustment states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of controls.        | All above             |
| Focused   | Slider or button is focused.       | Focus Ring            |
| Disabled  | Controls are disabled.             | Text, Slider          |

---

### Accessibility
Accessibility features and requirements for ImageBrightnessAdjustment block:
- Keyboard navigation: Tab to slider and buttons, Arrow keys to adjust.
- ARIA roles/attributes: slider, button, and label.
- Color contrast: Sufficient for all text, slider, and borders.
- Focus indicator: Visible and uses the focus token.
