import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import { characterMythicKeystoneProfileIndexResponseSchema } from '../../../generated/schemas/wow';

describe('wow character-mythic-keystone-profile integration', () => {
  it('validates mythic keystone profile index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const index = await client.sendRequest(wow.characterMythicKeystoneProfileIndex(realm, character));
    const parsed = characterMythicKeystoneProfileIndexResponseSchema.safeParse(index);
    if (!parsed.success) {
      console.error('Character mythic keystone profile index validation failed:', treeifyError(parsed.error));
    }
    expect(parsed.success).toBe(true);
  }, 30_000);
});
