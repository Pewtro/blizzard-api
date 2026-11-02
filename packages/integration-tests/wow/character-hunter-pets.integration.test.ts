import { characterHunterPetsSummary } from '@blizzard-api/wow/character-hunter-pets';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterHunterPetsSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-hunter-pets integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character hunter pets', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterHunterPetsSummary(realm, character));
    const parsed = characterHunterPetsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character hunter pets validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
