import type { ResponseBase } from '../base';

export interface SeasonIndexResponse extends ResponseBase {
  season: Array<{ href: string }>;
  current_season: number;
  service_current_season: number;
  service_season_state: string;
  last_update_time: string;
  generated_by: string;
}

export interface SeasonResponse extends ResponseBase {
  leaderboard: Array<Leaderboard>;
  season_id: number;
  last_update_time: string;
  generated_by: string;
}

interface Leaderboard {
  ladder: { href: string };
  team_size?: number;
  hardcore?: boolean;
  hero_class_string?: string;
}

export interface SeasonLeaderboardResponse extends ResponseBase {
  row: Array<Row>;
  key: string;
  title: string;
  column: Array<Column>;
  last_update_time: string;
  generated_by: string;
  achievement_points: boolean;
  season: number;
}

interface Column {
  id: LeaderboardId;
  hidden: boolean;
  order?: number;
  label: null | string;
  type: 'DATETIME' | 'NUMBER' | 'STRING';
}

type LeaderboardId =
  | 'AchievementPoints'
  | 'BattleTag'
  | 'ClanName'
  | 'CompletedTime'
  | 'GameAccount'
  | 'HeroBattleTag'
  | 'HeroClanTag'
  | 'HeroClass'
  | 'HeroGender'
  | 'HeroId'
  | 'HeroLevel'
  | 'HeroVisualItems'
  | 'ParagonLevel'
  | 'Rank'
  | 'RiftLevel'
  | 'RiftTime';

interface Row {
  player: Array<Player>;
  order: number;
  data: Array<RowData>;
}

interface RowData {
  id: LeaderboardId;
  number?: number;
  timestamp?: number;
  string?: string;
}

interface Player {
  key: string;
  accountId: number;
  data: Array<RowData>;
}

export interface EraIndexResponse extends ResponseBase {
  era: Array<{ href: string }>;
  current_era: number;
  last_update_time: string;
  generated_by: string;
}

export interface EraResponse extends ResponseBase {
  leaderboard: Array<EraLeaderboard>;
  era_id: number;
  era_start_date: number;
  last_update_time: string;
  generated_by: string;
}

interface Self {
  href: string;
}

interface EraLeaderboard {
  team_size: number;
  ladder: Self;
  hardcore?: boolean;
  hero_class_string?: string;
}

export interface EraLeaderboardResponse extends ResponseBase {
  row: Array<Row>;
  key: string;
  title: string;
  column: Array<Column>;
  last_update_time: string;
  generated_by: string;
  greater_rift: boolean;
  greater_rift_solo_class: string;
  era: number;
}
