import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { KeyBase, MediaAsset, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a creature.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureResponse extends ResponseBase {
  id: number;
  name: string;
  type: NameIdKey;
  family: NameIdKey;
  creature_displays: Array<CreatureDisplay>;
  is_tameable: boolean;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

/**
 * The response for creature display media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureDisplayMediaResponse extends ResponseBase {
  assets: Array<DisplayMediaAsset>;
  id: number;
}

interface DisplayMediaAsset {
  key: string;
  value: string;
}

/**
 * The response for a creature family index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureFamilyIndexResponse extends ResponseBase {
  creature_families: Array<NameIdKey>;
}

/**
 * The response for a creature family.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CreatureFamilyResponse extends ResponseBase {
  id: number;
  name: string;
  specialization: NameIdKey;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
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

/**
 * The search parameters for a creature.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface CreatureSearchParameters extends BaseSearchParameters {
  name: string;
  locale: Locales;
}

/**
 * The response for a creature search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface CreatureSearchResponseItem extends KeyBase {
  data: {
    creature_displays: Array<{ id: number }>;
    is_tameable: boolean;
    name: Record<Locales, string | undefined>;
    id: number;
    type: { id: number; name: Record<Locales, string | undefined> };
    family?: { id: number; name: Record<Locales, string | undefined> };
  };
}
