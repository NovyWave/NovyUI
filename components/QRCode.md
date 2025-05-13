## QR Code
🔳 A component for generating and displaying QR codes that encode data for scanning.
- **Id:** QRCode
- **Appearance:** A square grid of black and white modules encoding data. May include a label or logo in the center.
- **Behavior:** Static image or canvas. Scannable by devices. Updates when data changes.
- **Used in blocks:**
  - [AppDownloadSection](../blocks/AppDownloadSection.md)

---

### Token Usage
The following table lists all design tokens used by the QR Code component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | QR code background         |
| Border      | color.border.2    | QR code border             |
| Icon        | color.primary.7   | Center icon color          |
| Focus Ring  | color.focus.1     | Focus indicator for QR code|
| Disabled    | color.neutral.7   | Disabled overlay           |

---

### Variants
All supported QR Code variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| DisplayQRCodes| Displays QR codes          | Scannable QR codes                         | Background, Border, Icon   | Default  |

---

### States
QR Code states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | QR code is visible, not focused or selected      | Background, Border          |
| Focus                | QR code is focused via keyboard                  | Focus Ring, Border          |
| Disabled             | QR code is not interactive                       | Disabled, Border            |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, icon uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for QR Code:
- Provide a text alternative describing the QR code's purpose and use appropriate ARIA roles/attributes if needed.
- Ensure the QR code is large enough to be scanned.
- Support keyboard navigation (Tab, Enter/Space).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for background and border in all states (WCAG AA compliant).
- QR Code must be operable with assistive technologies and screen readers.
