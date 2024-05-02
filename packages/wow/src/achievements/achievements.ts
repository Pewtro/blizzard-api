import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  AchievementCategoryIndexResponse,
  AchievementCategoryResponse,
  AchievementIndexResponse,
  AchievementMediaResponse,
  AchievementResponse,
} from './types';

const achievementBase = `${base}/achievement`;
const achievementCategoryBase = `${base}/achievement-category`;

export const achievementApi = {
  /**
   * Get an achievement category by ID.
   * @param achievementCategoryId The achievement category ID.
   * @returns The achievement category. See {@link AchievementCategoryResponse}.
   */
  achievementCategory: (achievementCategoryId: number): Resource<AchievementCategoryResponse> => {
    return {
      path: `${achievementCategoryBase}/${achievementCategoryId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an achievement category index.
   * @returns The achievement category index. See {@link AchievementCategoryIndexResponse}.
   */
  achievementCategoryIndex: (): Resource<AchievementCategoryIndexResponse> => {
    return {
      path: `${achievementCategoryBase}/index`,
      namespace: 'static',
    };
  },
  /**
   * Get an achievement by ID.
   * @param achievementId The achievement ID.
   * @returns The achievement. See {@link AchievementResponse}.
   */
  achievement: (achievementId: number): Resource<AchievementResponse> => {
    return {
      path: `${achievementBase}/${achievementId}`,
      namespace: 'static',
    };
  },
  /**
   * Get an achievement index.
   * @returns The achievement index. See {@link AchievementIndexResponse}.
   */
  achievementIndex: (): Resource<AchievementIndexResponse> => {
    return {
      path: `${achievementBase}/index`,
      namespace: 'static',
    };
  },
  /**
   * Get achievement media by ID.
   * @param achievementId The achievement ID.
   * @returns The achievement media. See {@link AchievementMediaResponse}.
   */
  achievementMedia: (achievementId: number): Resource<AchievementMediaResponse> => {
    return { path: `${mediaBase}/achievement/${achievementId}`, namespace: 'static' };
  },
};
