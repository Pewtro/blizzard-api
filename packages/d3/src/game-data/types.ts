import type { Href, ResponseBase } from '@blizzard-api/core';

export interface EraIndexResponse extends ResponseBase {
  current_era: number;
  era: Array<Href>;
  generated_by: string;
  last_update_time: string;
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

export interface EraResponse extends ResponseBase {
  era_id: number;
  era_start_date: number;
  generated_by: string;
  last_update_time: string;
  leaderboard: Array<EraLeaderboard>;
}

export interface SeasonIndexResponse extends ResponseBase {
  current_season: number;
  generated_by: string;
  last_update_time: string;
  season: Array<Href>;
  service_current_season: number;
  service_season_state: string;
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

export interface SeasonResponse extends ResponseBase {
  generated_by: string;
  last_update_time: string;
  leaderboard: Array<Leaderboard>;
  season_id: number;
}

interface Column {
  hidden: boolean;
  id: LeaderboardId;
  label: null | string;
  order?: number;
  type: 'DATETIME' | 'NUMBER' | 'STRING';
}

interface EraLeaderboard {
  hardcore?: boolean;
  hero_class_string?: string;
  ladder: Self;
  team_size: number;
}

interface Leaderboard {
  hardcore?: boolean;
  hero_class_string?: string;
  ladder: Href;
  team_size?: number;
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

interface Player {
  accountId: number;
  data: Array<RowData>;
  key: string;
}

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

interface Self {
  href: string;
}
