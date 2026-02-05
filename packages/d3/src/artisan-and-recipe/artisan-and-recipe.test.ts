import { d3BasePath } from '@blizzard-api/core';
import { describe, it } from 'vitest';
import { artisan, recipe } from './artisan-and-recipe';

describe.concurrent('artisan and recipe', () => {
  it('should return the correct resource path', ({ expect }) => {
    const artisanSlug = 'blacksmith';
    const expectedPath = `${d3BasePath}/artisan/blacksmith`;

    const resource = artisan(artisanSlug);

    expect(resource.path).toBe(expectedPath);
  });
  it('should return the correct resource path', ({ expect }) => {
    const artisanSlug = 'blacksmith';
    const recipeSlug = 'sword';

    const expectedPath = `${d3BasePath}/artisan/blacksmith/recipe/sword`;

    const resource = recipe(artisanSlug, recipeSlug);

    expect(resource.path).toBe(expectedPath);
  });
});
