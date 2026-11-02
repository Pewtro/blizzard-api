import { characterTitlesSummary } from '@blizzard-api/wow/character-titles';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterTitlesSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-titles integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character titles', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterTitlesSummary(realm, character));
    const parsed = characterTitlesSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character titles validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
