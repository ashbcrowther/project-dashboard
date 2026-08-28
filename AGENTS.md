# Project Agent Instructions

## Purpose

This repository is developed with both human developers and AI coding agents.

Keep changes small, scoped and reviewable.

## Before Making Changes

1. Read this file.
2. Read the task document provided in the prompt.
3. Read only the files required to understand the task.
4. Inspect the existing implementation before changing it.

Do not perform broad repository exploration unless necessary.

## Development Rules

- Follow existing project conventions.
- Prefer existing abstractions over creating new ones.
- Do not introduce dependencies unless required.
- Do not change unrelated code.
- Do not perform opportunistic refactors.
- Never commit secrets or credentials.
- Keep changes within the assigned task.

## Git

Each implementation task should run in its own branch/worktree.

Do not merge branches.

Do not modify another agent's worktree.

Do not commit unless explicitly requested.

## Verification

Use deterministic tools to verify work.

Run the relevant:

- tests
- lint
- typecheck
- build

Do not claim something works without running the appropriate verification when available.

## When Blocked

Do not guess around important architectural, security or product decisions.

Report:

- what is blocking progress
- what you investigated
- the likely options
- what decision is needed

## Completion

When finished, report:

1. What changed
2. Files changed
3. Verification performed
4. Any unresolved issues
5. Decisions requiring human review

Then stop.
## Project Stack

- React
- Vite
- JavaScript
- npm
- ESLint

## Commands

Install dependencies:

npm install

Development:

npm run dev

Production build:

npm run build

Lint:

npm run lint

## Verification

For code changes:

1. Run `npm run lint`.
2. Run `npm run build`.
3. Manually verify UI changes in the browser when relevant.
4. Review `git diff`.

Do not claim automated tests or typechecking were run unless those tools are added later.

