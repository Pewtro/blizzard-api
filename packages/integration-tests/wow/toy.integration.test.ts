import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow toy integration', () => {
  it('fetches toy index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const index = await client.sendRequest(wow.toyIndex());
    expect(index).toBeTruthy();
  }, 30_000);
});
