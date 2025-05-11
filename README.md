# NovyUI
NovyUI design system

Questions ▷ martin@kavik.cz

## Contributing

To contribute to NovyUI, you must validate both your documentation structure and font assets before creating a pull request. This ensures the design system remains consistent and implementation-ready.

If you don't have Deno installed, you can get it from [deno.com](https://deno.com/).

### Documentation structure enforcement

To validate your documentation structure, run:

```sh
deno run --allow-read scripts/doc-structure-enforcer.ts
```

This script will:
- Check that your documentation files and structure match the design system requirements
- Report any missing or misplaced documentation files
- Print a ✅ message when your documentation structure is valid

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

## Funding

This project is funded through [NGI Zero Core](https://nlnet.nl/core), a fund established by [NLnet](https://nlnet.nl) with financial support from the European Commission's [Next Generation Internet](https://ngi.eu) program. Learn more at the [NLnet project page](https://nlnet.nl/project/NovyWave).

[<img src="https://nlnet.nl/logo/banner.png" alt="NLnet foundation logo" width="20%" />](https://nlnet.nl)
[<img src="https://nlnet.nl/image/logos/NGI0_tag.svg" alt="NGI Zero Logo" width="20%" />](https://nlnet.nl/core)
