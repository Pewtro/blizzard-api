# @blizzard-api/client

This package provides a client that is meant to be used together with one or more of the packages dedicated to a blizzard game.

Currently available packages are:

- `@blizzard-api/wow`

Planned packages are:

- `@blizzard-api/d3`
- `@blizzard-api/hs`
- `@blizzard-api/owl`
- `@blizzard-api/sc2`
- `@blizzard-api/wow-classic`

## Installation

```sh
npm i @blizzard-api/client
```

## Usage

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
