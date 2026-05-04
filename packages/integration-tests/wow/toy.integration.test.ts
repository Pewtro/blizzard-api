import { createBlizzardApiClient } from '@blizzard-api/client';
import { toy, toyIndex } from '@blizzard-api/wow/toy';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { toyIndexResponseSchema, toyResponseSchema } from '../../../generated/schemas/wow/toy';

describe('wow toy integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates toy index and fetches toy detail', async ({ expect }) => {
    const index = await client.sendRequest(toyIndex());
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

    const requests = [];

    for (const t of sampled) {
      requests.push(client.sendRequest(toy(t.id)));
    }
    const responses = await Promise.all(requests);
    for (const toyResp of responses) {
      const parsedToy = toyResponseSchema.safeParse(toyResp);
      if (!parsedToy.success) {
        console.error('Toy detail validation failed for id', toyResp.id, treeifyError(parsedToy.error));
      }
      expect(parsedToy.success).toBe(true);
    }
  });
});
