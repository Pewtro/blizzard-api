import {
  achievement,
  achievementCategory,
  achievementCategoryIndex,
  achievementIndex,
  achievementMedia,
} from '@blizzard-api/classic-wow/achievements';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  achievementCategoryIndexResponseSchema,
  achievementCategoryResponseSchema,
  achievementIndexResponseSchema,
  achievementMediaResponseSchema,
  achievementResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

const namespaces = ['static-classic1x', 'static-classic', 'static-classicann'] as const;

describe('classic-wow achievements integration', async () => {
  const client = await getIntegrationTestClient();

  test.each(namespaces)('validates achievement endpoints for %s', async (namespace) => {
    const [indexResponse, categoryIndexResponse] = await Promise.all([
      client.sendRequest(achievementIndex(namespace)),
      client.sendRequest(achievementCategoryIndex(namespace)),
    ]);
    const parsedIndex = achievementIndexResponseSchema.safeParse(indexResponse);
    const parsedCategoryIndex = achievementCategoryIndexResponseSchema.safeParse(categoryIndexResponse);

    if (!parsedIndex.success) {
      console.error('Classic achievement index validation failed:', namespace, prettifyError(parsedIndex.error));
    }
    if (!parsedCategoryIndex.success) {
      console.error(
        'Classic achievement category index validation failed:',
        namespace,
        prettifyError(parsedCategoryIndex.error),
      );
    }
    expect(parsedIndex.success).toBe(true);
    expect(parsedCategoryIndex.success).toBe(true);

    const achievementId = parsedIndex.data!.achievements[0]?.id;
    const categoryId = parsedCategoryIndex.data!.categories[0]?.id;
    expect(achievementId).toBeTypeOf('number');
    expect(categoryId).toBeTypeOf('number');
    if (achievementId === undefined || categoryId === undefined) return;

    const [achievementResponse, mediaResponse, categoryResponse] = await Promise.all([
      client.sendRequest(achievement(namespace, achievementId)),
      client.sendRequest(achievementMedia(namespace, achievementId)),
      client.sendRequest(achievementCategory(namespace, categoryId)),
    ]);
    const parsedAchievement = achievementResponseSchema.safeParse(achievementResponse);
    const parsedMedia = achievementMediaResponseSchema.safeParse(mediaResponse);
    const parsedCategory = achievementCategoryResponseSchema.safeParse(categoryResponse);

    if (!parsedAchievement.success) {
      console.error('Classic achievement validation failed:', namespace, prettifyError(parsedAchievement.error));
    }
    if (!parsedMedia.success) {
      console.error('Classic achievement media validation failed:', namespace, prettifyError(parsedMedia.error));
    }
    if (!parsedCategory.success) {
      console.error('Classic achievement category validation failed:', namespace, prettifyError(parsedCategory.error));
    }
    expect(parsedAchievement.success).toBe(true);
    expect(parsedMedia.success).toBe(true);
    expect(parsedCategory.success).toBe(true);
  });
});
