import type { Color, KeyBase, MediaAsset, NameIdKey, ResponseBase } from '../base';

export interface ItemResponse extends ResponseBase {
  id: number;
  name: string;
  quality: InventoryType;
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
}

interface InventoryType {
  type: string;
  name: string;
}

interface Media extends KeyBase {
  id: number;
}

interface PreviewItem {
  item: Media;
  context: number;
  bonus_list: Array<number>;
  quality: InventoryType;
  name: string;
  media: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  inventory_type: InventoryType;
  binding: InventoryType;
  unique_equipped: string;
  weapon: Weapon;
  stats: Array<Stat>;
  spells: Array<Spell>;
  requirements: Requirements;
  level: Durability;
  durability: Durability;
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
  type: InventoryType;
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
  damage_class: InventoryType;
}

export interface ItemClassIndexResponse extends ResponseBase {
  item_classes: Array<NameIdKey>;
}

export interface ItemClassResponse extends ResponseBase {
  class_id: number;
  name: string;
  item_subclasses: Array<NameIdKey>;
}

export interface ItemMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

export interface ItemSubclassResponse extends ResponseBase {
  class_id: number;
  subclass_id: number;
  display_name: string;
  verbose_name: string;
}

export interface ItemSetIndexResponse extends ResponseBase {
  item_sets: Array<NameIdKey>;
}

export interface ItemSetResponse extends ResponseBase {
  id: number;
  name: string;
  items: Array<NameIdKey>;
  effects: Array<Effect>;
}

export interface Effect {
  display_string: string;
  required_count: number;
}
