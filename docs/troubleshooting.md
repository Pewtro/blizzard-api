# Troubleshooting

## `sendRequest` returned `undefined`

Some endpoints legitimately return `204 No Content` or an empty body. The client
treats those as `undefined`. Guard with optional chaining or a null check before
using the result.

## China region

The China region uses different OAuth and API hosts
(`oauth.battlenet.com.cn`). Pass `origin: 'cn'` and the client selects the
correct hosts automatically. Do not override `kyOptions` to point at the global
hosts.

## Protected profile endpoints

Endpoints under the `profile` namespace that read user data require a user
access token with the `wow.profile` scope. Use `client.withUserToken(token)` or
pass the token directly to the resource. Application (client-credentials) tokens
will be rejected.

## Rate limiting (HTTP 429)

The client retries 429 responses by default. If you want to handle rate limits
yourself, set `retryOnRateLimit: false` on the client or per request, and
inspect the response status in your own retry logic.

## Empty or large auction-house responses

Auction-house endpoints can return very large payloads (sometimes exceeding
10 MB) and update on a fixed interval. Increase `kyOptions.timeout` for these
requests and avoid re-fetching more often than the update interval.

## Type discrepancies

The response types are hand-maintained from the Blizzard API documentation and
smoke-tested per endpoint. If a field is missing or mistyped, please open an
issue or pull request. You can always cast locally while waiting for a fix.
