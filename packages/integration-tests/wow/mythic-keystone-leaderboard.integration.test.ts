import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  mythicKeystoneLeaderboardIndexResponseSchema,
  mythicKeystoneLeaderboardResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-leaderboard';

describe('wow mythic-keystone-leaderboard integration', () => {
  it('fetches leaderboard index and a leaderboard for a connected realm', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.mythicKeystoneLeaderboardIndex(11));
    const parsedIndex = mythicKeystoneLeaderboardIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mythic keystone leaderboard index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const leaderboard = await client.sendRequest(wow.mythicKeystoneLeaderboard(11, 197, 641));
    const parsedLeaderboard = mythicKeystoneLeaderboardResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error('Mythic keystone leaderboard validation failed:', treeifyError(parsedLeaderboard.error));
    }
    expect(parsedLeaderboard.success).toBe(true);
  });
});
