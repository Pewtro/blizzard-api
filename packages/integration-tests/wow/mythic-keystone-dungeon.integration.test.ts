import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  mythicKeystoneDungeonIndexResponseSchema,
  mythicKeystoneDungeonResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-dungeon';

describe('wow mythic-keystone-dungeon integration', () => {
  it('validates dungeon index and details', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.mythicKeystoneDungeonIndex());
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
      requests.push(client.sendRequest(wow.mythicKeystoneDungeon(d.id)));
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
});
