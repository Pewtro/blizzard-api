import type { Faction, Factions, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a PvP leaderboard.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpLeaderboardResponse extends ResponseBase {
  bracket: Bracket;
  entries: Array<Entry>;
  name: string;
  season: Season;
}

interface Entry {
  character: Character;
  faction: { type: keyof typeof Factions };
  rank: number;
  rating: number;
  season_match_statistics: SeasonMatchStatistics;
  tier: Season;
}

interface Character extends NameId {
  realm: Realm;
}

interface Realm extends KeyBase {
  id: number;
  slug: string;
}

interface SeasonMatchStatistics {
  lost: number;
  played: number;
  won: number;
}

/**
 * The response for a PvP leaderboard index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpLeaderboardIndexResponse extends ResponseBase {
  leaderboards: Array<NameIdKey>;
  season: Season;
}

/**
 * The response for PvP rewards index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpRewardsIndexResponse extends ResponseBase {
  rewards: Array<Reward>;
  season: Season;
}

interface Reward {
  achievement: NameIdKey;
  bracket: Bracket;
  faction?: Faction;
  rating_cutoff: number;
  specialization?: NameIdKey;
}

interface Bracket {
  id: number;
  type: 'ARENA_3v3' | 'BATTLEGROUNDS' | 'SHUFFLE';
}

/**
 * The response for a PvP season index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpSeasonIndexResponse extends ResponseBase {
  current_season: Season;
  seasons: Array<Season>;
}

interface Season extends KeyBase {
  id: number;
}

/**
 * The response for a PvP season.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpSeasonResponse extends ResponseBase {
  id: number;
  leaderboards: { href: string };
  rewards: { href: string };
  season_name?: string;
  season_start_timestamp: number;
}
