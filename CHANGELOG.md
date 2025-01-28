# buckeye-gpt

## 0.14.0

### Minor Changes

- eb099c7: Migrated from release-it to @changesets/cli for more manageable and conrib-friendly versioning. Added GitHub Actions release script required by changeset to function.

### Patch Changes

- 6d26aa8: Fixed changeset error when creating versioning PR by allowing github-actions[bot] commit author to bypass pre-commit and commitizen husky hooks.
- eb099c7: Updated dependencies and removed legacy release-it related dev deps.
