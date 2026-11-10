import {
  quest,
  questArea,
  questAreaIndex,
  questCategory,
  questCategoryIndex,
  questIndex,
  questType,
  questTypeIndex,
} from '@blizzard-api/wow-forever';
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
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever quest integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the quest index and sampled categories with their quests', async ({ expect }) => {
    const index = await client.sendRequest(questIndex());
    const parsedIndex = questIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Quest index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const categoryIndex = await client.sendRequest(questCategoryIndex());
    const parsedCategoryIndex = questCategoryIndexResponseSchema.safeParse(categoryIndex);
    if (!parsedCategoryIndex.success) {
      console.error('Quest category index validation failed:', prettifyError(parsedCategoryIndex.error));
    }
    expect(parsedCategoryIndex.success).toBe(true);

    const sampledCategories = getRandomSample(parsedCategoryIndex.data?.categories, 3);
    const questIds = new Set<number>();

    for (const categoryEntry of sampledCategories) {
      const category = await client.sendRequest(questCategory(categoryEntry.id));
      const parsedCategory = questCategoryResponseSchema.safeParse(category);
      if (!parsedCategory.success) {
        console.error('Quest category validation failed for id', categoryEntry.id, prettifyError(parsedCategory.error));
      }
      expect(parsedCategory.success).toBe(true);
      const categoryQuests = parsedCategory.data?.quests ?? [];
      for (const questEntry of categoryQuests) {
        questIds.add(questEntry.id);
      }
    }

    const sampledQuestIds = getRandomSample([...questIds], 5);
    for (const questId of sampledQuestIds) {
      const questResponse = await client.sendRequest(quest(questId));
      const parsedQuest = questResponseSchema.safeParse(questResponse);
      if (!parsedQuest.success) {
        console.error('Quest validation failed for id', questId, prettifyError(parsedQuest.error));
      }
      expect(parsedQuest.success).toBe(true);
    }
  });

  test('validates the quest area index and sampled areas with their quests', async ({ expect }) => {
    const areaIndex = await client.sendRequest(questAreaIndex());
    const parsedAreaIndex = questAreaIndexResponseSchema.safeParse(areaIndex);
    if (!parsedAreaIndex.success) {
      console.error('Quest area index validation failed:', prettifyError(parsedAreaIndex.error));
    }
    expect(parsedAreaIndex.success).toBe(true);

    const sampledAreas = getRandomSample(parsedAreaIndex.data?.areas, 3);
    const questIds = new Set<number>();

    for (const areaEntry of sampledAreas) {
      const area = await client.sendRequest(questArea(areaEntry.id));
      const parsedArea = questAreaResponseSchema.safeParse(area);
      if (!parsedArea.success) {
        console.error('Quest area validation failed for id', areaEntry.id, prettifyError(parsedArea.error));
      }
      expect(parsedArea.success).toBe(true);
      const areaQuests = parsedArea.data?.quests ?? [];
      for (const questEntry of areaQuests) {
        questIds.add(questEntry.id);
      }
    }

    const sampledQuestIds = getRandomSample([...questIds], 5);
    for (const questId of sampledQuestIds) {
      const questResponse = await client.sendRequest(quest(questId));
      const parsedQuest = questResponseSchema.safeParse(questResponse);
      if (!parsedQuest.success) {
        console.error('Quest validation failed for id', questId, prettifyError(parsedQuest.error));
      }
      expect(parsedQuest.success).toBe(true);
    }
  });

  test('validates the quest type index and sampled types with their quests', async ({ expect }) => {
    const typeIndex = await client.sendRequest(questTypeIndex());
    const parsedTypeIndex = questTypeIndexResponseSchema.safeParse(typeIndex);
    if (!parsedTypeIndex.success) {
      console.error('Quest type index validation failed:', prettifyError(parsedTypeIndex.error));
    }
    expect(parsedTypeIndex.success).toBe(true);

    const sampledTypes = getRandomSample(parsedTypeIndex.data?.types, 3);
    const questIds = new Set<number>();

    for (const typeEntry of sampledTypes) {
      const type = await client.sendRequest(questType(typeEntry.id));
      const parsedType = questTypeResponseSchema.safeParse(type);
      if (!parsedType.success) {
        console.error('Quest type validation failed for id', typeEntry.id, prettifyError(parsedType.error));
      }
      expect(parsedType.success).toBe(true);
      const typeQuests = parsedType.data?.quests ?? [];
      for (const questEntry of typeQuests) {
        questIds.add(questEntry.id);
      }
    }

    const sampledQuestIds = getRandomSample([...questIds], 5);
    for (const questId of sampledQuestIds) {
      const questResponse = await client.sendRequest(quest(questId));
      const parsedQuest = questResponseSchema.safeParse(questResponse);
      if (!parsedQuest.success) {
        console.error('Quest validation failed for id', questId, prettifyError(parsedQuest.error));
      }
      expect(parsedQuest.success).toBe(true);
    }
  });
});
