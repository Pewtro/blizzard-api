---
'@blizzard-api/client': patch
---

Clarify the internal token-refresh scheduling in `createBlizzardApiClient`. The single ambiguous `getTokenExpiration` helper has been split into two clearly-named functions — `getRefreshDelayFromLifetime` (for the `expires_in` duration returned when requesting a token) and `getRefreshDelayFromExpiry` (for the `exp` absolute timestamp returned when validating a token) — backed by a shared `REFRESH_BUFFER_MS` constant. The repeated `setTimeout`/`unref` logic is now a single `scheduleRefresh` helper. This is an internal refactor with no change to runtime behavior or the public API.
