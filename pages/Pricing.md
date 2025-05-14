## Pricing
A pricing page that displays available plans, features, and costs. Users can compare options and select a plan to purchase or subscribe.
- **Id:** Pricing
- **Appearance:** Pricing table with available plans, features, costs, and call-to-action buttons.
- **Behavior:** Allows users to compare plans, select, and purchase/subscribe. May include feature comparison and toggles.
- **Blocks:**
  - [PricingTable](../blocks/PricingTable.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Pricing page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Pricing table border               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Pricing variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Table         | Pricing table with plans and features.       | Table view, feature comparison, CTA.       | All above           |       |
| Cards         | Pricing cards for each plan.                 | Card layout, feature list, CTA.            | All above           |       |

---

### States
Pricing states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of pricing.         | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Selected  | Plan is selected.                  | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Pricing:
- Keyboard navigation: Tab to all plans and controls, Enter/Space to select.
- ARIA roles/attributes: table, button, region.
- Color contrast: Sufficient for all text, plans, and controls.
- Focus indicator: Visible and uses the focus token.
