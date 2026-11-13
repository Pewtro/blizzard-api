# Authentication

The Blizzard Battle.net API uses OAuth 2.0. This library supports both the
client-credentials flow (application tokens) and user access tokens.

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
scope, obtained through Blizzard's authorization code flow. Use `withUserToken`
to create an isolated client for that token:

```ts
const userClient = client.withUserToken(userAccessToken);
const profile = await userClient.sendRequest(wow.accountProfileSummary());
```

The scoped client uses that token by default and does not change the original
client's application token. Existing calls that pass a token directly to a
protected resource, such as `wow.accountProfileSummary(userAccessToken)`, remain
supported and override the scoped/default token for that request.
