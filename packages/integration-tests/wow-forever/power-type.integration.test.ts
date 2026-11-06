import { powerType, powerTypeIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';

describe('wow-forever power type integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the power type index and details', async ({ expect }) => {
    const index = await client.sendRequest(powerTypeIndex());
    const parsedIndex = powerTypeIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Power type index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    const powerTypes = parsedIndex.success ? parsedIndex.data.power_types : [];
    const responses = await Promise.all(
      powerTypes.map((powerTypeEntry) => client.sendRequest(powerType(powerTypeEntry.id))),
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
