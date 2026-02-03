import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterProfessionsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-professions integration', () => {
  it('validates character professions for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(wow.characterProfessionsSummary(realm, character));
    const parsed = characterProfessionsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character professions validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
