import { createBlizzardApiClient } from '@blizzard-api/client';
import { region, regionIndex } from '@blizzard-api/wow/region';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { regionIndexResponseSchema, regionResponseSchema } from '../../../generated/schemas/wow';

describe('wow region integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates region index and region detail', async ({ expect }) => {
    const resp = await client.sendRequest(regionIndex());
    const parsed = regionIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Region index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);

    const regionResp = await client.sendRequest(region(3));
    const parsedRegion = regionResponseSchema.safeParse(regionResp);
    if (!parsedRegion.success) {
      console.error('Region detail validation failed:', treeifyError(parsedRegion.error));
    }
    expect(parsedRegion.success).toBe(true);
  });
});
