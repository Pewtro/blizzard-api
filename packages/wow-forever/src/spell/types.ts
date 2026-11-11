import type {
  BaseSearchParameters,
  IdKey,
  KeyBase,
  Locales,
  MediaAsset,
  NullishNameId,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

/**
 * The response for spell media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SpellMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a spell.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SpellResponse extends NullishNameId, ResponseBase {
  description: null | string;
  media: IdKey;
}

/**
 * The search parameters for spells.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface SpellSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

/**
 * The response for a spell search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface SpellSearchResponse extends SearchResponseWithoutResults {
  results: Array<SpellSearchResponseItem>;
}

interface SpellSearchResponseItem extends KeyBase {
  data: {
    id: number;
    media: { id: number };
    name: Record<Locales, string | undefined>;
  };
}
