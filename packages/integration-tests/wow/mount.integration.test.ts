import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { mountIndexResponseSchema, mountResponseSchema } from '../../../generated/schemas/wow/mount';

describe('wow mount integration', () => {
  it('validates mount index and fetches mount detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.mountIndex());
    const parsed = mountIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Mount index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 mounts at random from the index to fetch details
    const mounts = parsed.success ? parsed.data.mounts : [];
    const sampleSize = Math.min(5, mounts.length);
    const sampled =
      mounts.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          mounts.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : mounts.slice(0, sampleSize);

    const requests = [];

    for (const t of sampled) {
      requests.push(client.sendRequest(wow.mount(t.id)));
    }
    const responses = await Promise.all(requests);
    for (const mount of responses) {
      const parsedmount = mountResponseSchema.safeParse(mount);
      if (!parsedmount.success) {
        console.error('mount detail validation failed for id', mount.id, treeifyError(parsedmount.error));
      }
      expect(parsedmount.success).toBe(true);
    }
  }, 30_000);
});
