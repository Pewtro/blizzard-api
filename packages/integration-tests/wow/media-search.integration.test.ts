import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mediaSearchResponseItemSchema } from '../../../generated/schemas/wow';

describe('wow media search integration', () => {
  it('performs a media search and validates items', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.mediaSearch({ _page: 1 }));
    const first = Array.isArray(resp.results) ? resp.results[0] : undefined;
    if (first) {
      const parsed = mediaSearchResponseItemSchema.safeParse(first);
      if (!parsed.success) {
        console.error('Media search item validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    } else {
      expect(resp).toBeDefined();
    }
  }, 30_000);
});
