import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { powerTypeIndexResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow power type integration', () => {
  it('validates power type index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.powerTypeIndex('static-classic1x'));
    const parsed = powerTypeIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Power type index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
