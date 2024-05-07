import { classicWow } from '@blizzard-api/classic-wow';
import { describe, it } from 'vitest';
import { environment } from '../../../../environment';
import { createBlizzardApiClient } from '../client/create-client';

describe.concurrent('smoketest some classic wow api responses', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    secret: environment.blizzardClientSecret,
    origin: 'eu',
  });

  it('should be able to fetch the auction house index', async ({ expect }) => {
    const response = await client.sendRequest(classicWow.auctionHouseIndex('dynamic-classic', 4440));

    expect(response.data).toBeDefined();
  });

  //This response is really large so it might sometimes time out, so we increase the timeout from the default 5 seconds to 20 seconds
  it('should be able to fetch the auction house data', { timeout: 20_000 }, async ({ expect }) => {
    const response = await client.sendRequest(classicWow.auctions('dynamic-classic', 4440, 2));

    expect(response.data).toBeDefined();
  });
});
