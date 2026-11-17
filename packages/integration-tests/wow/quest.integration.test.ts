import {
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
} from '@blizzard-api/wow/quest';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
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
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem, getRandomSample } from '../utils/random';

describe('wow quest integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates quest index and fetches quest detail', async ({ expect }) => {
    const index = await client.sendRequest(questIndex());
    const parsed = questIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Quest index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const areaIndex = await client.sendRequest(questAreaIndex());
    const parsedAreaIndex = questAreaIndexResponseSchema.safeParse(areaIndex);
    if (!parsedAreaIndex.success) {
      console.error('Quest area index validation failed:', prettifyError(parsedAreaIndex.error));
    }
    expect(parsedAreaIndex.success).toBe(true);

    const areas = getRandomSample(parsedAreaIndex.data?.areas, 5);
    for (const area of areas) {
      const areaResponse = await client.sendRequest(questArea(area.id));
      const parsedArea = questAreaResponseSchema.safeParse(areaResponse);
      if (!parsedArea.success) {
        console.error(`Quest area ${area.id} validation failed: ${prettifyError(parsedArea.error)}`);
      }
      expect(parsedArea.success).toBe(true);

      const questEntries = getRandomSample(parsedArea.data?.quests, 5);
      for (const questEntry of questEntries) {
        const questResponse = await client.sendRequest(quest(questEntry.id));
        const parsedQuestResponse = questResponseSchema.safeParse(questResponse);
        if (!parsedQuestResponse.success) {
          console.error('Quest detail validation failed:', questResponse?.id, prettifyError(parsedQuestResponse.error));
        }
        expect(parsedQuestResponse.success).toBe(true);
      }
    }
  });

  test('validates quest areas, categories, and types', async ({ expect }) => {
    const areaIndex = await client.sendRequest(questAreaIndex());
    const parsedAreaIndex = questAreaIndexResponseSchema.safeParse(areaIndex);
    if (!parsedAreaIndex.success) {
      console.error('Quest area index validation failed:', prettifyError(parsedAreaIndex.error));
    }
    expect(parsedAreaIndex.success).toBe(true);

    const areaEntry = getRandomItem(parsedAreaIndex.data?.areas);
    if (areaEntry) {
      const area = await client.sendRequest(questArea(areaEntry.id));
      const parsedArea = questAreaResponseSchema.safeParse(area);
      if (!parsedArea.success) {
        console.error('Quest area detail validation failed:', areaEntry.id, prettifyError(parsedArea.error));
      }
      expect(parsedArea.success).toBe(true);
    }

    const categoryIndex = await client.sendRequest(questCategoryIndex());
    const parsedCategoryIndex = questCategoryIndexResponseSchema.safeParse(categoryIndex);
    if (!parsedCategoryIndex.success) {
      console.error('Quest category index validation failed:', prettifyError(parsedCategoryIndex.error));
    }
    expect(parsedCategoryIndex.success).toBe(true);

    const categoryEntry = getRandomItem(parsedCategoryIndex.data?.categories);
    if (categoryEntry) {
      const category = await client.sendRequest(questCategory(categoryEntry.id));
      const parsedCategory = questCategoryResponseSchema.safeParse(category);
      if (!parsedCategory.success) {
        console.error(
          'Quest category detail validation failed:',
          categoryEntry.id,
          prettifyError(parsedCategory.error),
        );
      }
      expect(parsedCategory.success).toBe(true);
    }

    const typeIndex = await client.sendRequest(questTypeIndex());
    const parsedTypeIndex = questTypeIndexResponseSchema.safeParse(typeIndex);
    if (!parsedTypeIndex.success) {
      console.error('Quest type index validation failed:', prettifyError(parsedTypeIndex.error));
    }
    expect(parsedTypeIndex.success).toBe(true);

    const typeEntry = getRandomItem(parsedTypeIndex.data!.types)!;
    const type = await client.sendRequest(questType(typeEntry.id));
    const parsedType = questTypeResponseSchema.safeParse(type);
    if (!parsedType.success) {
      console.error('Quest type detail validation failed:', typeEntry.id, prettifyError(parsedType.error));
    }
    expect(parsedType.success).toBe(true);
  });
});
