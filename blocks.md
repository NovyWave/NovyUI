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

# NovyUI Block Documentation Format

All NovyUI block documentation **must** strictly follow the structure and formatting exemplified in `Accordion.md` (see components for canonical example). This format is required for all block docs—no legacy or alternative formats are permitted. The enforcer script will flag any deviation.

## Required Section Order
1. **Header**
   - Block name as H2 (e.g., `## AccordionFAQ`)
   - One-line summary with emoji (if applicable)
   - Bullet list: **Id**, **Appearance**, **Behavior**, **Used in components/pages** (with links)
2. **Token Usage**
   - H3: `### Token Usage`
   - Intro sentence: "The following table lists all design tokens used by the [Block] block:"
   - Table with columns: Part | Token Example | Description
   - Horizontal rule (`---`)
3. **Variants**
   - H3: `### Variants`
   - Intro sentence: "All supported [Block] variants are listed below:"
   - Table with columns: Variant Name | Description | Appearance/Behavior | Tokens Used | Notes
   - Horizontal rule (`---`)
4. **States**
   - H3: `### States`
   - Intro sentence: "[Block] states and their token usage:"
   - Table with columns: State | Description | Token(s) affected
   - Additional notes as bullet points (if needed)
   - Horizontal rule (`---`)
5. **Accessibility**
   - H3: `### Accessibility`
   - Bullet list of accessibility features and requirements

## Table Formats
- All tables must use the exact columns and order as shown above.
- No extra or missing columns.
- No alternative table layouts.

## Section Details
- Each section must begin with the required intro sentence.
- Section order is strict—no reordering or omission.
- Use horizontal rules (`---`) between major sections.

## Enforcement
- The enforcer script (`block-markdown-enforcer.ts`) will flag any file that does not strictly follow this format, including:
  - Missing or out-of-order sections
  - Missing or incorrect intro sentences
  - Incorrect table columns or order
  - Missing horizontal rules
  - Any deviation from the canonical example

**This format is required for all NovyUI block docs.**
