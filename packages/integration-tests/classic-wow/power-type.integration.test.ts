import { powerType, powerTypeIndex } from '@blizzard-api/classic-wow/power-type';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { powerTypeIndexResponseSchema, powerTypeResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('classic-wow power type integration', async () => {
  const client = await getIntegrationTestClient();
  test.each(['static-classic1x', 'static-classic', 'static-classicann'] as const)(
    'validates the power type index and details for %s',
    async (namespace) => {
      const index = await client.sendRequest(powerTypeIndex(namespace));
      const parsedIndex = powerTypeIndexResponseSchema.safeParse(index);
      if (!parsedIndex.success) {
        console.error('Power type index validation failed:', prettifyError(parsedIndex.error));
      }
      expect(parsedIndex.success).toBe(true);

      const powerTypeId = getRandomItem(parsedIndex.data!.power_types)!.id;
      const resp = await client.sendRequest(powerType(namespace, powerTypeId));
      const parsed = powerTypeResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Power type validation failed:', powerTypeId, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    },
  );
});
