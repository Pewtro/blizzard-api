import type {
  Faction,
  Href,
  IdKey,
  KeyBase,
  NameId,
  NameIdKey,
  NonNeutralFactions,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for a PvP leaderboard index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpLeaderboardIndexResponse extends ResponseBase {
  leaderboards: Array<KeyBase & { id?: number; name: string }>;
  season: IdKey;
}

/**
 * The response for a PvP leaderboard.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpLeaderboardResponse extends ResponseBase {
  bracket: Bracket;
  entries: Array<Entry>;
  name: string;
  season: IdKey;
}

/**
 * The response for PvP rewards index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpRewardsIndexResponse extends ResponseBase {
  rewards: Array<Reward>;
  season: IdKey;
}

/**
 * The response for a PvP season index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpSeasonIndexResponse extends ResponseBase {
  current_season: IdKey;
  seasons: Array<IdKey>;
}

/**
 * The response for a PvP season.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpSeasonResponse extends ResponseBase {
  id: number;
  leaderboards: Href;
  rewards: Href;
  season_end_timestamp?: number;
  season_name?: null | string;
  season_start_timestamp: number;
}

interface Bracket {
  id: number;
  type: 'ARENA_3v3' | 'BATTLEGROUNDS' | 'BLITZ' | 'SHUFFLE';
}

interface Character extends NameId {
  realm: Realm;
}

interface Entry {
  character: Character;
  faction: { type: NonNeutralFactions };
  rank: number;
  rating: number;
  season_match_statistics: SeasonMatchStatistics;
  tier: IdKey;
}

interface Realm extends KeyBase {
  id: number;
  slug: string;
}

interface Reward {
  achievement: NameIdKey;
  bracket: Bracket;
  faction?: Faction;
  rating_cutoff: number;
  specialization?: NameIdKey;
}

interface SeasonMatchStatistics {
  lost: number;
  played: number;
  won: number;
}
