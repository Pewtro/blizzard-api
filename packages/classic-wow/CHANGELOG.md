# @blizzard-api/classic-wow

## 2.1.2

### Patch Changes

- db2b56f: Remove stray console.log from guildAchievements

## 2.1.1

### Patch Changes

- 40fea58: Add is_ghost and is_self_found as optional boolean values for Character Profile Summary API in classic wow.

  These values are only be present on Hardcore characters.

## 2.1.0

### Minor Changes

- ce41414: Add a bunch of profile APIs, this includes:

  - Character Achievements
  - Character Equipment
  - Character Hunter Pets
  - Character Media
  - Character Profile
  - Character Specialization
  - Character Statistics

- ce41414: Add Guild related APIs

### Patch Changes

- Updated dependencies [3faeb2c]
  - @blizzard-api/core@2.1.0

## 2.0.3

### Patch Changes

- e79b26f: Prefer default export rather than named syntax for the game flavours

## 2.0.2

### Patch Changes

- 9b4245b: Improve JSDoc for a large amount of interfaces, types or functions
- Updated dependencies [9b4245b]
  - @blizzard-api/core@2.0.2

## 2.0.1

### Patch Changes

- 36584d8: Sort types, functions and more - has no impact on consumers of the library
- Updated dependencies [36584d8]
  - @blizzard-api/core@2.0.1

## 2.0.0

### Major Changes

- 2d2e2c1: This package now ships with ESM-only. If you need ESM and CJS you can use the previous major release that was a dual-release. Node v22 also ships with native interoperability between the two that you can utilise

### Minor Changes

- 443e856: Broaden the allowed node versions

### Patch Changes

- Updated dependencies [443e856]
- Updated dependencies [2d2e2c1]
  - @blizzard-api/core@2.0.0

## 1.1.7

### Patch Changes

- d414f3e: Adjust exports in game packages to not be duplicated

## 1.1.6

### Patch Changes

- Updated dependencies [6587647]
  - @blizzard-api/core@1.2.1

## 1.1.5

### Patch Changes

- Updated dependencies [23c193f]
  - @blizzard-api/core@1.2.0

## 1.1.4

### Patch Changes

- Updated dependencies [3330b07]
  - @blizzard-api/core@1.1.2

## 1.1.3

### Patch Changes

- 0fb2bed: Add default exports and improve the README documentation slightly

## 1.1.2

### Patch Changes

- e45ef2a: Improve dual publishing of cjs and esm, as well as improve treeshaking through tsup
- e18d2b9: Sort exported types alphabetically for a better overview
- Updated dependencies [e45ef2a]
- Updated dependencies [e18d2b9]
  - @blizzard-api/core@1.1.1

## 1.1.1

### Patch Changes

- Updated dependencies [cfdc20b]
  - @blizzard-api/core@1.1.0

## 1.1.0

### Minor Changes

- e4c8e16: Additionally export functionality from the root rather than only from the named wow/classicWow export

## 1.0.0

### Major Changes

- a93793a: Release 1.0.0

### Patch Changes

- Updated dependencies [a93793a]
  - @blizzard-api/core@1.0.0

## 0.1.0

### Minor Changes

- c124c2a: Add remaining endpoints, resources and known types

### Patch Changes

- 013fe27: Add resources and types for auction house and connected realm APIs
- Updated dependencies [4cfce23]
  - @blizzard-api/core@0.1.2
