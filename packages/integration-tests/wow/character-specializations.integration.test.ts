import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterSpecializationsSummary } from '@blizzard-api/wow/character-specializations';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-specializations integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character specializations', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterSpecializationsSummary(realm, character));
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character specializations validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
