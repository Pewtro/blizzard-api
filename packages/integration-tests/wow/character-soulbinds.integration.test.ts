import { characterSoulbinds } from '@blizzard-api/wow/character-soulbinds';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import { characterSoulbindsResponseSchema } from '../../../generated/schemas/wow';
import { getIntegrationTestClient } from '../utils/client';

describe('wow character-soulbinds integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates character soulbinds', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterSoulbinds(realm, character));
    const parsed = characterSoulbindsResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character soulbinds validation failed:', prettifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
