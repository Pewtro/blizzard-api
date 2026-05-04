import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  mythicKeystoneLeaderboard,
  mythicKeystoneLeaderboardIndex,
} from '@blizzard-api/wow/mythic-keystone-leaderboard';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  mythicKeystoneLeaderboardIndexResponseSchema,
  mythicKeystoneLeaderboardResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-leaderboard';

describe('wow mythic-keystone-leaderboard integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'us',
    secret: environment.blizzardClientSecret,
  });
  test('fetches leaderboard index and a leaderboard for a connected realm', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneLeaderboardIndex(11));
    const parsedIndex = mythicKeystoneLeaderboardIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mythic keystone leaderboard index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const leaderboard = await client.sendRequest(mythicKeystoneLeaderboard(11, 197, 641));
    const parsedLeaderboard = mythicKeystoneLeaderboardResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error('Mythic keystone leaderboard validation failed:', treeifyError(parsedLeaderboard.error));
    }
    expect(parsedLeaderboard.success).toBe(true);
  });
});
