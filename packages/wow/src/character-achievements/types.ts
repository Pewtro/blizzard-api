import type { Character, Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterAchievementCriteria {
  amount?: number;
  child_criteria?: Array<CharacterAchievementCriteria>;
  id: number;
  is_completed: boolean;
}

export interface CharacterAchievementsSummaryResponse extends ResponseBase {
  achievements: Array<Achievement>;
  category_progress: Array<CategoryProgress>;
  character: Character;
  recent_events: Array<RecentEvent>;
  statistics: Href;
  total_points: number;
  total_quantity: number;
}

export interface CharacterAchievementStatisticsResponse extends ResponseBase {
  categories: Array<Category>;
  character: Character;
}

interface Achievement {
  achievement: NameIdKey;
  completed_timestamp?: number;
  criteria?: CharacterAchievementCriteria;
  id: number;
}

interface Category {
  id?: number;
  name: string;
  statistics?: Array<Statistic>;
  sub_categories?: Array<SubCategory>;
}

interface CategoryProgress {
  category: NameIdKey;
  points: number;
  quantity: number;
}

interface RecentEvent {
  achievement: NameIdKey;
  timestamp: number;
}

interface Statistic {
  description?: null | string;
  id: number;
  last_updated_timestamp: number;
  name: string;
  quantity: number;
}

interface SubCategory {
  id: number;
  name: string;
  statistics: Array<Statistic>;
}
