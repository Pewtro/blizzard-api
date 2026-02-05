import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { wowTokenResponseSchema } from '../../../generated/schemas/wow/wow-token';

describe('wow wow-token integration', () => {
  it('validates wow token response', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const token = await client.sendRequest(wow.wowToken());
    const parsed = wowTokenResponseSchema.safeParse(token);
    if (!parsed.success) {
      console.error('Wow token validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
