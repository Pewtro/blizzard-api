import {
  modifiedCraftingCategory,
  modifiedCraftingCategoryIndex,
  modifiedCraftingIndex,
  modifiedCraftingReagentSlotType,
  modifiedCraftingReagentSlotTypeIndex,
} from '@blizzard-api/wow/modified-crafting';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  modifiedCraftingCategoryIndexResponseSchema,
  modifiedCraftingCategoryResponseSchema,
  modifiedCraftingIndexResponseSchema,
  modifiedCraftingReagentSlotTypeIndexResponseSchema,
  modifiedCraftingReagentSlotTypeResponseSchema,
} from '../../../generated/schemas/wow/modified-crafting';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow modified-crafting integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates modified crafting category index and fetches detail', async ({ expect }) => {
    const index = await client.sendRequest(modifiedCraftingCategoryIndex());
    const parsed = modifiedCraftingCategoryIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Modified crafting category index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 categories at random from the index to fetch details
    const categories = parsed.success ? parsed.data.categories : [];
    const sampled = getRandomSample(categories, 5);

    const requests = Array.from(sampled, (c) => client.sendRequest(modifiedCraftingCategory(c.id)));
    const responses = await Promise.all(requests);
    for (const category of responses) {
      const parsedCategory = modifiedCraftingCategoryResponseSchema.safeParse(category);
      if (!parsedCategory.success) {
        console.error(
          'Modified crafting category detail validation failed:',
          category?.id,
          prettifyError(parsedCategory.error),
        );
      }
      expect(parsedCategory.success).toBe(true);
    }
  });

  test('validates modified crafting index and reagent slot types', async ({ expect }) => {
    const index = await client.sendRequest(modifiedCraftingIndex());
    const parsed = modifiedCraftingIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Modified crafting index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const slotTypeIndex = await client.sendRequest(modifiedCraftingReagentSlotTypeIndex());
    const parsedSlotIndex = modifiedCraftingReagentSlotTypeIndexResponseSchema.safeParse(slotTypeIndex);
    if (!parsedSlotIndex.success) {
      console.error(
        'Modified crafting reagent slot type index validation failed:',
        prettifyError(parsedSlotIndex.error),
      );
    }
    expect(parsedSlotIndex.success).toBe(true);

    const slotTypes = parsedSlotIndex.data!.slot_types;
    expect(slotTypes.length).toBeGreaterThan(0);
    const slotType = await client.sendRequest(modifiedCraftingReagentSlotType(slotTypes[0]!.id));
    const parsedSlotType = modifiedCraftingReagentSlotTypeResponseSchema.safeParse(slotType);
    if (!parsedSlotType.success) {
      console.error(
        'Modified crafting reagent slot type detail validation failed:',
        slotTypes[0]!.id,
        prettifyError(parsedSlotType.error),
      );
    }
    expect(parsedSlotType.success).toBe(true);
  });
});
