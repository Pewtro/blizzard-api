import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  ProfessionIndexResponse,
  ProfessionMediaResponse,
  ProfessionResponse,
  ProfessionSkillTierResponse,
  RecipeMediaResponse,
  RecipeResponse,
} from './types';

export const professionApi = {
  profession: (professionId: number): Resource<ProfessionResponse> => {
    return {
      path: `${base}/profession/${professionId}`,
      namespace: 'static',
    };
  },
  professionIndex: (): Resource<ProfessionIndexResponse> => {
    return {
      path: `${base}/profession/index`,
      namespace: 'static',
    };
  },
  professionMedia: (professionId: number): Resource<ProfessionMediaResponse> => {
    return {
      path: `${mediaBase}/profession/${professionId}`,
      namespace: 'static',
    };
  },
  professionSkillTier: (professionId: number, skillTierId: number): Resource<ProfessionSkillTierResponse> => {
    return {
      path: `${base}/profession/${professionId}/skill-tier/${skillTierId}`,
      namespace: 'static',
    };
  },
  recipe: (recipeId: number): Resource<RecipeResponse> => {
    return {
      path: `${base}/recipe/${recipeId}`,
      namespace: 'static',
    };
  },
  recipeMedia: (recipeId: number): Resource<RecipeMediaResponse> => {
    return {
      path: `${mediaBase}/recipe/${recipeId}`,
      namespace: 'static',
    };
  },
};
