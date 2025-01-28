# Release-it Setup

Prior to version 0.14.0, [KemingHe/buckeye-gpt](https://github.com/KemingHe/buckeye-gpt) uses `release-it` for individual local version bumping and `CHANGELOG.md` generation. This workflow is not scalable for others to contribute; thus we migrated to using `@changesets/cli` for centralized version management and documentation.

Below are the legacy `release-it` setup instructions, still valuable and efficient to use for single-dev projects.

## Files

* Place `.release-it.json` in project root dir.
* Place `post-commit` (bash script) in `.husky/` dir.

## Dev Dependencies

`pnpm add -D`

* `release-it` for bumping verisons and release.
* `@release-it/conventional-changelog` for generating changelog.

## Co-Dependencies

`@release-it/conventional-changelog` relies on conventional commit message history. Consider using:

* `commitizen` for interactive (in CLI) commit message generation.
* `cz-conventional-changelog` as the conv-changelog prompt adapter for `commitizen`.
