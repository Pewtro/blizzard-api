import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type { AchievementCategoryResponse } from './response';

const achievementBase = `${base}/achievement`;
const achievementCategoryBase = `${base}/achievement-category`;

export const achievements = {
  achievementCategory: (achievementCategoryId: number): Resource<AchievementCategoryResponse> => {
    return {
      path: `${achievementCategoryBase}/${achievementCategoryId}`,
      namespace: 'static',
    };
  },
  achievementCategoryIndex: (): Resource<void> => {
    return {
      path: `${achievementCategoryBase}/index`,
      namespace: 'static',
    };
  },
  achievement: (achievementId: number): Resource<void> => {
    return {
      path: `${achievementBase}/${achievementId}`,
      namespace: 'static',
    };
  },
  achievementIndex: (): Resource<void> => {
    return {
      path: `${achievementBase}/index`,
      namespace: 'static',
    };
  },
  media: (achievementId: number): Resource<void> => {
    return { path: `${mediaBase}/achievement/${achievementId}`, namespace: 'static' };
  },
};
