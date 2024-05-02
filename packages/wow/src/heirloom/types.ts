import type { Color, KeyBase, NameIdKey, ResponseBase } from '../base';

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
  source: Source;
  source_description: string;
  upgrades: Array<Upgrade>;
  media: Media;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  type: string;
  name: string;
}

interface Upgrade {
  item: UpgradeItem;
  level: number;
}

interface UpgradeItem {
  item: Media;
  context: number;
  bonus_list: Array<number>;
  quality: Source;
  name: string;
  media: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  inventory_type: Source;
  binding: Source;
  weapon: Weapon;
  stats: Array<Stat>;
  upgrades: Upgrades;
  requirements: Requirements;
  level: AttackSpeedClass;
}

interface AttackSpeedClass {
  value: number;
  display_string: string;
}

interface Requirements {
  level: RequirementsLevel;
}

interface RequirementsLevel {
  display_string: string;
}

interface Stat {
  type: Source;
  value: number;
  display: Display;
  is_equip_bonus?: boolean;
}

interface Display {
  display_string: string;
  color: Color;
}

interface Upgrades {
  value: number;
  max_value: number;
  display_string: string;
}

interface Weapon {
  damage: Damage;
  attack_speed: AttackSpeedClass;
  dps: AttackSpeedClass;
}

interface Damage {
  min_value: number;
  max_value: number;
  display_string: string;
  damage_class: Source;
}
