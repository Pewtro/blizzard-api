import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterEquipmentSummary } from '@blizzard-api/wow/character-equipment';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterEquipmentSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character equipment integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches equipment summary for a character', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(characterEquipmentSummary(realm, character));
    const parsed = characterEquipmentSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character equipment summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
