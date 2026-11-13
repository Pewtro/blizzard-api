# @blizzard-api/wow-forever

This package aims to make it easier for you to integrate with the Blizzard Battle.net API, specifically for World of Warcraft: Forever.

## Installation

```sh
npm i @blizzard-api/core @blizzard-api/wow-forever
```

## Usage

You can get paths, namespaces, parameters and more for a specific endpoint by calling it from the `wowForever` export.

```ts
import { wowForever } from "@blizzard-api/wow-forever"
//or
import wowForever from "@blizzard-api/wow-forever"

const powerType = wowForever.powerType(123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }
```

If you don't want to use the exported wowForever object, you can also access the functions directly:

```ts
import { powerType } from "@blizzard-api/wow-forever"

const powerTypeEndpoint = powerType(123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }
```

### Types

If you need the response types, they are also exported with "Response" appended, so to get the response type from the above code, you can import it like this:

```ts
import type { PowerTypeResponse } from '@blizzard-api/wow-forever';
```

If you simply want to use the existing object, you can use the helper, `ExtractResourceType`, from `@blizzard-api/core` like so:

```ts
import { wowForever } from "@blizzard-api/wow-forever"
import type { ExtractResourceType } from "@blizzard-api/core";

const powerType = wowForever.powerType(123);
        ^ { path: string, namespace?: string, parameters?: Record<string, never> }

type PowerTypeResponse = ExtractResourceType<typeof powerType>;
```

## Profile APIs

Forever profiles are realmless. Characters are addressed by their `{name}-{surname}` slug and guilds by their name slug. Both use the `profile-forever` namespace.

```ts
import { wowForever } from '@blizzard-api/wow-forever';

const summary = wowForever.characterProfileSummary('Putrofessor', 'Putricide');
const achievements = wowForever.characterAchievementsSummary('Putrofessor', 'Putricide');
const roster = wowForever.guildRoster('teamraiddrømmen');
```

Account profile helpers such as `accountProfileSummary` require a user access token with the `wow.profile` scope instead of client credentials.

## Differences to @blizzard-api/wow

World of Warcraft: Forever is a separate, realmless game. It instead has rulesets. This package supports rulesets, and using those rulesets for things like the auction house.

Because Forever has a single static namespace, a single dynamic namespace and a single profile namespace, the endpoints do not take a namespace argument. The package hardcodes the namespaces, and `@blizzard-api/client` appends the origin to them.

| Game Version               | Static Namespace        | Dynamic Namespace        | Profile Namespace        |
| -------------------------- | ----------------------- | ------------------------ | ------------------------ |
| World of Warcraft: Forever | static-forever-{region} | dynamic-forever-{region} | profile-forever-{region} |

The `{region}` part of the namespace is appended by `@blizzard-api/client` from the origin the client was created with, so you only ever pass the namespace without it.

## Notes on Types

The types are manually created from using the Blizzard API documentation, and are as accurate as possible with smoke testing each endpoint. However, no-one is perfect so there is likely to be some discrepancies. If you encounter any issues with the types from this package, please open an issue or a pull request.

## Client

While this package is made to function on it's own, it performs even better when combined with `@blizzard-api/client` where you can easily request data combining the two libraries.

```ts
import { createBlizzardApiClient } from '@blizzard-api/client';
import { wowForever } from '@blizzard-api/wow-forever';

const client = await createBlizzardApiClient({
  key: process.env.BLIZZARD_CLIENT_ID!,
  secret: process.env.BLIZZARD_CLIENT_SECRET!,
  origin: 'eu',
});

//Response will automatically be typed with the appropriate values
const response = await client.sendRequest(wowForever.mount(123));

console.log(response);
                ^ typeof MountResponse | undefined
```
