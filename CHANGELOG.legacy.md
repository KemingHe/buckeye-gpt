# Changelog

## [0.13.2](https://github.com/KemingHe/buckeye-gpt/compare/v0.13.1...v0.13.2) (2025-01-26)

## [0.13.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.13.0...v0.13.1) (2025-01-26)

### Bug Fixes

* **data-tooltip-place:** review react-tooltip docs, corrected placement for buggy components ([b826847](https://github.com/KemingHe/buckeye-gpt/commit/b82684785e20c3ef7ab54010a880a26a56228996)), closes [#98](https://github.com/KemingHe/buckeye-gpt/issues/98)

## [0.13.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.12.1...v0.13.0) (2025-01-26)

### Features

* **tooltip/simpletooltip.tsx:** created generic tooltip comp from react-tooltip ([6385b04](https://github.com/KemingHe/buckeye-gpt/commit/6385b047bba873b0df1e753e70598085bd1169f0)), closes [#96](https://github.com/KemingHe/buckeye-gpt/issues/96)

## [0.12.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.12.0...v0.12.1) (2025-01-24)

## [0.12.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.11.3...v0.12.0) (2025-01-23)

### Features

* **chatdocs/:** added disclaimer w/ link, for un-authed users, added terms and privacy links ([f47fb20](https://github.com/KemingHe/buckeye-gpt/commit/f47fb20eced97380292a2007cfa4bc67a30b184f)), closes [#91](https://github.com/KemingHe/buckeye-gpt/issues/91) [#33](https://github.com/KemingHe/buckeye-gpt/issues/33) [#32](https://github.com/KemingHe/buckeye-gpt/issues/32) [#27](https://github.com/KemingHe/buckeye-gpt/issues/27)

## [0.11.3](https://github.com/KemingHe/buckeye-gpt/compare/v0.11.2...v0.11.3) (2025-01-23)

## [0.11.2](https://github.com/KemingHe/buckeye-gpt/compare/v0.11.1...v0.11.2) (2025-01-22)

### Bug Fixes

* **chatpage/:** resolved chat page aria issue by adopting useState to manage sidebar toggle ([d0041af](https://github.com/KemingHe/buckeye-gpt/commit/d0041afcd7d8310fb2233777abf90c9b78938722)), closes [#78](https://github.com/KemingHe/buckeye-gpt/issues/78)

## [0.11.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.11.0...v0.11.1) (2025-01-21)

## [0.11.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.10.0...v0.11.0) (2025-01-21)

### Features

* **lib/langchain:** added google gemini and anthropic claude lite, reg, and premium endpoints ([ce3f253](https://github.com/KemingHe/buckeye-gpt/commit/ce3f253bba9fc625dcf91879516f57314c6ca60c)), closes [#76](https://github.com/KemingHe/buckeye-gpt/issues/76) [#75](https://github.com/KemingHe/buckeye-gpt/issues/75)

## [0.10.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.9.0...v0.10.0) (2025-01-19)

### Features

* **hooks/usechat/:** adopted custom useChat.ts starting with modularized copy of ai sdk's useChat ([cb9c3c2](https://github.com/KemingHe/buckeye-gpt/commit/cb9c3c246498d46e4992a781f4fa53912662c4b6))

## [0.9.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.8.1...v0.9.0) (2025-01-17)

### Features

* **chatcontext.tsx:** adopted ChatProvider for wrapper comps, retired prop drilling paradigm ([2e27895](https://github.com/KemingHe/buckeye-gpt/commit/2e27895d8278c8e2ac298846f3b2adf3c204165e)), closes [#50](https://github.com/KemingHe/buckeye-gpt/issues/50) [#65](https://github.com/KemingHe/buckeye-gpt/issues/65) [#16](https://github.com/KemingHe/buckeye-gpt/issues/16)

## [0.8.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.8.0...v0.8.1) (2025-01-16)

## [0.8.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.10...v0.8.0) (2025-01-14)

### Features

* ****/route.ts:** added origin and auth check to regular and premium endpoints ([a7bf43b](https://github.com/KemingHe/buckeye-gpt/commit/a7bf43bf24cdb1c49caec3b38382eaa683e9d0b3)), closes [#52](https://github.com/KemingHe/buckeye-gpt/issues/52)

## [0.7.10](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.9...v0.7.10) (2025-01-12)

## [0.7.9](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.8...v0.7.9) (2025-01-12)

## [0.7.8](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.7...v0.7.8) (2025-01-11)

### Bug Fixes

* **.gitignore:** added gitguardian cache to .gitignore ([4e777be](https://github.com/KemingHe/buckeye-gpt/commit/4e777be42f07800d7dcecad9ddbf756b72dd95b7))

## [0.7.7](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.6...v0.7.7) (2025-01-10)

### Bug Fixes

* **layout.tsx:** modularized socialify constants and use /png endpoint to fix og render logo issue ([6cd087c](https://github.com/KemingHe/buckeye-gpt/commit/6cd087c92991786421de893643ba48103e3c9581))

## [0.7.6](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.5...v0.7.6) (2025-01-10)

## [0.7.5](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.4...v0.7.5) (2025-01-09)

### Bug Fixes

* **.nvmrc:** added .nvmrc to specify node version for GitHub Action scripts ([94b5e41](https://github.com/KemingHe/buckeye-gpt/commit/94b5e411b38c82e91c0f8942d93c8849bc7b9c45))

## [0.7.4](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.3...v0.7.4) (2025-01-09)

## [0.7.3](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.2...v0.7.3) (2025-01-08)

## [0.7.2](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.1...v0.7.2) (2025-01-08)

## [0.7.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.7.0...v0.7.1) (2025-01-08)

## [0.7.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.6.1...v0.7.0) (2024-12-24)

### Features

* **stack-auth:** completed all auth user stories via Stack-Auth SaaS ([1ebd106](https://github.com/KemingHe/buckeye-gpt/commit/1ebd1066456217e1e5a61dfd476511bf5aeae22a))

## [0.6.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.6.0...v0.6.1) (2024-12-18)

## [0.6.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.5.0...v0.6.0) (2024-12-18)

### Features

* **components/chat:** modularized chat kbd handlers/hooks, corrected behavior ([62a24ca](https://github.com/KemingHe/buckeye-gpt/commit/62a24cae2fe9616c6e711d504a2159f56ccf8dde)), closes [#4](https://github.com/KemingHe/buckeye-gpt/issues/4)

## [0.5.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.4.1...v0.5.0) (2024-12-18)

### Features

* add support for viewing website on another device over local network ([1045f44](https://github.com/KemingHe/buckeye-gpt/commit/1045f44460540b0ab6d394d946377a2c5a24f308))

### Bug Fixes

* **globals.css:** set textarea font size to textbase, which is 16px in tailwind ([dfc2334](https://github.com/KemingHe/buckeye-gpt/commit/dfc23348555cccfe6437fcf155ccfc007eb85215))

## [0.4.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.4.0...v0.4.1) (2024-12-17)

## [0.4.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.3.1...v0.4.0) (2024-12-17)

### Features

* **/lib/stackauth/:** in process of adding custom stack auth. Implemented sign-in UI ([02a8cc4](https://github.com/KemingHe/buckeye-gpt/commit/02a8cc45ef89a153f522139eaafb1aed149027c5))

## [0.3.1](https://github.com/KemingHe/buckeye-gpt/compare/v0.3.0...v0.3.1) (2024-12-08)

### Bug Fixes

* **chatinputsection.tsx:** fixed safari svg display bug by explicitly declaring size val ([e27b8ae](https://github.com/KemingHe/buckeye-gpt/commit/e27b8ae028746053541b27ad6f05a90701ef093e)), closes [#1](https://github.com/KemingHe/buckeye-gpt/issues/1)

## [0.3.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.2.0...v0.3.0) (2024-12-08)

### Features

* **chat components:** added stop button and expandable textarea, polished icons and ui ([0d4c6da](https://github.com/KemingHe/buckeye-gpt/commit/0d4c6da96ff89ae756125af86226f79431e0cef2))

## [0.2.0](https://github.com/KemingHe/buckeye-gpt/compare/v0.1.1...v0.2.0) (2024-12-07)

### Features

* **app/page.tsx:** fully implemetned chatgpt clone, no auth yet ([6fc0554](https://github.com/KemingHe/buckeye-gpt/commit/6fc055422002014e4f96785683770c660aa2b0bc))

## 0.1.1 (2024-12-07)
