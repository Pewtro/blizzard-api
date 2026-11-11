import type {
  Faction,
  IdKey,
  MediaAsset,
  NameIdKey,
  NameType,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for an achievement category index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementCategoryIndexResponse extends ResponseBase {
  categories: Array<NullishNameIdKey>;
  guild_categories?: Array<NameIdKey>;
  root_categories: Array<NullishNameIdKey>;
}

/**
 * The response for an achievement category.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementCategoryResponse extends NullishNameId, ResponseBase {
  achievements?: Array<NullishNameIdKey>;
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
  is_guild_category: boolean;
  parent_category?: NameIdKey;
  subcategories?: Array<NameIdKey>;
}

export interface AchievementCriteria {
  achievement?: NameIdKey;
  amount: number;
  child_criteria?: Array<AchievementCriteria>;
  description: null | string;
  faction?: Faction;
  id: number;
  is_gold?: boolean;
  operator?: Operator;
  show_progress_bar?: boolean;
}

/**
 * The response for an achievement index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementIndexResponse extends ResponseBase {
  achievements: Array<NullishNameIdKey>;
}

/**
 * The response for achievement media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for an achievement.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementResponse extends NullishNameId, ResponseBase {
  category: NullishNameIdKey;
  criteria?: AchievementCriteria;
  description: null | string;
  display_order: number;
  guild_reward_items?: Array<NameIdKey>;
  is_account_wide: boolean;
  media: IdKey;
  next_achievement?: NameIdKey;
  points: number;
  prerequisite_achievement?: NameIdKey;
  requirements?: { faction: Faction };
  reward_description?: string;
  reward_item?: NameIdKey;
}

interface Operator extends NameType {
  type: 'AND' | 'COMPLETE_AT_LEAST';
}
