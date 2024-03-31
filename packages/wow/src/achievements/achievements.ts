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
  achievementCategory: (achievementCategoryId: number): Resource<AchievementCategoryResponse> => {
    return {
      path: `${achievementCategoryBase}/${achievementCategoryId}`,
      namespace: 'static',
    };
  },
  achievementCategoryIndex: (): Resource<AchievementCategoryIndexResponse> => {
    return {
      path: `${achievementCategoryBase}/index`,
      namespace: 'static',
    };
  },
  achievement: (achievementId: number): Resource<AchievementResponse> => {
    return {
      path: `${achievementBase}/${achievementId}`,
      namespace: 'static',
    };
  },
  achievementIndex: (): Resource<AchievementIndexResponse> => {
    return {
      path: `${achievementBase}/index`,
      namespace: 'static',
    };
  },
  achievementMedia: (achievementId: number): Resource<AchievementMediaResponse> => {
    return { path: `${mediaBase}/achievement/${achievementId}`, namespace: 'static' };
  },
};
