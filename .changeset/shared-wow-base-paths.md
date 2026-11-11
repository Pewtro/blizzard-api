---
'@blizzard-api/core': minor
'@blizzard-api/classic-wow': patch
'@blizzard-api/wow': patch
'@blizzard-api/wow-forever': patch
---

Share the World of Warcraft character, guild, and account profile base paths from `@blizzard-api/core`.

`wowCharacterBasePath` now includes a leading slash so it matches the other WoW base path constants. The client accepts both forms, so existing requests are unaffected.
