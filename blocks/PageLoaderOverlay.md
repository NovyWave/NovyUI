## PageLoaderOverlay
A block for displaying a loading overlay while a page or section is loading.
- **Id:** PageLoaderOverlay
- **Appearance:** Full-page or section overlay with spinner or progress indicator.
- **Behavior:** Blocks interaction until loading is complete.
- **Components:**
  - [Loading](../components/Loading.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Dashboard](../pages/Dashboard.md)
  - [Checkout](../pages/Checkout.md)

---

### Token Usage
The following table lists all design tokens used by the PageLoaderOverlay block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.overlay.1   | Overlay background                 |
| Spinner      | color.primary.7   | Spinner/progress indicator color   |
| Text         | color.neutral.12  | Loading message text               |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported PageLoaderOverlay variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard loading overlay.                    | Spinner and message.                       | All above           |       |
| WithProgress  | Shows progress bar/indicator.                | Progress bar instead of spinner.           | All above           |       |
| SectionOnly   | Overlay for a section, not full page.        | Partial overlay.                           | All above           |       |

---

### States
PageLoaderOverlay states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Overlay hidden.                    | All above             |
| Loading   | Overlay visible, loading active.   | Background, Spinner   |
| Focused   | Spinner or message is focused.     | Focus Ring            |

---

### Accessibility
Accessibility features and requirements for PageLoaderOverlay block:
- Keyboard navigation: Tab to spinner/message if focusable, Enter/Space to retry (if applicable).
- ARIA roles/attributes: status, alert, and progressbar.
- Color contrast: Sufficient for all text, spinner, and overlay.
- Focus indicator: Visible and uses the focus token.
