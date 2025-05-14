# NovyUI Automation & Documentation TODOs

## Guidelines
- Do not edit too many files one by one (e.g., components, pages, blocks) manually. Use scripts to automate bulk changes and enforcement wherever possible, as manual editing is too slow and you have limited usage. Prioritize scriptable automation for all repetitive or large-scale updates.
- If you are not sure about file content or codebase structure pertaining to the user’s request, use your tools to read files and gather the relevant information: do NOT guess or make up an answer.
- You MUST plan extensively before each function call, and reflect extensively on the outcomes of the previous function calls. DO NOT do this entire process by making function calls only, as this can impair your ability to solve the problem and think insightfully.
- Mark todos that can be automated with `[scriptable:ID]` and specify script paths.
- Always update the script path if a script is moved or renamed.

## Table of Contents
1. Penpot Integration
2. SvelteKit/Svelte 5 Integration & LLM Instructions

---

## 1. Penpot Integration

Penpot is a key part of the NovyUI workflow for design handoff, visual parity, and automation. This section tracks all tasks related to integrating Penpot with NovyUI, ensuring seamless export/import, design fidelity, and up-to-date documentation.

### 1.1 Penpot File Format & Export/Import Automation
- [ ] **Understand the .penpot file format:**
  - [ ] Review the [Penpot source code](https://github.com/penpot/penpot), [Penpot Exporter Figma Plugin](https://github.com/penpot/penpot-exporter-figma-plugin), and [Penpot import/export documentation](https://help.penpot.app/user-guide/import-export/) to understand the .penpot file format. [scriptable:review-penpot-format]
  - [ ] If documentation is insufficient, reverse-engineer the .penpot file format by inspecting manually created Penpot files. [scriptable:reverse-engineer-penpot-format]
  - [ ] Document findings and update automation scripts for Penpot export/import accordingly. [scriptable:document-penpot-format]

### 1.2 Component/Block/Page Visual Parity & Live Examples
- [ ] **Ensure design fidelity and live documentation:**
  - [ ] For each component, block, and page, add a visual reference or Penpot link to the canonical design. [scriptable:add-penpot-link]
  - [ ] Add a checklist item to verify that the SvelteKit implementation matches the Penpot design for all states and variants. [scriptable:visual-parity-check]
  - [ ] For each component, block, and page, provide a live interactive example in the documentation website (SvelteKit). [scriptable:live-example-sveltekit]
  - [ ] Ensure all live examples demonstrate all documented states and variants. [scriptable:live-example-states-variants]

- [ ] **Ongoing:** Review this file and all sections regularly for completeness, accuracy, and up-to-date automation priorities.

---

## 2. SvelteKit/Svelte 5 Integration & LLM Instructions

- [ ] 2.1 **Script Documentation in Main README**
  - [ ] 2.1.1 Document every script listed above in the main `README.md`, including:
    - [ ] 2.1.1.1 When to run each script (e.g., before commit, in CI, after updating tokens, etc.).
    - [ ] 2.1.1.2 How to run each script (command line examples, required arguments, etc.).
    - [ ] 2.1.1.3 Requirements for running each script (e.g., Deno version, Node.js, SvelteKit project setup, etc.).
    - [ ] 2.1.1.4 Brief description of what each script does and what files it affects.
    - [ ] 2.1.1.5 Keep this documentation up to date as scripts are added or changed. [scriptable:enforce-script-readme-docs]


