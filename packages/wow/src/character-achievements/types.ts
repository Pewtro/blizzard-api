import type { Character, Href, NameIdKey, ResponseBase } from '../base';

export interface CharacterAchievementsSummaryResponse extends ResponseBase {
  achievements: Array<Achievement>;
  category_progress: Array<CategoryProgress>;
  character: Character;
  recent_events: Array<RecentEvent>;
  statistics: Href;
  total_points: number;
  total_quantity: number;
}

interface Achievement {
  achievement: NameIdKey;
  completed_timestamp?: number;
  criteria?: Criteria;
  id: number;
}

interface Criteria {
  amount?: number;
  child_criteria?: Array<Criteria>;
  id: number;
  is_completed: boolean;
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

export interface CharacterAchievementStatisticsResponse extends ResponseBase {
  categories: Array<Category>;
  character: Character;
}

interface Category {
  id: number;
  name: string;
  statistics: Array<Statistic>;
  sub_categories: Array<SubCategory>;
}

interface SubCategory {
  id: number;
  name: string;
  statistics: Array<Statistic>;
}

interface Statistic {
  description?: string;
  id: number;
  last_updated_timestamp: number;
  name: string;
  quantity: number;
}
