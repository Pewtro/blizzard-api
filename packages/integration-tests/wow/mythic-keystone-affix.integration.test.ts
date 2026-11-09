import {
  mythicKeystoneAffix,
  mythicKeystoneAffixIndex,
  mythicKeystoneAffixMedia,
} from '@blizzard-api/wow/mythic-keystone-affix';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  mythicKeystoneAffixIndexResponseSchema,
  mythicKeystoneAffixMediaResponseSchema,
  mythicKeystoneAffixResponseSchema,
} from '../../../generated/schemas/wow/mythic-keystone-affix';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow mythic-keystone-affix integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates index, detail and media', async ({ expect }) => {
    const index = await client.sendRequest(mythicKeystoneAffixIndex());
    const parsedIndex = mythicKeystoneAffixIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mythic keystone affix index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampled = getRandomSample(parsedIndex.data?.affixes, 5);

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
        console.error('Mythic keystone affix detail validation failed for id', d?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = mythicKeystoneAffixMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('Mythic keystone affix media validation failed for id', m?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
