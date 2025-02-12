import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ArtisanResponse, RecipeResponse } from './types';

/**
 * Returns the artisan information for the specified artisan slug.
 * @param artisanSlug The slug of the artisan.
 * @returns The artisan resource. See {@link ArtisanResponse}.
 */
export function artisan(artisanSlug: string): Resource<ArtisanResponse> {
  return {
    path: `${base}/artisan/${artisanSlug}`,
  };
}

/**
 * Returns the recipe information for the specified artisan and recipe slugs.
 * @param artisanSlug The slug of the artisan.
 * @param recipeSlug The slug of the recipe.
 * @returns The recipe resource. See {@link RecipeResponse}.
 */
export function recipe(artisanSlug: string, recipeSlug: string): Resource<RecipeResponse> {
  return {
    path: `${base}/artisan/${artisanSlug}/recipe/${recipeSlug}`,
  };
}
