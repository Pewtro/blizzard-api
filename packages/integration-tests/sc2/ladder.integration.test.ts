import { createBlizzardApiClient } from '@blizzard-api/client';
import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { environment } from '../../../environment';
import { grandmasterLeaderboardResponseSchema, seasonResponseSchema } from '../../../generated/schemas/sc2';

describe('sc2 ladder integration', { timeout: 30_000 }, async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    kyOptions: {
      timeout: 30_000,
    },
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches the grandmaster leaderboard', async ({ expect }) => {
    const response = await client.sendRequest(sc2.grandmasterLeaderboard('eu'));
    const parsedResponse = grandmasterLeaderboardResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Grandmaster Leaderboard failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches the season leaderboard', async ({ expect }) => {
    const response = await client.sendRequest(sc2.season('eu'));
    const parsedResponse = seasonResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Season Leaderboard failed', parsedResponse.error);
    }
    expect(parsedResponse.success).toBe(true);
  });
});
