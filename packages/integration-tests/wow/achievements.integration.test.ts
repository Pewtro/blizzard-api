import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { achievementIndexResponseSchema, achievementResponseSchema } from '../../../generated/schemas/wow/achievements';

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
});
