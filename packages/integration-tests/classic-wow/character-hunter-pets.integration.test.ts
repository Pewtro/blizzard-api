import { characterHunterPetsSummary } from '@blizzard-api/classic-wow/character-hunter-pets';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterHunterPetsSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow character hunter pets integration', async () => {
  const client = await getIntegrationTestClient();

  test('fetches hunter pets summary for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterHunterPetsSummary('profile-classic', realm, character));
    const parsed = characterHunterPetsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character hunter pets summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
