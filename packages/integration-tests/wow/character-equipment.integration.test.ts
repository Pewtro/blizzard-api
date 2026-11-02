import { characterEquipmentSummary } from '@blizzard-api/wow/character-equipment';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterEquipmentSummaryResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character equipment integration', async () => {
  const client = await getIntegrationTestClient();
  test('fetches equipment summary for a character', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(characterEquipmentSummary(realm, character));
    const parsed = characterEquipmentSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character equipment summary validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
