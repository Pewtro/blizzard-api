import {
  mythicKeystoneDungeon,
  mythicKeystoneDungeonIndex,
  mythicKeystoneIndex,
  mythicKeystonePeriod,
  mythicKeystonePeriodIndex,
  mythicKeystoneSeason,
  mythicKeystoneSeasonIndex,
} from '@blizzard-api/wow/mythic-keystone-dungeon';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  mythicKeystoneDungeonIndexResponseSchema,
  mythicKeystoneDungeonResponseSchema,
  mythicKeystoneIndexResponseSchema,
  mythicKeystonePeriodIndexResponseSchema,
  mythicKeystonePeriodResponseSchema,
  mythicKeystoneSeasonIndexResponseSchema,
  mythicKeystoneSeasonResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-dungeon';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow mythic-keystone-dungeon integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates dungeon index and details', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneDungeonIndex());
    const parsed = mythicKeystoneDungeonIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone dungeon index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const dungeons = parsed.success ? parsed.data.dungeons : [];
    const sampled = getRandomSample(dungeons, 5);

    const requests = Array.from(sampled, (d) => client.sendRequest(mythicKeystoneDungeon(d.id)));

    const responses = await Promise.all(requests);
    for (const r of responses) {
      const parsedResp = mythicKeystoneDungeonResponseSchema.safeParse(r);
      if (!parsedResp.success) {
        console.error(
          'Mythic keystone dungeon detail validation failed for id',
          r?.id,
          prettifyError(parsedResp.error),
        );
      }
      expect(parsedResp.success).toBe(true);
    }
  });

  test('validates mythic keystone index', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneIndex());
    const parsed = mythicKeystoneIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
  test('validates mythic keystone period index and period details', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystonePeriodIndex());
    const parsed = mythicKeystonePeriodIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone period index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const periods = parsed.success ? parsed.data.periods : [];
    const sampled = getRandomSample(periods, 5);

    const requests = Array.from(sampled, (p) => client.sendRequest(mythicKeystonePeriod(p.id)));
    const responses = await Promise.all(requests);
    for (const r of responses) {
      const parsedResp = mythicKeystonePeriodResponseSchema.safeParse(r);
      if (!parsedResp.success) {
        console.error('Mythic keystone period detail validation failed for id', r?.id, prettifyError(parsedResp.error));
      }
      expect(parsedResp.success).toBe(true);
    }
  });
  test('validates mythic keystone season index and season details', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneSeasonIndex());
    const parsed = mythicKeystoneSeasonIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone season index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const seasons = parsed.success ? parsed.data.seasons : [];
    const sampled = getRandomSample(seasons, 5);

    const requests = Array.from(sampled, (s) => client.sendRequest(mythicKeystoneSeason(s.id)));

    const responses = await Promise.all(requests);
    for (const r of responses) {
      const parsedResp = mythicKeystoneSeasonResponseSchema.safeParse(r);
      if (!parsedResp.success) {
        console.error('Mythic keystone season detail validation failed for id', r?.id, prettifyError(parsedResp.error));
      }
      expect(parsedResp.success).toBe(true);
    }
  });
});
