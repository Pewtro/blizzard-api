---
'@blizzard-api/core': minor
'@blizzard-api/classic-wow': minor
---

Add support for the Burning Crusade Classic (Anniversary) namespaces

Blizzard has added the `classicann` namespace, which is used by the Burning Crusade Classic (Anniversary) version of World of Warcraft.

`@blizzard-api/core` now exposes the `classicann` namespaces through `BlizzardNamespaces`, alongside the new `StaticClassicNamespaces`, `DynamicClassicNamespaces` and `ProfileClassicNamespaces` types, which are used by the classic endpoints to describe the namespaces they support.

`@blizzard-api/classic-wow` now accepts the `static-classicann`, `dynamic-classicann` and `profile-classicann` namespaces on every endpoint that the Blizzard API supports them on. The character achievements endpoints are the exception, as the API does not expose character achievements for the anniversary version.

Alongside the new namespaces, the following response types have been corrected:

- `characterProfileStatus` now returns a `CharacterProfileStatusResponse` for every classic namespace, instead of `never`.
- `guildAchievements` returns a `GuildAchievementsClassicEraResponse` for the anniversary namespace, as the API only returns the guild itself for it.
- `CharacterProfileSummaryResponse.active_spec` is now optional, as the classic era and anniversary versions do not have talent trees.
- The localized names of an item search result are now optional, as the API does not return every locale for the anniversary version.
