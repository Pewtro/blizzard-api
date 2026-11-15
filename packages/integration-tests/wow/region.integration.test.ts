import { region, regionIndex } from '@blizzard-api/wow/region';
import { describe, expect, test } from 'vitest';
import { prettifyError } from 'zod';
import { regionIndexResponseSchema, regionResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow region integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates region index and region detail', async () => {
    const resp = await client.sendRequest(regionIndex());
    const parsed = regionIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Region index validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const regionEntry = getRandomItem(parsed.data!.regions)!;
    const regionId = Number(/region\/(\d+)/.exec(regionEntry.href)?.[1]);
    expect(regionId).toBeTypeOf('number');

    const regionResp = await client.sendRequest(region(regionId));
    const parsedRegion = regionResponseSchema.safeParse(regionResp);
    if (!parsedRegion.success) {
      console.error('Region detail validation failed:', regionId, prettifyError(parsedRegion.error));
    }
    expect(parsedRegion.success).toBe(true);
  });
});
