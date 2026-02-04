import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  pvpTierIndexResponseSchema,
  pvpTierMediaResponseSchema,
  pvpTierResponseSchema,
} from '../../../generated/schemas/wow/pvp-tier';

describe('wow pvp-tier integration', () => {
  it('validates pvp tier index, detail and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.pvpTierIndex());
    const parsedIndex = pvpTierIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('PvP tier index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const tiers = parsedIndex.success ? parsedIndex.data.tiers : [];
    const sampleSize = Math.min(5, tiers.length);
    const sampled =
      tiers.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          tiers.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : tiers.slice(0, sampleSize);

    const detailRequests = [];
    const mediaRequests = [];
    for (const t of sampled) {
      detailRequests.push(client.sendRequest(wow.pvpTier(t.id)));
      mediaRequests.push(client.sendRequest(wow.pvpTierMedia(t.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = pvpTierResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('PvP tier detail validation failed for id', d.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = pvpTierMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('PvP tier media validation failed for id', m.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  }, 30_000);
});
