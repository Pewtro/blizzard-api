import { characterMediaSummary } from '@blizzard-api/classic-wow/character-media';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterMediaSummaryResponseSchema } from '../../../generated/schemas/classic-wow';
import { getIntegrationTestClient } from '../utils/client';

describe('classic-wow character media integration', async () => {
  const client = await getIntegrationTestClient();
  test('fetches media summary for a character', async ({ expect }) => {
    const realm = 'shekzeer';
    const character = 'putro';

    const resp = await client.sendRequest(characterMediaSummary('profile-classic', realm, character));
    const parsed = characterMediaSummaryResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character media summary validation failed:', realm, character, prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
