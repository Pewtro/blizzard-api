import { characterEquipmentSummary } from '@blizzard-api/classic-wow/character-equipment';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterEquipmentSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character equipment integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches equipment summary for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterEquipmentSummary('profile-classic', realm, character));
    const parsed = characterEquipmentSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character equipment summary validation failed:', realm, character, treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
