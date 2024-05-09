# @blizzard-api/client

This package provides a client that is meant to be used together with one or more of the packages dedicated to a blizzard game.

Currently available packages are:

- `@blizzard-api/wow`
- `@blizzard-api/classic-wow`

Planned packages are:

- `@blizzard-api/d3`
- `@blizzard-api/hs`
- `@blizzard-api/sc2`

## Installation

```sh
npm i @blizzard-api/client
```

## Usage

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
