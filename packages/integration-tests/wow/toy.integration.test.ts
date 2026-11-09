import { toy, toyIndex } from '@blizzard-api/wow/toy';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { toyIndexResponseSchema, toyResponseSchema } from '../../../generated/schemas/wow/toy';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow toy integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates toy index and fetches toy detail', async ({ expect }) => {
    const index = await client.sendRequest(toyIndex());
    const parsed = toyIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Toy index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    // Pick up to 5 toys at random from the index to fetch details
    const sampled = getRandomSample(parsed.data?.toys, 5);

    const requests = Array.from(sampled, (t) => client.sendRequest(toy(t.id)));
    const responses = await Promise.all(requests);
    for (const toyResp of responses) {
      const parsedToy = toyResponseSchema.safeParse(toyResp);
      if (!parsedToy.success) {
        console.error('Toy detail validation failed for id', toyResp?.id, prettifyError(parsedToy.error));
      }
      expect(parsedToy.success).toBe(true);
    }
  });
});
