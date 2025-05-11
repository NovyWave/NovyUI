# Font Tokens

This file defines all font design tokens for NovyUI. All font assets referenced here must exist in `/assets/fonts/` and be versioned.

| Font Family      | Weight (1–9) | CSS Weight Mapping         | File Example                          | Description           |
|------------------|--------------|---------------------------|---------------------------------------|-----------------------|
| Inter            | 4            | 400, Normal               | inter-4-normal.woff2, inter-4-normal.ttf                  | Default UI font       |
|                  | 5            | 500, Medium               | inter-5-medium.woff2, inter-5-medium.ttf                  |                       |
|                  | 7            | 700, Bold                 | inter-7-bold.woff2, inter-7-bold.ttf                    |                       |
| Inter Italic     | 4            | 400, Normal Italic        | inter-4-italic-normal.woff2, inter-4-italic-normal.ttf           | Default UI italic     |
|                  | 5            | 500, Medium Italic        | inter-5-italic-medium.woff2, inter-5-italic-medium.ttf           |                       |
|                  | 7            | 700, Bold Italic          | inter-7-italic-bold.woff2, inter-7-italic-bold.ttf             |                       |
| JetBrains Mono   | 4            | 400, Normal               | jetbrains-mono-4-normal.woff2, jetbrains-mono-4-normal.ttf         | Code/monospace font   |
|                  | 7            | 700, Bold                 | jetbrains-mono-7-bold.woff2, jetbrains-mono-7-bold.ttf           |                       |
| JetBrains Mono Italic| 4         | 400, Normal Italic        | jetbrains-mono-4-italic-normal.woff2, jetbrains-mono-4-italic-normal.ttf  | Code/monospace italic |
|                  | 7            | 700, Bold Italic          | jetbrains-mono-7-italic-bold.woff2, jetbrains-mono-7-italic-bold.ttf    |                       |

## Font Weight Scale
| Token | CSS Weight | Name        |
|-------|------------|-------------|
| 1     | 100        | Thin        |
| 2     | 200        | Extra Light |
| 3     | 300        | Light       |
| 4     | 400        | Normal      |
| 5     | 500        | Medium      |
| 6     | 600        | Semi Bold   |
| 7     | 700        | Bold        |
| 8     | 800        | Extra Bold  |
| 9     | 900        | Black       |

## Guidelines
- All font files must be placed in `/assets/fonts/` and referenced by filename.
- For web use, `.woff2` is required; for native or library use (e.g., Fast2D), `.ttf` is also required.
- Use clear, descriptive names for font families and files.
- Use a 1–9 scale for weights (e.g., 4:400, 5:500, 7:700) for consistency with other tokens and CSS standards.
- Update this table and add new rows when adding new fonts.
- Ensure all weights listed are available as both `.woff2` and `.ttf` files.
- See enforcement scripts for required structure and validation.
- Enforcement scripts will automatically check for the presence of both `.woff2` and `.ttf` files for every font/weight/style listed in this table, and flag any missing or orphaned files.

---
