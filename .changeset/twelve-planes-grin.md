---
'@blizzard-api/client': major
---

Remove the axios compatability layer that resulted in response existing both directly in the response and in the data. If you face errors after this you likely just need to remove accessing data.
