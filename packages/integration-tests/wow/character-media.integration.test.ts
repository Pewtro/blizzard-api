import { characterMediaSummary } from '@blizzard-api/wow/character-media';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterMediaSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character media integration', async () => {
  const client = await getIntegrationTestClient();
  test('fetches media summary for a character', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(characterMediaSummary(realm, character));
    const parsed = characterMediaSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character media summary validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
