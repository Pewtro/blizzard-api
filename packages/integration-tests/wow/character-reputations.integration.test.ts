import { characterReputationsSummary } from '@blizzard-api/wow/character-reputations';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterReputationsSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-reputations integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character reputations', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterReputationsSummary(realm, character));
    const parsed = characterReputationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character reputations validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
