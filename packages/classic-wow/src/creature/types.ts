import type {
  BaseSearchParameters,
  IdKey,
  KeyBase,
  Locales,
  MediaAsset,
  NameId,
  NameIdKey,
  NullishNameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

/**
 * The response for creature display media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureDisplayMediaResponse extends ResponseBase {
  assets: Array<DisplayMediaAsset>;
  id: number;
}

/**
 * The response for a creature family index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureFamilyIndexResponse extends ResponseBase {
  creature_families: Array<NullishNameIdKey>;
}

/**
 * The response for creature family media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureFamilyMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a creature family.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureFamilyResponse extends NameId, ResponseBase {
  media?: IdKey;
  specialization?: NameIdKey;
}

/**
 * The response for a creature.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureResponse extends NameId, ResponseBase {
  creature_displays: Array<IdKey>;
  family: NameIdKey;
  is_tameable: boolean;
  type: NameIdKey;
}

/**
 * The search parameters for a creature.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface CreatureSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

/**
 * The response for a creature search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface CreatureSearchResponse extends SearchResponseWithoutResults {
  results: Array<CreatureSearchResponseItem>;
}
/**
 * The response for a creature type index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureTypeIndexResponse extends ResponseBase {
  creature_types: Array<NullishNameIdKey>;
}

/**
 * The response for a creature type.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureTypeResponse extends NameId, ResponseBase {}

interface CreatureSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    family?: { id: number; name: Record<Locales, string> };
    id: number;
    is_tameable: boolean;
    name: Record<Locales, string | undefined>;
    type: { id: number; name: Record<Locales, string> };
  };
}

interface DisplayMediaAsset {
  key: string;
  value: string;
}
