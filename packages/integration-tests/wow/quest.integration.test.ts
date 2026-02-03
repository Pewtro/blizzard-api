import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow quest integration', () => {
  it('fetches quest index and area index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.questIndex());
    expect(index).toBeTruthy();
    const area = await client.sendRequest(wow.questAreaIndex());
    expect(area).toBeTruthy();
  }, 30_000);
});
