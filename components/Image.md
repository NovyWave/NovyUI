## Image
🖼️ A component for displaying images with optional styling, captions, or overlays.
- **Id:** Image
- **Appearance:** Displays an image with optional border, shadow, or rounded corners. May include caption or overlay.
- **Behavior:** Static by default. May support zoom, lazy loading, or click to enlarge. Responsive to container size.
- **Used in blocks:**
  - [ArticleCards](blocks.md#article-cards)
  - [Carousels](blocks.md#carousels)
  - [FeaturesSection](blocks.md#features-section)
  - [Hero](blocks.md#hero)
  - [MegaMenu](blocks.md#mega-menu)
  - [ProductDetails](blocks.md#product-details)
  - [SplitLayout](blocks.md#split-layout)
  - [Testimonials](blocks.md#testimonials)
### Accessibility
- Provide descriptive `alt` text for images.
- Use captions for additional context.
- Ensure images are responsive and do not cause layout shifts.

### Variants
#### Image - **Responsive**
- **Id:** Responsive
- **Appearance:** Responsive design.
- **Behavior:** Adjusts to container size.
#### Image - **With caption**
- **Id:** WithCaption
- **Appearance:** Includes caption.
- **Behavior:** Displays caption text.
#### Image - **Gallery**
- **Id:** Gallery
- **Appearance:** Grid or carousel layout.
- **Behavior:** Displays image gallery.
