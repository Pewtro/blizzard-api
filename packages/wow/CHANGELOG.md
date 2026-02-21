# @blizzard-api/wow

## 3.0.2

### Patch Changes

- d03aa92: Add alliance_crafted_item and horde_crafted_item to RecipeResponse
- 4e62e8f: Make item set effect is_active optional

## 3.0.1

### Patch Changes

- a3f007a: The title of the first section of a journal entry can be explicitly null
- 6ae45c4: Re-rerelease for provenance
- Updated dependencies [6ae45c4]
  - @blizzard-api/core@3.0.1

## 3.0.0

### Major Changes

- 7734fe9: Many types have had keys added, removed, made nullable or otherwise edited to better reflect the possible return values of the API. This update is the largest pass of all the response types since the library was first published.
- 71fd204: Update minimum node version to ^20.19.0 || ^22.13.0 || >=24
- 98cbf93: Moved a series of base parameters and generic types/interfaces into @blizzard-api/core to better share types between packages. If you can't access a type or interface anymore, it should now be available in @blizzard-api/core.

### Minor Changes

- 06b75d9: Introduce new types for search results for various WoW APIs
- 7829065: Update some types based on midnight release, mostly related to housing and new transmog system

### Patch Changes

- Updated dependencies [06b75d9]
- Updated dependencies [7734fe9]
- Updated dependencies [71fd204]
- Updated dependencies [98cbf93]
  - @blizzard-api/core@3.0.0

## 2.1.0

### Minor Changes

- 120a26f: Add characterPvpBracketStatistics

## 2.0.5

### Patch Changes

- Updated dependencies [eea4060]
  - @blizzard-api/core@2.1.1

## 2.0.4

### Patch Changes

- 461a8cb: Update statistic description to be nullable
- 7ef2b51: Correct the gender type for the character profile summary response
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

## 1.2.3

### Patch Changes

- d414f3e: Adjust exports in game packages to not be duplicated

## 1.2.2

### Patch Changes

- dddd542: Sort some types more naturally rather than strictly alphabetically
- 77fa6c3: Add type to active_hero_talent response part of CharacterSpecializationsSummaryResponse

## 1.2.1

### Patch Changes

- 7932e99: Explicitly export types as types
- Updated dependencies [6587647]
  - @blizzard-api/core@1.2.1

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
