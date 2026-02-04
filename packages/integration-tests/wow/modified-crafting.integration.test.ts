import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  modifiedCraftingCategoryIndexResponseSchema,
  modifiedCraftingCategoryResponseSchema,
} from '../../../generated/schemas/wow/modified-crafting';

describe('wow modified-crafting integration', () => {
  it('validates modified crafting category index and fetches detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.modifiedCraftingCategoryIndex());
    const parsed = modifiedCraftingCategoryIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Modified crafting category index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 categories at random from the index to fetch details
    const categories = parsed.success ? parsed.data.categories : [];
    const sampleSize = Math.min(5, categories.length);
    const sampled =
      categories.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          categories.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : categories.slice(0, sampleSize);

    const requests = [];

    for (const c of sampled) {
      requests.push(client.sendRequest(wow.modifiedCraftingCategory(c.id)));
    }
    const responses = await Promise.all(requests);
    for (const category of responses) {
      const parsedCategory = modifiedCraftingCategoryResponseSchema.safeParse(category);
      if (!parsedCategory.success) {
        console.error('Modified crafting category detail validation failed:', treeifyError(parsedCategory.error));
      }
      expect(parsedCategory.success).toBe(true);
    }
  }, 30_000);
});
