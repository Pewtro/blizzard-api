import type {
  BaseSearchParameters,
  IdKey,
  KeyBase,
  Locales,
  NameIdKey,
  NullishNameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

/**
 * The equipment slot types an item appearance can belong to.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export type ItemAppearanceSlotType =
  | 'AMMO'
  | 'BAG'
  | 'BODY'
  | 'CHEST'
  | 'CLOAK'
  | 'FEET'
  | 'HAND'
  | 'HEAD'
  | 'HOLDABLE'
  | 'LEGS'
  | 'RANGED'
  | 'RANGEDRIGHT'
  | 'ROBE'
  | 'SHIELD'
  | 'SHOULDER'
  | 'TABARD'
  | 'THROWN'
  | 'TWOHWEAPON'
  | 'WAIST'
  | 'WEAPON'
  | 'WEAPONMAINHAND'
  | 'WEAPONOFFHAND'
  | 'WRIST';

/**
 * The response for an item appearance.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemAppearanceResponse extends ResponseBase {
  id: number;
  item_class?: NameIdKey;
  item_display_info_id: number;
  item_subclass?: NameIdKey;
  items?: Array<NullishNameIdKey>;
  media: IdKey;
  slot?: ItemAppearanceSlot;
}

/**
 * The search parameters for item appearances.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ItemAppearanceSearchParameters extends BaseSearchParameters {
  id?: number;
}

/**
 * The response for an item appearance search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ItemAppearanceSearchResponse extends SearchResponseWithoutResults {
  results: Array<ItemAppearanceSearchResponseItem>;
}

/**
 * The response for an item appearance set index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemAppearanceSetIndexResponse extends ResponseBase {
  appearance_sets: Array<NameIdKey>;
}

/**
 * The response for an item appearance set.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemAppearanceSetResponse extends ResponseBase {
  appearances: Array<IdKey>;
  id: number;
  set_name: string;
}

/**
 * The response for an item appearance slot index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemAppearanceSlotIndexResponse extends ResponseBase {
  slots: Array<KeyBase>;
}

/**
 * The response for an item appearance slot.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemAppearanceSlotResponse extends ResponseBase {
  appearances: Array<IdKey>;
}

interface ItemAppearanceSearchResponseItem extends KeyBase {
  data: {
    id: number;
    item_display_info_id: number;
    slot?: {
      name: Record<Locales, string | undefined>;
      type: ItemAppearanceSlotType;
    };
  };
}

interface ItemAppearanceSlot {
  name: string;
  type: ItemAppearanceSlotType;
}
