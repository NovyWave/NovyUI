## PageLoaderOverlay
A page for displaying a loading overlay while content is being fetched or processed.
- **Id:** PageLoaderOverlay
- **Appearance:** Full-page overlay with spinner, progress bar, or loading animation.
- **Behavior:** Blocks interaction until loading is complete, may show progress or status message.
- **Blocks:**
  - [PageLoaderOverlay](../blocks/PageLoaderOverlay.md)
  - [Footers](../blocks/Footers.md)
- **Components:**
  - [Typography](../components/Typography.md)
  - [Button](../components/Button.md)

---

### Token Usage
The following table lists all design tokens used by the PageLoaderOverlay page:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.1   | Overlay background                 |
| Text         | color.neutral.12  | Status/progress text               |
| Border       | color.border.2    | Overlay border                     |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported PageLoaderOverlay variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Spinner       | Overlay with spinner animation.              | Spinner, status message.                   | All above           |       |
| ProgressBar   | Overlay with progress bar.                   | Progress bar, status message.              | All above           |       |

---

### States
PageLoaderOverlay states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of overlay.         | All above             |
| Loading   | Loading in progress.               | Text, Spinner         |
| Complete  | Loading complete, overlay hidden.  | Border, Text          |

---

### Accessibility
Accessibility features and requirements for PageLoaderOverlay:
- Keyboard navigation: Tab to status/progress, Enter/Space to retry if available.
- ARIA roles/attributes: status, progressbar, region.
- Color contrast: Sufficient for all text, overlay, and controls.
- Focus indicator: Visible and uses the focus token.
