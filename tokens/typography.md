# Typography Tokens

This file defines the typography scale for the design system. All typography values use a 1–x scale. Font families use modern, accessible defaults.

## Font Families
- font.sans: 'Inter', 'system-ui', 'Segoe UI', 'Arial', sans-serif
- font.mono: 'JetBrains Mono', 'Menlo', 'Monaco', 'Consolas', monospace

## Font Sizes
| Token           | Size (rem) | Usage Example         | Semantic Role   |
|-----------------|------------|-----------------------|-----------------|
| font.size.1     | 0.75       | Caption, small text   | Caption         |
| font.size.2     | 0.875      | Label, helper text    | Label           |
| font.size.3     | 1          | Body, default         | Body            |
| font.size.4     | 1.125      | Subheading            | Subheading      |
| font.size.5     | 1.25       | Heading 5             | H5              |
| font.size.6     | 1.5        | Heading 4             | H4              |
| font.size.7     | 1.875      | Heading 3             | H3              |
| font.size.8     | 2.25       | Heading 2             | H2              |
| font.size.9     | 3          | Heading 1             | H1              |

## Font Weights
| Token           | Weight     | Usage Example         |
|-----------------|-----------|-----------------------|
| font.weight.1   | 400       | Normal text           |
| font.weight.2   | 500       | Medium, buttons       |
| font.weight.3   | 600       | Semibold, headings    |
| font.weight.4   | 700       | Bold, strong headings |

## Line Heights
| Token           | Value      | Usage Example         |
|-----------------|-----------|-----------------------|
| font.line.1     | 1.2       | Headings              |
| font.line.2     | 1.4       | Subheadings           |
| font.line.3     | 1.6       | Body, default         |
| font.line.4     | 2         | Large blocks, code    |

## Letter Spacing
| Token           | Value (em) | Usage Example         |
|-----------------|------------|-----------------------|
| font.letter.1   | 0          | Default               |
| font.letter.2   | 0.01       | All-caps, buttons     |
| font.letter.3   | 0.02       | Large headings        |

## Usage Guidelines
- Use only the 1–x scale for all typography tokens. Use `none` only for special cases (e.g., no letter spacing).
- Map font sizes to semantic roles for consistency.
- Use `font.weight.2` or higher for buttons and headings.
- Use `font.line.3` for most body text.
- Adjust line height and letter spacing for readability and accessibility.
