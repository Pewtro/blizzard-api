/* eslint-disable sonarjs/pseudo-random */
import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  profession,
  professionIndex,
  professionMedia,
  professionSkillTier,
  recipe,
  recipeMedia,
} from '@blizzard-api/wow/profession';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  professionIndexResponseSchema,
  professionMediaResponseSchema,
  professionResponseSchema,
  professionSkillTierResponseSchema,
  recipeMediaResponseSchema,
  recipeResponseSchema,
} from '../../../generated/schemas/wow/profession';

describe('wow profession integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates profession index and fetches profession detail', async ({ expect }) => {
    const index = await client.sendRequest(professionIndex());
    const parsedIndex = professionIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Profession index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const first = parsedIndex.data?.professions[0];

    expect(first).toBeDefined();

    const prof = await client.sendRequest(profession(first!.id));
    const parsedProf = professionResponseSchema.safeParse(prof);
    if (!parsedProf.success) {
      console.error('Profession detail validation failed:', first!.id, treeifyError(parsedProf.error));
    }
    expect(parsedProf.success).toBe(true);

    const media = await client.sendRequest(professionMedia(first!.id));
    const parsedMedia = professionMediaResponseSchema.safeParse(media);
    if (!parsedMedia.success) {
      console.error('Profession media validation failed:', first!.id, treeifyError(parsedMedia.error));
    }
    expect(parsedMedia.success).toBe(true);

    const skillTierId =
      parsedProf.data?.skill_tiers[Math.floor(Math.random() * parsedProf.data?.skill_tiers.length)]?.id;

    expect(skillTierId).toBeDefined();
    const tier = await client.sendRequest(professionSkillTier(first!.id, skillTierId!));
    const parsedTier = professionSkillTierResponseSchema.safeParse(tier);
    if (!parsedTier.success) {
      console.error(
        'Profession skill tier detail validation failed:',
        first!.id,
        skillTierId!,
        treeifyError(parsedTier.error),
      );
    }
    expect(parsedTier.success).toBe(true);

    const categoryIndex = Math.floor(Math.random() * (parsedTier.data?.categories.length ?? 0));
    const recipeLength = parsedTier.data?.categories[categoryIndex]?.recipes.length;
    const recipeIndex = Math.floor(Math.random() * (recipeLength ?? 0));
    const recipeId = parsedTier.data?.categories[categoryIndex]?.recipes[recipeIndex]?.id;

    expect(recipeId).toBeDefined();

    const recipeResp = await client.sendRequest(recipe(recipeId!));
    const parsedRecipe = recipeResponseSchema.safeParse(recipeResp);
    if (!parsedRecipe.success) {
      console.error('Recipe detail validation failed:', recipeId, treeifyError(parsedRecipe.error));
    }
    expect(parsedRecipe.success).toBe(true);

    const recipeMediaResp = await client.sendRequest(recipeMedia(recipeId!));
    const parsedRecipeMedia = recipeMediaResponseSchema.safeParse(recipeMediaResp);
    if (!parsedRecipeMedia.success) {
      console.error('Recipe media validation failed:', recipeId, treeifyError(parsedRecipeMedia.error));
    }
    expect(parsedRecipeMedia.success).toBe(true);
  });
});
