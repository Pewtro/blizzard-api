import { wow } from '@blizzard-api/wow';
import { describe, expect, it } from 'vitest';
import { environment } from '../../../../environment';
import { BlizzardApiClient } from '../client';

describe('wow paths and types', async () => {
  const client = new BlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });
  const access = await client.getAccessToken();
  client.setAccessToken(access.data.access_token);

  it('should be able to fetch an achievement', async () => {
    const response = await client.sendRequest(wow.achievement(16_542));

    expect(response.data).toBeDefined();
  });
  it('should be able to fetch a connected realm', async () => {
    const response = await client.sendRequest(wow.connectedRealm(3692));

    expect(response.data).toBeDefined();
  });
});
