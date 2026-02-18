import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  questAreaIndexResponseSchema,
  questAreaResponseSchema,
  questCategoryIndexResponseSchema,
  questCategoryResponseSchema,
  questIndexResponseSchema,
  questResponseSchema,
  questTypeIndexResponseSchema,
  questTypeResponseSchema,
} from '../../../generated/schemas/wow/quest';

describe('wow quest integration', () => {
  it('validates quest index and fetches quest detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.questIndex());
    const parsed = questIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Quest index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const quest = await client.sendRequest(wow.quest(32_370));
    const parsedQuest = questResponseSchema.safeParse(quest);
    if (!parsedQuest.success) {
      console.error('Quest detail validation failed:', treeifyError(parsedQuest.error));
    }
    expect(parsedQuest.success).toBe(true);
  });

  it('validates quest areas, categories, and types', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const areaIndex = await client.sendRequest(wow.questAreaIndex());
    const parsedAreaIndex = questAreaIndexResponseSchema.safeParse(areaIndex);
    if (!parsedAreaIndex.success) {
      console.error('Quest area index validation failed:', treeifyError(parsedAreaIndex.error));
    }
    expect(parsedAreaIndex.success).toBe(true);

    const areas = parsedAreaIndex.success ? parsedAreaIndex.data.areas : [];
    if (areas.length > 0) {
      const area = await client.sendRequest(wow.questArea(areas[0]!.id));
      const parsedArea = questAreaResponseSchema.safeParse(area);
      if (!parsedArea.success) {
        console.error('Quest area detail validation failed:', areas[0]!.id, treeifyError(parsedArea.error));
      }
      expect(parsedArea.success).toBe(true);
    }

    const categoryIndex = await client.sendRequest(wow.questCategoryIndex());
    const parsedCategoryIndex = questCategoryIndexResponseSchema.safeParse(categoryIndex);
    if (!parsedCategoryIndex.success) {
      console.error('Quest category index validation failed:', treeifyError(parsedCategoryIndex.error));
    }
    expect(parsedCategoryIndex.success).toBe(true);

    const categories = parsedCategoryIndex.success ? parsedCategoryIndex.data.categories : [];
    if (categories.length > 0) {
      const category = await client.sendRequest(wow.questCategory(categories[0]!.id));
      const parsedCategory = questCategoryResponseSchema.safeParse(category);
      if (!parsedCategory.success) {
        console.error(
          'Quest category detail validation failed:',
          categories[0]!.id,
          treeifyError(parsedCategory.error),
        );
      }
      expect(parsedCategory.success).toBe(true);
    }

    const typeIndex = await client.sendRequest(wow.questTypeIndex());
    const parsedTypeIndex = questTypeIndexResponseSchema.safeParse(typeIndex);
    if (!parsedTypeIndex.success) {
      console.error('Quest type index validation failed:', treeifyError(parsedTypeIndex.error));
    }
    expect(parsedTypeIndex.success).toBe(true);

    const types = parsedTypeIndex.success ? parsedTypeIndex.data.types : [];
    if (types.length > 0) {
      const type = await client.sendRequest(wow.questType(types[0]!.id));
      const parsedType = questTypeResponseSchema.safeParse(type);
      if (!parsedType.success) {
        console.error('Quest type detail validation failed:', types[0]!.id, treeifyError(parsedType.error));
      }
      expect(parsedType.success).toBe(true);
    }
  });
});
