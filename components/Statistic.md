## Statistic
📊 A component for displaying key metrics, numbers, or trends in a visually prominent way.
- **Id:** Statistic
- **Appearance:** A number with label, icon, or trend indicator. May be displayed in a card or grid.
- **Behavior:** Updates dynamically to reflect data changes. May animate value changes.
- **Used in blocks:**
  - [Stats](../blocks/Stats.md)
### Accessibility
- Ensure numbers and trends are described for screen readers.
- Use `aria-live` if values update dynamically.

### Variants
#### Statistic - **Number with label**
- **Id:** NumberWithLabel
- **Appearance:** Includes label.
- **Behavior:** Displays number with label.
#### Statistic - **Trend**
- **Id:** Trend
- **Appearance:** Includes trend indicator.
- **Behavior:** Displays trend data.
#### Statistic - **Icon**
- **Id:** Icon
- **Appearance:** Includes icon.
- **Behavior:** Displays icon content.
