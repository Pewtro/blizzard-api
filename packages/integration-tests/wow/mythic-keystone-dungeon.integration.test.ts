import { createBlizzardApiClient } from '@blizzard-api/client';
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
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  mythicKeystoneDungeonIndexResponseSchema,
  mythicKeystoneDungeonResponseSchema,
  mythicKeystoneIndexResponseSchema,
  mythicKeystonePeriodIndexResponseSchema,
  mythicKeystonePeriodResponseSchema,
  mythicKeystoneSeasonIndexResponseSchema,
  mythicKeystoneSeasonResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-dungeon';

describe('wow mythic-keystone-dungeon integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('validates dungeon index and details', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneDungeonIndex());
    const parsed = mythicKeystoneDungeonIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone dungeon index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const dungeons = parsed.success ? parsed.data.dungeons : [];
    const sampleSize = Math.min(5, dungeons.length);
    const sampled =
      dungeons.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          dungeons.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : dungeons.slice(0, sampleSize);

    const requests = [];
    for (const d of sampled) {
      requests.push(client.sendRequest(mythicKeystoneDungeon(d.id)));
    }

    const responses = await Promise.all(requests);
    for (const r of responses) {
      const parsedResp = mythicKeystoneDungeonResponseSchema.safeParse(r);
      if (!parsedResp.success) {
        console.error('Mythic keystone dungeon detail validation failed for id', r.id, treeifyError(parsedResp.error));
      }
      expect(parsedResp.success).toBe(true);
    }
  });

  test('validates mythic keystone index', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneIndex());
    const parsed = mythicKeystoneIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
  test('validates mythic keystone period index and period details', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystonePeriodIndex());
    const parsed = mythicKeystonePeriodIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone period index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const periods = parsed.success ? parsed.data.periods : [];
    const sampleSize = Math.min(5, periods.length);
    const sampled =
      periods.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          periods.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : periods.slice(0, sampleSize);

    const requests = [];
    for (const p of sampled) {
      requests.push(client.sendRequest(mythicKeystonePeriod(p.id)));
    }
    const responses = await Promise.all(requests);
    for (const r of responses) {
      const parsedResp = mythicKeystonePeriodResponseSchema.safeParse(r);
      if (!parsedResp.success) {
        console.error('Mythic keystone period detail validation failed for id', r.id, treeifyError(parsedResp.error));
      }
      expect(parsedResp.success).toBe(true);
    }
  });
  test('validates mythic keystone season index and season details', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneSeasonIndex());
    const parsed = mythicKeystoneSeasonIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mythic keystone season index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const seasons = parsed.success ? parsed.data.seasons : [];
    const sampleSize = Math.min(5, seasons.length);
    const sampled =
      seasons.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          seasons.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : seasons.slice(0, sampleSize);

    const requests = [];
    for (const s of sampled) {
      requests.push(client.sendRequest(mythicKeystoneSeason(s.id)));
    }

    const responses = await Promise.all(requests);
    for (const r of responses) {
      const parsedResp = mythicKeystoneSeasonResponseSchema.safeParse(r);
      if (!parsedResp.success) {
        console.error('Mythic keystone season detail validation failed for id', r.id, treeifyError(parsedResp.error));
      }
      expect(parsedResp.success).toBe(true);
    }
  });
});
