import { createBlizzardApiClient } from '@blizzard-api/client';
import { mythicKeystonePeriodIndex } from '@blizzard-api/wow';
import { connectedRealmIndex } from '@blizzard-api/wow/connected-realm';
import {
  mythicKeystoneLeaderboard,
  mythicKeystoneLeaderboardIndex,
} from '@blizzard-api/wow/mythic-keystone-leaderboard';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { environment } from '../../../environment';
import {
  connectedRealmIndexResponseSchema,
  mythicKeystoneLeaderboardIndexResponseSchema,
  mythicKeystoneLeaderboardResponseSchema,
} from '../../../generated/schemas/wow';

describe('wow mythic-keystone-leaderboard integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'us',
    secret: environment.blizzardClientSecret,
  });
  test('fetches leaderboard index and a leaderboard for a connected realm', async () => {
    const connectedRealms = await client.sendRequest(connectedRealmIndex());
    const parsedConnectedRealms = connectedRealmIndexResponseSchema.safeParse(connectedRealms);
    if (!parsedConnectedRealms.success) {
      console.error('Connected realm index validation failed:', prettifyError(parsedConnectedRealms.error));
    }
    expect(parsedConnectedRealms.success).toBe(true);

    const realmId = Number(/connected-realm\/(\d+)/.exec(parsedConnectedRealms.data!.connected_realms[0]!.href)?.[1]);
    expect(realmId).toBeTypeOf('number');

    const index = await client.sendRequest(mythicKeystoneLeaderboardIndex(realmId));
    const parsedIndex = mythicKeystoneLeaderboardIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mythic keystone leaderboard index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const mythicKeyStonePeriods = await client.sendRequest(mythicKeystonePeriodIndex());
    // eslint-disable-next-line sonarjs/pseudo-random
    const dungeonId = index!.current_leaderboards[Math.floor(Math.random() * index!.current_leaderboards.length)]!.id;
    const period = mythicKeyStonePeriods!.current_period.id;

    const leaderboard = await client.sendRequest(mythicKeystoneLeaderboard(realmId, dungeonId, period));
    const parsedLeaderboard = mythicKeystoneLeaderboardResponseSchema.safeParse(leaderboard);
    if (!parsedLeaderboard.success) {
      console.error(
        `Mythic keystone leaderboard validation failed for realm: ${realmId}, dungeon: ${dungeonId} and period: ${period}`,
        prettifyError(parsedLeaderboard.error),
      );
    }
    expect(parsedLeaderboard.success).toBe(true);
  });
});
