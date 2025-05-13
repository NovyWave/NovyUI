## Stats
A block for displaying key statistics or metrics in a visually prominent way.
- **Id:** Stats
- **Appearance:** Cards or panels with numbers, labels, and icons.
- **Behavior:** Shows important metrics, may include trends or comparisons.
- **Components:**
  - [Card](../components/Card.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Analytics](../pages/Analytics.md)

---

### Token Usage
The following table lists all design tokens used by the Stats block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Card/panel background              |
| Text         | color.neutral.12  | Metric label and value text        |
| Icon         | color.primary.7   | Icon color                         |
| Border       | color.border.2    | Card/panel border                  |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Stats variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard stats cards.                        | Static metrics and icons.                  | All above           |       |
| WithTrends    | Shows trend indicators (up/down).            | Trend icons/colors.                        | All above           |       |
| WithComparisons| Shows comparisons to previous periods.       | Additional comparison text.                | All above           |       |

---

### States
Stats states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of stats.           | All above             |
| Focused   | Card or icon is focused.           | Focus Ring            |
| Highlighted| Stat is highlighted.               | Icon, Border          |

---

### Accessibility
Accessibility features and requirements for Stats block:
- Keyboard navigation: Tab to cards and icons, Enter/Space to activate (if interactive).
- ARIA roles/attributes: group, region, and figure.
- Color contrast: Sufficient for all text, icons, and borders.
- Focus indicator: Visible and uses the focus token.
