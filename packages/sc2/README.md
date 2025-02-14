# @blizzard-api/sc2

This package aims to make it easier for you to integrate with the Blizzard Battle.net API, specifically for Diablo 3.

## Installation

```sh
npm i @blizzard-api/core @blizzard-api/sc2
```

## Usage

You can get paths, namespaces, parameters and more for a specific endpoint by calling it from the `sc2` export.

```ts
import { sc2 } from "@blizzard-api/sc2"
//or
import sc2 from "@blizzard-api/sc2"

const season = sc2.season(123);
        ^ { endDate: string; number: number; seasonId: number; startDate: string; year: number; }
```

If you don't want to use the exported sc2 object, you can also access the functions directly:

```ts
import { season } from "@blizzard-api/sc2"

const seasonI = season(123);
        ^ { endDate: string; number: number; seasonId: number; startDate: string; year: number; }
```

### Types

If you need the response types, they are also exported with "Response" appended, so to get the response type from the above code, you can import it like this:

```ts
import type { SeasonResponse } from '@blizzard-api/sc2';
```

If you simply want to use the existing object, you can use the helper, `ExtractResourceType`, from `@blizzard-api/core` like so:

```ts
import { sc2 } from "@blizzard-api/sc2"

const season = sc2.season("eu");
        ^ { endDate: string; number: number; seasonId: number; startDate: string; year: number; }

type SeasonResponse = ExtractResourceType<typeof season>;
```

## Notes on Types

The types are manually created from using the Blizzard API documentation, and are as accurate as possible with smoke testing each endpoint. However, no-one is perfect so there is likely to be some discrepancies. If you encounter any issues with the types from this package, please open an issue or a pull request.

### Client

While this package is made to function on it's own, it performs even better when combined with `@blizzard-api/client` where you can easily request data combining the two libraries.

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';
import { sc2 } from '@blizzard-api/sc2';

const client = await createBlizzardApiClient({
  key: 'environment.blizzardClientId',
  secret: 'environment.blizzardClientSecret',
  origin: 'eu',
});

//Response will automatically be typed with the appropriate values
const response = await client.sendRequest(sc2.season("eu"));

console.log(response);
                ^ typeof SeasonResponse
```
