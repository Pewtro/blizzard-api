import { region, regionIndex } from '@blizzard-api/wow-forever';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { regionIndexResponseSchema, regionResponseSchema } from '../../../generated/schemas/wow-forever';
import { getIntegrationTestClient } from '../utils/client';

describe('wow-forever region integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the region index and a linked region', async ({ expect }) => {
    const index = await client.sendRequest(regionIndex());
    const parsedIndex = regionIndexResponseSchema.safeParse(index);
    if (!parsedIndex.success) {
      console.error('Region index validation failed:', prettifyError(parsedIndex.error));
    }
    expect(parsedIndex.success).toBe(true);

    //The region id differs per origin (91 is CAMWOW North America, 93 is CAMWOW Europe),
    //so the id is taken from the href that the index links to.
    const href = parsedIndex.data?.regions[0]?.href;
    if (href === undefined) return;
    const regionId = Number(/\/region\/(\d+)/.exec(href)?.[1]);
    expect(regionId).toBeGreaterThan(0);

    const response = await client.sendRequest(region(regionId));
    const parsedRegion = regionResponseSchema.safeParse(response);
    if (!parsedRegion.success) {
      console.error('Region validation failed:', prettifyError(parsedRegion.error));
    }
    expect(parsedRegion.success).toBe(true);
    if (parsedRegion.success) {
      expect(parsedRegion.data.patch_string).toBe('1.60.1');
    }
  });
});
