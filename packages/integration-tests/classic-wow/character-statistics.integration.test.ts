import { characterStatisticsSummary } from '@blizzard-api/classic-wow/character-statistics';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterStatisticsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character statistics integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });

  test('fetches statistics summary for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterStatisticsSummary('profile-classic', realm, character));
    const parsed = characterStatisticsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character statistics summary validation failed:', realm, character, treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
