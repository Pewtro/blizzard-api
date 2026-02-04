import type { Faction, KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * Interface for a response from the achievement category index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
  guild_categories: Array<NameIdKey>;
  root_categories: Array<NameIdKey>;
}

/**
 * Interface for a response from the achievement category endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementCategoryResponse extends NameId, ResponseBase {
  achievements: Array<NameIdKey>;
  aggregates_by_faction: {
    alliance: {
      points: number;
      quantity: number;
    };
    horde: {
      points: number;
      quantity: number;
    };
  };
  display_order: number;
  isGuildCategory: boolean;
  parent_category: NameIdKey;
}

/**
 * Interface for a response from the achievement index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementIndexResponse extends ResponseBase {
  achievements: Array<NameIdKey>;
}

/**
 * Interface for a response from the achievement media endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * Interface for a response from the achievement endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementResponse extends NameId, ResponseBase {
  category: NameIdKey;
  criteria?: Criteria;
  description: string;
  display_order: number;
  guild_reward_items?: Array<NameIdKey>;
  is_account_wide: boolean;
  media: KeyBase & { id: number };
  next_achievement?: NameIdKey;
  points: number;
  prerequisite_achievement?: NameIdKey;
  requirements?: { faction: Faction };
  reward_description?: string;
  reward_item?: NameIdKey;
}

interface ChildCriteria {
  achievement?: NameIdKey;
  amount: number;
  child_criteria?: Array<ChildCriteria2>;
  description: null | string;
  faction?: Faction;
  id: number;
  is_gold?: boolean;
  operator?: Operator;
  show_progress_bar?: boolean;
}

interface ChildCriteria2 {
  achievement?: NameIdKey;
  amount: number;
  child_criteria?: Array<ChildCriteria3>;
  description: null | string;
  faction?: Faction;
  id: number;
  is_gold?: boolean;
  operator?: Operator;
  show_progress_bar?: boolean;
}

interface ChildCriteria3 {
  achievement?: NameIdKey;
  amount: number;
  description: null | string;
  faction?: Faction;
  id: number;
  is_gold?: boolean;
  operator?: Operator;
  show_progress_bar?: boolean;
}

interface Criteria {
  amount: number;
  child_criteria?: Array<ChildCriteria>;
  description: null | string;
  faction?: Faction;
  id: number;
  operator?: Operator;
  show_progress_bar?: boolean;
}
interface Operator {
  name: string;
  type: 'AND' | 'COMPLETE_AT_LEAST';
}
