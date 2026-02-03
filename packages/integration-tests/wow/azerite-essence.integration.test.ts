import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow azerite-essence integration', () => {
  it('fetches azerite essence index and search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.azeriteEssenceIndex());
    expect(index).toBeTruthy();
    const search = await client.sendRequest(wow.azeriteEssenceSearch({ _page: 1 }));
    expect(search).toBeTruthy();
  }, 30_000);
});
