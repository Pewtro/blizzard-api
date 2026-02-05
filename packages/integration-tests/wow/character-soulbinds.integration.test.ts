import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterSoulbindsResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-soulbinds integration', () => {
  it('validates character soulbinds', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const resp = await client.sendRequest(wow.characterSoulbinds(realm, character));
    const parsed = characterSoulbindsResponseSchema.safeParse(resp);
    if (!parsed.success) {
      console.error('Character soulbinds validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  });
});
