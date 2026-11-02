import { characterStatisticsSummary } from '@blizzard-api/classic-wow/character-statistics';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterStatisticsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow character statistics integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches statistics summary for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterStatisticsSummary('profile-classic', realm, character));
    const parsed = characterStatisticsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character statistics summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });

  test('fetches statistics summary for a character on classic anniversary', async ({ expect }) => {
    const realm = 'thunderstrike';
    const character = 'kytahela';

    const resp = await client.sendRequest(characterStatisticsSummary('profile-classicann', realm, character));
    const parsed = characterStatisticsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character statistics summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
