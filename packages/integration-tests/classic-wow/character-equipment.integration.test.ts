import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterEquipmentSummaryResponseSchema } from '../../../generated/schemas/classic-wow';

describe('classic-wow character equipment integration', () => {
  it('fetches equipment summary for a character', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });

    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(classicWow.characterEquipmentSummary('profile-classic', realm, character));
    const parsed = characterEquipmentSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character equipment summary validation failed:', realm, character, treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
