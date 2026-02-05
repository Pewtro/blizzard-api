import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  modifiedCraftingCategoryIndexResponseSchema,
  modifiedCraftingCategoryResponseSchema,
  modifiedCraftingIndexResponseSchema,
  modifiedCraftingReagentSlotTypeIndexResponseSchema,
  modifiedCraftingReagentSlotTypeResponseSchema,
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
  });

  it('validates modified crafting index and reagent slot types', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.modifiedCraftingIndex());
    const parsed = modifiedCraftingIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Modified crafting index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const slotTypeIndex = await client.sendRequest(wow.modifiedCraftingReagentSlotTypeIndex());
    const parsedSlotIndex = modifiedCraftingReagentSlotTypeIndexResponseSchema.safeParse(slotTypeIndex);
    if (!parsedSlotIndex.success) {
      console.error(
        'Modified crafting reagent slot type index validation failed:',
        treeifyError(parsedSlotIndex.error),
      );
    }
    expect(parsedSlotIndex.success).toBe(true);

    const slotTypes = parsedSlotIndex.success ? parsedSlotIndex.data.slot_types : [];
    if (slotTypes.length > 0) {
      const slotType = await client.sendRequest(wow.modifiedCraftingReagentSlotType(slotTypes[0]!.id));
      const parsedSlotType = modifiedCraftingReagentSlotTypeResponseSchema.safeParse(slotType);
      if (!parsedSlotType.success) {
        console.error(
          'Modified crafting reagent slot type detail validation failed:',
          treeifyError(parsedSlotType.error),
        );
      }
      expect(parsedSlotType.success).toBe(true);
    }
  });
});
