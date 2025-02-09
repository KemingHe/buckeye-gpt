# buckeye-gpt

## 0.15.1

### Patch Changes

- [#124](https://github.com/KemingHe/buckeye-gpt/pull/124) [`da35dde`](https://github.com/KemingHe/buckeye-gpt/commit/da35dde9d1fea43a0db8ecd80f89e7c05470dd5c) Thanks [@KemingHe](https://github.com/KemingHe)! - Refactored entire code base; applied strict flat file structure for components; modularized intefaces and strongly typed all exports; updated deps and removed unused endpoints and functions.

## 0.15.0

### Minor Changes

- [#121](https://github.com/KemingHe/buckeye-gpt/pull/121) [`9edd433`](https://github.com/KemingHe/buckeye-gpt/commit/9edd43342a0d7eba800cd5bc06ed2e85370576ef) Thanks [@KemingHe](https://github.com/KemingHe)! - Added welcome section (proof-of-concept, pending refactor) to suggest prompts to the user.

### Patch Changes

- [#121](https://github.com/KemingHe/buckeye-gpt/pull/121) [`9edd433`](https://github.com/KemingHe/buckeye-gpt/commit/9edd43342a0d7eba800cd5bc06ed2e85370576ef) Thanks [@KemingHe](https://github.com/KemingHe)! - Refactored GitHubCorner component using React best practice. Will soon refactor rest and added unittest.

## 0.14.1

### Patch Changes

- [#116](https://github.com/KemingHe/buckeye-gpt/pull/116) [`e717c3b`](https://github.com/KemingHe/buckeye-gpt/commit/e717c3b6d6d6b97ca8a643426ec6d0f001a44445) Thanks [@KemingHe](https://github.com/KemingHe)! - Enforeced conventional commit to ChangeSet's release PR commit and title.

- [#116](https://github.com/KemingHe/buckeye-gpt/pull/116) [`e717c3b`](https://github.com/KemingHe/buckeye-gpt/commit/e717c3b6d6d6b97ca8a643426ec6d0f001a44445) Thanks [@KemingHe](https://github.com/KemingHe)! - Upon seeing drastic changes in vercel's ai/react use-chat.ts, decided to revert back to using native solution for now. No longer maintaining my own useChat. No behavior change. Removed unused deps.

- [#116](https://github.com/KemingHe/buckeye-gpt/pull/116) [`e717c3b`](https://github.com/KemingHe/buckeye-gpt/commit/e717c3b6d6d6b97ca8a643426ec6d0f001a44445) Thanks [@KemingHe](https://github.com/KemingHe)! - Added @changesets/changelog-github to generate changelog with linkable commit hashses and issues/PRs. Completes #113.

## 0.14.0

### Minor Changes

- eb099c7: Migrated from release-it to @changesets/cli for more manageable and conrib-friendly versioning. Added GitHub Actions release script required by changeset to function.

### Patch Changes

- 6d26aa8: Fixed changeset error when creating versioning PR by allowing github-actions[bot] commit author to bypass pre-commit and commitizen husky hooks.
- eb099c7: Updated dependencies and removed legacy release-it related dev deps.
