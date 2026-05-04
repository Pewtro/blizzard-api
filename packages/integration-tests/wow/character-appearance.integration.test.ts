import { createBlizzardApiClient } from '@blizzard-api/client';
import { characterAppearanceSummary } from '@blizzard-api/wow/character-appearance';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterAppearanceResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-appearance integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates character appearance', async ({ expect }) => {
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(characterAppearanceSummary(realm, character));
    const parsed = characterAppearanceResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character appearance validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
