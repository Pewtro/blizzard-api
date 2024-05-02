import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { Color, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

interface ItemQuality {
  name: Record<Locales, string | undefined>;
  type: 'POOR' | 'COMMON' | 'UNCOMMON' | 'RARE' | 'EPIC' | 'LEGENDARY' | 'ARTIFACT' | 'HEIRLOOM';
}

interface InventoryType {
  name: Record<Locales, string | undefined>;
  type: //Armor
  | 'HEAD'
    | 'SHOULDER'
    | 'CHEST'
    | 'WRIST'
    | 'HANDS'
    | 'WAIST'
    | 'LEGS'
    | 'FEET'
    | 'NECK'
    | 'BACK'
    | 'FINGER'
    | 'TRINKET'
    | 'TABARD'
    | 'SHIRT'
    //Weapons
    | 'TWOHWEAPON'
    //Misc
    | 'BAG'
    | 'NON_EQUIP';
}

type StatTypeCapitalized =
  | 'STRENGTH'
  | 'AGILITY'
  | 'INTELLECT'
  | 'STAMINA'
  | 'CRIT_RATING'
  | 'HASTE_RATING'
  | 'MASTERY'
  | 'VERSATILITY';

type StatType =
  | 'Strength'
  | 'Agility'
  | 'Intellect'
  | 'Stamina'
  | 'Critical Strike'
  | 'Haste'
  | 'Mastery'
  | 'Versatility';

/**
 * The response for an item.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemResponse extends ResponseBase, NameId {
  quality: ItemQuality;
  level: number;
  required_level: number;
  media: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  inventory_type: InventoryType;
  purchase_price: number;
  sell_price: number;
  max_count: number;
  is_equippable: boolean;
  is_stackable: boolean;
  preview_item: PreviewItem;
  purchase_quantity: number;
  description?: string;
}

interface Media extends KeyBase {
  id: number;
}

interface PreviewItem {
  item: Media;
  quality: ItemQuality;
  name: string;
  media: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  inventory_type: InventoryType;
  binding?: {
    type: string;
    name: string;
  };
  armor?: Armor;
  sell_price?: number;
  requirements?: Requirements;
  level?: Durability;
  is_subclass_hidden?: boolean;
  spells?: Array<Spell>;
  context?: number;
  bonus_list?: Array<number>;
  weapon?: Weapon;
  durability?: Durability;
  stats?: Array<Stat>;
  description?: string;
  recipe?: Recipe;
  shield_block?: Armor;
  unique_equipped?: 'Unique';
  crafting_reagent?: string;
  container_slots?: Durability;
}

interface Armor {
  value: number;
  display: Display;
}

interface Durability {
  value: number;
  display_string: string;
}

interface Requirements {
  level: Durability;
}

interface Spell {
  spell: NameIdKey;
  description: string;
}

interface Stat {
  type: {
    type: StatTypeCapitalized;
    name: StatType;
  };
  value: number;
  is_negated?: boolean;
  display: Display;
}

interface Display {
  display_string: string;
  color: Color;
}

interface Weapon {
  damage: Damage;
  attack_speed: Durability;
  dps: Durability;
}

interface Damage {
  min_value: number;
  max_value: number;
  display_string: string;
  damage_class: {
    type: string;
    name: string;
  };
}

interface Recipe {
  item: RecipeItem;
  reagents: Array<{ quantity: number } & NameIdKey>;
  reagents_display_string: string;
}

interface RecipeItem {
  item: Media;
  quality: ItemQuality;
  name: string;
  media: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  inventory_type: InventoryType;
  binding: {
    type: string;
    name: string;
  };
  weapon?: Weapon;
  stats: Array<Stat>;
  sell_price: { value: number; display_strings: RecipeItemDisplayStrings };
  requirements: Requirements;
  level: Durability;
  durability: Durability;
  armor?: Armor;
}

interface RecipeItemDisplayStrings {
  header: string;
  gold: string;
  silver: string;
  copper: string;
}

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
  name: string;
  item_subclasses: Array<NameIdKey>;
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
 * The response for an item subclass.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ItemSubClassResponse extends ResponseBase {
  class_id: number;
  subclass_id: number;
  display_name: string;
  verbose_name: string;
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
  id: number;
  name: string;
  items: Array<NameIdKey>;
  effects: Array<Effect>;
}

interface Effect {
  display_string: string;
  required_count: number;
}

/**
 * The parameters for an item search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ItemSearchParameters extends BaseSearchParameters {
  name: string;
  locale: Locales;
}

/**
 * The response for an item search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface ItemSearchResponseItem extends KeyBase {
  data: {
    level: number;
    required_level: number;
    sell_price: number;
    item_subclass: { name: Record<Locales, string | undefined>; id: number };
    is_equippable: boolean;
    purchase_quantity: number;
    media: { id: number };
    item_class: { name: Record<Locales, string | undefined>; id: number };
    quality: ItemQuality;
    max_count: number;
    is_stackable: boolean;
    name: Record<Locales, string | undefined>;
    purchase_price: number;
    id: number;
    inventory_type: InventoryType;
  };
}
