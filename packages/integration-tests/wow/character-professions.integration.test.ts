import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterProfessionsSummary } from '@blizzard-api/wow/character-professions';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterProfessionsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-professions integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character professions', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterProfessionsSummary(realm, character));
    const parsed = characterProfessionsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character professions validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
