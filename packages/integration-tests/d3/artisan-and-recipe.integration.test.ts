import { d3 } from '@blizzard-api/d3';
import type { Artisans } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { artisanResponseSchema, recipeResponseSchema } from '../../../generated/schemas/d3';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('d3 artisan-and-recipe integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches an artisan and recipes', async ({ expect }) => {
    const artisans: Array<Artisans> = ['blacksmith', 'jeweler', 'mystic'];
    const artisanPromises = artisans.map(async (artisan) => client.sendRequest(d3.artisan(artisan)));
    const artisanResponses = await Promise.all(artisanPromises);

    for (const artisanResponse of artisanResponses) {
      const parsedResponse = artisanResponseSchema.safeParse(artisanResponse);
      if (!parsedResponse.success) {
        console.error(
          'Artisan response validation failed:',
          artisanResponse?.slug,
          prettifyError(parsedResponse.error),
        );
      }
      expect(parsedResponse.success).toBe(true);

      // Artisans can teach a large number of recipes. Fetching every recipe adds a lot of
      // requests to the run, so pick a small random sample instead.
      const recipes = artisanResponse!.training.tiers.flatMap((tier) => tier.taughtRecipes);
      const sampledRecipes = getRandomSample(recipes, 5);

      const recipePromises = sampledRecipes.map(async (recipe) =>
        client.sendRequest(d3.recipe(artisanResponse!.slug, recipe.slug)),
      );
      const recipeResponses = await Promise.all(recipePromises);
      for (const recipeResponse of recipeResponses) {
        const parsedRecipeResponse = recipeResponseSchema.safeParse(recipeResponse);
        if (!parsedRecipeResponse.success) {
          console.error(
            'Recipe response validation failed:',
            recipeResponse?.slug,
            prettifyError(parsedRecipeResponse.error),
          );
        }
        expect(parsedRecipeResponse.success).toBe(true);
      }
    }
  });
});
