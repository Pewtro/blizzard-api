import type { Faction, Factions, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

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

export interface PvpLeaderboardIndexResponse extends ResponseBase {
  season: Season;
  leaderboards: Array<NameIdKey>;
}

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

export interface PvpSeasonIndexResponse extends ResponseBase {
  seasons: Array<Season>;
  current_season: Season;
}

interface Season extends KeyBase {
  id: number;
}

export interface PvpSeasonResponse extends ResponseBase {
  id: number;
  leaderboards: { href: string };
  rewards: { href: string };
  season_start_timestamp: number;
  season_name: string;
}
