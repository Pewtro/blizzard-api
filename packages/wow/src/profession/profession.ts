import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const professionApi = {
  profession: (professionId: number): Resource<void> => {
    return {
      path: `${base}/profession/${professionId}`,
      namespace: 'static',
    };
  },
  professionIndex: (): Resource<void> => {
    return {
      path: `${base}/profession/index`,
      namespace: 'static',
    };
  },
  professionMedia: (professionId: number): Resource<void> => {
    return {
      path: `${mediaBase}/profession/${professionId}`,
      namespace: 'static',
    };
  },
  professionSkillTier: (professionId: number, skillTierId: number): Resource<void> => {
    return {
      path: `${base}/profession/${professionId}/skill-tier/${skillTierId}`,
      namespace: 'static',
    };
  },
  recipe: (recipeId: number): Resource<void> => {
    return {
      path: `${base}/recipe/${recipeId}`,
      namespace: 'static',
    };
  },
  recipeMedia: (recipeId: number): Resource<void> => {
    return {
      path: `${mediaBase}/recipe/${recipeId}`,
      namespace: 'static',
    };
  },
};
