import type { Resource } from '@blizzard-api/core';
import { base } from '../base';
import type { ArtisanResponse, RecipeResponse } from './types';

export function artisan(artisanSlug: string): Resource<ArtisanResponse> {
  return {
    path: `${base}/artisan/${artisanSlug}`,
  };
}

export function recipe(artisanSlug: string, recipeSlug: string): Resource<RecipeResponse> {
  return {
    path: `${base}/artisan/${artisanSlug}/recipe/${recipeSlug}`,
  };
}
