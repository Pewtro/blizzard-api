import { characterStatisticsSummary } from '@blizzard-api/wow/character-statistics';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterStatisticsSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character statistics integration', async () => {
  const client = await getIntegrationTestClient();
  test('fetches statistics summary for a character', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(characterStatisticsSummary(realm, character));
    const parsed = characterStatisticsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character statistics summary validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
