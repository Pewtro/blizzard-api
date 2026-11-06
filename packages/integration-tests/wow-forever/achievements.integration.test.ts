import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  achievementCategoryIndexResponseSchema,
  achievementCategoryResponseSchema,
  achievementIndexResponseSchema,
  achievementMediaResponseSchema,
  achievementResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever achievements integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches the achievement index and validates sampled achievements', async ({ expect }) => {
    const index = await client.sendRequest(achievementIndex());
    const parsedIndex = achievementIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Achievement index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const achievements = parsedIndex.success ? parsedIndex.data.achievements : [];
    const sampled = getRandomSample(achievements, 5);
    const responses = await Promise.all(Array.from(sampled, (entry) => client.sendRequest(achievement(entry.id))));

    for (const response of responses) {
      const parsedAchievement = achievementResponseSchema.safeParse(response);
      if (!parsedAchievement.success) {
        console.error(
          'Achievement detail validation failed for id',
          response?.id,
          prettifyError(parsedAchievement.error),
        );
      }
      expect(parsedAchievement.success).toBe(true);
    }

    const mediaResponses = await Promise.all(
      Array.from(sampled, (entry) => client.sendRequest(achievementMedia(entry.id))),
    );
    for (const media of mediaResponses) {
      const parsedMedia = achievementMediaResponseSchema.safeParse(media);
      if (!parsedMedia.success) {
        console.error('Achievement media validation failed for id', media?.id, prettifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });

  test('validates achievement categories across every shape', async ({ expect }) => {
    const catIndex = await client.sendRequest(achievementCategoryIndex());
    const parsedCatIndex = achievementCategoryIndexResponseSchema.safeParse(catIndex);
    if (!parsedCatIndex.success) {
      console.error('Achievement category index validation failed:', prettifyError(parsedCatIndex.error));
    }
    expect(parsedCatIndex.success).toBe(true);

    const categories = parsedCatIndex.success ? parsedCatIndex.data.categories : [];
    //Forever categories vary between achievements-only, subcategory and leaf shapes, so sample broadly.
    const sampled = getRandomSample(categories, 5);
    const responses = await Promise.all(
      Array.from(sampled, (category) => client.sendRequest(achievementCategory(category.id))),
    );

    for (const response of responses) {
      const parsedCategory = achievementCategoryResponseSchema.safeParse(response);
      if (!parsedCategory.success) {
        console.error(
          'Achievement category validation failed for id',
          response?.id,
          prettifyError(parsedCategory.error),
        );
      }
      expect(parsedCategory.success).toBe(true);
    }
  });
});
