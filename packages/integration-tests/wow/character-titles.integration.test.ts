import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterTitlesSummary } from '@blizzard-api/wow/character-titles';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterTitlesSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-titles integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character titles', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterTitlesSummary(realm, character));
    const parsed = characterTitlesSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character titles validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
