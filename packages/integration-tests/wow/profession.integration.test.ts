import {
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
} from '@blizzard-api/wow/profession';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  professionIndexResponseSchema,
  professionMediaResponseSchema,
  professionResponseSchema,
  professionSkillTierResponseSchema,
  recipeMediaResponseSchema,
  recipeResponseSchema,
} from '../../../generated/schemas/wow/profession';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow profession integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates profession index and fetches profession detail', async ({ expect }) => {
    const index = await client.sendRequest(professionIndex());
    const parsedIndex = professionIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Profession index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const first = parsedIndex.data?.professions[0];

    expect(first).toBeDefined();

    const prof = await client.sendRequest(profession(first!.id));
    const parsedProf = professionResponseSchema.safeParse(prof);
    if (!parsedProf.success) {
      console.error('Profession detail validation failed:', first!.id, prettifyError(parsedProf.error));
    }
    expect(parsedProf.success).toBe(true);

    const media = await client.sendRequest(professionMedia(first!.id));
    const parsedMedia = professionMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Profession media validation failed:', first!.id, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);

    const skillTierId = getRandomItem(parsedProf.data?.skill_tiers)?.id;

    expect(skillTierId).toBeDefined();
    const tier = await client.sendRequest(professionSkillTier(first!.id, skillTierId!));
    const parsedTier = professionSkillTierResponseSchema.safeParse(tier);
    if (!parsedTier.success) {
      console.error(
        'Profession skill tier detail validation failed:',
        first!.id,
        skillTierId!,
        prettifyError(parsedTier.error),
      );
    }
    expect(parsedTier.success).toBe(true);

    const randomCategory = getRandomItem(parsedTier.data?.categories);
    const randomRecipe = getRandomItem(randomCategory?.recipes);
    const recipeId = randomRecipe?.id;

    expect(recipeId).toBeDefined();

    const recipeResp = await client.sendRequest(recipe(recipeId!));
    const parsedRecipe = recipeResponseSchema.safeParse(recipeResp);
    if (!parsedRecipe.success) {
      console.error('Recipe detail validation failed:', recipeId, prettifyError(parsedRecipe.error));
    }
    expect(parsedRecipe.success).toBe(true);

    const recipeMediaResp = await client.sendRequest(recipeMedia(recipeId!));
    const parsedRecipeMedia = recipeMediaResponseSchema.safeParse(recipeMediaResp);
    if (!parsedRecipeMedia.success) {
      console.error('Recipe media validation failed:', recipeId, prettifyError(parsedRecipeMedia.error));
    }
    expect(parsedRecipeMedia.success).toBe(true);
  });
});
