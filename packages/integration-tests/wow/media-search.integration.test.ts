import { createBlizzardApiClient } from '@blizzard-api/client';
import { mediaSearch } from '@blizzard-api/wow/media-search';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mediaSearchResponseSchema } from '../../../generated/schemas/wow';

describe('wow media search integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('performs a media search and validates items', async ({ expect }) => {
    const search = await client.sendRequest(mediaSearch({ _page: 1 }));
    const parsedSearch = mediaSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Media search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
