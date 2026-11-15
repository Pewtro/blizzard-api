import { region, regionIndex } from '@blizzard-api/classic-wow/region';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { regionIndexResponseSchema, regionResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('classic-wow region integration', async () => {
  const client = await getIntegrationTestClient();

  test.each(['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const)(
    'validates the region index and details for %s',
    async (namespace) => {
      const index = await client.sendRequest(regionIndex(namespace));
      const parsedIndex = regionIndexResponseSchema.safeParse(index);
      if (!parsedIndex.success) {
        console.error('Region index validation failed:', prettifyError(parsedIndex.error));
      }
      expect(parsedIndex.success).toBe(true);

      const regionEntry = getRandomItem(parsedIndex.data!.regions)!;
      const regionId = Number(/region\/(\d+)/.exec(regionEntry.href)?.[1]);
      expect(regionId).toBeTypeOf('number');

      const resp = await client.sendRequest(region(namespace, regionId));
      const parsed = regionResponseSchema.safeParse(resp);
      if (!parsed.success) {
        console.error('Region validation failed:', regionId, prettifyError(parsed.error));
      }
      expect(parsed.success).toBe(true);
    },
  );
});
