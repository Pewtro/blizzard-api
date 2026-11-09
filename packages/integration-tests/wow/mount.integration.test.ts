import { mount, mountIndex, mountSearch } from '@blizzard-api/wow/mount';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  mountIndexResponseSchema,
  mountResponseSchema,
  mountSearchResponseSchema,
} from '../../../generated/schemas/wow/mount';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow mount integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates mount index and fetches mount detail', async ({ expect }) => {
    const index = await client.sendRequest(mountIndex());
    const parsed = mountIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mount index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 mounts at random from the index to fetch details
    const sampled = getRandomSample(parsed.data?.mounts, 5);

    const requests = Array.from(sampled, (t) => client.sendRequest(mount(t.id)));
    const responses = await Promise.all(requests);
    for (const mountResp of responses) {
      const parsedmount = mountResponseSchema.safeParse(mountResp);
      if (!parsedmount.success) {
        console.error('mount detail validation failed for id', mountResp?.id, prettifyError(parsedmount.error));
      }
      expect(parsedmount.success).toBe(true);
    }
  });

  test('validates mount search', async ({ expect }) => {
    const search = await client.sendRequest(mountSearch({ _page: 1, locale: 'en_GB', name: 'Horse' }));
    const parsed = mountSearchResponseSchema.safeParse(search);
    if (!parsed.success) {
      console.error('Mount search validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
