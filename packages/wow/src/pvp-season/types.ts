import type { Faction, Factions, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a PvP leaderboard.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpLeaderboardResponse extends ResponseBase {
  season: Season;
  name: string;
  bracket: Bracket;
  entries: Array<Entry>;
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
  played: number;
  won: number;
  lost: number;
}

/**
 * The response for a PvP leaderboard index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpLeaderboardIndexResponse extends ResponseBase {
  season: Season;
  leaderboards: Array<NameIdKey>;
}

/**
 * The response for PvP rewards index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PvpRewardsIndexResponse extends ResponseBase {
  season: Season;
  rewards: Array<Reward>;
}

interface Reward {
  bracket: Bracket;
  achievement: NameIdKey;
  rating_cutoff: number;
  faction?: Faction;
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
  seasons: Array<Season>;
  current_season: Season;
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
  season_start_timestamp: number;
  season_name: string;
}
