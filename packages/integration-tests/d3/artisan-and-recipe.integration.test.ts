import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import type { Artisans } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { artisanResponseSchema, recipeResponseSchema } from '../../../generated/schemas/d3';

describe('d3 artisan-and-recipe integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches an artisan and recipes', async ({ expect }) => {
    const artisans: Array<Artisans> = ['blacksmith', 'jeweler', 'mystic'];
    const artisanPromises = artisans.map(async (artisan) => await client.sendRequest(d3.artisan(artisan)));
    const artisanResponses = await Promise.all(artisanPromises);
    for (const artisanResponse of artisanResponses) {
      const parsedResponse = artisanResponseSchema.safeParse(artisanResponse);
      if (!parsedResponse.success) {
        console.error('Artisan response validation failed:', artisanResponse?.slug, parsedResponse.error);
      }
      expect(parsedResponse.success).toBe(true);

      const recipePromises = artisanResponse!.training.tiers.flatMap((tier) =>
        tier?.taughtRecipes.map(
          async (recipe) => await client.sendRequest(d3.recipe(artisanResponse!.slug, recipe.slug)),
        ),
      );
      const recipeResponses = await Promise.all(recipePromises);

      for (const recipeResponse of recipeResponses) {
        const parsedRecipeResponse = recipeResponseSchema.safeParse(recipeResponse);
        if (!parsedRecipeResponse.success) {
          console.error('Recipe response validation failed:', recipeResponse?.slug, parsedRecipeResponse.error);
        }
        expect(parsedRecipeResponse.success).toBe(true);
      }
    }
  });
});
