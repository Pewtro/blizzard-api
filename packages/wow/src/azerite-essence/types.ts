import type {
  BaseSearchParameters,
  KeyBase,
  Locales,
  MediaAsset,
  NameId,
  NameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

/**
 * Interface for a response from the azerite essence index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AzeriteEssenceIndexResponse extends ResponseBase {
  azerite_essences: Array<NameIdKey>;
}

/**
 * Interface for a response from the azerite essence media endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AzeriteEssenceMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * Interface for a response from the azerite essence endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AzeriteEssenceResponse extends NameId, ResponseBase {
  allowed_specializations: Array<NameIdKey>;
  media: Media;
  powers: Array<Power>;
}

/**
 * Interface for search parameters for azerite essences.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface AzeriteEssenceSearchParameters extends BaseSearchParameters {
  'allowed_specializations.id'?: number;
}

/**
 * Interface for a response item from the azerite essence search endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface AzeriteEssenceSearchResponse extends SearchResponseWithoutResults {
  results: Array<AzeriteEssenceSearchResponseItem>;
}
interface AzeriteEssenceSearchResponseItem extends KeyBase {
  data: {
    allowed_specializations: Array<{ id: number; name: Record<Locales, string> }>;
    name: Record<Locales, string>;
  };
}

interface Media extends KeyBase {
  id: number;
}

interface Power {
  id: number;
  main_power_spell: NameIdKey;
  passive_power_spell: NameIdKey;
  rank: number;
}
