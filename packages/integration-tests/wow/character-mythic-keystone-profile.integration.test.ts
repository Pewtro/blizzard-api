import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow character-mythic-keystone-profile integration', () => {
  it('fetches mythic keystone profile index for putro', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const realm = 'laughing-skull';
    const character = 'putro';
    const index = await client.sendRequest(wow.characterMythicKeystoneProfileIndex(realm, character));
    expect(index).toBeTruthy();
  }, 30_000);
});
