import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mediaSearchResponseSchema } from '../../../generated/schemas/wow';

describe('wow media search integration', () => {
  it('performs a media search and validates items', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const search = await client.sendRequest(wow.mediaSearch({ _page: 1 }));
    const parsedSearch = mediaSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Media search validation failed:', treeifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
