## Cookie Consent Banner
A banner that informs users about cookie usage and requests their consent.
- **Id:** CookieConsentBanner
- **Appearance:** A horizontal banner at the bottom or top of the page, with message, action buttons, and optional link to privacy policy.
- **Behavior:** Appears on first visit or when required. Dismisses on button click. May store consent in cookies/local storage.
- **Components:**
  - [Alert](../components/Alert.md)
  - [Button](../components/Button.md)
  - [Typography](../components/Typography.md)
  - [Link](../components/Link.md)
- **Used in pages:**
  - [Landing](../pages/Landing.md)
### Variants
#### Cookie Consent Banner - **Consent options**
- **Id:** ConsentOptions
- **Appearance:** Banner with multiple consent choices (e.g., accept, reject, customize).
- **Behavior:** User can select consent level; stores choice.
#### Cookie Consent Banner - **Dismiss button**
- **Id:** DismissButton
- **Appearance:** Banner with a single dismiss/accept button.
- **Behavior:** User can dismiss banner with one click.
