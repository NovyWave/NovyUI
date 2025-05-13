## AppDownloadSection
A block for presenting app download links, QR codes, and instructions.
- **Id:** AppDownloadSection
- **Appearance:** A section with download buttons, platform icons, and QR codes.
- **Behavior:** Clicking a button starts download or opens app store. May show version info.
- **Components:**
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Download](../pages/Download.md)

---

### Token Usage
The following table lists all design tokens used by the AppDownloadSection block:
| Part           | Token Example      | Description                        |
|----------------|-------------------|------------------------------------|
| Background     | color.surface.1   | Section background                 |
| Text           | color.neutral.12  | Main text                          |
| Button         | color.primary.7   | Download button background         |
| Icon           | color.neutral.10  | Platform icon color                |
| QR Code Border | color.border.2    | QR code border                     |
| Focus Ring     | color.focus.1     | Focus indicator for buttons        |

---

### Variants
All supported AppDownloadSection variants are listed below:
| Variant Name     | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|------------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| WithQRCode       | Includes QR code for mobile download.        | User can scan QR code to download app.     | All above           |       |
| PlatformButtons  | Download buttons for multiple platforms.     | Buttons link to respective app stores.     | All above           |       |

---

### States
AppDownloadSection states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of section.         | All above             |
| Focused   | Button is focused for keyboard nav.| Focus Ring            |
| Hover     | Button hovered.                    | Button                |
| Pressed   | Button pressed.                    | Button                |

---

### Accessibility
Accessibility features and requirements for AppDownloadSection:
- Keyboard navigation: Tab to each button, Enter/Space to activate.
- ARIA roles/attributes: buttons, links, and QR code as image with alt text.
- Color contrast: Sufficient for all text, icons, and buttons.
- Focus indicator: Visible and uses the focus token.
