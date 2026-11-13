# Getting started

This guide walks you through installing the `@blizzard-api/*` packages and making your first request.

## Installation

Install the client and the game package you need:

```sh
npm i @blizzard-api/client @blizzard-api/wow
```

## Create a client

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';
import { wow } from '@blizzard-api/wow';

const client = await createBlizzardApiClient({
  key: process.env.BLIZZARD_CLIENT_ID!,
  secret: process.env.BLIZZARD_CLIENT_SECRET!,
  origin: 'eu',
});
```

## Make a request

```ts
const response = await client.sendRequest(wow.achievement(123));
console.log(response);
```

`sendRequest` resolves to `undefined` for endpoints that return an empty body.
