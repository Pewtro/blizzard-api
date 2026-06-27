import { createBlizzardApiClient } from '@blizzard-api/client';
import { auctions, commodities } from '@blizzard-api/wow/auction-house';
import { connectedRealmIndex } from '@blizzard-api/wow/connected-realm';
import { describe, test } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  auctionHouseCommoditiesResponseSchema,
  auctionHouseResponseSchema,
} from '../../../generated/schemas/wow/auction-house';

describe('wow auction-house integration', async () => {
  const client = await createBlizzardApiClient({
    key: environment.blizzardClientId,
    origin: 'eu',
    secret: environment.blizzardClientSecret,
  });
  test('validates auctions and commodities responses', async ({ expect }) => {
    const realms = await client.sendRequest(connectedRealmIndex());
    const firstConnectedRealm = realms.connected_realms.find((cr) => cr.href);
    if (!firstConnectedRealm) {
      throw new Error('No connected realms found for testing auction house');
    }
    const realmId = firstConnectedRealm.href.split('/').at(-1)?.split('?', 1)[0];
    if (!realmId) {
      throw new Error('No realm ID found for testing auction house');
    }

    const auctionsResult = await client.sendRequest(auctions(Number.parseInt(realmId)));
    const parsedAuctions = auctionHouseResponseSchema.safeParse(auctionsResult);
    if (!parsedAuctions.success) {
      console.error('Auctions validation failed:', realmId, treeifyError(parsedAuctions.error));
    }
    expect(parsedAuctions.success).toBe(true);

    const commoditiesResult = await client.sendRequest(commodities());
    const parsedCommodities = auctionHouseCommoditiesResponseSchema.safeParse(commoditiesResult);
    if (!parsedCommodities.success) {
      console.error('Commodities validation failed:', treeifyError(parsedCommodities.error));
    }
    expect(parsedCommodities.success).toBe(true);
  });
});
