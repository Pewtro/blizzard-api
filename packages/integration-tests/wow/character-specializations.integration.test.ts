import { characterSpecializationsSummary } from '@blizzard-api/wow/character-specializations';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-specializations integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character specializations', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterSpecializationsSummary(realm, character));
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character specializations validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
