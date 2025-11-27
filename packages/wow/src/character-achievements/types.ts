import type { Character, Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

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
  criteria?: Criteria;
  id: number;
}

interface Category {
  id: number;
  name: string;
  statistics: Array<Statistic>;
  sub_categories: Array<SubCategory>;
}

interface CategoryProgress {
  category: NameIdKey;
  points: number;
  quantity: number;
}

interface ChildCriterum {
  amount?: number;
  child_criteria?: Array<ChildCriterum2>;
  id: number;
  is_completed: boolean;
}

interface ChildCriterum2 {
  amount?: number;
  child_criteria?: Array<ChildCriterum3>;
  id: number;
  is_completed: boolean;
}

interface ChildCriterum3 {
  amount?: number;
  id: number;
  is_completed: boolean;
}

interface Criteria {
  amount?: number;
  child_criteria?: Array<ChildCriterum>;
  id: number;
  is_completed: boolean;
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
