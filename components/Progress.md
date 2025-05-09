## Progress
📈 A visual indicator of task completion or ongoing activity, such as a bar or spinner.
- **Id:** Progress
- **Appearance:** A horizontal bar or circular indicator showing completion percentage. May include label or value.
- **Behavior:** Fills or animates to indicate progress. Can be determinate (fixed value) or indeterminate (loading).
- **Used in blocks:**
  - [Stats](blocks.md#stats)
### Accessibility
- Use `aria-valuenow`, `aria-valuemax`, `aria-valuemin` for progress bars.
- Announce progress changes to screen readers.
- Provide text alternative for indeterminate progress.

### Variants
#### Progress - **Linear**
- **Id:** Linear
- **Appearance:** Horizontal bar.
- **Behavior:** Indicates linear progress.
#### Progress - **Circular (progress circle, indeterminate)**
- **Id:** Circular
- **Appearance:** Circular indicator.
- **Behavior:** Indicates circular progress.
