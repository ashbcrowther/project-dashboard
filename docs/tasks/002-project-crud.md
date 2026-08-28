# Task: Project CRUD

## Status

Ready

## Goal

Allow users to create, edit, and delete projects from the dashboard.

## Requirements

- Add a clear way to create a new project.
- The create form must support:
  - name
  - description
  - status
  - priority
- Validate that project name is required.
- New projects should use the existing project data model:
  - id
  - name
  - description
  - status
  - priority
  - createdAt
  - updatedAt
- Allow an existing project to be edited.
- Editing should update `updatedAt`.
- Allow a project to be deleted.
- Destructive deletion should require confirmation.
- Project count should update automatically.
- Preserve the existing responsive dashboard and card layout.
- Prefer reusable components where appropriate.

## Out of Scope

- localStorage persistence
- status filtering
- search
- authentication
- backend/API work
- drag and drop
- major visual redesign

## Acceptance Criteria

- [ ] A user can add a project.
- [ ] Empty project names cannot be submitted.
- [ ] A user can edit an existing project.
- [ ] A user can delete a project after confirmation.
- [ ] Project count stays accurate.
- [ ] Existing sample projects still work.
- [ ] Layout remains usable on desktop and mobile.
- [ ] `npm run lint` succeeds.
- [ ] `npm run build` succeeds.
- [ ] No unrelated functionality is added.
