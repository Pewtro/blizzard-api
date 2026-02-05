import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  achievementCategoryIndexResponseSchema,
  achievementCategoryResponseSchema,
  achievementIndexResponseSchema,
  achievementMediaResponseSchema,
  achievementResponseSchema,
} from '../../../generated/schemas/wow/achievements';

describe('wow achievements integration', () => {
  it('fetches achievement indices and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.achievementIndex());
    const parsed = achievementIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Achievement index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 achievements at random from the index to fetch details
    const achievements = parsed.success ? parsed.data.achievements : [];
    const sampleSize = Math.min(5, achievements.length);
    const sampled =
      achievements.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          achievements.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : achievements.slice(0, sampleSize);

    const requests = [];
    for (const achievement of sampled) {
      requests.push(client.sendRequest(wow.achievement(achievement.id)));
    }

    const responses = await Promise.all(requests);

    for (const achievement of responses) {
      const parsedAchievement = achievementResponseSchema.safeParse(achievement);
      if (!parsedAchievement.success) {
        console.error(
          'Achievement detail validation failed for id',
          achievement.id,
          treeifyError(parsedAchievement.error),
        );
      }
      expect(parsedAchievement.success).toBe(true);
    }
  });

  it('validates achievement categories and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const catIndex = await client.sendRequest(wow.achievementCategoryIndex());
    const parsedCatIndex = achievementCategoryIndexResponseSchema.safeParse(catIndex);
    if (!parsedCatIndex.success) {
      console.error('Achievement category index validation failed:', treeifyError(parsedCatIndex.error));
    }
    expect(parsedCatIndex.success).toBe(true);

    const categories = parsedCatIndex.success ? parsedCatIndex.data.categories : [];
    const sampleSize = Math.min(50, categories.length);
    const sampledCats =
      categories.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          categories.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : categories.slice(0, sampleSize);

    const catRequests = [];
    for (const c of sampledCats) {
      catRequests.push(client.sendRequest(wow.achievementCategory(c.id)));
    }

    const catResponses = await Promise.all(catRequests);
    for (const cr of catResponses) {
      const parsedCat = achievementCategoryResponseSchema.safeParse(cr);
      if (!parsedCat.success) {
        console.error('Achievement category validation failed for id', cr.id, treeifyError(parsedCat.error));
      }
      expect(parsedCat.success).toBe(true);
    }

    // Validate media for some achievements from the original index
    const achievementsList = await client.sendRequest(wow.achievementIndex());
    const parsedIndexAgain = achievementIndexResponseSchema.safeParse(achievementsList);
    if (!parsedIndexAgain.success) {
      console.error('Achievement index revalidation failed:', treeifyError(parsedIndexAgain.error));
    }
    expect(parsedIndexAgain.success).toBe(true);

    const achs = parsedIndexAgain.success ? parsedIndexAgain.data.achievements : [];
    const mediaSample = achs.slice(0, Math.min(5, achs.length));
    const mediaRequests = [];
    for (const a of mediaSample) {
      mediaRequests.push(client.sendRequest(wow.achievementMedia(a.id)));
    }
    const mediaResponses = await Promise.all(mediaRequests);
    for (const m of mediaResponses) {
      const parsedMedia = achievementMediaResponseSchema.safeParse(m);
      if (!parsedMedia.success) {
        console.error('Achievement media validation failed for id', m.id, treeifyError(parsedMedia.error));
      }
      expect(parsedMedia.success).toBe(true);
    }
  });
});
