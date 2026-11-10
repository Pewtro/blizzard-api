import type {
  BaseSearchParameters,
  Faction,
  Factions,
  KeyBase,
  Locales,
  NameIdKey,
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
  creature_displays: Array<CreatureDisplay>;
  description: null | string;
  faction?: Faction;
  requirements?: { classes?: Array<NameIdKey>; faction?: Faction; races?: Array<NameIdKey> };
  should_exclude_if_uncollected?: boolean;
  source?: Source;
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

interface CreatureDisplay extends KeyBase {
  id: number;
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

interface Source {
  name: string;
  type: string;
}
