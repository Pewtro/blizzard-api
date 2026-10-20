---
'@blizzard-api/wow': patch
---

Make `leading_groups` optional on the mythic keystone leaderboard response

The Blizzard API only publishes the leading groups of a mythic keystone period once the period has ended, so the leaderboard of the period that is currently running does not contain them.
