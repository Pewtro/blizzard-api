import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { Color, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

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
  description?: string;
  inventory_type: InventoryType;
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
export interface ItemSearchResponseItem extends KeyBase {
  data: {
    id: number;
    inventory_type: InventoryType;
    is_equippable: boolean;
    is_stackable: boolean;
    item_class: { id: number; name: Record<Locales, string | undefined> };
    item_subclass: { id: number; name: Record<Locales, string | undefined> };
    level: number;
    max_count: number;
    media: { id: number };
    name: Record<Locales, string | undefined>;
    purchase_price: number;
    purchase_quantity: number;
    quality: ItemQuality;
    required_level: number;
    sell_price: number;
  };
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
  hide_subclass_in_tooltips: boolean;
  subclass_id: number;
  verbose_name: string;
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

interface InventoryType {
  name: Record<Locales, string | undefined>;
  type: //Armor
  | 'BACK'
    | 'BAG'
    | 'CHEST'
    | 'FEET'
    | 'FINGER'
    | 'HANDS'
    | 'HEAD'
    | 'LEGS'
    | 'NECK'
    | 'NON_EQUIP'
    | 'SHIRT'
    | 'SHOULDER'
    | 'TABARD'
    | 'TRINKET'
    //Weapons
    | 'TWOHWEAPON'
    //Misc
    | 'WAIST'
    | 'WRIST';
}

interface ItemQuality {
  name: Record<Locales, string | undefined>;
  type: 'ARTIFACT' | 'COMMON' | 'EPIC' | 'HEIRLOOM' | 'LEGENDARY' | 'POOR' | 'RARE' | 'UNCOMMON';
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
  inventory_type: InventoryType;
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
  inventory_type: InventoryType;
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
    name: StatType;
    type: StatTypeCapitalized;
  };
  value: number;
}

type StatType =
  | 'Agility'
  | 'Critical Strike'
  | 'Haste'
  | 'Intellect'
  | 'Mastery'
  | 'Stamina'
  | 'Strength'
  | 'Versatility';

type StatTypeCapitalized =
  | 'AGILITY'
  | 'CRIT_RATING'
  | 'HASTE_RATING'
  | 'INTELLECT'
  | 'MASTERY'
  | 'STAMINA'
  | 'STRENGTH'
  | 'VERSATILITY';

interface Weapon {
  attack_speed: Durability;
  damage: Damage;
  dps: Durability;
}
