import { mount, mountIndex, mountSearch } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  mountIndexResponseSchema,
  mountResponseSchema,
  mountSearchResponseSchema,
} from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever mount integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the mount index and sampled mounts', async ({ expect }) => {
    const index = await client.sendRequest(mountIndex());
    const parsedIndex = mountIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Mount index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampled = getRandomSample(parsedIndex.data?.mounts, 5);
    const responses = await Promise.all(Array.from(sampled, (mountEntry) => client.sendRequest(mount(mountEntry.id))));

    for (const response of responses) {
      const parsedMount = mountResponseSchema.safeParse(response);
      if (!parsedMount.success) {
        console.error('Mount validation failed for id', response?.id, prettifyError(parsedMount.error));
      }
      expect(parsedMount.success).toBe(true);
    }
  });

  test('validates the mount search', async ({ expect }) => {
    const search = await client.sendRequest(mountSearch({ _page: 1, locale: 'en_US', name: 'stag' }));
    const parsedSearch = mountSearchResponseSchema.safeParse(search);
    if (!parsedSearch.success) {
      console.error('Mount search validation failed:', prettifyError(parsedSearch.error));
    }
    expect(parsedSearch.success).toBe(true);
  });
});
