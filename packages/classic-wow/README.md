# @blizzard-api/classic-wow

This package aims to make it easier for you to integrate with the Blizzard Battle.net API, specifically for World of Warcraft Classic.

## Installation

```sh
npm i @blizzard-api/core @blizzard-api/classic-wow
```

## Usage

You can get paths, namespaces, parameters and more for a specific endpoint by calling it from the `classicWow` export.

```ts
import { classicWow } from "@blizzard-api/classic-wow"
//or
import classicWow from "@blizzard-api/classic-wow"

const powerType = classicWow.powerType("static-classic", 123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }
```

If you don't want to use the exported classicWow object, you can also access the functions directly:

```ts
import { powerType } from "@blizzard-api/classic-wow"

const powerTypeEndpoint = powerType("static-classic", 123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }
```

### Types

If you need the response types, they are also exported with "Response" appended, so to get the response type from the above code, you can import it like this:

```ts
import type { PowerTypeResponse } from '@blizzard-api/classic-wow';
```

If you simply want to use the existing object, you can use the helper, `ExtractResourceType`, from `@blizzard-api/core` like so:

```ts
import { classicWow } from "@blizzard-api/classic-wow"
import type { ExtractResourceType } from "@blizzard-api/core";

const powerType = classicWow.powerType("static-classic", 123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }

type PowerTypeResponse = ExtractResourceType<typeof powerType>;
```

## Differences to @blizzard-api/wow

This package is specifically for World of Warcraft Classic, and as such, the endpoints and responses are different from the retail variants. If you are looking for the retail version of World of Warcraft, you should use `@blizzard-api/wow` instead.

Because there are multiple classic flavours of the game, each endpoint will take in a namespace argument where you will be able to specify which version of the game you want to query.

| Game Version                            | Static Namespace           | Dynamic Namespace           | Profile Namespace           |
| --------------------------------------- | -------------------------- | --------------------------- | --------------------------- |
| World of Warcraft Classic (Era)         | static-classic1x-{region}  | dynamic-classic1x-{region}  | profile-classic1x-{region}  |
| Mists of Pandaria Classic (Progression) | static-classic-{region}    | dynamic-classic-{region}    | profile-classic-{region}    |
| Burning Crusade Classic (Anniversary)   | static-classicann-{region} | dynamic-classicann-{region} | profile-classicann-{region} |

The `{region}` part of the namespace is appended by `@blizzard-api/client` from the origin the client was created with, so you only ever pass the namespace without it.

Not every endpoint is available in every namespace. The character achievements endpoints (`characterAchievementsSummary` and `characterAchievementStatistics`) are only available in the progression namespace, as neither the classic era nor the anniversary versions expose character achievements.

## Notes on Types

The types are manually created from using the Blizzard API documentation, and are as accurate as possible with smoke testing each endpoint. However, no-one is perfect so there is likely to be some discrepancies. If you encounter any issues with the types from this package, please open an issue or a pull request.

## Client

While this package is made to function on it's own, it performs even better when combined with `@blizzard-api/client` where you can easily request data combining the two libraries.

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';
import { classicWow } from '@blizzard-api/classic-wow';

const client = await createBlizzardApiClient({
  key: 'environment.blizzardClientId',
  secret: 'environment.blizzardClientSecret',
  origin: 'eu',
});

//Response will automatically be typed with the appropriate values
const response = await client.sendRequest(classicWow.commodities());

console.log(response);
                ^ typeof AuctionHouseCommoditiesResponse
```
