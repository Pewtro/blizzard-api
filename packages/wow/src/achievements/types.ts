import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

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

export interface AchievementCategoryIndexResponse extends ResponseBase {
  categories: Array<NameIdKey>;
  root_categories: Array<NameIdKey>;
  guild_categories: Array<NameIdKey>;
}

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

export interface AchievementIndexResponse extends ResponseBase {
  achievements: Array<NameIdKey>;
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
