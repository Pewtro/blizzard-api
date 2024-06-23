import type { ResponseBase } from '../base';

export interface SeasonIndexResponse extends ResponseBase {
  current_season: number;
  generated_by: string;
  last_update_time: string;
  season: Array<{ href: string }>;
  service_current_season: number;
  service_season_state: string;
}

export interface SeasonResponse extends ResponseBase {
  generated_by: string;
  last_update_time: string;
  leaderboard: Array<Leaderboard>;
  season_id: number;
}

interface Leaderboard {
  hardcore?: boolean;
  hero_class_string?: string;
  ladder: { href: string };
  team_size?: number;
}

export interface SeasonLeaderboardResponse extends ResponseBase {
  achievement_points: boolean;
  column: Array<Column>;
  generated_by: string;
  key: string;
  last_update_time: string;
  row: Array<Row>;
  season: number;
  title: string;
}

interface Column {
  hidden: boolean;
  id: LeaderboardId;
  label: null | string;
  order?: number;
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
  data: Array<RowData>;
  order: number;
  player: Array<Player>;
}

interface RowData {
  id: LeaderboardId;
  number?: number;
  string?: string;
  timestamp?: number;
}

interface Player {
  accountId: number;
  data: Array<RowData>;
  key: string;
}

export interface EraIndexResponse extends ResponseBase {
  current_era: number;
  era: Array<{ href: string }>;
  generated_by: string;
  last_update_time: string;
}

export interface EraResponse extends ResponseBase {
  era_id: number;
  era_start_date: number;
  generated_by: string;
  last_update_time: string;
  leaderboard: Array<EraLeaderboard>;
}

interface Self {
  href: string;
}

interface EraLeaderboard {
  hardcore?: boolean;
  hero_class_string?: string;
  ladder: Self;
  team_size: number;
}

export interface EraLeaderboardResponse extends ResponseBase {
  column: Array<Column>;
  era: number;
  generated_by: string;
  greater_rift: boolean;
  greater_rift_solo_class: string;
  key: string;
  last_update_time: string;
  row: Array<Row>;
  title: string;
}
