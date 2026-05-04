import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterReputationsSummary } from '@blizzard-api/wow/character-reputations';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterReputationsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-reputations integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character reputations', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterReputationsSummary(realm, character));
    const parsed = characterReputationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character reputations validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
