import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { toyIndexResponseSchema, toyResponseSchema } from '../../../generated/schemas/wow/toy';

describe('wow toy integration', () => {
  it('validates toy index and fetches toy detail', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.toyIndex());
    const parsed = toyIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Toy index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 toys at random from the index to fetch details
    const toys = parsed.success ? parsed.data.toys : [];
    const sampleSize = Math.min(5, toys.length);
    const sampled =
      toys.length > sampleSize
        ? // eslint-disable-next-line sonarjs/pseudo-random
          toys.toSorted(() => 0.5 - Math.random()).slice(0, sampleSize)
        : toys.slice(0, sampleSize);

    for (const t of sampled) {
      const toy = await client.sendRequest(wow.toy(t.id));
      const parsedToy = toyResponseSchema.safeParse(toy);
      if (!parsedToy.success) {
        console.error('Toy detail validation failed for id', t.id, treeifyError(parsedToy.error));
      }
      console.log('paredToy', parsedToy.error);
      console.log('toy', toy);
      expect(parsedToy.success).toBe(true);
    }
  }, 30_000);
});
