## Loading
⏳ A visual indicator that content is loading or a process is in progress.
- **Id:** Loading
- **Appearance:** Spinner (rotating icon), skeleton (gray placeholder shapes), or overlay (dimmed background with loader). Indicates loading state.
- **Behavior:** Appears while content is loading. Disappears when loading completes. May block interaction (overlay) or show progress.
- **Used in blocks:**
  - [PageLoaderOverlay](../blocks/PageLoaderOverlay.md)
### Accessibility
- Use `aria-busy` or `aria-live` to announce loading state.
- Provide text alternative for loading indicators.

### Variants
#### Loading - **Spinner**
- **Id:** Spinner
- **Appearance:** Rotating icon.
- **Behavior:** Indicates loading state.
#### Loading - **Overlay**
- **Id:** Overlay
- **Appearance:** Dimmed background.
- **Behavior:** Blocks interaction.
#### Loading - **Skeleton**
- **Id:** Skeleton
- **Appearance:** Gray placeholder shapes.
- **Behavior:** Indicates loading state.
