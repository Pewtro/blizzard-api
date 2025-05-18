import type { Character, Faction, KeyBase, NameId, ResponseBase } from '../base';

export interface CharacterPvpBracketStatisticsResponse extends ResponseBase {
  bracket: Bracket;
  character: Character;
  faction: Faction;
  rating: number;
  season: KeyBase & { id: number };
  season_match_statistics: MatchStatistics;
  tier: KeyBase & { id: number };
  weekly_match_statistics: MatchStatistics;
}

export interface CharacterPvpSummaryResponse extends ResponseBase {
  character: Character;
  honor_level: number;
  honorable_kills: number;
  pvp_map_statistics: Array<PvpMapStatistic>;
}

interface Bracket {
  id: number;
  type: string;
}

interface MatchStatistics {
  lost: number;
  played: number;
  won: number;
}

interface PvpMapStatistic {
  match_statistics: MatchStatistics;
  world_map: NameId;
}
