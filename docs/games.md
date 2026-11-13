# Games

Each game has its own package exposing a default object and named helpers. Every
helper returns a `Resource` describing the path, namespace and parameters; pass it
to `client.sendRequest` to fetch the data.

## World of Warcraft (retail)

```ts
import { wow } from '@blizzard-api/wow';

const achievement = wow.achievement(123);
const commodities = wow.commodities();
```

Retail endpoints use the `static`, `dynamic` and `profile` namespaces.

## World of Warcraft Classic

```ts
import { classicWow } from '@blizzard-api/classic-wow';

const powerType = classicWow.powerType('static-classic', 123);
const auctions = classicWow.auctions('dynamic-classic', 123, 456);
```

Classic endpoints take a namespace argument selecting the game version (Era,
Progression, Anniversary). The `{region}` suffix is appended by the client.

## World of Warcraft: Forever

```ts
import { wowForever } from '@blizzard-api/wow-forever';

const mount = wowForever.mount(123);
const summary = wowForever.characterProfileSummary('Putrofessor', 'Putricide');
```

Forever is realmless: characters are addressed by their `{name}-{surname}` slug
and guilds by their name slug, all under the `profile-forever` namespace.

## Diablo 3

```ts
import { d3 } from '@blizzard-api/d3';

const act = d3.act(1);
const item = d3.item('the-broken-crown');
```

## Hearthstone

```ts
import { hs } from '@blizzard-api/hs';

const metadata = hs.allMetadata();
const cards = hs.cards();
```

## StarCraft II

```ts
import { sc2 } from '@blizzard-api/sc2';

const season = sc2.season('eu');
```

StarCraft II endpoints take a region (`'us' | 'eu' | 'kr' | 'tw' | 'cn'`)
rather than a numeric ID.

## Response types

Each helper's response type is exported with `Response` appended, e.g.
`AchievementResponse`. You can also derive it with `ExtractResourceType`:

```ts
import type { ExtractResourceType } from '@blizzard-api/core';
import { wow } from '@blizzard-api/wow';

const achievement = wow.achievement(123);
type AchievementResponse = ExtractResourceType<typeof achievement>;
```
