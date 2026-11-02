import { characterEquipmentSummary } from '@blizzard-api/classic-wow/character-equipment';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterEquipmentSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow character equipment integration', async () => {
  const client = await getIntegrationTestClient();
  test('fetches equipment summary for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterEquipmentSummary('profile-classic', realm, character));
    const parsed = characterEquipmentSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character equipment summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
  test('fetches equipment summary for a character on classic anniversary', async ({ expect }) => {
    const realm = 'thunderstrike';
    const character = 'kytahela';

    const resp = await client.sendRequest(characterEquipmentSummary('profile-classicann', realm, character));
    const parsed = characterEquipmentSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character equipment summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
