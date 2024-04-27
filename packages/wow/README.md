# @blizzard-api/wow

This package aims to make it easier for you to integrate with the Blizzard Battle.net API, specifically for World of Warcraft.

## Installation

```sh
npm i @blizzard-api/core @blizzard-api/wow
```

## Usage

You can get paths, namespaces, parameters and more for a specific endpoint by calling it from the `wow` export.

```ts
import { wow } from "@blizzard-api/wow"

const achievement = wow.achievement(123);
        ^ { path: string, namespace: string }
```

If you need the response types, they are also exported with "Response" appended, so to get the response type from the above code, you can import it like this:

```ts
import type { AchievementResponse } from '@blizzard-api/wow';
```

If you simply want to use the existing object, you can use the helper from `@blizzard-api/core` like so:

```ts
import { wow } from "@blizzard-api/wow"

const achievement = wow.achievement(123);
        ^ { path: string, namespace: string }
type AchievementResponse = ExtractResourceType<typeof achievement>;
```

### Client

While this package is made to function on it's own, it performs even better when combined with `@blizzard-api/client` where you can easily request data combining the two libraries.

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
