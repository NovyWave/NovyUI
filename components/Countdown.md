## Countdown
⏳ A timer that counts down to a specific time or event, often used for deadlines or launches.
- **Id:** Countdown
- **Appearance:** A numeric or digital timer showing time remaining. May include labels for days, hours, minutes, seconds.
- **Behavior:** Counts down in real time. Triggers event or changes appearance when complete.
- **Used in blocks:**
  - [CountdownTimer](../blocks/CountdownTimer.md)

---

### Token Usage
The following table lists all design tokens used by the Countdown component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Countdown background       |
| Text        | color.neutral.12  | Countdown text color       |
| Border      | color.border.2    | Countdown border           |
| Icon        | color.primary.7   | Icon color                 |
| Focus Ring  | color.focus.1     | Focus indicator            |
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Countdown variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Basic         | Simple countdown           | Basic countdown timer                      | Background, Text, Border   | Default  |
| WithIcon      | Includes icon              | Displays icon content                      | Icon, Background, Border   |          |
| Circular      | Circular countdown         | Circular progress indicator                | Background, Border, Text   |          |

---

### States
Countdown states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Countdown is visible, not focused or running     | Background, Text, Border    |
| Running              | Countdown is active                              | Background, Text, Border    |
| Finished             | Countdown has finished                           | Background, Text, Border    |
| Disabled             | Countdown is not interactive                     | Disabled, Border            |
| Focus                | Countdown is focused via keyboard                | Focus Ring, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Countdown:
- Use ARIA roles (`timer`).
- Announce countdown updates to screen readers.
- Support keyboard navigation and control (Tab, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Countdown must be operable with assistive technologies and screen readers.
