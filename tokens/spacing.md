# Spacing Tokens

This file defines the spacing scale for the design system. All spacing values use a 1–x scale (e.g., 1–10), with each step representing a multiple of the base spacing unit (default: 4px).

| Token           | Value (px) | Usage Example           |
|-----------------|------------|-------------------------|
| spacing.1       | 4          | Smallest gap/padding    |
| spacing.2       | 8          |                         |
| spacing.3       | 12         |                         |
| spacing.4       | 16         |                         |
| spacing.5       | 20         |                         |
| spacing.6       | 24         |                         |
| spacing.7       | 32         |                         |
| spacing.8       | 40         |                         |
| spacing.9       | 48         |                         |
| spacing.10      | 56         | Largest gap/padding     |

> Use only the 1–x scale for spacing. For zero spacing, use `none`.

## Usage Guidelines
- Use spacing tokens for all margins, paddings, and gaps.
- Never use hardcoded pixel values in components or blocks.
- Adjust the base unit if you want a denser or more spacious UI.
