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
  achievementCategoryIndex: (): Resource => {
    return {
      path: `${achievementCategoryBase}/index`,
      namespace: 'static',
    };
  },
  achievement: (achievementId: number): Resource => {
    return {
      path: `${achievementBase}/${achievementId}`,
      namespace: 'static',
    };
  },
  achievementIndex: (): Resource => {
    return {
      path: `${achievementBase}/index`,
      namespace: 'static',
    };
  },
  media: (achievementId: number): Resource => {
    return { path: `${mediaBase}/achievement/${achievementId}`, namespace: 'static' };
  },
};
