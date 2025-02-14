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
//or
import wow from "@blizzard-api/wow"

const achievement = wow.achievement(123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }
```

If you don't want to use the exported wow object, you can also access the functions directly:

```ts
import { achievement } from "@blizzard-api/wow"

const achi = achievement(123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }
```

### Types

If you need the response types, they are also exported with "Response" appended, so to get the response type from the above code, you can import it like this:

```ts
import type { AchievementResponse } from '@blizzard-api/wow';
```

If you simply want to use the existing object, you can use the helper, `ExtractResourceType`, from `@blizzard-api/core` like so:

```ts
import type { ExtractResourceType } from "@blizzard-api/core";
import { wow } from "@blizzard-api/wow"

const achievement = wow.achievement(123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }

type AchievementResponse = ExtractResourceType<typeof achievement>;
```

## Differences to @blizzard-api/classic-wow

This package is specifically for World of Warcraft (retail or modern), and as such, the endpoints and responses are different from the classic variants. If you are looking for the classic version of World of Warcraft, you should use `@blizzard-api/classic-wow` instead.

## Notes on Types

The types are manually created from using the Blizzard API documentation, and are as accurate as possible with smoke testing each endpoint. However, no-one is perfect so there is likely to be some discrepancies. If you encounter any issues with the types from this package, please open an issue or a pull request.

## Client

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

console.log(response);
                ^ typeof AuctionHouseCommoditiesResponse
```
