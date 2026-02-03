import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow spell integration', () => {
  it('fetches spell search and media', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const search = await client.sendRequest(wow.spellSearch({ locale: 'en_GB', name: 'fire' }));
    expect(search).toBeTruthy();
    const index = await client.sendRequest(wow.spellMedia(1));
    expect(index).toBeTruthy();
  }, 30_000);
});
