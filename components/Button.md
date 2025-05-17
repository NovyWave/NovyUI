## Button
🆗 A clickable element used to trigger actions, submit forms, or navigate.
- **Id:** Button
- **Appearance:** A rectangular or pill-shaped clickable element with text and/or icon. Visual style (color, border, shadow) changes based on variant and state (hover, active, disabled). May include loading spinner or icon.
- **Behavior:** Triggers an action when clicked or activated via keyboard. Supports disabled and loading states. May show focus ring for accessibility.
- **Used in blocks:**
  - [ActivityFeed](../blocks/ActivityFeed.md)
  - [AppDownloadSection](../blocks/AppDownloadSection.md)
  - [ArticleCards](../blocks/ArticleCards.md)
  - [Authentication](../blocks/Authentication.md)
  - [Banners](../blocks/Banners.md)
  - [CallToActionSection](../blocks/CallToActionSection.md)
  - [Calendar](../blocks/Calendar.md)
  - [Carousels](../blocks/Carousels.md)
  - [Cart](../blocks/Cart.md)
  - [Checkout](../blocks/Checkout.md)
  - [Comments](../blocks/Comments.md)
  - [ContactCard](../blocks/ContactCard.md)
  - [CookieConsentBanner](../blocks/CookieConsentBanner.md)
  - [DataTable](../blocks/DataTable.md)
  - [DragAndDrop](../blocks/DragAndDrop.md)
  - [Error](../blocks/Error.md)
  - [FeaturesSection](../blocks/FeaturesSection.md)
  - [Footers](../blocks/Footers.md)
  - [Headers](../blocks/Headers.md)
  - [Hero](../blocks/Hero.md)
  - [Navbars](../blocks/Navbars.md)
  - [OnboardingSteps](../blocks/OnboardingSteps.md)
  - [OrderHistory](../blocks/OrderHistory.md)
  - [PricingTable](../blocks/PricingTable.md)
  - [ProductDetails](../blocks/ProductDetails.md)
  - [Sidebar](../blocks/Sidebar.md)
  - [SplitLayout](../blocks/SplitLayout.md)
  - [Stats](../blocks/Stats.md)
  - [TeamSection](../blocks/TeamSection.md)
  - [Testimonials](../blocks/Testimonials.md)
  - [UserInfoAndControls](../blocks/UserInfoAndControls.md)
  - [Wishlist](../blocks/Wishlist.md)

---

### Token Usage
The following table lists all design tokens used by the Button component:
| Part           | Token Example      | Description                                 |
|----------------|-------------------|---------------------------------------------|
| Background     | color.primary.7   | Button background (primary)                 |
| Text           | color.neutral.1   | Button text color                           |
| Border         | color.border.2    | Button border color (outline/secondary)     |
| Icon           | color.primary.7   | Icon color                                  |
| Focus Ring     | color.focus.1     | Focus indicator for button                  |
| Hover          | color.primary.8   | Background on hover                         |
| Disabled Bg    | color.surface.3   | Background when disabled                    |
| Disabled Text  | color.neutral.7   | Text color when disabled                    |
| Loading Spinner| color.primary.7   | Spinner color                              |

---

### Variants
All supported Button variants are listed below:
| Variant Name   | Description                | Appearance/Behavior                        | Tokens Used                | Notes    |
|---------------|----------------------------|--------------------------------------------|----------------------------|----------|
| Primary       | Main action button         | Solid color background                     | Background, Text, Border   | Default  |
| Secondary     | Secondary action button    | Outline border, transparent background     | Border, Text, Background   |          |
| Outline       | Tertiary action button     | Outline border, transparent background     | Border, Text, Background   |          |
| Ghost         | Minimal, low emphasis      | Transparent background, minimal styling    | Text, Background           |          |
| Icon          | Icon-only button           | No text, icon centered                     | Icon, Background, Border   |          |
| Loading       | Shows loading spinner      | Spinner replaces content                   | Loading Spinner, Background|          |

---

### States
Button states and their token usage:
| State                | Description                                      | Token(s) affected           |
|----------------------|--------------------------------------------------|-----------------------------|
| Default              | Button is visible, not focused or hovered        | Background, Text, Border    |
| Hover                | Button is hovered                                | Hover, Text, Border         |
| Focus                | Button is focused via keyboard                   | Focus Ring, Border          |
| Active               | Button is being pressed/clicked                  | Background, Text, Border    |
| Disabled             | Button is not interactive                        | Disabled Bg, Disabled Text  |
| Loading              | Button shows loading spinner                     | Loading Spinner, Background |

- For each state, ensure tokens are used (no hardcoded values). For example, focus ring uses `color.focus.1`, hover uses `color.primary.8`, etc.

---

### Accessibility
Accessibility features and requirements for Button:
- Use `<button>` element or `role="button"` if not native.
- Provide accessible labels (`aria-label`) for icon-only buttons.
- Ensure focus and active states are visible and use the designated focus token.
- Support keyboard activation (Enter/Space).
- Ensure sufficient color contrast for text, background, and border in all states (WCAG AA compliant).
- Button must be operable with assistive technologies and screen readers.
