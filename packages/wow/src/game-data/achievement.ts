import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from './base';

const achievementBase = `${base}/achievement`;
const achievementCategoryBase = `${base}/achievement-category`;

export const achievement = {
  achievementCategory: (achievementCategoryId?: number): Resource => {
    return {
      path: achievementCategoryId
        ? `${achievementCategoryBase}/${achievementCategoryId}`
        : `${achievementCategoryBase}/index`,
      namespace: 'static',
    };
  },
  achievement: (achievementId?: number): Resource => {
    return {
      path: achievementId ? `${achievementBase}/${achievementId}` : `${achievementBase}/index`,
      namespace: 'static',
    };
  },
  media: (achievementId: number): Resource => {
    return { path: `${mediaBase}/achievement/${achievementId}`, namespace: 'static' };
  },
};
