## Component
- Store component documentation in the `/components` directory.
- Each component file is named `[ComponentId].md`, where `ComponentId` uses CamelCase.
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
- Keep the list of BlockIds and their paths in the **Used in Blocks:** section up to date.
- The **Used in Blocks:** section must not be empty; every component must be referenced by at least one real block.
- Always document accessibility and keyboard support for all components (Accessibility section is required).

## Block
- Store block documentation in the `/blocks` directory.
- Each block file is named `[BlockId].md`, where `BlockId` uses CamelCase.
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
- Keep the list of ComponentIds and their paths in the **Components:** section up to date.
- Keep the list of PageIds and their paths in the **Used in Pages:** section up to date.
- The **Used in Pages:** section must not be empty; every block must be referenced by at least one real page.

## Page
- Store page documentation in the `/pages` directory.
- Each page file is named `[PageId].md`, where `PageId` uses CamelCase.
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
