import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterEncountersSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-encounters integration', () => {
  it('validates character encounters', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const encounters = await client.sendRequest(wow.characterEncountersSummary(realm, character));
    const parsed = characterEncountersSummaryResponseSchema.safeParse(encounters);
    if (!parsed.success) {
      console.error('Character encounters validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
