import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { itemClassIndexResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow item integration', () => {
  it('validates item class index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.itemClassIndex('static-classic1x'));
    const parsed = itemClassIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Item class index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
