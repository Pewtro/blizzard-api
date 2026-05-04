import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterHunterPetsSummary } from '@blizzard-api/wow/character-hunter-pets';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterHunterPetsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-hunter-pets integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character hunter pets', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterHunterPetsSummary(realm, character));
    const parsed = characterHunterPetsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character hunter pets validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
