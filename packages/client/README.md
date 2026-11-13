# @blizzard-api/client

This package provides a client that is meant to be used together with one or more of the packages dedicated to a blizzard game.

Currently available packages are:

- `@blizzard-api/classic-wow`
- `@blizzard-api/d3`
- `@blizzard-api/hs`
- `@blizzard-api/sc2`
- `@blizzard-api/wow`
- `@blizzard-api/wow-forever`

## Installation

```sh
npm i @blizzard-api/client
```

## Usage

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';
//or
import createBlizzardApiClient from '@blizzard-api/client';
import { wow } from '@blizzard-api/wow';

const client = await createBlizzardApiClient({
  key: process.env.BLIZZARD_CLIENT_ID!,
  secret: process.env.BLIZZARD_CLIENT_SECRET!,
  origin: 'eu',
});

//Response will automatically be typed with the appropriate values
const response = await client.sendRequest(wow.commodities());

console.log(response);
                ^ typeof AuctionHouseCommoditiesResponse | undefined
```

## Client options

`createBlizzardApiClient` accepts a `ClientOptions` object:

| Option      | Type        | Required | Description                                                                                         |
| ----------- | ----------- | -------- | --------------------------------------------------------------------------------------------------- |
| `key`       | `string`    | Yes      | Your Blizzard API client ID.                                                                        |
| `secret`    | `string`    | Yes      | Your Blizzard API client secret.                                                                    |
| `origin`    | `Origins`   | Yes      | The region to talk to, e.g. `'eu'`, `'us'`, `'kr'`, `'tw'`, `'cn'`.                                 |
| `locale`    | `Locales`   | No       | The locale to request responses in, e.g. `'en_GB'`. Defaults to a sensible locale for the `origin`. |
| `token`     | `string`    | No       | A pre-existing access token. If supplied it is validated and reused when still valid.               |
| `kyOptions` | `KyOptions` | No       | Options forwarded to the underlying [`ky`](https://github.com/sindresorhus/ky) instance.            |

`retryOnRateLimit: false` disables retries for HTTP 429 responses while leaving retries for other transient errors enabled.

### Automatic token refresh

`createBlizzardApiClient` takes an optional second argument, `onTokenRefresh`, that controls how access tokens are managed:

- `true` (default) — the client obtains a token on creation and automatically schedules a refresh shortly before it expires.
- `false` — the client is returned without obtaining or scheduling any token. You are responsible for calling `getAccessToken`/`setAccessToken` yourself.
- `(token: AccessToken) => void` — behaves like `true`, but your callback is invoked with each newly obtained token (useful for persisting it).

```ts
const client = await createBlizzardApiClient({ key, secret, origin: 'eu' }, (token) => {
  console.log('Refreshed token', token.access_token);
});
```

If a `token` is provided in the options, it is validated first. A still-valid token is reused and a refresh is scheduled for when it nears expiry; an expired or invalid token is refreshed immediately. Refresh timers are `unref`'d, so they never keep your process alive.

Call `client.cancelTokenRefresh()` to cancel the scheduled refresh, for example during a graceful shutdown.

## Sending requests

Pass a resource from one of the game packages to `sendRequest`. The response type is inferred from the resource, and per-request overrides can be supplied:

```ts
import { wow } from '@blizzard-api/wow';

const response = await client.sendRequest(wow.commodities(), {
  locale: 'de_DE',
  // Any other ClientOptions field can be overridden per request,
  // including kyOptions for retries, timeouts, hooks, etc.
  kyOptions: { timeout: 10_000 },
});
```

`sendRequest` resolves to `undefined` for endpoints that return `204 No Content` or an empty body.

## User-scoped requests

Obtain a user access token with the `wow.profile` scope through Blizzard's [authorization code flow](https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow). Use `withUserToken` to create an isolated client for that token:

```ts
const userClient = client.withUserToken(userAccessToken);
const profile = await userClient.sendRequest(wow.accountProfileSummary());
```

The scoped client uses that token by default and does not change the original client's application token. The library does not acquire or refresh user tokens; your application is responsible for their lifecycle. Existing calls that pass a token directly to a protected resource, such as `wow.accountProfileSummary(userAccessToken)`, remain supported and override the scoped/default token for that request.

## API

The client returned by `createBlizzardApiClient` (an instance of `BlizzardApiClient`) exposes:

| Member                                 | Description                                                                                       |
| -------------------------------------- | ------------------------------------------------------------------------------------------------- |
| `defaults`                             | The resolved default `key`, `secret`, `origin`, `locale`, and current `token`.                    |
| `sendRequest(resource, options?)`      | Send a request for a resource and return its typed response (or `undefined` for empty responses). |
| `getAccessToken(options?)`             | Request a new access token using the client-credentials flow.                                     |
| `refreshAccessToken(options?)`         | Request a new access token and store it on the client.                                            |
| `validateAccessToken(options?)`        | Validate an access token against Blizzard's OAuth endpoint.                                       |
| `setAccessToken(token)`                | Manually set the access token used for subsequent requests.                                       |
| `cancelTokenRefresh()`                 | Cancel the automatic token refresh timer.                                                         |
| `withUserToken(token)`                 | Create a separate client that uses a user access token by default.                                |
| `getRequestUrl(resource, options?)`    | Build the request URL for a resource without sending it.                                          |
| `getRequestConfig(resource, options?)` | Build the headers and search params for a resource without sending it.                            |

## Authentication

Please refer to the [battle.net documentation](https://develop.battle.net/documentation/guides/getting-started) for guides on how to obtain Blizzard API credentials.
