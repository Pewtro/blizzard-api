import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterSoulbinds } from '@blizzard-api/wow/character-soulbinds';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSoulbindsResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-soulbinds integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character soulbinds', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterSoulbinds(realm, character));
    const parsed = characterSoulbindsResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character soulbinds validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
