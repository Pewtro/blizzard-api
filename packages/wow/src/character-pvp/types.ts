import type { NameId, NameIdKey, ResponseBase } from '../base';

export interface CharacterPvpSummaryResponse extends ResponseBase {
  character: Character;
  honor_level: number;
  honorable_kills: number;
  pvp_map_statistics: Array<PvpMapStatistic>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}

interface PvpMapStatistic {
  match_statistics: MatchStatistics;
  world_map: NameId;
}

interface MatchStatistics {
  lost: number;
  played: number;
  won: number;
}
