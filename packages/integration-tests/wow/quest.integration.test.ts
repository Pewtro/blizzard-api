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

const isNotFound = (error: unknown): boolean => (error as { response?: { status?: number } }).response?.status === 404;

/**
 * Fetches a quest from one area, trying several entries if the index contains stale IDs.
 * @param areaId The quest area ID to request.
 * @param getArea Fetches the quest area.
 * @param getQuest Fetches a quest by ID.
 * @returns A quest response and its ID, or undefined when the area has no available quests.
 */
async function findQuestInArea(
  areaId: number,
  getArea: (areaId: number) => Promise<unknown>,
  getQuest: (questId: number) => Promise<unknown>,
): Promise<undefined | { id: number; response: unknown }> {
  let areaResponse: unknown;
  try {
    areaResponse = await getArea(areaId);
  } catch (error) {
    if (isNotFound(error)) return;
    throw error;
  }

  const parsedArea = questAreaResponseSchema.safeParse(areaResponse);
  if (!parsedArea.success) {
    throw new Error(`Quest area ${areaId} validation failed: ${prettifyError(parsedArea.error)}`);
  }

  for (const questEntry of getRandomSample(parsedArea.data.quests, 5)) {
    try {
      return { id: questEntry.id, response: await getQuest(questEntry.id) };
    } catch (error) {
      if (!isNotFound(error)) throw error;
    }
  }
}

/**
 * Finds a quest by sampling the quest-area index.
 * @param areaEntries Quest area index entries to sample.
 * @param getArea Fetches a quest area.
 * @param getQuest Fetches a quest by ID.
 * @returns A quest response and its ID, or undefined when no sampled area has an available quest.
 */
async function findQuestFromAreas(
  areaEntries: ReadonlyArray<{ id: number }>,
  getArea: (areaId: number) => Promise<unknown>,
  getQuest: (questId: number) => Promise<unknown>,
): Promise<undefined | { id: number; response: unknown }> {
  for (const { id } of getRandomSample(areaEntries, 10)) {
    const questResult = await findQuestInArea(id, getArea, getQuest);
    if (questResult) return questResult;
  }
}

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

    const questResult = await findQuestFromAreas(
      parsedAreaIndex.data!.areas,
      (areaId) => client.sendRequest(questArea(areaId)),
      (questId) => client.sendRequest(quest(questId)),
    );
    expect(questResult).toBeDefined();
    if (!questResult) return;

    const parsedQuest = questResponseSchema.safeParse(questResult.response);
    if (!parsedQuest.success) {
      console.error('Quest detail validation failed:', questResult.id, prettifyError(parsedQuest.error));
    }
    expect(parsedQuest.success).toBe(true);
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
