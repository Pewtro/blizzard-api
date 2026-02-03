import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSpecializationsSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-specializations integration', () => {
  it('validates character specializations for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(wow.characterSpecializationsSummary(realm, character));
    const parsed = characterSpecializationsSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character specializations validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
