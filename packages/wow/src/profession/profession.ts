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

/**
 * Get a profession by ID.
 * @param professionId The profession ID.
 * @returns The profession. See {@link ProfessionResponse}.
 */
export function profession(professionId: number): Resource<ProfessionResponse> {
  return {
    path: `${base}/profession/${professionId}`,
    namespace: 'static',
  };
}
/**
 * Get a profession index.
 * @returns The profession index. See {@link ProfessionIndexResponse}.
 */
export function professionIndex(): Resource<ProfessionIndexResponse> {
  return {
    path: `${base}/profession/index`,
    namespace: 'static',
  };
}
/**
 * Get profession media by ID.
 * @param professionId The profession ID.
 * @returns The profession media. See {@link ProfessionMediaResponse}.
 */
export function professionMedia(professionId: number): Resource<ProfessionMediaResponse> {
  return {
    path: `${mediaBase}/profession/${professionId}`,
    namespace: 'static',
  };
}
/**
 * Get a profession's skill tier by ID.
 * @param professionId The profession ID.
 * @param skillTierId The skill tier ID.
 * @returns The profession's skill tier. See {@link ProfessionSkillTierResponse}.
 */
export function professionSkillTier(professionId: number, skillTierId: number): Resource<ProfessionSkillTierResponse> {
  return {
    path: `${base}/profession/${professionId}/skill-tier/${skillTierId}`,
    namespace: 'static',
  };
}
/**
 * Get a recipe by ID.
 * @param recipeId The recipe ID.
 * @returns The recipe. See {@link RecipeResponse}.
 */
export function recipe(recipeId: number): Resource<RecipeResponse> {
  return {
    path: `${base}/recipe/${recipeId}`,
    namespace: 'static',
  };
}
/**
 * Get recipe media by ID.
 * @param recipeId The recipe ID.
 * @returns The recipe media. See {@link RecipeMediaResponse}.
 */
export function recipeMedia(recipeId: number): Resource<RecipeMediaResponse> {
  return {
    path: `${mediaBase}/recipe/${recipeId}`,
    namespace: 'static',
  };
}
