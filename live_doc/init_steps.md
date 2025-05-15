1. `cd live_doc` 
2. Create the project with Deno + SvelteKit
    - `https://svelte.dev/docs/cli/faq`
    - `deno run --allow-read --allow-env --allow-write --allow-run npm:sv create`
    - "Welcome to the Svelte CLI! (v0.8.3)"
    - "Where would you like your project to be created?" => hit Enter to use ./
    - "Directory not empty. Continue?" => Yes
    - "Which template would you like?" => SvelteKit minimal
    - "Add type checking with TypeScript?" => Yes, using TypeScript syntax
    - "What would you like to add to your project?" => storybook
    - "What do you want to use Storybook for?" => Documentation, Testing
    - "Which package manager do you want to install dependencies with?" => deno
3. `deno task dev --open`
