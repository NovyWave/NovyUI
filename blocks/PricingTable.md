## PricingTable
A block for displaying pricing plans and feature comparisons in a table format.
- **Id:** PricingTable
- **Appearance:** Table or grid with plan names, prices, features, and call-to-action buttons.
- **Behavior:** Allows users to compare plans and select one.
- **Components:**
  - [Table](../components/Table.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Pricing](../pages/Pricing.md)
  - [Signup](../pages/Signup.md)

---

### Token Usage
The following table lists all design tokens used by the PricingTable block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Table background                   |
| Text         | color.neutral.12  | Plan and feature text              |
| Highlight    | color.primary.7   | Highlighted plan or feature        |
| Border       | color.border.2    | Table border                       |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported PricingTable variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard pricing table.                      | Static plans and features.                 | All above           |       |
| WithHighlight | Highlights a recommended plan.               | Emphasized plan column.                    | All above           |       |
| WithToggle    | Toggle between monthly/yearly pricing.       | Switch for pricing period.                 | All above           |       |

---

### States
PricingTable states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of table.           | All above             |
| Focused   | Button or cell is focused.         | Focus Ring            |
| Selected  | Plan is selected.                  | Highlight, Border     |

---

### Accessibility
Accessibility features and requirements for PricingTable block:
- Keyboard navigation: Tab to plans and buttons, Arrow keys to navigate.
- ARIA roles/attributes: table, row, cell, button, and group.
- Color contrast: Sufficient for all text, highlights, and borders.
- Focus indicator: Visible and uses the focus token.
