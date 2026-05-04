import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterMediaSummary } from '@blizzard-api/wow/character-media';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterMediaSummaryResponseSchema } from '../../../generated/schemas/wow';

describe('wow character media integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('fetches media summary for a character', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';

    const resp = await client.sendRequest(characterMediaSummary(realm, character));
    const parsed = characterMediaSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character media summary validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
