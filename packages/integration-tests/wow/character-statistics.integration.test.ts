import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterStatisticsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character statistics integration', () => {
  it('fetches statistics summary for a character', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(wow.characterStatisticsSummary(realm, character));
    const parsed = characterStatisticsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character statistics summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
