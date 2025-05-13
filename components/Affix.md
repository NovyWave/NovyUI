## Affix
📌 A component that fixes an element to a specific position as the user scrolls.
- **Id:** Affix
- **Appearance:** An element that remains fixed to the top, bottom, or side of the viewport as the user scrolls.
- **Behavior:** Sticks to position when scrolling past a threshold. Releases when scrolling back. Can be configured for top, bottom, left, or right affix. Supports offset and z-index customization.
- **Used in blocks:**
  - [StickyHeader](../blocks/StickyHeader.md)

---

### Token Usage
The following table lists all design tokens used by the Affix component:
| Part         | Token Example      | Description                              |
|--------------|-------------------|------------------------------------------|
| Background   | color.surface.1   | Affixed element background               |
| Border       | color.border.2    | Border for affixed element               |
| Shadow       | shadow.1          | Shadow for affixed element               |
| Z-Index      | zIndex.sticky     | Z-index for stacking context             |
| Focus Ring   | color.focus.1     | Focus indicator for interactive content  |

---

### Variants
All supported Affix variants are listed below:
| Variant Name         | Description                                 | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------------|---------------------------------------------|--------------------------------------------|----------------------------|----------|
| StickyAndFixedOnScroll | Affixes element when scrolling past threshold | Fixed position, releases on scroll back    | Background, Border, Shadow | Default  |
| BottomAffix         | Affixes element to bottom of viewport       | Sticks to bottom, customizable offset      | Background, Border, Shadow |          |
| LeftAffix           | Affixes element to left side                | Sticks to left, customizable offset        | Background, Border, Shadow |          |
| RightAffix          | Affixes element to right side               | Sticks to right, customizable offset       | Background, Border, Shadow |          |

---

### States
Affix states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Not affixed, normal flow                         | Background, Border          |
| Affixed              | Element is fixed to viewport                     | Background, Shadow, Border  |
| Focus (interactive)  | Focused interactive content inside affix         | Focus Ring, Border          |
| Hover (interactive)  | Hovered interactive content inside affix         | Background, Border          |
| Disabled             | Affixed element is not interactive               | Border, Background (muted)  |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, shadow uses `shadow.1`, etc.

---

### Accessibility
Accessibility features and requirements for Affix:
- Should not obscure important content when fixed.
- Ensure focusable elements within the affixed area remain accessible via keyboard.
- Use `aria-live` if affixed content updates dynamically.
- Interactive content inside affix must be keyboard accessible and have visible focus indicators.
- Ensure sufficient color contrast for text and borders (WCAG AA compliant).
- Affixed regions should not trap focus or interfere with screen reader navigation.
