import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { realmIndexResponseSchema } from '../../../generated/schemas/wow';

describe('wow realm integration', () => {
  it('validates realm index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const resp = await client.sendRequest(wow.realmIndex());
    const parsed = realmIndexResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Realm index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
