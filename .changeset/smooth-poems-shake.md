---
'@blizzard-api/client': patch
---

Update ky to 2.2.0 and delegate 429 retry handling to ky instead of wrapping every request in a custom retry loop.

`maxAttempts` previously compounded with ky's own retries, so a request configured with `maxAttempts: 3` sent nine HTTP requests. It now sends exactly three. `retryOnRateLimit: false` also did not stop ky from retrying twice; it now disables retries entirely.

Retries are now configured through ky, which also means the token endpoints gain the same `Retry-After` and rate limit header handling as the resource endpoints, and `5xx`, network, and timeout failures are retried too. Retry settings passed per request are honoured rather than silently ignored.

`kyOptions.retry` is merged with the client's defaults instead of replacing them, and `retryOnRateLimit: false` takes precedence over it.
