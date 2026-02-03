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
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    // Use a minimal search (skipped by default; may require tuning)
    const resp = await client.sendRequest(classicWow.mediaSearch('static-classic1x', { _page: 1 }));
    // `resp` is a SearchResponse; validate first item if present
    const first = Array.isArray(resp.results) ? resp.results[0] : undefined;
    if (first) {
      const parsed = mediaSearchResponseSchema.safeParse(first);
      if (!parsed.success) {
        console.error('Media search item validation failed:', treeifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    } else {
      // No results is acceptable for a generic search; assert shape
      expect(resp).toBeDefined();
    }
  }, 30_000);
});
