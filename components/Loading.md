## Loading
⏳ A visual indicator that content is loading or a process is in progress.
- **Id:** Loading
- **Appearance:** Spinner (rotating icon), skeleton (gray placeholder shapes), or overlay (dimmed background with loader). Indicates loading state.
- **Behavior:** Appears while content is loading. Disappears when loading completes. May block interaction (overlay) or show progress.
- **Used in blocks:**
  - [PageLoaderOverlay](../blocks/PageLoaderOverlay.md)

---

### Token Usage
The following table lists all design tokens used by the Loading component:
| Part        | Token Example      | Description                |
|-------------|-------------------|----------------------------|
| Background  | color.surface.1   | Loading background         |
| Spinner     | color.primary.7   | Spinner color              |
| Text        | color.neutral.12  | Loading text color         |
| Border      | color.border.2    | Loading border             |
| Focus Ring  | color.focus.1     | Focus indicator for loading|
| Disabled    | color.neutral.7   | Disabled text              |

---

### Variants
All supported Loading variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Spinner       | Spinner loader             | Circular spinner                           | Spinner, Background        | Default  |
| Dots          | Dots loader                | Animated dots                              | Spinner, Background        |          |
| Bar           | Bar loader                 | Progress bar                               | Spinner, Background        |          |
| Overlay       | Overlay loader             | Covers content with overlay                | Background, Spinner        |          |

---

### States
Loading states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Loader is visible, not focused or running        | Background, Spinner         |
| Running              | Loader is active                                 | Spinner, Background         |
| Disabled             | Loader is not interactive                        | Disabled, Border            |
| Focus                | Loader is focused via keyboard                   | Focus Ring, Border          |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, spinner uses `color.primary.7`, etc.

---

### Accessibility
Accessibility features and requirements for Loading:
- Use ARIA roles (`status`, `progressbar`, `alert`).
- Announce loading state and completion to screen readers.
- Support keyboard navigation to and from loading indicators (Tab, Shift+Tab).
- Ensure focus indicators are visible and use the designated focus token.
- Ensure sufficient color contrast for spinner, text, and background (WCAG AA compliant).
- Loading must be operable with assistive technologies and screen readers.
