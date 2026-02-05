import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterHunterPetsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-hunter-pets integration', () => {
  it('validates character hunter pets', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(wow.characterHunterPetsSummary(realm, character));
    const parsed = characterHunterPetsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character hunter pets validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
