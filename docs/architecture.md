# Architecture

Project Dashboard is a small React application built with Vite.

## Frontend

`src/main.jsx`
- React entry point.

`src/App.jsx`
- Main application shell and page-level composition.

Reusable components should live under:

`src/components/`

Application utilities should live under:

`src/lib/`

## Data

V1 uses browser `localStorage`.

No backend or database is required.

Project state should be loaded from localStorage when the application starts and saved whenever project data changes.

## Development

- React
- Vite
- JavaScript
- npm
- ESLint

## Agent Boundaries

Keep components focused.

Do not introduce state-management libraries unless complexity clearly requires one.

Do not introduce a backend for V1.

Avoid unrelated refactors.
