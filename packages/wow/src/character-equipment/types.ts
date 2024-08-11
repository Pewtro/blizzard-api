import type { Character, Color, KeyBase, NameIdKey, ResponseBase } from '../base';

export interface CharacterEquipmentSummaryResponse extends ResponseBase {
  character: Character;
  equipped_item_sets: Array<Set>;
  equipped_items: Array<EquippedItem>;
}

interface Set {
  display_string: string;
  effects: Array<Effect>;
  item_set: NameIdKey;
  items: Array<ItemElement>;
}

interface Effect {
  display_string: string;
  is_active: boolean;
  required_count: number;
}

interface ItemElement extends NameIdKey {
  is_equipped?: boolean;
}

interface EquippedItem {
  armor?: Armor;
  binding: NameType;
  bonus_list?: Array<number>;
  context: number;
  description?: string;
  durability?: DisplayStringValue;
  enchantments?: Array<Enchantment>;
  inventory_type: NameType;
  is_subclass_hidden?: boolean;
  item: { id: number } & KeyBase;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  level: DisplayStringValue;
  limit_category?: string;
  media: { id: number } & KeyBase;
  modified_appearance_id?: number;
  modified_crafting_stat?: Array<ModifiedCraftingStat>;
  name: string;
  name_description: NameDescription;
  quality: NameType;
  quantity: number;
  requirements?: Requirements;
  sell_price?: SellPrice;
  set?: Set;
  slot: NameType;
  sockets?: Array<Socket>;
  spells?: Array<Spell>;
  stats?: Array<Stat>;
  transmog?: Transmog;
  unique_equipped?: string;
  weapon?: Weapon;
}

interface Armor {
  display: NameDescription;
  value: number;
}

interface NameDescription {
  color: Color;
  display_string: string;
}

interface NameType {
  name: string;
  type: string;
}

interface DisplayStringValue {
  display_string: string;
  value: number;
}

interface Enchantment {
  display_string: string;
  enchantment_id: number;
  enchantment_slot: EnchantmentSlot;
  source_item?: NameIdKey;
}

interface EnchantmentSlot {
  id: number;
  type: string;
}

interface ModifiedCraftingStat {
  id: number;
  name: string;
  type: string;
}

interface Requirements {
  level: DisplayStringValue;
  playable_classes?: PlayableClasses;
}

interface PlayableClasses {
  display_string: string;
  links: Array<NameIdKey>;
}

interface SellPrice {
  display_strings: DisplayStrings;
  value: number;
}

interface DisplayStrings {
  copper: string;
  gold: string;
  header: string;
  silver: string;
}

interface Socket {
  display_string: string;
  item: NameIdKey;
  media: { id: number } & KeyBase;
  socket_type: NameType;
}

interface Spell {
  description: string;
  spell: NameIdKey;
}

interface Stat {
  display: NameDescription;
  is_equip_bonus?: boolean;
  is_negated?: boolean;
  type: NameType;
  value: number;
}

interface Transmog {
  display_string: string;
  item: NameIdKey;
  item_modified_appearance_id: number;
}

interface Weapon {
  attack_speed: DisplayStringValue;
  damage: Damage;
  dps: DisplayStringValue;
}

interface Damage {
  damage_class: NameType;
  display_string: string;
  max_value: number;
  min_value: number;
}
