# @blizzard-api/\*

The @blizzard-api collection aims to help you connect to the Blizzard Battle.net API as easily and painlessly as possible. The packages are split up by game, and will contain all the endpoints, parameters, and responses you need to get started.

## Installation

If you already have a way of authenticating your application with battle.net, you only need to install `@blizzard-api/core` and the relevant game package you want, e.g.:

```sh
npm i @blizzard-api/core @blizzard-api/wow
```

Currently available packages are:

- `@blizzard-api/d3`
- `@blizzard-api/wow`
- `@blizzard-api/classic-wow`

Planned packages are:

- `@blizzard-api/hs`
- `@blizzard-api/sc2`

The core package gives you access to helper functions such as `getBlizzardApi` which will quickly get you the hostname and locales for a specific region.

The game package will let you access paths, namespaces, parameters and more for each endpoint. This can imported like so:

```ts
import { achievement, wow } from "@blizzard-api/wow"

const achievement = wow.achievement(123);
        ^ { path: string, namespace: string }
//OR LIKE SO
const achievement = achievement(123);
        ^ { path: string, namespace: string }
```

If you additionally want to have a axios client with built in helpers, you can install `@blizzard-api/client` which will let you easily connect to the API and begin consuming it.

```sh
npm i @blizzard-api/client
```

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';
import { wow } from '@blizzard-api/wow';

const client = await createBlizzardApiClient({
  key: 'environment.blizzardClientId',
  secret: 'environment.blizzardClientSecret',
  origin: 'eu',
});

//Response will automatically be typed with the appropriate values
const response = await client.sendRequest(wow.commodities());

console.log(response.data);
                      ^ typeof AuctionHouseCommoditiesResponse
```

## Authentication

Please refer to the [battle.net documentation](https://develop.battle.net/documentation/guides/getting-started) for guides on how to obtain Blizzard API credentials.

## TODO

This list is generally prioritized but no promises that things will be addressed in this order.

- Add a package for the following games/flavours
  - Diablo III
  - Hearthstone
  - StarCraft II
