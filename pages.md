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

## Instructions

- Every page in `/pages` must be listed here, sorted alphabetically by display name (ignoring leading emojis/symbols).
- Every link must point to an existing file.

- Use the following template for each page:
  ```md
  ## [Page Title]
  A brief description of the page's purpose.
  - **Id:** [PageId]
  - **Appearance:** Description of the layout, sections, and visual elements.
  - **Behavior:** Description of interactive features or logic.
  - **Blocks:**
    - [BlockId1](../blocks/BlockId1.md)
    - [BlockId2](../blocks/BlockId2.md)
    - ...
  ### Variants
  #### [Page Title] - **[Variant Name]**
  - **Id:** [VariantId]
  - **Appearance:** Description of the variant's layout or features.
  - **Behavior:** Description of the variant's behavior.
  ```

- Keep the list of BlockIds and their paths in the **Blocks:** section up to date.
- Ensure all references (blocks in pages, components in blocks, etc.) use correct relative paths and are kept in sync.

