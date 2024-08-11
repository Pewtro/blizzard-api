# @blizzard-api/wow

## 1.2.0

### Minor Changes

- 9108aeb: Add support for Character Professions APIs
- a77dc5d: Add support for the protected Guild APIs
- 0eb6dde: Add support for Character PvP APIs
- c202b50: Add support for Character Collections APIs
- 5c03ab5: Add support for Character Media APIs
- 6424b30: Add support for Character Soulbinds APIs
- f224581: Add support for Character Encounters APIs
- e6261b7: Add support for Character Titles APIs
- 455d766: Add support for Character Mythic Keystone Profile APIs
- 57f0f76: Add Account Profile API responses.
- 28b9676: Add support for Character Profile APIs
- d191168: Add support for Character Appearance APIs
- e102c3e: Add support for Character Statistics APIs
- 9a9714e: Add support for Character Equipment APIs
- 2029362: Add support for Character Specialization APIs
- 38de1fd: Add support for Character Reputations APIs
- 333fcda: Add support for Character Hunter Pets APIs
- 1d182dd: Add support for Character Achievement APIs
- 759f61b: Add support for Character Quests APIs

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

## 0.2.4

### Patch Changes

- 69fb010: Add hide_subclass_in_tooltips response value to ItemSubClassResponse, mark season_name as nullable in PvpSeasonResponse
- Updated dependencies [4cfce23]
  - @blizzard-api/core@0.1.2

## 0.2.3

### Patch Changes

- ca4888f: Add JSDoc comments on types, interfaces and functions
- c0d7647: Rename ItemSubclassResponse to ItemSubClassResponse and remove unintentional export of the `Effect` interface.
- 6210223: Update compatible node versions to include v22
- aaba86b: Properly export types from media search API
- Updated dependencies [f81101e]
- Updated dependencies [6210223]
  - @blizzard-api/core@0.1.1

## 0.2.2

### Patch Changes

- 14585c0: Rename itemSubclass to itemSubClass to match pattern of other functions

## 0.2.1

### Patch Changes

- 8b84de5: Expand on realm timezones and categories to include us/oce servers
- da19481: Add realm category and timezone for korean realms

## 0.2.0

### Minor Changes

- 08ab4d5: Add search parameters to all searchable wow endpoints

### Patch Changes

- Updated dependencies [884b180]
  - @blizzard-api/core@0.1.0

## 0.1.1

### Patch Changes

- 5008583: Update Journal response types

## 0.1.0

### Minor Changes

- 3025e0d: Implement response types for the remaining APIs

## 0.0.7

### Patch Changes

- 7bc02fc: Add APIs for power type, professions, pvp seasons, pvp tier, quests, realms, regions and reputations
- 50774d5: Add APIs for spell, talent, tech talent, title and toy
- c222b8f: Add APIs for guild crests, heirlooms, items, journals, media search, modified crafting, mounts, mythic keystone affixes, mythic keystone dungeons, mythic keystone leaderboards, mythic raid leaderboards and wow tokens.
- 299c4e4: Add APIs for pet, playable classes, playable races, and playables specializations
- Updated dependencies [83ce05c]
  - @blizzard-api/core@0.0.9

## 0.0.6

### Patch Changes

- Updated dependencies [31485bc]
  - @blizzard-api/core@0.0.8

## 0.0.5

### Patch Changes

- Updated dependencies [9c3e6bf]
  - @blizzard-api/core@0.0.7

## 0.0.4

### Patch Changes

- 18eb55e: Add typings for auction-house and connected-realm endpoints
- b269122: Add responses for the achievement API
- 6a65dd0: Add azerite-essence, creature, covenant endpoints (currently without return types)
- Updated dependencies [10b71a6]
- Updated dependencies [0ddc74e]
  - @blizzard-api/core@0.0.6

## 0.0.3

### Patch Changes

- 190f5e7: Update achievements implementation based on core updates
- Updated dependencies [7388a3b]
  - @blizzard-api/core@0.0.5

## 0.0.2

### Patch Changes

- 512f778: Shuffle around files a bit and separate resource keys for simplicity and maintenance
- Updated dependencies [3d9b073]
  - @blizzard-api/core@0.0.4

## 0.0.1

### Patch Changes

- 3ea04fa: Begin the creation of @blizzard-api/wow with achievement API types
- Updated dependencies [06dc41d]
  - @blizzard-api/core@0.0.3
