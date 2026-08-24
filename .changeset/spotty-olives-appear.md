---
'@blizzard-api/client': minor
---

Moved the default extended timeout to the client instead of per request.
This lets you override the entire client in one place if you want all requests to have longer/smaller timeout periods.
