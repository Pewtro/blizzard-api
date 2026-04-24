---
'@blizzard-api/client': minor
---

Return an empty object if the API returns 204 or has a content-length header with 0. This is preparation for ky 2.0 where calling .json() on those would result in an error being thrown.
