import { region, regionIndex } from '@blizzard-api/classic-wow/region';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { regionIndexResponseSchema, regionResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow region integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('validates region index', async ({ expect }) => {
    const resp = await client.sendRequest(regionIndex('dynamic-classic1x'));
    const parsed = regionIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Region index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('validates region details', async ({ expect }) => {
    const resp = await client.sendRequest(region('dynamic-classic1x', 83));
    const parsed = regionResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Region validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
