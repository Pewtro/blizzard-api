import type { Character, Faction, Href, IdKey, NameId, ResponseBase } from '@blizzard-api/core';

export interface CharacterPvpBracketStatisticsResponse extends ResponseBase {
  bracket: Bracket;
  character: Character;
  faction: Faction;
  rating: number;
  season: IdKey;
  season_match_statistics: MatchStatistics;
  tier: IdKey;
  weekly_match_statistics: MatchStatistics;
}

export interface CharacterPvpSummaryResponse extends ResponseBase {
  brackets?: Array<Href>;
  character: Character;
  honor_level: number;
  honorable_kills: number;
  pvp_map_statistics?: Array<PvpMapStatistic>;
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
