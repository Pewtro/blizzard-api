# @blizzard-api/\*

The @blizzard-api collection aims to help you connect to the Blizzard Battle.net API as easily and painlessly as possible.

## NOTE: STILL EARLY STAGES

I am still in very early stages of development and the API can and will break a few times during development. Once a package is v1 or above, they will follow semantic versioning, but until then they should be considered experimental at best.

## Installation

If you already have a way of authenticating your application with battle.net, you only need to install `@blizzard-api/core` and the relevant game package you want, e.g.:

```sh
npm i @blizzard-api/core @blizzard-api/wow
```

Currently available packages are:

- `@blizzard-api/wow`

Planned packages are:

- `@blizzard-api/d3`
- `@blizzard-api/hs`
- `@blizzard-api/owl`
- `@blizzard-api/sc2`
- `@blizzard-api/wow-classic`

The core package gives you access to helper functions such as `getBlizzardApi` which will quickly get you the hostname and locales for a specific region.

The game package will let you access paths, namespaces, parameters and more for each endpoint. This can imported like so:

```ts
import { wow } from "@blizzard-api/wow"

const achievement = wow.achievement(123);
        ^ { path: string, namespace: string }
```

If you additionally want to have a axios client with built in helpers, you can install `@blizzard-api/client` which will let you easily connect to the API and begin consuming it.

```sh
npm i @blizzard-api/client
```

```ts
import { BlizzardApiClient } from '@blizzard-api/client';
import { wow } from '@blizzard-api/wow';

const client = new BlizzardApiClient({
  key: 'environment.blizzardClientId',
  secret: 'environment.blizzardClientSecret',
  origin: 'eu',
});

//For now, you will need to authenticate and set the token like so, but this will be changed in a future update to be handled implicitly in the client
const access = await client.getAccessToken();
client.setAccessToken(access.data.access_token);

//Response will automatically be typed with the appropriate values
const response = await client.sendRequest(wow.commodities());

console.log(response.data);
                      ^ typeof AuctionHouseCommoditiesResponse
```

## Authentication

Please refer to the [battle.net documentation](https://develop.battle.net/documentation/guides/getting-started) for guides on how to obtain Blizzard API credentials.

## TODO

This list is generally prioritized but no promises that things will be addressed in this order.

- Improve `@blizzard-api/client` with additional features, such as
  - Add built-in token refresh functionality
- Finalize `@blizzard-api/wow` response types.
- Do a pass on better supporting the search endpoints across flavours, starting with `@blizzard-api/wow`
  - https://develop.battle.net/documentation/world-of-warcraft/guides/search
- Add JSDoc annotations to everything relevant in `@blizzard-api/client`, `@blizzard-api/core`, and `@blizzard-api/wow`.
- Release 1.0.0 of `@blizzard-api/client`, `@blizzard-api/core`, and `@blizzard-api/wow`.
- Add a package for the following games/flavours
  - World of Warcraft Classic
  - Diablo III
  - Hearthstone
  - Overwatch League
  - StarCraft II
