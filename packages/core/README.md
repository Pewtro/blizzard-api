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

It also includes a helper function to get the origin, hostname and locale easily accessible based off a single origin.

```ts
import type { getEndpoint } from '@blizzard-api/core';

const { origin, hostname, locale } = getEndpoint('eu'); // "kr" | "tw" | "us"
```
