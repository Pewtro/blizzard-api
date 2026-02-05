import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  mythicKeystoneAffixIndexResponseSchema,
  mythicKeystoneAffixMediaResponseSchema,
  mythicKeystoneAffixResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-affix';

describe('wow mythic-keystone-affix integration', () => {
  it('validates index, detail and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.mythicKeystoneAffixIndex());
    const parsedIndex = mythicKeystoneAffixIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mythic keystone affix index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const affixes = parsedIndex.success ? parsedIndex.data.affixes : [];
    const sampleSize = Math.min(5, affixes.length);
    const sampled =
      affixes.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          affixes.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : affixes.slice(0, sampleSize);

    const detailRequests = [];
    const mediaRequests = [];

    for (const a of sampled) {
      detailRequests.push(client.sendRequest(wow.mythicKeystoneAffix(a.id)));
      mediaRequests.push(client.sendRequest(wow.mythicKeystoneAffixMedia(a.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = mythicKeystoneAffixResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Mythic keystone affix detail validation failed for id', d.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = mythicKeystoneAffixMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('Mythic keystone affix media validation failed for id', m.id, treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
