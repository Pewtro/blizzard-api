import type {
  BaseSearchParameters,
  Faction,
  Factions,
  IdKey,
  KeyBase,
  Locales,
  NameType,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

/**
 * The response for a mount index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MountIndexResponse extends ResponseBase {
  mounts: Array<NullishNameIdKey>;
}

/**
 * The response for a mount.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MountResponse extends NullishNameId, ResponseBase {
  creature_displays: Array<IdKey>;
  description: null | string;
  faction?: Faction;
  requirements?: { classes?: Array<NullishNameIdKey>; faction?: Faction; races?: Array<NullishNameIdKey> };
  should_exclude_if_uncollected?: boolean;
  source?: NameType;
}

/**
 * The search parameters for mounts.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface MountSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

/**
 * The response for a mount search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface MountSearchResponse extends SearchResponseWithoutResults {
  results: Array<MountSearchResponseItem>;
}

interface MountSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    faction?: { name: Record<Locales, string | undefined>; type: Factions };
    id: number;
    name: Record<Locales, string | undefined>;
    source?: { name: Record<Locales, string | undefined>; type: string };
  };
}
