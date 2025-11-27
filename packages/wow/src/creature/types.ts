import type { BaseSearchParameters, KeyBase, Locales, MediaAsset, NameIdKey, ResponseBase  } from '@blizzard-api/core';


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
  creature_families: Array<NameIdKey>;
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
export interface CreatureFamilyResponse extends ResponseBase {
  id: number;
  media: Media;
  name: string;
  specialization: NameIdKey;
}

/**
 * The response for a creature.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureResponse extends ResponseBase {
  creature_displays: Array<CreatureDisplay>;
  family: NameIdKey;
  id: number;
  is_tameable: boolean;
  name: string;
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
export interface CreatureSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    family?: { id: number; name: Record<Locales, string | undefined> };
    id: number;
    is_tameable: boolean;
    name: Record<Locales, string | undefined>;
    type: { id: number; name: Record<Locales, string | undefined> };
  };
}

/**
 * The response for a creature type index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureTypeIndexResponse extends ResponseBase {
  creature_types: Array<NameIdKey>;
}

/**
 * The response for a creature type.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureTypeResponse extends ResponseBase {
  id: number;
  name: string;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

interface DisplayMediaAsset {
  key: string;
  value: string;
}

interface Media extends KeyBase {
  id: number;
}
