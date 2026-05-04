import type { Resource } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
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
    namespace: 'static',
    path: `${wowBasePath}/profession/${professionId}`,
  };
}
/**
 * Get a profession index.
 * @returns The profession index. See {@link ProfessionIndexResponse}.
 */
export function professionIndex(): Resource<ProfessionIndexResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/profession/index`,
  };
}
/**
 * Get profession media by ID.
 * @param professionId The profession ID.
 * @returns The profession media. See {@link ProfessionMediaResponse}.
 */
export function professionMedia(professionId: number): Resource<ProfessionMediaResponse> {
  return {
    namespace: 'static',
    path: `${wowMediaBasePath}/profession/${professionId}`,
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
    namespace: 'static',
    path: `${wowBasePath}/profession/${professionId}/skill-tier/${skillTierId}`,
  };
}
/**
 * Get a recipe by ID.
 * @param recipeId The recipe ID.
 * @returns The recipe. See {@link RecipeResponse}.
 */
export function recipe(recipeId: number): Resource<RecipeResponse> {
  return {
    namespace: 'static',
    path: `${wowBasePath}/recipe/${recipeId}`,
  };
}
/**
 * Get recipe media by ID.
 * @param recipeId The recipe ID.
 * @returns The recipe media. See {@link RecipeMediaResponse}.
 */
export function recipeMedia(recipeId: number): Resource<RecipeMediaResponse> {
  return {
    namespace: 'static',
    path: `${wowMediaBasePath}/recipe/${recipeId}`,
  };
}
