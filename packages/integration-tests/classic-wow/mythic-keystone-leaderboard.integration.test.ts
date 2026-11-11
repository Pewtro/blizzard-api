import { connectedRealmIndex } from '@blizzard-api/classic-wow/connected-realm';
import { mythicKeystonePeriodIndex } from '@blizzard-api/classic-wow/mythic-keystone-dungeon';
import {
  mythicKeystoneLeaderboard,
  mythicKeystoneLeaderboardIndex,
} from '@blizzard-api/classic-wow/mythic-keystone-leaderboard';
import type { BlizzardApiClient } from '@blizzard-api/client';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  connectedRealmIndexResponseSchema,
  mythicKeystoneLeaderboardIndexResponseSchema,
  mythicKeystoneLeaderboardResponseSchema,
  mythicKeystonePeriodIndexResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

const connectedRealmsToSearch = 10;
const usRequestOptions = { locale: 'en_US', origin: 'us' } as const;

describe('classic-wow mythic-keystone-leaderboard integration', async () => {
  const client = await getIntegrationTestClient();
  const namespace = 'dynamic-classic';

  test('validates a leaderboard index and sampled leaderboard', async () => {
    const [realmResponse, periodResponse] = await Promise.all([
      client.sendRequest(connectedRealmIndex(namespace), usRequestOptions),
      client.sendRequest(mythicKeystonePeriodIndex(namespace), usRequestOptions),
    ]);
    const parsedRealms = connectedRealmIndexResponseSchema.safeParse(realmResponse);
    const parsedPeriods = mythicKeystonePeriodIndexResponseSchema.safeParse(periodResponse);
    if (!parsedRealms.success) {
      console.error('Connected realm index validation failed:', prettifyError(parsedRealms.error));
    }
    if (!parsedPeriods.success) {
      console.error('Classic Mythic Keystone period index validation failed:', prettifyError(parsedPeriods.error));
    }
    expect(parsedRealms.success).toBe(true);
    expect(parsedPeriods.success).toBe(true);

    const realmIds = parsedRealms
      .data!.connected_realms.map((realm) => Number(/connected-realm\/(\d+)/.exec(realm.href)?.[1]))
      .filter((realmId) => !Number.isNaN(realmId))
      .slice(0, connectedRealmsToSearch);
    const currentPeriod = parsedPeriods.data!.current_period.id;
    const isLeaderboardAvailableResult = await isLeaderboardAvailable(client, realmIds, currentPeriod);
    expect(isLeaderboardAvailableResult).toBe(true);
  });
});

/**
 * Searches connected realms for a published dungeon leaderboard and validates its response.
 * @param client The Blizzard API client.
 * @param realmIds The connected realm IDs to search.
 * @param periodId The period ID to request.
 * @returns Whether a valid leaderboard was found.
 */
async function isLeaderboardAvailable(
  client: BlizzardApiClient,
  realmIds: Array<number>,
  periodId: number,
): Promise<boolean> {
  for (const connectedRealmId of realmIds) {
    let response: unknown;
    try {
      response = await client.sendRequest(
        mythicKeystoneLeaderboardIndex('dynamic-classic', connectedRealmId),
        usRequestOptions,
      );
    } catch {
      continue;
    }

    const parsedIndex = mythicKeystoneLeaderboardIndexResponseSchema.safeParse(response);
    if (!parsedIndex.success) {
      console.error(
        'Classic Mythic Keystone leaderboard index validation failed:',
        connectedRealmId,
        prettifyError(parsedIndex.error),
      );
      continue;
    }

    const dungeonId = parsedIndex.data.current_leaderboards?.[0]?.id;
    if (dungeonId === undefined) continue;

    try {
      const leaderboardResponse = await client.sendRequest(
        mythicKeystoneLeaderboard('dynamic-classic', connectedRealmId, dungeonId, periodId),
        usRequestOptions,
      );
      const parsedLeaderboard = mythicKeystoneLeaderboardResponseSchema.safeParse(leaderboardResponse);
      if (!parsedLeaderboard.success) {
        console.error('Classic Mythic Keystone leaderboard validation failed:', prettifyError(parsedLeaderboard.error));
        continue;
      }
      return true;
    } catch {
      // This dungeon may not publish a leaderboard for the current period.
    }
  }
  return false;
}
