# Client

`@blizzard-api/client` wraps the generated resource objects in a typed HTTP client
built on top of [`ky`](https://github.com/sindresorhus/ky).

::: warning Server-side only
This package is intended for Node.js server-side use. It requires a confidential
Blizzard client secret and uses Node.js APIs, so it is not suitable for browser
bundles. For a browser app, call your own backend and keep Blizzard credentials
there.
:::

## Creating a client

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';

const client = await createBlizzardApiClient({
  key: process.env.BLIZZARD_CLIENT_ID!,
  secret: process.env.BLIZZARD_CLIENT_SECRET!,
  origin: 'eu', // 'us' | 'eu' | 'kr' | 'tw' | 'cn'
  locale: 'en_GB', // optional, defaults to a sensible locale for the origin
});
```

## Sending requests

Pass a resource from any game package to `sendRequest`. The response type is
inferred from the resource:

```ts
import { wow } from '@blizzard-api/wow';

const response = await client.sendRequest(wow.achievement(123));
//    ^ AchievementResponse | undefined
```

`sendRequest` resolves to `undefined` for endpoints that return `204 No Content`
or an empty body, so always account for `undefined`.

The response type is inferred at compile time; the client does not validate the
JSON payload against that type at runtime. Blizzard's response can still differ
from the declared type, so validate the payload yourself if runtime guarantees
are important to your application.

## Per-request overrides

Any `ClientOptions` field can be overridden per request, including `kyOptions`
for retries, timeouts and hooks:

```ts
const response = await client.sendRequest(wow.commodities(), {
  locale: 'de_DE',
  kyOptions: { timeout: 10_000 },
});
```

## Retries and rate limits

By default the client retries transient errors and HTTP 429 responses. Set
`retryOnRateLimit: false` to disable retries for 429 while keeping retries for
other transient errors. `maxAttempts` is the total number of attempts, including
the initial request (so `1` disables retries).

## Tokens

- `getAccessToken()` / `refreshAccessToken()` / `validateAccessToken()` /
  `setAccessToken()` manage the application token manually.
- `cancelTokenRefresh()` cancels the automatic refresh timer (useful on shutdown).
- `withUserToken(token)` returns an isolated client scoped to a user access
  token for protected profile endpoints, without changing the original client.
- Pass a token directly to a protected resource (e.g.
  `wow.accountProfileSummary(userAccessToken)`) to override the scoped/default
  token for that single request.

## Building URLs and configs without sending

`getRequestUrl(resource, options?)` and `getRequestConfig(resource, options?)`
build the request URL and headers/search params without performing the request,
which is useful for debugging or custom transports.
