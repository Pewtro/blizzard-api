import { createBlizzardApiClient } from '@blizzard-api/client';
import * as wow from '@blizzard-api/wow';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  auctionHouseCommoditiesResponseSchema,
  auctionHouseResponseSchema,
} from '../../../generated/schemas/wow/auction-house';

describe('wow auction-house integration', () => {
  it('validates auctions and commodities responses', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'eu',
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
    const parsedAuctions = auctionHouseResponseSchema.safeParse(auctions);
    if (!parsedAuctions.success) {
      console.error('Auctions validation failed:', treeifyError(parsedAuctions.error));
    }
    expect(parsedAuctions.success).toBe(true);

    const commodities = await client.sendRequest(wow.commodities());
    const parsedCommodities = auctionHouseCommoditiesResponseSchema.safeParse(commodities);
    if (!parsedCommodities.success) {
      console.error('Commodities validation failed:', treeifyError(parsedCommodities.error));
    }
    expect(parsedCommodities.success).toBe(true);
  });
});
