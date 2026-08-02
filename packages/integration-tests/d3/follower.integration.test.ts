import { createBlizzardApiClient } from '@blizzard-api/client';
import { d3 } from '@blizzard-api/d3';
import type { Follower } from '@blizzard-api/d3';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { followerResponseSchema } from '../../../generated/schemas/d3';

describe('d3 follower integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches a follower', async ({ expect }) => {
    const followers: Array<Follower> = ['enchantress', 'scoundrel', 'templar'];
    const followerPromises = followers.map(async (followerSlug) => await client.sendRequest(d3.follower(followerSlug)));
    const followerResponses = await Promise.all(followerPromises);

    for (const followerResponse of followerResponses) {
      const parsedFollowerResponse = followerResponseSchema.safeParse(followerResponse);
      if (!parsedFollowerResponse.success) {
        console.error('Follower response validation failed:', followerResponse?.slug, parsedFollowerResponse.error);
      }
      expect(parsedFollowerResponse.success).toBe(true);
    }
  });
});
