import type {
  BaseSearchParameters,
  Color,
  KeyBase,
  Locales,
  MediaAsset,
  NameId,
  NameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

/**
 * The response for an item class index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemClassIndexResponse extends ResponseBase {
  item_classes: Array<NameIdKey>;
}

/**
 * The response for an item class.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemClassResponse extends ResponseBase {
  class_id: number;
  item_subclasses: Array<NameIdKey>;
  name: string;
}

/**
 * The response for an item media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for an item.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemResponse extends NameId, ResponseBase {
  appearances?: Array<KeyBase & { id: number }>;
  description?: string;
  inventory_type: InventoryTypeName;
  is_equippable: boolean;
  is_stackable: boolean;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  level: number;
  max_count: number;
  media: Media;
  preview_item: PreviewItem;
  purchase_price: number;
  purchase_quantity: number;
  quality: ItemQuality;
  required_level: number;
  sell_price: number;
}

/**
 * The parameters for an item search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ItemSearchParameters extends BaseSearchParameters {
  locale: Locales;
  name: string;
}

/**
 * The response for an item search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ItemSearchResponse extends SearchResponseWithoutResults {
  results: Array<ItemSearchResponseItem>;
}

/**
 * The response for an item set index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemSetIndexResponse extends ResponseBase {
  item_sets: Array<NameIdKey>;
}

/**
 * The response for an item set.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemSetResponse extends ResponseBase {
  effects: Array<Effect>;
  id: number;
  items: Array<NameIdKey>;
  name: string;
}

/**
 * The response for an item subclass.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemSubClassResponse extends ResponseBase {
  class_id: number;
  display_name: string;
  hide_subclass_in_tooltips?: boolean;
  subclass_id: number;
  verbose_name?: string;
}

interface Armor {
  display: Display;
  value: number;
}

interface Damage {
  damage_class: {
    name: string;
    type: string;
  };
  display_string: string;
  max_value: number;
  min_value: number;
}

interface Display {
  color: Color;
  display_string: string;
}

interface Durability {
  display_string: string;
  value: number;
}

interface Effect {
  display_string: string;
  required_count: number;
}

type InventoryType =
  //Armor
  | 'BACK'
  | 'CHEST'
  | 'FEET'
  | 'FINGER'
  | 'HAND'
  | 'HANDS'
  | 'HEAD'
  | 'LEGS'
  | 'NECK'
  | 'SHOULDER'
  | 'THROWN'
  | 'TRINKET'
  | 'WAIST'
  | 'WRIST'
  //Weapons
  | 'RANGED'
  | 'TWOHWEAPON'
  | 'WEAPON'
  | 'WEAPONMAINHAND'
  | 'WEAPONOFFHAND'
  //Misc
  | 'BAG'
  | 'NON_EQUIP'
  | 'SHIRT'
  | 'TABARD';

interface InventoryTypeName {
  name: string;
  type: InventoryType;
}
interface InventoryTypeNameFromSearch {
  name: Record<Locales, string>;
  type: InventoryType;
}

interface ItemQuality {
  name: string;
  type: ItemQualityType;
}

interface ItemQualityFromSearch {
  name: Record<Locales, string>;
  type: ItemQualityType;
}

type ItemQualityType = 'ARTIFACT' | 'COMMON' | 'EPIC' | 'HEIRLOOM' | 'LEGENDARY' | 'POOR' | 'RARE' | 'UNCOMMON';

interface ItemSearchResponseItem extends KeyBase {
  data: {
    appearances?: Array<{ id: number }>;
    id: number;
    inventory_type: InventoryTypeNameFromSearch;
    is_equippable: boolean;
    is_stackable: boolean;
    item_class: { id: number; name: Record<Locales, string> };
    item_subclass: { id: number; name: Record<Locales, string> };
    level: number;
    max_count: number;
    media: { id: number };
    name: Record<Locales, string | undefined>;
    purchase_price: number;
    purchase_quantity: number;
    quality: ItemQualityFromSearch;
    required_level: number;
    sell_price: number;
  };
}

interface Media extends KeyBase {
  id: number;
}

interface PreviewItem {
  armor?: Armor;
  binding?: {
    name: string;
    type: string;
  };
  bonus_list?: Array<number>;
  container_slots?: Durability;
  context?: number;
  crafting_reagent?: string;
  description?: string;
  durability?: Durability;
  inventory_type: InventoryTypeName;
  is_subclass_hidden?: boolean;
  item: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  level?: Durability;
  media: Media;
  name: string;
  quality: ItemQuality;
  recipe?: Recipe;
  requirements?: Requirements;
  sell_price?: number;
  shield_block?: Armor;
  spells?: Array<Spell>;
  stats?: Array<Stat>;
  unique_equipped?: 'Unique';
  weapon?: Weapon;
}

interface Recipe {
  item: RecipeItem;
  reagents: Array<NameIdKey & { quantity: number }>;
  reagents_display_string: string;
}

interface RecipeItem {
  armor?: Armor;
  binding: {
    name: string;
    type: string;
  };
  durability: Durability;
  inventory_type: InventoryTypeName;
  item: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  level: Durability;
  media: Media;
  name: string;
  quality: ItemQuality;
  requirements: Requirements;
  sell_price: { display_strings: RecipeItemDisplayStrings; value: number };
  stats: Array<Stat>;
  weapon?: Weapon;
}

interface RecipeItemDisplayStrings {
  copper: string;
  gold: string;
  header: string;
  silver: string;
}

interface Requirements {
  level: Durability;
}

interface Spell {
  description: string;
  spell: NameIdKey;
}

interface Stat {
  display: Display;
  is_negated?: boolean;
  type: {
    name: string;
    type: StatTypeCapitalized;
  };
  value: number;
}

type StatTypeCapitalized =
  | 'AGILITY'
  | 'ARCANE_RESISTANCE'
  | 'CRIT_RATING'
  | 'FIRE_RESISTANCE'
  | 'FROST_RESISTANCE'
  | 'HASTE_RATING'
  | 'INTELLECT'
  | 'MASTERY'
  | 'NATURE_RESISTANCE'
  | 'SHADOW_RESISTANCE'
  | 'STAMINA'
  | 'STRENGTH'
  | 'VERSATILITY';

interface Weapon {
  attack_speed: Durability;
  damage: Damage;
  dps: Durability;
}
