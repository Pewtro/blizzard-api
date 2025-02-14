---
'@blizzard-api/client': minor
---

Replace axios with ky that uses native Fetch under the hood.

This means that response bodies should no longer be accessed through `data` property, but they are instead directly available. For the remainder of v2, the `data` property will exist for backwards compatability, but `data` has been marked as depreacted.
