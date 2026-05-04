import { createBlizzardApiClient } from '@blizzard-api/client';
import { wowToken } from '@blizzard-api/wow/wow-token';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { wowTokenResponseSchema } from '../../../generated/schemas/wow/wow-token';

describe('wow wow-token integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates wow token response', async ({ expect }) => {
    const token = await client.sendRequest(wowToken());
    const parsed = wowTokenResponseSchema.safeParse(token);
    if (!parsed.success) {
      console.error('Wow token validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
