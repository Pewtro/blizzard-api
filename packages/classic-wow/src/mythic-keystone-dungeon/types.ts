import type { KeyBase, ResponseBase } from '@blizzard-api/core';

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
  end_timestamp?: number;
  id: number;
  periods: Array<Period>;
  season_name: null | string;
  start_timestamp: number;
}

interface Period extends KeyBase {
  id: number;
}
