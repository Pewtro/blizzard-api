import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterStatisticsSummary } from '@blizzard-api/wow/character-statistics';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterStatisticsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character statistics integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches statistics summary for a character', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(characterStatisticsSummary(realm, character));
    const parsed = characterStatisticsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character statistics summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
