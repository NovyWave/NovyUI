## Component
<!-- RULE:component-dir -->
- Store component documentation in the `/components` directory.
<!-- RULE:component-filename -->
- Each component file is named `[ComponentId].md`, where `ComponentId` uses CamelCase.
<!-- RULE:component-template -->
- Use the following template for each component:
  ```md
  ## [Component Title]
  A brief description of the component's purpose.
  - **Id:** [ComponentId]
  - **Appearance:** Description of the component's layout and visual elements.
  - **Behavior:** Description of the component's interactive features or logic.
  - **Used in Blocks:**
    - [BlockId1](../blocks/BlockId1.md)
    - [BlockId2](../blocks/BlockId2.md)
    - ...
  ### Accessibility
  - Describe accessibility features, keyboard support, and ARIA usage if relevant.
  ### Variants
  #### [Component Title] - **[Variant Name]**
  - **Id:** [VariantId]
  - **Appearance:** Description of the variant's layout or features.
  - **Behavior:** Description of the variant's behavior.
  ```
<!-- RULE:component-used-in-blocks-up-to-date -->
- Keep the list of BlockIds and their paths in the **Used in Blocks:** section up to date.
<!-- RULE:component-used-in-blocks-not-empty -->
- The **Used in Blocks:** section must not be empty; every component must be referenced by at least one real block.
<!-- RULE:component-accessibility-required -->
- Always document accessibility and keyboard support for all components (Accessibility section is required).
<!-- RULE:components-used-in-blocks-not-empty -->
- The **Used in Blocks:** section in every component file must not be empty; each component must be referenced by at least one real block.
<!-- RULE:accessibility-section-required -->
- Every component file must include a `### Accessibility` section describing accessibility and keyboard support.

## Block
<!-- RULE:block-dir -->
- Store block documentation in the `/blocks` directory.
<!-- RULE:block-filename -->
- Each block file is named `[BlockId].md`, where `BlockId` uses CamelCase.
<!-- RULE:block-template -->
- Use the following template for each block:
  ```md
  ## [Block Title]
  A brief description of the block's purpose.
  - **Id:** [BlockId]
  - **Appearance:** Description of the block's layout and visual elements.
  - **Behavior:** Description of the block's interactive features or logic.
  - **Components:**
    - [ComponentId1](../components/ComponentId1.md)
    - [ComponentId2](../components/ComponentId2.md)
    - ...
  - **Used in Pages:**
    - [PageId1](../pages/PageId1.md)
    - [PageId2](../pages/PageId2.md)
    - ...
  ### Variants
  #### [Block Title] - **[Variant Name]**
  - **Id:** [VariantId]
  - **Appearance:** Description of the variant's layout or features.
  - **Behavior:** Description of the variant's behavior.
  ```
<!-- RULE:block-components-up-to-date -->
- Keep the list of ComponentIds and their paths in the **Components:** section up to date.
<!-- RULE:block-used-in-pages-up-to-date -->
- Keep the list of PageIds and their paths in the **Used in Pages:** section up to date.
<!-- RULE:block-used-in-pages-not-empty -->
- The **Used in Pages:** section must not be empty; every block must be referenced by at least one real page.
<!-- RULE:blocks-used-in-pages-not-empty -->
- The **Used in Pages:** section in every block file must not be empty; each block must be referenced by at least one real page.

## Page
<!-- RULE:page-dir -->
- Store page documentation in the `/pages` directory.
<!-- RULE:page-filename -->
- Each page file is named `[PageId].md`, where `PageId` uses CamelCase.
<!-- RULE:page-template -->
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
<!-- RULE:page-blocks-up-to-date -->
- Keep the list of BlockIds and their paths in the **Blocks:** section up to date.
<!-- RULE:references-synced -->
- Ensure all references (blocks in pages, components in blocks, etc.) use correct relative paths and are kept in sync.

## Table of Contents Consistency
<!-- RULE:toc-listed -->
- Every block in `/blocks`, page in `/pages`, and component in `/components` must be listed in their respective table of contents file: `blocks.md`, `pages.md`, and `components.md`.
<!-- RULE:toc-links-exist -->
- Every link in `blocks.md`, `pages.md`, and `components.md` must point to an existing file.
<!-- RULE:toc-sorted -->
- The lists of links in `blocks.md`, `pages.md`, and `components.md` must be sorted alphabetically by their display name, ignoring any leading emojis or symbols.

## Enforcement
<!-- RULE:enforcement-script -->
- The script `scripts/enforce-doc-structure.ts` must implement checks for all rules described in this document.
