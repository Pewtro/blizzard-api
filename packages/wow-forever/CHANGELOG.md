# @blizzard-api/wow-forever

## 0.3.0

### Minor Changes

- eb7a2fa: Add heirloom, journal, and account collection endpoints

### Patch Changes

- a040035: Share the World of Warcraft character, guild, and account profile base paths from `@blizzard-api/core`.

  `wowCharacterBasePath` now includes a leading slash so it matches the other WoW base path constants. The client accepts both forms, so existing requests are unaffected.

- a179c0d: Use more shared types from core
- Updated dependencies [3cc790b]
- Updated dependencies [a040035]
  - @blizzard-api/core@4.5.0

## 0.2.0

### Minor Changes

- 18b6d37: Add auction-house and ruleset endpoints
- 63c1c6e: Add support for Forever character, guild and account profiles

### Patch Changes

- a5a5be2: Mark category from QuestResponse and spell name from QuestRewards as nullable
- 728a792: Mark a recipe as having a nullable name
- 6376c89: Mark some profession and quest names as nullable
- 18841bf: Mark a bunch of responses as nullable to match what it is in non-english locales
- 0ac868b: Mark MountResponse requirement names as nullable
- a5f1236: Mark various values as nullable to match behaviour for other locales
- Updated dependencies [b7659c2]
  - @blizzard-api/core@4.4.0

## 0.1.1

### Patch Changes

- 1c66958: Provenance release

## 0.1.0

### Minor Changes

- 57c526b: Adds a new `@blizzard-api/wow-forever` package with helpers and response types for the `World of Warcraft: Forever` API.

### Patch Changes

- Updated dependencies [57c526b]
  - @blizzard-api/core@4.3.0
