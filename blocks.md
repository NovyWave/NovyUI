# NovyUI Blocks

This document provides an overview of all UI blocks available in NovyUI. Each block is now documented in its own file under the `blocks/` directory. Use this file as a directory and quick reference: each link below points to a detailed description and variants for that block.

- [Accordion FAQ](blocks/AccordionFAQ.md)
- [Activity Feed](blocks/ActivityFeed.md)
- [App Download Section](blocks/AppDownloadSection.md)
- [Article Cards](blocks/ArticleCards.md)
- [Authentication](blocks/Authentication.md)
- [Banners](blocks/Banners.md)
- [Blog Post Editor](blocks/BlogPostEditor.md)
- [Blog Post Tagging](blocks/BlogPostTagging.md)
- [Calendar](blocks/Calendar.md)
- [Call To Action Section](blocks/CallToActionSection.md)
- [Carousels](blocks/Carousels.md)
- [Cart](blocks/Cart.md)
- [Cascader Filter](blocks/CascaderFilter.md)
- [Chat Message List](blocks/ChatMessageList.md)
- [Checkout](blocks/Checkout.md)
- [Comments](blocks/Comments.md)
- [Contact Card](blocks/ContactCard.md)
- [Cookie Consent Banner](blocks/CookieConsentBanner.md)
- [Countdown Timer](blocks/CountdownTimer.md)
- [Country Select](blocks/CountrySelect.md)
- [Data Table](blocks/DataTable.md)
- [Dialog Modal](blocks/DialogModal.md)
- [Drag And Drop](blocks/DragAndDrop.md)
- [Error](blocks/Error.md)
- [FAQ](blocks/FAQ.md)
- [Features Section](blocks/FeaturesSection.md)
- [File Actions Context Menu](blocks/FileActionsContextMenu.md)
- [File Explorer](blocks/FileExplorer.md)
- [Footers](blocks/Footers.md)
- [Global Command Palette](blocks/GlobalCommandPalette.md)
- [Group Layout](blocks/GroupLayout.md)
- [Headers](blocks/Headers.md)
- [Hero](blocks/Hero.md)
- [Icon Tooltips](blocks/IconTooltips.md)
- [Image Brightness Adjustment](blocks/ImageBrightnessAdjustment.md)
- [Keyboard Shortcuts Help](blocks/KeyboardShortcutsHelp.md)
- [Legal](blocks/Legal.md)
- [Mega Menu](blocks/MegaMenu.md)
- [Mobile Navigation Drawer](blocks/MobileNavigationDrawer.md)
- [Navbars](blocks/Navbars.md)
- [Notification Center](blocks/NotificationCenter.md)
- [Notification Preferences](blocks/NotificationPreferences.md)
- [Onboarding Steps](blocks/OnboardingSteps.md)
- [Order History](blocks/OrderHistory.md)
- [Page Loader Overlay](blocks/PageLoaderOverlay.md)
- [Popconfirm Dialog](blocks/PopconfirmDialog.md)
- [Pricing Table](blocks/PricingTable.md)
- [Product Details](blocks/ProductDetails.md)
- [Product Review](blocks/ProductReview.md)
- [Profile Theme Customization](blocks/ProfileThemeCustomization.md)
- [Quote Section](blocks/QuoteSection.md)
- [Responsive Columns](blocks/ResponsiveColumns.md)
- [Roadmap](blocks/Roadmap.md)
- [Section](blocks/Section.md)
- [Settings Tabs](blocks/SettingsTabs.md)
- [Sidebar](blocks/Sidebar.md)
- [Split Layout](blocks/SplitLayout.md)
- [Stats](blocks/Stats.md)
- [Sticky Cart Summary](blocks/StickyCartSummary.md)
- [Sticky Header](blocks/StickyHeader.md)
- [Table Of Contents](blocks/TableOfContents.md)
- [Team Section](blocks/TeamSection.md)
- [Testimonials](blocks/Testimonials.md)
- [Text Editor Toolbar](blocks/TextEditorToolbar.md)
- [Two-Factor Authentication](blocks/TwoFactorAuthentication.md)
- [User Info And Controls](blocks/UserInfoAndControls.md)
- [User Profile Popover](blocks/UserProfilePopover.md)
- [User Role Assignment](blocks/UserRoleAssignment.md)
- [Wishlist](blocks/Wishlist.md)

## Instructions and Documentation Structure Rules

- Every block in `/blocks` must be listed here, sorted alphabetically by display name (ignoring leading emojis/symbols).
- Every link must point to an existing file.

- Use the following template for each block:
  ```md
  ## [Block Title]
  A brief description of the block's purpose.
  - **Id:** [BlockId]
  - **Appearance:** Description of the block's layout and visual elements.
  - **Behavior:** Description of the block's interactive features or logic.
  - **Used in Pages:**
    - [PageId1](../pages/PageId1.md)
    - [PageId2](../pages/PageId2.md)
    - ...
  ### Accessibility
  - Describe accessibility features, keyboard support, and ARIA usage if relevant.
  ### Variants
  #### [Block Title] - **[Variant Name]**
  - **Id:** [VariantId]
  - **Appearance:** Description of the variant's layout or features.
  - **Behavior:** Description of the variant's behavior.
  ```

- Keep the list of PageIds and their paths in the **Used in Pages:** section up to date.
- The **Used in Pages:** section must not be empty; every block must be referenced by at least one real page.
- Always document accessibility and keyboard support for all blocks (Accessibility section is required).
- Every block file must include a `### Accessibility` section describing accessibility and keyboard support.

- **Token Usage Table:** Include a table listing all relevant UI parts, the token used, and a short description. Example:

  | Part        | Token Example      | Description                |
  |-------------|-------------------|----------------------------|
  | Background  | color.primary.7   | Main block background      |
  | Text        | color.neutral.11  | Block label                |
  | Border      | color.primary.5   | Border color               |
  | Radius      | radii.2           | Border radius              |
  | Shadow      | shadow.1          | Block shadow               |

- **State/Variant Documentation:** Explicitly document all UI states (default, hover, active, disabled, focus, etc.) and variants. For each state/variant, specify which tokens change and how.

- **Accessibility Section:** Cover keyboard navigation, ARIA roles/attributes, color contrast, focus indicators, and any additional considerations.

- **Consistent Token Use:** All visual properties must use tokens from `/tokens`. No hardcoded values.

- **Reference Sync and ToC Listing:** All references must use correct relative paths and be kept in sync. Every item must be listed in `blocks.md`.

- **Style Consistency:** Integrate new requirements using the same style and conventions as the rest of the file.
