import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { environment } from '../../../environment';

describe('wow auction-house integration', () => {
  it('fetches auctions and commodities index', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    const realms = await client.sendRequest(wow.connectedRealmIndex());
    const firstConnectedRealm = realms.connected_realms.find((cr) => cr.href);
    if (!firstConnectedRealm) {
      throw new Error('No connected realms found for testing auction house');
    }
    const realmId = firstConnectedRealm.href.split('/').at(-1)?.split('?')[0];
    if (!realmId) {
      throw new Error('No realm ID found for testing auction house');
    }
    const auctions = await client.sendRequest(wow.auctions(Number.parseInt(realmId)));
    expect(auctions).toBeTruthy();
    const commodities = await client.sendRequest(wow.commodities());
    expect(commodities).toBeTruthy();
  }, 30_000);
});
