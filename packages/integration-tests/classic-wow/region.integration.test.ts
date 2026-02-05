import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { regionIndexResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow region integration', () => {
  it('validates region index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.regionIndex('dynamic-classic1x'));
    const parsed = regionIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Region index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
