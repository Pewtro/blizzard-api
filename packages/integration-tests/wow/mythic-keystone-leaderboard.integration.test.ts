import { createBlizzardApiClient } from '@blizzard-api/client';
import { mythicKeystonePeriodIndex } from '@blizzard-api/wow';
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
    const realmId = 11;
    const index = await client.sendRequest(mythicKeystoneLeaderboardIndex(realmId));
    const parsedIndex = mythicKeystoneLeaderboardIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mythic keystone leaderboard index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const mythicKeyStonePeriods = await client.sendRequest(mythicKeystonePeriodIndex());
    // eslint-disable-next-line sonarjs/pseudo-random
    const dungeonId = index.current_leaderboards[Math.floor(Math.random() * index.current_leaderboards.length)]!.id;

    const leaderboard = await client.sendRequest(mythicKeystoneLeaderboard(realmId, 239, 1065));
    const parsedLeaderboard = mythicKeystoneLeaderboardResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error(
        `Mythic keystone leaderboard validation failed for realm: ${realmId}, dungeon: ${dungeonId} and period: ${mythicKeyStonePeriods.current_period.id}`,
        treeifyError(parsedLeaderboard.error),
      );
    }
    expect(parsedLeaderboard.success).toBe(true);
  });
});
