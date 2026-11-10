import { sc2 } from '@blizzard-api/sc2';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { grandmasterLeaderboardResponseSchema, seasonResponseSchema } from '../../../generated/schemas/sc2';
import { getIntegrationTestClient } from '../utils/client';

describe('sc2 ladder integration', { timeout: 30_000 }, async () => {
  const client = await getIntegrationTestClient();

  test('fetches the grandmaster leaderboard', async ({ expect, skip }) => {
    const response = await client.sendRequest(sc2.grandmasterLeaderboard('eu'), {
      kyOptions: {
        timeout: 30_000,
      },
    });

    if (!response) {
      skip('No response received from the grandmaster leaderboard endpoint');
    }

    const parsedResponse = grandmasterLeaderboardResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Grandmaster Leaderboard failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });

  test('fetches the season leaderboard', async ({ expect }) => {
    const response = await client.sendRequest(sc2.season('eu'));
    const parsedResponse = seasonResponseSchema.safeParse(response);
    if (!parsedResponse.success) {
      console.error('Season Leaderboard failed', prettifyError(parsedResponse.error));
    }
    expect(parsedResponse.success).toBe(true);
  });
});
