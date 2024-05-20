import { describe, it } from 'vitest';
import { base } from '../base';
import { artisan, recipe } from './artisan-and-recipe';

describe.concurrent('artisan and recipe', () => {
  it('should return the correct resource path', ({ expect }) => {
    const artisanSlug = 'blacksmith';
    const expectedPath = `${base}/artisan/blacksmith`;

    const resource = artisan(artisanSlug);

    expect(resource.path).toBe(expectedPath);
  });
  it('should return the correct resource path', ({ expect }) => {
    const artisanSlug = 'blacksmith';
    const recipeSlug = 'sword';

    const expectedPath = `${base}/artisan/blacksmith/recipe/sword`;

    const resource = recipe(artisanSlug, recipeSlug);

    expect(resource.path).toBe(expectedPath);
  });
});
