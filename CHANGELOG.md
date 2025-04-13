# buckeye-gpt

## 0.16.5

### Patch Changes

- [#145](https://github.com/KemingHe/buckeye-gpt/pull/145) [`9126602`](https://github.com/KemingHe/buckeye-gpt/commit/9126602dc4beaf3169326e79d9072c2137bc96fe) Thanks [@KemingHe](https://github.com/KemingHe)! - Increased streaming window to 60s to prevent response cut-off.

## 0.16.4

### Patch Changes

- [#143](https://github.com/KemingHe/buckeye-gpt/pull/143) [`023457f`](https://github.com/KemingHe/buckeye-gpt/commit/023457f1d9d4cbe7a23546775ba8d150692cab89) Thanks [@KemingHe](https://github.com/KemingHe)! - Updated pnpm and deps to next minor or patch versions.

## 0.16.3

### Patch Changes

- [#140](https://github.com/KemingHe/buckeye-gpt/pull/140) [`6304a86`](https://github.com/KemingHe/buckeye-gpt/commit/6304a86852339d475f0b3c3b120328503c3222df) Thanks [@KemingHe](https://github.com/KemingHe)! - Updated deps, pnpm, and approved necessary builds.

## 0.16.2

### Patch Changes

- [#137](https://github.com/KemingHe/buckeye-gpt/pull/137) [`9e0430a`](https://github.com/KemingHe/buckeye-gpt/commit/9e0430adf05630becbc3e3581e76b5f27ba9f8c0) Thanks [@KemingHe](https://github.com/KemingHe)! - Updated dependencies

- [#137](https://github.com/KemingHe/buckeye-gpt/pull/137) [`9e0430a`](https://github.com/KemingHe/buckeye-gpt/commit/9e0430adf05630becbc3e3581e76b5f27ba9f8c0) Thanks [@KemingHe](https://github.com/KemingHe)! - Polished readme to include motivation section for project. Updated description to be more concise.

## 0.16.1

### Patch Changes

- [#135](https://github.com/KemingHe/buckeye-gpt/pull/135) [`8533e32`](https://github.com/KemingHe/buckeye-gpt/commit/8533e32a10bb330f5b575f4c702266409da6ac8a) Thanks [@KemingHe](https://github.com/KemingHe)! - Updated dependencies.

- [#135](https://github.com/KemingHe/buckeye-gpt/pull/135) [`8533e32`](https://github.com/KemingHe/buckeye-gpt/commit/8533e32a10bb330f5b575f4c702266409da6ac8a) Thanks [@KemingHe](https://github.com/KemingHe)! - Refactored sign-in server action into auth send magic link endpoint (POST) for best practice.

- [#135](https://github.com/KemingHe/buckeye-gpt/pull/135) [`8533e32`](https://github.com/KemingHe/buckeye-gpt/commit/8533e32a10bb330f5b575f4c702266409da6ac8a) Thanks [@KemingHe](https://github.com/KemingHe)! - Restricted workflow run to 'KemingHe/buckeye-gpt' repo only to avoid fork action errors.

## 0.16.0

### Minor Changes

- [#129](https://github.com/KemingHe/buckeye-gpt/pull/129) [`af7e3fd`](https://github.com/KemingHe/buckeye-gpt/commit/af7e3fd8c603ee277a16631f91512b2c09645690) Thanks [@KemingHe](https://github.com/KemingHe)! - Added LangSmith tracing for all LangChain OpenAI calls. Found bug where LangSmith project is correctly set in app but not recognized in the SaaS; current workaround is to use the auto-default project.

### Patch Changes

- [#129](https://github.com/KemingHe/buckeye-gpt/pull/129) [`af7e3fd`](https://github.com/KemingHe/buckeye-gpt/commit/af7e3fd8c603ee277a16631f91512b2c09645690) Thanks [@KemingHe](https://github.com/KemingHe)! - Added gap between clear messages modal form buttons. Fixed issue to allow auto-focus on textarea after clearing messages.

- [#129](https://github.com/KemingHe/buckeye-gpt/pull/129) [`86dee35`](https://github.com/KemingHe/buckeye-gpt/commit/86dee35e40d863a4239509eda14ec02ce593fc94) Thanks [@KemingHe](https://github.com/KemingHe)! - Fixed Vercel build issue where sign in form fields schema is wrongfully deemed excessively deep, by @ts-ignore the line.

- [#129](https://github.com/KemingHe/buckeye-gpt/pull/129) [`af7e3fd`](https://github.com/KemingHe/buckeye-gpt/commit/af7e3fd8c603ee277a16631f91512b2c09645690) Thanks [@KemingHe](https://github.com/KemingHe)! - Added unittest for sign-in-form-fields zod schema.

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
