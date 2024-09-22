import type { ResponseBase } from '../base';

export interface LeagueDataResponse extends ResponseBase {
  key: Key;
  tier: Array<Tier>;
}

interface Key {
  league_id: number;
  queue_id: number;
  season_id: number;
  team_type: number;
}

interface Tier {
  division: Array<Division>;
  id: number;
}

interface Division {
  id: number;
  ladder_id: number;
  member_count: number;
}

export type StarcraftLeagueQueue =
  | 'hots-1v1'
  | 'hots-2v2'
  | 'hots-3v3'
  | 'hots-4v4'
  | 'lotv-1v1'
  | 'lotv-2v2'
  | 'lotv-3v3'
  | 'lotv-4v4'
  | 'lotv-archon'
  | 'wol-1v1'
  | 'wol-2v2'
  | 'wol-3v3'
  | 'wol-4v4';

export type StarcraftLeagueTeamType = 'arranged' | 'random';

export type StarcraftLeagueId = 'bronze' | 'diamond' | 'gold' | 'grandmaster' | 'master' | 'platinum' | 'silver';
