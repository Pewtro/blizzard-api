# @blizzard-api/core

This package provides core functionality to the other `@blizzard-api/*` packages.

## Installation

```sh
npm i @blizzard-api/core
```

## Usage

The package includes a series of types that define values that are allowed to be passed to Battle.net API.

```ts
import type { BlizzardNamespaces, Locales, Origins } from '@blizzard-api/core';
```

`BlizzardNamespaces` covers the retail namespaces (`dynamic`, `profile` and `static`) as well as the classic ones, which are suffixed with the classic version of the game they belong to.

| Game Version                            | Namespace         |
| --------------------------------------- | ----------------- |
| World of Warcraft (retail)              | static            |
| World of Warcraft Classic (Era)         | static-classic1x  |
| Mists of Pandaria Classic (Progression) | static-classic    |
| Burning Crusade Classic (Anniversary)   | static-classicann |

The namespaces of a specific namespace type are also available on their own, which is handy when you only want to accept the classic namespaces of a given type.

```ts
import type { StaticClassicNamespaces } from '@blizzard-api/core';

const namespace: StaticClassicNamespaces = 'static-classicann';
```

It also includes a helper function to get the origin, hostname and locale easily accessible based off a single origin.

```ts
import type { getBlizzardApi } from '@blizzard-api/core';

const { origin, hostname, locale } = getBlizzardApi('eu'); // "kr" | "tw" | "us"
```
