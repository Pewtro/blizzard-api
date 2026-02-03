import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '@blizzard-api/core';

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
  criteria: {
    amount: number;
    description: string;
    id: number;
  };
  description: string;
  display_order: number;
  is_account_wide: boolean;
  media: KeyBase;
  points: number;
}
