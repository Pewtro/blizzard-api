import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * Interface for a response from the achievement category endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementCategoryResponse extends ResponseBase, NameId {
  achievements: Array<NameIdKey>;
  parent_category: NameIdKey;
  isGuildCategory: boolean;
  aggregates_by_faction: {
    alliance: {
      quantity: number;
      points: number;
    };
    horde: {
      quantity: number;
      points: number;
    };
  };
  display_order: number;
}

/**
 * Interface for a response from the achievement category index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
  root_categories: Array<NameIdKey>;
  guild_categories: Array<NameIdKey>;
}

/**
 * Interface for a response from the achievement endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementResponse extends ResponseBase, NameId {
  category: NameIdKey;
  description: string;
  points: number;
  is_account_wide: boolean;
  criteria: {
    id: number;
    description: string;
    amount: number;
  };
  media: KeyBase;
  display_order: number;
}

/**
 * Interface for a response from the achievement index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementIndexResponse extends ResponseBase {
  achievements: Array<NameIdKey>;
}

interface AchievementMediaItem {
  key: string;
  value: string;
  file_data_id: number;
}

/**
 * Interface for a response from the achievement media endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface AchievementMediaResponse extends ResponseBase {
  id: number;
  assets: Array<AchievementMediaItem>;
}
