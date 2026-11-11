import type { Color, IdKey, NameIdKey, NameType, ResponseBase } from '@blizzard-api/core';

/**
 * The response for the heirloom index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface HeirloomIndexResponse extends ResponseBase {
  heirlooms: Array<NameIdKey>;
}

/**
 * The response for a heirloom.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface HeirloomResponse extends ResponseBase {
  id: number;
  item: NameIdKey;
  media: IdKey;
  source: NameType;
  source_description: string;
  upgrades: Array<Upgrade>;
}

interface AttackSpeedClass {
  display_string: string;
  value: number;
}

interface Damage {
  damage_class: NameType;
  display_string: string;
  max_value: number;
  min_value: number;
}

interface Display {
  color: Color;
  display_string: string;
}

interface Requirements {
  level: RequirementsLevel;
}

interface RequirementsLevel {
  display_string: string;
}

interface Stat {
  display: Display;
  is_equip_bonus?: boolean;
  type: NameType;
  value: number;
}

interface Upgrade {
  item: UpgradeItem;
  level: number;
}

interface UpgradeItem {
  binding: NameType;
  bonus_list: Array<number>;
  context: number;
  inventory_type: NameType;
  item: IdKey;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  level: AttackSpeedClass;
  media: IdKey;
  name: string;
  quality: NameType;
  requirements: Requirements;
  stats: Array<Stat>;
  upgrades: Upgrades;
  weapon: Weapon;
}

interface Upgrades {
  display_string: string;
  max_value: number;
  value: number;
}

interface Weapon {
  attack_speed: AttackSpeedClass;
  damage: Damage;
  dps: AttackSpeedClass;
}
