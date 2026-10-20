import type { BlizzardApiClient } from '@blizzard-api/client';
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
  mythicKeystonePeriodIndexResponseSchema,
} from '../../../generated/schemas/wow';

/**
 * The number of connected realms to look through for a leaderboard.
 */
const realmsToSearch = 3;

/**
 * A mythic keystone leaderboard that was found in the API.
 */
interface FoundLeaderboard {
  dungeonId: number;
  leadingGroups: number;
  realmId: number;
}

describe('wow mythic-keystone-leaderboard integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'us',
    secret: environment.blizzardClientSecret,
  });
  test('fetches leaderboard index and a leaderboard for a connected realm', async () => {
    const { period, realmIds } = await getLeaderboardContext(client);

    // Not every connected realm has a mythic keystone leaderboard, and the leaderboard of a
    // dungeon is not published for every period, so the first one that resolves is used.
    const leaderboard = await findLeaderboard(client, realmIds, period);

    expect(
      leaderboard,
      `No mythic keystone leaderboard found for any of the first ${realmsToSearch} connected realms in period ${period}`,
    ).toBeDefined();
  });

  test('fetches a leaderboard with leading groups for a finished period', async () => {
    const { period, previousPeriod, realmIds } = await getLeaderboardContext(client);

    // The leading groups of a period are only published once the period has ended.
    const leaderboard = await findLeaderboard(client, realmIds, previousPeriod);

    expect(
      leaderboard,
      `No mythic keystone leaderboard found for any of the first ${realmsToSearch} connected realms in period ${previousPeriod}`,
    ).toBeDefined();
    expect(leaderboard!.leadingGroups).toBeGreaterThan(0);
    expect(period).toBeGreaterThan(previousPeriod);
  });
});

/**
 * Gets the connected realm ids and the mythic keystone periods to look for a leaderboard in.
 * @param client The Blizzard API client.
 * @returns The connected realm ids, the current period and the period before it.
 */
async function getLeaderboardContext(client: BlizzardApiClient): Promise<{
  period: number;
  previousPeriod: number;
  realmIds: Array<number>;
}> {
  const connectedRealms = await client.sendRequest(connectedRealmIndex());
  const parsedConnectedRealms = connectedRealmIndexResponseSchema.safeParse(connectedRealms);
  if (!parsedConnectedRealms.success) {
    console.error('Connected realm index validation failed:', prettifyError(parsedConnectedRealms.error));
  }
  expect(parsedConnectedRealms.success).toBe(true);

  const periods = await client.sendRequest(mythicKeystonePeriodIndex());
  const parsedPeriods = mythicKeystonePeriodIndexResponseSchema.safeParse(periods);
  if (!parsedPeriods.success) {
    console.error('Mythic keystone period index validation failed:', prettifyError(parsedPeriods.error));
  }
  expect(parsedPeriods.success).toBe(true);

  return {
    period: parsedPeriods.data!.current_period.id,
    previousPeriod: parsedPeriods.data!.periods.at(-2)!.id,
    realmIds: parsedConnectedRealms
      .data!.connected_realms.map((realm) => Number(/connected-realm\/(\d+)/.exec(realm.href)?.[1]))
      .filter((realmId) => !Number.isNaN(realmId)),
  };
}

/**
 * Finds the first mythic keystone leaderboard that is published for one of the connected realms.
 * @param client The Blizzard API client.
 * @param realmIds The connected realm ids to look through.
 * @param period The mythic keystone period to look for.
 * @returns The leaderboard, or undefined when none of them could be found.
 */
async function findLeaderboard(
  client: BlizzardApiClient,
  realmIds: Array<number>,
  period: number,
): Promise<FoundLeaderboard | undefined> {
  for (const realmId of realmIds.slice(0, realmsToSearch)) {
    let index: unknown;
    try {
      index = await client.sendRequest(mythicKeystoneLeaderboardIndex(realmId));
    } catch {
      // The connected realm does not have a mythic keystone leaderboard.
      continue;
    }

    const parsedIndex = mythicKeystoneLeaderboardIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error(
        `Mythic keystone leaderboard index validation failed for realm ${realmId}:`,
        prettifyError(parsedIndex.error),
      );
      continue;
    }

    for (const dungeon of parsedIndex.data.current_leaderboards) {
      try {
        const leaderboard = await client.sendRequest(mythicKeystoneLeaderboard(realmId, dungeon.id, period));
        const parsedLeaderboard = mythicKeystoneLeaderboardResponseSchema.safeParse(leaderboard);
        if (parsedLeaderboard.success) {
          return {
            dungeonId: dungeon.id,
            leadingGroups: parsedLeaderboard.data.leading_groups?.length ?? 0,
            realmId,
          };
        }
        console.error(
          `Mythic keystone leaderboard validation failed for realm ${realmId} and dungeon ${dungeon.id}:`,
          prettifyError(parsedLeaderboard.error),
        );
      } catch {
        // The leaderboard of this dungeon is not published for this period.
        continue;
      }
    }
  }

  return undefined;
}
