import { wowToken } from '@blizzard-api/wow/wow-token';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { wowTokenResponseSchema } from '../../../generated/schemas/wow/wow-token';
import { getIntegrationTestClient } from '../utils/client';

describe('wow wow-token integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates wow token response', async ({ expect }) => {
    const token = await client.sendRequest(wowToken());
    const parsed = wowTokenResponseSchema.safeParse(token);
    if (!parsed.success) {
      console.error('Wow token validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
