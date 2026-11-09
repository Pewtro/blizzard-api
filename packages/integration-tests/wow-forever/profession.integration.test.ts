import {
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
} from '@blizzard-api/wow-forever';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  professionIndexResponseSchema,
  professionMediaResponseSchema,
  professionResponseSchema,
  professionSkillTierResponseSchema,
  recipeMediaResponseSchema,
  recipeResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever profession integration', async () => {
  const client = await getIntegrationTestClient();

  const validateRecipe = async (recipeId: number): Promise<void> => {
    const recipeResponse = await client.sendRequest(recipe(recipeId));
    const parsedRecipe = recipeResponseSchema.safeParse(recipeResponse);
    if (!parsedRecipe.success) {
      console.error('Recipe validation failed for id', recipeId, prettifyError(parsedRecipe.error));
    }
    expect(parsedRecipe.success).toBe(true);

    const media = await client.sendRequest(recipeMedia(recipeId));
    const parsedMedia = recipeMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Recipe media validation failed for id', recipeId, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);
  };

  const validateProfession = async (professionId: number): Promise<void> => {
    const professionResponse = await client.sendRequest(profession(professionId));
    const parsedProfession = professionResponseSchema.safeParse(professionResponse);
    if (!parsedProfession.success) {
      console.error('Profession validation failed for id', professionId, prettifyError(parsedProfession.error));
    }
    expect(parsedProfession.success).toBe(true);

    const media = await client.sendRequest(professionMedia(professionId));
    const parsedMedia = professionMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Profession media validation failed for id', professionId, prettifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);

    const skillTierId = parsedProfession.data?.skill_tiers[0]?.id;
    if (skillTierId === undefined) return;

    const tierResponse = await client.sendRequest(professionSkillTier(professionId, skillTierId));
    const parsedTier = professionSkillTierResponseSchema.safeParse(tierResponse);
    if (!parsedTier.success) {
      console.error('Profession skill tier validation failed for tier', skillTierId, prettifyError(parsedTier.error));
    }
    expect(parsedTier.success).toBe(true);

    const recipeEntry = parsedTier.data?.categories.flatMap((category) => category.recipes)[0];
    if (recipeEntry) {
      await validateRecipe(recipeEntry.id);
    }
  };

  test('validates the profession index, media, skill tiers and a sampled recipe', async () => {
    const index = await client.sendRequest(professionIndex());
    const parsedIndex = professionIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Profession index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampledProfessions = getRandomSample(parsedIndex.data?.professions, 5);
    for (const professionEntry of sampledProfessions) {
      await validateProfession(professionEntry.id);
    }
  });
});
