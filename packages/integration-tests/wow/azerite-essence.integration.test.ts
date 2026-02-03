import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  azeriteEssenceIndexResponseSchema,
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
  }, 30_000);
});
