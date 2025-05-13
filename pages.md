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

## Instructions and Documentation Structure Rules

- Every page in `/pages` must be listed here, sorted alphabetically by display name (ignoring leading emojis/symbols).
- Every link must point to an existing file.

- Use the following template for each page:
  ```md
  ## [Page Title]
  A brief description of the page's purpose.
  - **Id:** [PageId]
  - **Appearance:** Description of the page's layout and visual elements.
  - **Behavior:** Description of the page's interactive features or logic.
  - **Used Blocks:**
    - [BlockId1](../blocks/BlockId1.md)
    - [BlockId2](../blocks/BlockId2.md)
    - ...
  ### Accessibility
  - Describe accessibility features, keyboard support, and ARIA usage if relevant.
  ### Variants
  #### [Page Title] - **[Variant Name]**
  - **Id:** [VariantId]
  - **Appearance:** Description of the variant's layout or features.
  - **Behavior:** Description of the variant's behavior.
  ```

- Keep the list of BlockIds and their paths in the **Used Blocks:** section up to date.
- The **Used Blocks:** section must not be empty; every page must be referenced by at least one real block.
- Always document accessibility and keyboard support for all pages (Accessibility section is required).
- Every page file must include a `### Accessibility` section describing accessibility and keyboard support.

- **Token Usage Table:** Include a table listing all relevant UI parts, the token used, and a short description. Example:

  | Part        | Token Example      | Description                |
  |-------------|-------------------|----------------------------|
  | Background  | color.primary.7   | Main page background       |
  | Text        | color.neutral.11  | Page label                 |
  | Border      | color.primary.5   | Border color               |
  | Radius      | radii.2           | Border radius              |
  | Shadow      | shadow.1          | Page shadow                |

- **State/Variant Documentation:** Explicitly document all UI states (default, hover, active, disabled, focus, etc.) and variants. For each state/variant, specify which tokens change and how.

- **Accessibility Section:** Cover keyboard navigation, ARIA roles/attributes, color contrast, focus indicators, and any additional considerations.

- **Consistent Token Use:** All visual properties must use tokens from `/tokens`. No hardcoded values.

- **Reference Sync and ToC Listing:** All references must use correct relative paths and be kept in sync. Every item must be listed in `pages.md`.

- **Style Consistency:** Integrate new requirements using the same style and conventions as the rest of the file.

