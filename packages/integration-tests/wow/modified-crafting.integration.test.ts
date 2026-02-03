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

    const first = parsed.success ? parsed.data.categories[0] : undefined;
    if (first) {
      const category = await client.sendRequest(wow.modifiedCraftingCategory(first.id));
      const parsedCategory = modifiedCraftingCategoryResponseSchema.safeParse(category);
      if (!parsedCategory.success) {
        console.error('Modified crafting category detail validation failed:', treeifyError(parsedCategory.error));
      }
      expect(parsedCategory.success).toBe(true);
    }
  }, 30_000);
});
