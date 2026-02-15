# @blizzard-api/d3

## 2.0.1

### Patch Changes

- 6ae45c4: Re-rerelease for provenance
- Updated dependencies [6ae45c4]
  - @blizzard-api/core@3.0.1

## 2.0.0

### Major Changes

- 71fd204: Update minimum node version to ^20.19.0 || ^22.13.0 || >=24
- 98cbf93: Moved a series of base parameters and generic types/interfaces into @blizzard-api/core to better share types between packages. If you can't access a type or interface anymore, it should now be available in @blizzard-api/core.

### Patch Changes

- be6facc: Fix an issue when calling D3 profile APIs where the battletag wasn't encoded properly
- Updated dependencies [06b75d9]
- Updated dependencies [7734fe9]
- Updated dependencies [71fd204]
- Updated dependencies [98cbf93]
  - @blizzard-api/core@3.0.0

## 1.0.5

### Patch Changes

- Updated dependencies [eea4060]
  - @blizzard-api/core@2.1.1

## 1.0.4

### Patch Changes

- Updated dependencies [3faeb2c]
  - @blizzard-api/core@2.1.0

## 1.0.3

### Patch Changes

- e79b26f: Prefer default export rather than named syntax for the game flavours

## 1.0.2

### Patch Changes

- 9b4245b: Improve JSDoc for a large amount of interfaces, types or functions
- Updated dependencies [9b4245b]
  - @blizzard-api/core@2.0.2

## 1.0.1

### Patch Changes

- 36584d8: Sort types, functions and more - has no impact on consumers of the library
- Updated dependencies [36584d8]
  - @blizzard-api/core@2.0.1

## 1.0.0

### Major Changes

- 2d2e2c1: This package now ships with ESM-only. If you need ESM and CJS you can use the previous major release that was a dual-release. Node v22 also ships with native interoperability between the two that you can utilise

### Minor Changes

- 443e856: Broaden the allowed node versions

### Patch Changes

- Updated dependencies [443e856]
- Updated dependencies [2d2e2c1]
  - @blizzard-api/core@2.0.0

## 0.1.6

### Patch Changes

- d414f3e: Adjust exports in game packages to not be duplicated

## 0.1.5

### Patch Changes

- Updated dependencies [6587647]
  - @blizzard-api/core@1.2.1

## 0.1.4

### Patch Changes

- Updated dependencies [23c193f]
  - @blizzard-api/core@1.2.0

## 0.1.3

### Patch Changes

- Updated dependencies [3330b07]
  - @blizzard-api/core@1.1.2

## 0.1.2

### Patch Changes

- 0fb2bed: Add default exports and improve the README documentation slightly

## 0.1.1

### Patch Changes

- e45ef2a: Improve dual publishing of cjs and esm, as well as improve treeshaking through tsup
- e18d2b9: Sort exported types alphabetically for a better overview
- Updated dependencies [e45ef2a]
- Updated dependencies [e18d2b9]
  - @blizzard-api/core@1.1.1

## 0.1.0

### Minor Changes

- 6440d01: Add initial support for d3 APIs
