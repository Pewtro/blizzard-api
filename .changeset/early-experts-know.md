---
'@blizzard-api/client': minor
---

Replaced how to create a client.
The new way is to call `createBlizzardApiClient` which returns a promisified client. This has built in token refresh functionality. If you want to do something additional on every token refresh you can pass in a second parameter to `createBlizzardApiClient` with the desired functionality. If you want to opt out of automated token refresh, you can pass in `false` as the second parameter instead.
