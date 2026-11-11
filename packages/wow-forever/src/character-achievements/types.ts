import type { Href, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * A criterion that contributes to an achievement.
 */
export interface CharacterAchievementCriteria {
  amount?: number;
  child_criteria?: Array<CharacterAchievementCriteria>;
  id: number;
  is_completed: boolean;
}

/**
 * The response for a character achievements summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterAchievementsSummaryResponse extends ResponseBase {
  achievements: Array<Achievement>;
  category_progress?: Array<CategoryProgress>;
  character: CharacterReference;
  recent_events?: Array<RecentEvent>;
  statistics: Href;
  total_points: number;
  total_quantity: number;
}

/**
 * The response for character achievement statistics.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterAchievementStatisticsResponse extends ResponseBase {
  categories: Array<Category>;
  character: CharacterReference;
}

interface Achievement {
  achievement: NameIdKey;
  completed_timestamp?: number;
  criteria?: CharacterAchievementCriteria;
  id: number;
}

interface Category {
  id?: number;
  name: null | string;
  statistics?: Array<Statistic>;
  sub_categories?: Array<SubCategory>;
}

interface CategoryProgress {
  category: NameIdKey;
  points: number;
  quantity: number;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}

interface RecentEvent {
  achievement: NameIdKey;
  timestamp: number;
}

interface Statistic {
  description?: null | string;
  id: number;
  last_updated_timestamp: number;
  name: null | string;
  quantity: number;
}

interface SubCategory {
  id: number;
  name: null | string;
  statistics: Array<Statistic>;
}
