## Download
A page for downloading files, resources, or software.
- **Id:** Download
- **Appearance:** List or grid of downloadable items with descriptions and download buttons.
- **Behavior:** Allows users to download files, view details, and see file types/sizes.
- **Blocks:**
  - [Download](../blocks/Download.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the Download page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Page background                    |
| Text         | color.neutral.12  | Main text                          |
| Border       | color.border.2    | Item border                        |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported Download variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| List          | List of downloadable items.                  | List view, download buttons.               | All above           |       |
| Grid          | Grid of downloadable items.                  | Grid view, download buttons.               | All above           |       |

---

### States
Download states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of downloads.       | All above             |
| Focused   | Button or link is focused.         | Focus Ring            |
| Downloaded| Item has been downloaded.          | Border, Text          |

---

### Accessibility
Accessibility features and requirements for Download:
- Keyboard navigation: Tab to all items and buttons, Enter/Space to download.
- ARIA roles/attributes: list, button, region.
- Color contrast: Sufficient for all text, items, and buttons.
- Focus indicator: Visible and uses the focus token.
