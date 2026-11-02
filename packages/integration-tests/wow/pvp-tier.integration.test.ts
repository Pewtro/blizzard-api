import { pvpTier, pvpTierIndex, pvpTierMedia } from '@blizzard-api/wow/pvp-tier';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  pvpTierIndexResponseSchema,
  pvpTierMediaResponseSchema,
  pvpTierResponseSchema,
} from '../../../generated/schemas/wow/pvp-tier';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow pvp-tier integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates pvp tier index, detail and media', async ({ expect }) => {
    const index = await client.sendRequest(pvpTierIndex());
    const parsedIndex = pvpTierIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('PvP tier index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const tiers = parsedIndex.success ? parsedIndex.data.tiers : [];
    const sampled = getRandomSample(tiers, 5);

    const detailRequests = [];
    const mediaRequests = [];
    for (const t of sampled) {
      detailRequests.push(client.sendRequest(pvpTier(t.id)));
      mediaRequests.push(client.sendRequest(pvpTierMedia(t.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = pvpTierResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('PvP tier detail validation failed for id', d?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = pvpTierMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('PvP tier media validation failed for id', m?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
