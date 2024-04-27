import { wow } from '@blizzard-api/wow';
import { describe, expect, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe('smoketest some wow api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });

  it('should be able to fetch an achievement', async () => {
    const response = await client.sendRequest(wow.achievement(16_542));

    expect(response.data).toBeDefined();
  });
  it('should be able to fetch a connected realm', async () => {
    const response = await client.sendRequest(wow.connectedRealm(3692));

    expect(response.data).toBeDefined();
  });

  it('should be able to fetch a creature family', async () => {
    const response = await client.sendRequest(wow.creatureFamily(1));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(1);
  });

  it('should be able to fetch a creature type', async () => {
    const response = await client.sendRequest(wow.creatureType(1));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(1);
  });

  it('should be able to fetch a creature', async () => {
    const response = await client.sendRequest(wow.creature(42_722));

    expect(response.data).toBeDefined();
    expect(response.data.id).toBe(42_722);
  });
});
