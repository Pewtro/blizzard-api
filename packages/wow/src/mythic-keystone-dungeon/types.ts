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
export interface MythicKeystoneDungeonResponse extends ResponseBase, NameId {
  map: NameId;
  zone: Zone;
  dungeon: NameIdKey;
  keystone_upgrades: Array<KeystoneUpgrade>;
  is_tracked: boolean;
}

interface KeystoneUpgrade {
  upgrade_level: number;
  qualifying_duration: number;
}

interface Zone {
  slug: string;
}

/**
 * The response for a Mythic Keystone index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneIndexResponse extends ResponseBase {
  seasons: { href: string };
  dungeons: { href: string };
}

/**
 * The response for a Mythic Keystone period index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystonePeriodIndexResponse extends ResponseBase {
  periods: Array<Period>;
  current_period: Period;
}

interface Period extends KeyBase {
  id: number;
}

/**
 * The response for a Mythic Keystone period.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystonePeriodResponse extends ResponseBase {
  id: number;
  start_timestamp: number;
  end_timestamp: number;
}

/**
 * The response for a Mythic Keystone season index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneSeasonIndexResponse extends ResponseBase {
  seasons: Array<Period>;
  current_season: Period;
}

/**
 * The response for a Mythic Keystone season.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface MythicKeystoneSeasonResponse extends ResponseBase {
  id: number;
  start_timestamp: number;
  end_timestamp: number;
  periods: Array<Period>;
  season_name: string | null;
}
