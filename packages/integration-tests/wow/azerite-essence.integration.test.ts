import {
  azeriteEssence,
  azeriteEssenceIndex,
  azeriteEssenceMedia,
  azeriteEssenceSearch,
} from '@blizzard-api/wow/azerite-essence';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  azeriteEssenceIndexResponseSchema,
  azeriteEssenceMediaResponseSchema,
  azeriteEssenceResponseSchema,
  azeriteEssenceSearchResponseSchema,
} from '../../../generated/schemas/wow/azerite-essence';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow azerite-essence integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates azerite essence index and search', async ({ expect }) => {
    const index = await client.sendRequest(azeriteEssenceIndex());
    const parsedIndex = azeriteEssenceIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Azerite essence index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const search = await client.sendRequest(azeriteEssenceSearch({ _page: 1 }));
    const parsedSearch = azeriteEssenceSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Azerite essence search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    // Fetch some detail and media for a few essences from the index
    const sampled = getRandomSample(parsedIndex.data?.azerite_essences, 5);

    const detailRequests = [];
    const mediaRequests = [];
    for (const essence of sampled) {
      detailRequests.push(client.sendRequest(azeriteEssence(essence.id)));
      mediaRequests.push(client.sendRequest(azeriteEssenceMedia(essence.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = azeriteEssenceResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Azerite essence detail validation failed:', d?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = azeriteEssenceMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('Azerite essence media validation failed:', m?.id, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
