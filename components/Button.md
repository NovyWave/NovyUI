## Button
🆗 A clickable element used to trigger actions, submit forms, or navigate.
- **Id:** Button
- **Appearance:** A rectangular or pill-shaped clickable element with text and/or icon. Visual style (color, border, shadow) changes based on variant and state (hover, active, disabled). May include loading spinner or icon.
- **Behavior:** Triggers an action when clicked or activated via keyboard. Supports disabled and loading states. May show focus ring for accessibility.
- **Used in blocks:**
  - [ActivityFeed](blocks.md#activity-feed)
  - [AppDownloadSection](blocks.md#app-download-section)
  - [ArticleCards](blocks.md#article-cards)
  - [Authentication](blocks.md#authentication)
  - [Banners](blocks.md#banners)
  - [CallToActionSection](blocks.md#call-to-action-section)
  - [Calendar](blocks.md#calendar)
  - [Carousels](blocks.md#carousels)
  - [Cart](blocks.md#cart)
  - [Checkout](blocks.md#checkout)
  - [Comments](blocks.md#comments)
  - [ContactCard](blocks.md#contact-card)
  - [CookieConsentBanner](blocks.md#cookie-consent-banner)
  - [DataTable](blocks.md#data-table)
  - [DragAndDrop](blocks.md#drag-and-drop)
  - [Error](blocks.md#error)
  - [FeaturesSection](blocks.md#features-section)
  - [Footers](blocks.md#footers)
  - [Headers](blocks.md#headers)
  - [Hero](blocks.md#hero)
  - [Navbars](blocks.md#navbars)
  - [OnboardingSteps](blocks.md#onboarding-steps)
  - [OrderHistory](blocks.md#order-history)
  - [PricingTable](blocks.md#pricing-table)
  - [ProductDetails](blocks.md#product-details)
  - [Sidebar](blocks.md#sidebar)
  - [SplitLayout](blocks.md#split-layout)
  - [Stats](blocks.md#stats)
  - [TeamSection](blocks.md#team-section)
  - [Testimonials](blocks.md#testimonials)
  - [UserInfoAndControls](blocks.md#user-info-and-controls)
  - [Wishlist](blocks.md#wishlist)
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
