import { powerType, powerTypeIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomSample } from '../utils/random';

describe('wow-forever power type integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the power type index and details', async ({ expect }) => {
    const index = await client.sendRequest(powerTypeIndex());
    const parsedIndex = powerTypeIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Power type index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const sampled = getRandomSample(parsedIndex.data?.power_types, 5);
    const responses = await Promise.all(
      sampled.map((powerTypeEntry) => client.sendRequest(powerType(powerTypeEntry.id))),
    );

    for (const response of responses) {
      const parsedPowerType = powerTypeResponseSchema.safeParse(response);
      if (!parsedPowerType.success) {
        console.error('Power type validation failed for id', response?.id, prettifyError(parsedPowerType.error));
      }
      expect(parsedPowerType.success).toBe(true);
    }
  });
});
