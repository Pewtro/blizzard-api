import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow wow-token integration', () => {
  it('fetches wow token info', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });
    const token = await client.sendRequest(wow.wowToken());
    expect(token).toBeTruthy();
  }, 30_000);
});
