import { createBlizzardApiClient } from '@blizzard-api/client';
import {
  mythicKeystoneAffix,
  mythicKeystoneAffixIndex,
  mythicKeystoneAffixMedia,
} from '@blizzard-api/wow/mythic-keystone-affix';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  mythicKeystoneAffixIndexResponseSchema,
  mythicKeystoneAffixMediaResponseSchema,
  mythicKeystoneAffixResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-affix';

describe('wow mythic-keystone-affix integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates index, detail and media', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneAffixIndex());
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
      detailRequests.push(client.sendRequest(mythicKeystoneAffix(a.id)));
      mediaRequests.push(client.sendRequest(mythicKeystoneAffixMedia(a.id)));
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
