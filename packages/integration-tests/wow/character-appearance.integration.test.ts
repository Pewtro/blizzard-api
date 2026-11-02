import { characterAppearanceSummary } from '@blizzard-api/wow/character-appearance';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterAppearanceResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-appearance integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character appearance', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterAppearanceSummary(realm, character));
    const parsed = characterAppearanceResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character appearance validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
