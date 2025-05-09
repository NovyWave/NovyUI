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
### Accessibility
- Use `<button>` element or `role="button"` if not native.
- Provide accessible labels (`aria-label`) for icon-only buttons.
- Ensure focus and active states are visible.
- Support keyboard activation (Enter/Space).

### Variants
#### Button - **Primary**
- **Id:** Primary
- **Appearance:** Solid color background.
- **Behavior:** Primary action button.
#### Button - **Secondary**
- **Id:** Secondary
- **Appearance:** Outline border.
- **Behavior:** Secondary action button.
#### Button - **Outline**
- **Id:** Outline
- **Appearance:** Outline border with transparent background.
- **Behavior:** Secondary action button.
#### Button - **Ghost**
- **Id:** Ghost
- **Appearance:** Transparent background with minimal styling.
- **Behavior:** Secondary action button.
#### Button - **Icon**
- **Id:** Icon
- **Appearance:** Icon only, no text.
- **Behavior:** Icon button.
#### Button - **Loading**
- **Id:** Loading
- **Appearance:** Includes loading spinner.
- **Behavior:** Indicates loading state.
#### Button - **Group**
- **Id:** Group
- **Appearance:** Group of buttons.
- **Behavior:** Grouped button actions.
#### Button - **Social login**
- **Id:** SocialLogin
- **Appearance:** Includes social media icon.
- **Behavior:** Social login button.
