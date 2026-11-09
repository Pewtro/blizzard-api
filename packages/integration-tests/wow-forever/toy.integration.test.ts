import { toy, toyIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { toyIndexResponseSchema, toyResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever toy integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the toy index and sampled toys', async ({ expect }) => {
    const index = await client.sendRequest(toyIndex());
    const parsedIndex = toyIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Toy index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampled = getRandomSample(parsedIndex.data?.toys, 5);
    const responses = await Promise.all(Array.from(sampled, (toyEntry) => client.sendRequest(toy(toyEntry.id))));

    for (const response of responses) {
      const parsedToy = toyResponseSchema.safeParse(response);
      if (!parsedToy.success) {
        console.error('Toy validation failed for id', response?.id, prettifyError(parsedToy.error));
      }
      expect(parsedToy.success).toBe(true);
    }
  });
});
