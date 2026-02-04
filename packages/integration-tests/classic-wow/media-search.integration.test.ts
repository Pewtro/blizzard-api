import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mediaSearchResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow media search integration', () => {
  it('performs a media search and validates items', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const search = await client.sendRequest(classicWow.mediaSearch('static-classic', { _page: 1 }));
    const parsedSearch = mediaSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Media search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);

    const eraSearch = await client.sendRequest(classicWow.mediaSearch('static-classic1x', { _page: 1 }));
    const parsedEraSearch = mediaSearchResponseSchema.safeParse(eraSearch);
    if (!parsedEraSearch.success) {
      console.error('Media search validation failed:', treeifyError(parsedEraSearch.error));
    }
    expect(parsedEraSearch.success).toBe(true);
  }, 30_000);
});
