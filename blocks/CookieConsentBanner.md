## CookieConsentBanner
A block for displaying a cookie consent message and actions to users.
- **Id:** CookieConsentBanner
- **Appearance:** Banner at the bottom/top of the page with message and accept/decline buttons.
- **Behavior:** Allows users to accept or decline cookies. May remember choice and hide after action.
- **Components:**
  - [Alert](../components/Alert.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
- **Used in pages:**
  - [Legal](../pages/Legal.md)
  - [Landing](../pages/Landing.md)

---

### Token Usage
The following table lists all design tokens used by the CookieConsentBanner block:
| Part         | Token Example      | Description                        |
|--------------|-------------------|------------------------------------|
| Background   | color.surface.2   | Banner background                  |
| Text         | color.neutral.12  | Banner message text                |
| Button       | color.primary.7   | Action button background           |
| Border       | color.border.2    | Banner border                      |
| Focus Ring   | color.focus.1     | Focus indicator for interactive elements|

---

### Variants
All supported CookieConsentBanner variants are listed below:
| Variant Name   | Description                                 | Appearance/Behavior                        | Tokens Used         | Notes |
|---------------|---------------------------------------------|--------------------------------------------|---------------------|-------|
| Basic         | Standard cookie consent banner.              | Accept/decline buttons, static message.    | All above           |       |
| WithLinks     | Banner includes links to privacy policy.     | Links shown for more info.                 | All above           |       |
| WithTimeout   | Banner auto-dismisses after timeout.         | Banner hides after a set time.             | All above           |       |

---

### States
CookieConsentBanner states and their token usage:
| State     | Description                        | Token(s) affected      |
|-----------|------------------------------------|-----------------------|
| Default   | Normal display of banner.          | All above             |
| Focused   | Button is focused.                 | Focus Ring            |
| Dismissed | Banner is dismissed/hidden.        | Background, Border    |
| Disabled  | Button is disabled.                | Button                |

---

### Accessibility
Accessibility features and requirements for CookieConsentBanner:
- Keyboard navigation: Tab to each button, Enter/Space to activate.
- ARIA roles/attributes: banner, button, and links.
- Color contrast: Sufficient for all text, buttons, and borders.
- Focus indicator: Visible and uses the focus token.
