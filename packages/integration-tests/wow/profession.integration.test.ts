import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow profession integration', () => {
  it('fetches profession index and a recipe search', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.professionIndex());
    expect(index).toBeTruthy();
    const search = await client.sendRequest(wow.recipe(index.professions[0]?.id));
    expect(search).toBeTruthy();
  }, 30_000);
});
