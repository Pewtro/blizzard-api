import type { Href, KeyBase, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a PvP season index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpSeasonIndexResponse extends ResponseBase {
  current_season: Season;
  seasons: Array<Season>;
}

/**
 * The response for a PvP season.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpSeasonResponse extends ResponseBase {
  id: number;
  leaderboards: Href;
  rewards: Href;
  season_name?: string;
  season_start_timestamp: number;
}

interface Season extends KeyBase {
  id: number;
}
