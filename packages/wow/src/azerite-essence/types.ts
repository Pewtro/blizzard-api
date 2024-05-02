import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * Interface for a response from the azerite essence index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AzeriteEssenceIndexResponse extends ResponseBase {
  azerite_essences: Array<NameIdKey>;
}

/**
 * Interface for a response from the azerite essence endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AzeriteEssenceResponse extends ResponseBase, NameId {
  allowed_specializations: Array<NameIdKey>;
  powers: Array<Power>;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

interface Power {
  id: number;
  rank: number;
  main_power_spell: NameIdKey;
  passive_power_spell: NameIdKey;
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
export interface AzeriteEssenceSearchResponseItem extends KeyBase {
  data: {
    allowed_specializations: Array<NameId>;
    name: Record<Locales, string>;
  };
}
