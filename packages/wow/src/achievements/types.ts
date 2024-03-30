import type { KeyBase, ResponseBase } from '../base';

interface AchievementItem extends KeyBase {
  name: string;
  id: number;
}

export interface AchievementCategoryResponse extends ResponseBase {
  id: number;
  name: string;
  achievements: Array<AchievementItem>;
  parent_category: AchievementItem;
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

export interface AchievementCategoryIndexResponse extends ResponseBase {
  categories: Array<AchievementItem>;
  root_categories: Array<AchievementItem>;
  guild_categories: Array<AchievementItem>;
}

export interface AchievementResponse extends ResponseBase {
  id: number;
  name: string;
  category: AchievementItem;
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

export interface AchievementIndexResponse extends ResponseBase {
  achievements: Array<AchievementItem>;
}

interface AchievementMediaItem {
  key: string;
  value: string;
  file_data_id: number;
}

export interface AchievementMediaResponse extends ResponseBase {
  id: number;
  assets: Array<AchievementMediaItem>;
}
