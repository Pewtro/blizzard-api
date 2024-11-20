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
  media: Media;
  source: Source;
  source_description: string;
  upgrades: Array<Upgrade>;
}

interface AttackSpeedClass {
  display_string: string;
  value: number;
}

interface Damage {
  damage_class: Source;
  display_string: string;
  max_value: number;
  min_value: number;
}

interface Display {
  color: Color;
  display_string: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Requirements {
  level: RequirementsLevel;
}

interface RequirementsLevel {
  display_string: string;
}

interface Source {
  name: string;
  type: string;
}

interface Stat {
  display: Display;
  is_equip_bonus?: boolean;
  type: Source;
  value: number;
}

interface Upgrade {
  item: UpgradeItem;
  level: number;
}

interface UpgradeItem {
  binding: Source;
  bonus_list: Array<number>;
  context: number;
  inventory_type: Source;
  item: Media;
  item_class: NameIdKey;
  item_subclass: NameIdKey;
  level: AttackSpeedClass;
  media: Media;
  name: string;
  quality: Source;
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
