# NovyUI Pages

This document provides an overview of all page templates and layouts available in NovyUI. Each page is documented in its own file under the `pages/` directory. Use this file as a directory and quick reference: each link below points to a detailed description and variants for that page.

- [Activity](pages/Activity.md)
- [App Shell](pages/AppShell.md)
- [Authentication](pages/Authentication.md)
- [Blog](pages/Blog.md)
- [Calendar Page](pages/CalendarPage.md)
- [Contact](pages/Contact.md)
- [Dashboard](pages/Dashboard.md)
- [Data Table](pages/DataTable.md)
- [Download](pages/Download.md)
- [E-Commerce](pages/ECommerce.md)
- [E-Commerce Checkout](pages/ECommerceCheckout.md)
- [Editor](pages/Editor.md)
- [Error](pages/Error.md)
- [FAQ](pages/FAQ.md)
- [File Management](pages/FileManagement.md)
- [Landing](pages/Landing.md)
- [Legal](pages/Legal.md)
- [Login and Security](pages/LoginAndSecurity.md)
- [Messaging](pages/Messaging.md)
- [Onboarding](pages/Onboarding.md)
- [Portfolio](pages/Portfolio.md)
- [Product Filters](pages/ProductFilters.md)
- [Product Page](pages/ProductPage.md)
- [Profile](pages/Profile.md)
- [Profile Theme Customization](pages/ProfileThemeCustomization.md)
- [Roadmap](pages/Roadmap.md)
- [Settings](pages/Settings.md)
- [Team](pages/Team.md)
- [User Profile](pages/UserProfile.md)

# NovyUI Page Documentation Format

All NovyUI page documentation **must** strictly follow the structure and formatting exemplified in `Accordion.md` (see components for canonical example). This format is required for all page docs—no legacy or alternative formats are permitted. The enforcer script will flag any deviation.

## Required Section Order
1. **Header**
   - Page name as H2 (e.g., `## CheckoutPage`)
   - One-line summary with emoji (if applicable)
   - Bullet list: **Id**, **Appearance**, **Behavior**, **Used in blocks/components** (with links)
2. **Token Usage**
   - H3: `### Token Usage`
   - Intro sentence: "The following table lists all design tokens used by the [Page] page:"
   - Table with columns: Part | Token Example | Description
   - Horizontal rule (`---`)
3. **Variants**
   - H3: `### Variants`
   - Intro sentence: "All supported [Page] variants are listed below:"
   - Table with columns: Variant Name | Description | Appearance/Behavior | Tokens Used | Notes
   - Horizontal rule (`---`)
4. **States**
   - H3: `### States`
   - Intro sentence: "[Page] states and their token usage:"
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
- The enforcer script (`page-markdown-enforcer.ts`) will flag any file that does not strictly follow this format, including:
  - Missing or out-of-order sections
  - Missing or incorrect intro sentences
  - Incorrect table columns or order
  - Missing horizontal rules
  - Any deviation from the canonical example

**This format is required for all NovyUI page docs.**

