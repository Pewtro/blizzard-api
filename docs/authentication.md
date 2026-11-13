# Authentication

The Blizzard Battle.net API uses OAuth 2.0. This library manages application
tokens with the client-credentials flow and can send requests using an existing
user access token. It does not implement the user login, redirect, or
authorization-code exchange; your application must obtain that token.

Keep your client secret on a server. `@blizzard-api/client` is intended for
Node.js server-side use: it requires the confidential client secret and uses
Node.js APIs, so it must not be bundled into browser code. A browser app should
call your backend, which can make requests to Blizzard.

## Client credentials

`createBlizzardApiClient` obtains an application token automatically and refreshes
it before it expires. You only need to provide your client ID and secret:

```ts
const client = await createBlizzardApiClient({
  key: process.env.BLIZZARD_CLIENT_ID!,
  secret: process.env.BLIZZARD_CLIENT_SECRET!,
  origin: 'eu',
});
```

Pass `false` as the second argument to disable automatic token management and
handle tokens yourself via `getAccessToken` / `setAccessToken`.

## User-scoped requests

Some endpoints (profile data) require a user access token with the `wow.profile`
scope. Obtain it through Blizzard's authorization-code flow. At a high level:

1. Register an exact redirect URI in your Blizzard API application's settings.
2. Redirect the user to Blizzard's authorization endpoint with your `client_id`,
   that `redirect_uri`, `response_type=code`, `scope=wow.profile`, and a
   cryptographically random `state` value. Store the state in the user's session.
3. In your server-side callback, verify the returned `state`, then exchange the
   authorization `code` at Blizzard's token endpoint using your client ID,
   client secret, and the same redirect URI. Follow Blizzard's
   [OAuth guide](https://develop.battle.net/documentation/guides/using-oauth)
   for the current endpoint and request details.
4. Keep the resulting user access token server-side and pass it to this library.

For example, once your server has obtained `userAccessToken`, use
`withUserToken` to create an isolated client for it:

```ts
const userClient = client.withUserToken(userAccessToken);
const profile = await userClient.sendRequest(wow.accountProfileSummary());
```

The scoped client uses that token by default and does not change the original
client's application token. Existing calls that pass a token directly to a
protected resource, such as `wow.accountProfileSummary(userAccessToken)`, remain
supported and override the scoped/default token for that request.
