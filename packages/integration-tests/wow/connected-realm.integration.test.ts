import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { connectedRealmIndexResponseSchema } from '../../../generated/schemas/wow';

describe('wow connected realm integration', () => {
  it('validates connected realm index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.connectedRealmIndex());
    const parsed = connectedRealmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
