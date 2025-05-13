## FeaturesSection
A block for highlighting product or service features in a structured layout.
- **Id:** FeaturesSection
- **Appearance:** Grid or list of feature items, each with icon, title, and description.
- **Behavior:** Presents features clearly, may include links or actions.
- **Components:**
  - [Card](../components/Card.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
  - [Product](../pages/Product.md)

---

### Token Usage
The following table lists all design tokens used by the FeaturesSection block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Section background                 |
| Text         | color.neutral.12  | Feature title and description      |
| Icon         | color.primary.7   | Feature icon color                 |
| Border       | color.border.2    | Card or section border             |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported FeaturesSection variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard grid/list of features.              | Static display of features.                | All above           |       |
| WithLinks     | Features include links or actions.           | Clickable feature items.                   | All above           |       |
| WithIcons     | Features have prominent icons.               | Icon shown for each feature.               | All above           |       |

---

### States
FeaturesSection states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of features.        | All above             |
| Focused   | Feature or link is focused.        | Focus Ring            |
| Hovered   | Feature is hovered.                | Border, Icon          |

---

### Accessibility
Accessibility features and requirements for FeaturesSection block:
- Keyboard navigation: Tab to features and links, Enter/Space to activate.
- ARIA roles/attributes: list, listitem, button, and link.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
