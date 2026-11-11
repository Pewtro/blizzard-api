import { wowToken } from '@blizzard-api/classic-wow/wow-token';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { wowTokenResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow wow-token integration', async () => {
  const client = await getIntegrationTestClient();

  test('validates the WoW token response for progression Classic', async ({ expect }) => {
    const response = await client.sendRequest(wowToken('dynamic-classic'));
    const parsed = wowTokenResponseSchema.safeParse(response);
    if (!parsed.success) {
      console.error('Classic WoW token validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
