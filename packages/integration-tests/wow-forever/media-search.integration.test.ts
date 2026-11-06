import { mediaSearch } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { mediaSearchResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';

describe('wow-forever media search integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the media search', async ({ expect }) => {
    const search = await client.sendRequest(mediaSearch({ _page: 1, orderby: 'id' }));
    const parsedSearch = mediaSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Media search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
