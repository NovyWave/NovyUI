# NovyUI Pages

This document provides an overview of all page templates and layouts available in NovyUI. Each page is documented in its own file under the `pages/` directory. Use this file as a directory and quick reference: each link below points to a detailed description and variants for that page.

- [About](pages/About.md)
- [Activity](pages/Activity.md)
- [Admin](pages/Admin.md)
- [Analytics](pages/Analytics.md)
- [App Shell](pages/AppShell.md)
- [Article](pages/Article.md)
- [Authentication](pages/Authentication.md)
- [Blog](pages/Blog.md)
- [BlogPostEditor](pages/BlogPostEditor.md)
- [Booking](pages/Booking.md)
- [Calendar Page](pages/CalendarPage.md)
- [Cart](pages/Cart.md)
- [Chat](pages/Chat.md)
- [Checkout](pages/Checkout.md)
- [Contact](pages/Contact.md)
- [Contacts](pages/Contacts.md)
- [CountrySelect](pages/CountrySelect.md)
- [Dashboard](pages/Dashboard.md)
- [Data Table](pages/DataTable.md)
- [Docs](pages/Docs.md)
- [Download](pages/Download.md)
- [E-Commerce](pages/ECommerce.md)
- [E-Commerce Checkout](pages/ECommerceCheckout.md)
- [Editor](pages/Editor.md)
- [Error](pages/Error.md)
- [Events](pages/Events.md)
- [FAQ](pages/FAQ.md)
- [File Management](pages/FileManagement.md)
- [FileExplorer](pages/FileExplorer.md)
- [Footers](pages/Footers.md)
- [Gallery](pages/Gallery.md)
- [Help](pages/Help.md)
- [Kanban](pages/Kanban.md)
- [Landing](pages/Landing.md)
- [Legal](pages/Legal.md)
- [Login and Security](pages/LoginAndSecurity.md)
- [MegaMenu](pages/MegaMenu.md)
- [Messaging](pages/Messaging.md)
- [Mobile](pages/Mobile.md)
- [Navbars](pages/Navbars.md)
- [NotificationPreferences](pages/NotificationPreferences.md)
- [Onboarding](pages/Onboarding.md)
- [OrderHistory](pages/OrderHistory.md)
- [Orders](pages/Orders.md)
- [PageLoaderOverlay](pages/PageLoaderOverlay.md)
- [Portfolio](pages/Portfolio.md)
- [Pricing](pages/Pricing.md)
- [Product](pages/Product.md)
- [Product Filters](pages/ProductFilters.md)
- [Product Page](pages/ProductPage.md)
- [Profile](pages/Profile.md)
- [Profile Theme Customization](pages/ProfileThemeCustomization.md)
- [QuoteSection](pages/QuoteSection.md)
- [ResponsiveColumns](pages/ResponsiveColumns.md)
- [Roadmap](pages/Roadmap.md)
- [Search](pages/Search.md)
- [Section](pages/Section.md)
- [Settings](pages/Settings.md)
- [Signup](pages/Signup.md)
- [SplitLayout](pages/SplitLayout.md)
- [Stats](pages/Stats.md)
- [StickyCartSummary](pages/StickyCartSummary.md)
- [StickyHeader](pages/StickyHeader.md)
- [Support](pages/Support.md)
- [TableOfContents](pages/TableOfContents.md)
- [Team](pages/Team.md)
- [Testimonials](pages/Testimonials.md)
- [TextEditorToolbar](pages/TextEditorToolbar.md)
- [TwoFactorAuthentication](pages/TwoFactorAuthentication.md)
- [UserInfoAndControls](pages/UserInfoAndControls.md)
- [UserProfile](pages/UserProfile.md)
- [UserProfilePopover](pages/UserProfilePopover.md)
- [UserRoleAssignment](pages/UserRoleAssignment.md)
- [Wishlist](pages/Wishlist.md)
- [Reviews](pages/Reviews.md)

# NovyUI Page Documentation Format

All NovyUI page documentation **must** strictly follow the structure and formatting exemplified in `CheckoutPage.md` (see this file for the canonical page example). This format is required for all page docs—no legacy or alternative formats are permitted. The enforcer script will flag any deviation.

## Required Section Order
1. **Header**
   - Page name as H2 (e.g., `## CheckoutPage`)
   - One-line summary with emoji (if applicable)
   - Bullet list: **Id** (must match filename, CamelCase), **Appearance**, **Behavior**, **Blocks** (with links to existing blocks), **Components** (with links to existing components)
2. **Token Usage**
   - H3: `### Token Usage`
   - Intro sentence: "The following table lists all design tokens used by the [Page] page:"
   - Table with columns: Part | Token Example | Description (no extra or missing columns)
   - Horizontal rule (`---`) after section
3. **Variants**
   - H3: `### Variants`
   - Intro sentence: "All supported [Page] variants are listed below:"
   - Table with columns: Variant Name | Description | Appearance/Behavior | Tokens Used | Notes (no extra or missing columns)
   - Horizontal rule (`---`) after section
4. **States**
   - H3: `### States`
   - Intro sentence: "[Page] states and their token usage:"
   - Table with columns: State | Description | Token(s) affected (no extra or missing columns)
   - Additional notes as bullet points (if needed)
   - Horizontal rule (`---`) after section
5. **Accessibility**
   - H3: `### Accessibility`
   - Must start with: "Accessibility features and requirements for [Page]:"
   - Must be a bullet list of accessibility features and requirements
   - Must mention: keyboard navigation, ARIA roles/attributes, color contrast, and focus indicator

## Table Formats
- All tables must use the exact columns and order as shown above.
- No extra or missing columns.
- No alternative table layouts.

## Section Details
- Each section must begin with the required intro sentence (except Header and Accessibility).
- Section order is strict—no reordering or omission.
- Use horizontal rules (`---`) between major sections (after each except the last).

## Header Section
- Page name as H2 (e.g., `## CheckoutPage`)
- One-line summary with emoji (if applicable)
- Bullet list:
  - **Id:** (must match filename, CamelCase)
  - **Appearance:**
  - **Behavior:**
  - **Blocks:** (with links to existing blocks)
  - **Components:** (with links to existing components)

## Accessibility Section
- Must start with: "Accessibility features and requirements for [Page]:"
- Must be a bullet list
- Must mention:
  - Keyboard navigation
  - ARIA roles/attributes
  - Color contrast
  - Focus indicator

## Additional Enforcement
- Filename must be CamelCase.
- No hardcoded values (hex colors, px) in documentation—must reference tokens.
- "Blocks" references must exist in `blocks.md`, "Components" in `components.md`.
- Page must be listed in `pages.md` TOC (with correct name, ignoring emoji).
- State/Variant documentation must exist (explicitly document all states/variants).
- All sections must be present (no omission).

## Enforcement
- The enforcer script (`page-markdown-enforcer.ts`) will flag any file that does not strictly follow this format, including:
  - Missing or out-of-order sections
  - Missing or incorrect intro sentences
  - Incorrect table columns or order
  - Missing horizontal rules
  - Any deviation from the canonical example
  - Hardcoded values
  - Broken block/component references
  - Not listed in TOC

**This format is required for all NovyUI page docs.**

