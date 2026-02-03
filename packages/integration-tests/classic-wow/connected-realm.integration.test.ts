import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { connectedRealmIndexResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow connected realm integration', () => {
  it('validates connected realm index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(classicWow.connectedRealmIndex('dynamic-classic1x'));
    const parsed = connectedRealmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
