import {
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from '@blizzard-api/classic-wow/mythic-keystone-dungeon';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  mythicKeystonePeriodIndexResponseSchema,
  mythicKeystonePeriodResponseSchema,
  mythicKeystoneSeasonIndexResponseSchema,
  mythicKeystoneSeasonResponseSchema,
} from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow mythic-keystone-dungeon integration', async () => {
  const client = await getIntegrationTestClient();
  const namespace = 'dynamic-classic';

  test('validates period index and current period', async ({ expect }) => {
    const response = await client.sendRequest(mythicKeystonePeriodIndex(namespace));
    const parsedIndex = mythicKeystonePeriodIndexResponseSchema.safeParse(response);
    if (!parsedIndex.success) {
      console.error('Classic Mythic Keystone period index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const periodId = parsedIndex.data!.current_period.id;
    const detail = await client.sendRequest(mythicKeystonePeriod(namespace, periodId));
    const parsedDetail = mythicKeystonePeriodResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Classic Mythic Keystone period validation failed:', periodId, prettifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);
  });

  test('validates season index and current season', async ({ expect }) => {
    const response = await client.sendRequest(mythicKeystoneSeasonIndex(namespace));
    const parsedIndex = mythicKeystoneSeasonIndexResponseSchema.safeParse(response);
    if (!parsedIndex.success) {
      console.error('Classic Mythic Keystone season index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const seasonId = parsedIndex.data!.current_season.id;
    const detail = await client.sendRequest(mythicKeystoneSeason(namespace, seasonId));
    const parsedDetail = mythicKeystoneSeasonResponseSchema.safeParse(detail);
    if (!parsedDetail.success) {
      console.error('Classic Mythic Keystone season validation failed:', seasonId, prettifyError(parsedDetail.error));
    }
    expect(parsedDetail.success).toBe(true);
  });
});
