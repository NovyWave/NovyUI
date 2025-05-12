# NovyUI
NovyUI design system

Questions ▷ martin@kavik.cz

## Contributing

To contribute to NovyUI, please validate the documentation and asset files before creating a pull request. This helps keep the design system consistent and implementation-ready.

If you don't have Deno installed, you can get it from [deno.com](https://deno.com/).

### Components, Blocks, and Pages markdown enforcement

NovyUI documentation is organized by type, with each type listed in its own table of contents file:
- `pages.md` (pages)
- `blocks.md` (blocks)
- `components.md` (components)

To validate the documentation, run the relevant script:

```sh
deno run --allow-read scripts/page-markdown-enforcer.ts      # For pages

deno run --allow-read scripts/block-markdown-enforcer.ts     # For blocks

deno run --allow-read scripts/component-markdown-enforcer.ts # For components
```

Or run all checks at once:

```sh
deno run --allow-read --allow-run scripts/all-markdown-enforcer.ts
```

Each script will:
- Check that documentation files and structure match the design system requirements for that type
- Report any missing or misplaced documentation files
- Print a ✅ message when the documentation structure is valid

### Font asset enforcement

To ensure all required font files are present and correctly named, run:

```sh
deno run --allow-read --allow-write --allow-net scripts/font-asset-enforcer.ts
```

This script will:
- Download and extract the latest Inter and JetBrains Mono font releases if needed
- Place and rename only the required `.woff2` and `.ttf` files in `/assets/fonts`
- Remove any orphaned font files not listed in `tokens/fonts.md`
- Print a ✅ message when all font files are in sync

### Icon asset enforcement

To ensure all required icon files are present, correctly named, and synchronized with Lucide, run:

```sh
deno run --allow-read --allow-write --allow-net scripts/icon-asset-enforcer.ts
```

This script will:
- Parse `tokens/icons.md` and strictly enforce that all icon tokens use the exact Lucide icon filenames
- Download and extract only the required SVG icons from the latest Lucide release
- Place the icons in `/assets/icons` and remove any orphaned icon files not listed in `tokens/icons.md`
- Print a ✅ message when all icon files are in sync

### Pattern asset enforcement

To ensure all required SVG pattern files are present and correctly named, run:

```sh
deno run --allow-read --allow-write --allow-net --allow-run scripts/pattern-asset-enforcer.ts
```

This script will:
- Parse `tokens/patterns.md` and strictly enforce that all pattern tokens use the exact pattern slugs
- Download and extract the SVG for each pattern from the official Hero Patterns zip (e.g. `https://heropatterns.com/svg/{slug}.zip`)
- Place the SVGs in `/assets/patterns` and remove any orphaned pattern files not listed in `tokens/patterns.md`
- Ensure the Hero Patterns license file is present
- Print a ✅ message when all pattern files are in sync

## Run all documentation and asset enforcers

To check all documentation types and asset files in a single step, run:

```sh
deno run --allow-read --allow-write --allow-net --allow-run scripts/all-enforcer.ts
```

This script will:
- Run all markdown enforcers (components, blocks, pages)
- Run the font asset enforcer
- Run the icon asset enforcer
- Print a ✅ message when everything is valid and in sync

## Funding

This project is funded through [NGI Zero Core](https://nlnet.nl/core), a fund established by [NLnet](https://nlnet.nl) with financial support from the European Commission's [Next Generation Internet](https://ngi.eu) program. Learn more at the [NLnet project page](https://nlnet.nl/project/NovyWave).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLnet foundation logo" width="20%" />](https://nlnet.nl)
[<img src="https://nlnet.nl/image/logos/NGI0_tag.svg" alt="NGI Zero Logo" width="20%" />](https://nlnet.nl/core)
