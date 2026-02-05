import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  azeriteEssenceIndexResponseSchema,
  azeriteEssenceMediaResponseSchema,
  azeriteEssenceResponseSchema,
  azeriteEssenceSearchResponseSchema,
} from '../../../generated/schemas/wow/azerite-essence';

describe('wow azerite-essence integration', () => {
  it('validates azerite essence index and search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const index = await client.sendRequest(wow.azeriteEssenceIndex());
    const parsedIndex = azeriteEssenceIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Azerite essence index validation failed:', treeifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const search = await client.sendRequest(wow.azeriteEssenceSearch({ _page: 1 }));
    const parsedSearch = azeriteEssenceSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Azerite essence search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    // Fetch some detail and media for a few essences from the index
    const essences = parsedIndex.success ? parsedIndex.data.azerite_essences : [];
    const sampleSize = Math.min(5, essences.length);
    const sampled =
      essences.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          essences.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : essences.slice(0, sampleSize);

    const detailRequests: Array<Promise<unknown>> = [];
    const mediaRequests: Array<Promise<unknown>> = [];
    for (const essence of sampled) {
      detailRequests.push(client.sendRequest(wow.azeriteEssence(essence.id)));
      mediaRequests.push(client.sendRequest(wow.azeriteEssenceMedia(essence.id)));
    }

    const details = await Promise.all(detailRequests);
    for (const d of details) {
      const parsed = azeriteEssenceResponseSchema.safeParse(d);
      if (!parsed.success) {
        console.error('Azerite essence detail validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }

    const medias = await Promise.all(mediaRequests);
    for (const m of medias) {
      const parsed = azeriteEssenceMediaResponseSchema.safeParse(m);
      if (!parsed.success) {
        console.error('Azerite essence media validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    }
  });
});
