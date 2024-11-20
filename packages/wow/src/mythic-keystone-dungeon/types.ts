import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a Mythic Keystone dungeon index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneDungeonIndexResponse extends ResponseBase {
  dungeons: Array<NameIdKey>;
}

/**
 * The response for a Mythic Keystone dungeon.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneDungeonResponse extends NameId, ResponseBase {
  dungeon: NameIdKey;
  is_tracked: boolean;
  keystone_upgrades: Array<KeystoneUpgrade>;
  map: NameId;
  zone: Zone;
}

/**
 * The response for a Mythic Keystone index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneIndexResponse extends ResponseBase {
  dungeons: { href: string };
  seasons: { href: string };
}

/**
 * The response for a Mythic Keystone period index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystonePeriodIndexResponse extends ResponseBase {
  current_period: Period;
  periods: Array<Period>;
}

/**
 * The response for a Mythic Keystone period.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystonePeriodResponse extends ResponseBase {
  end_timestamp: number;
  id: number;
  start_timestamp: number;
}

/**
 * The response for a Mythic Keystone season index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneSeasonIndexResponse extends ResponseBase {
  current_season: Period;
  seasons: Array<Period>;
}

/**
 * The response for a Mythic Keystone season.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneSeasonResponse extends ResponseBase {
  end_timestamp: number;
  id: number;
  periods: Array<Period>;
  season_name: null | string;
  start_timestamp: number;
}

interface KeystoneUpgrade {
  qualifying_duration: number;
  upgrade_level: number;
}

interface Period extends KeyBase {
  id: number;
}

interface Zone {
  slug: string;
}
