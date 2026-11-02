import { mediaSearch } from '@blizzard-api/wow/media-search';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { mediaSearchResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow media search integration', async () => {
  const client = await getIntegrationTestClient();
  test('performs a media search and validates items', async ({ expect }) => {
    const search = await client.sendRequest(mediaSearch({ _page: 1 }));
    const parsedSearch = mediaSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Media search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
