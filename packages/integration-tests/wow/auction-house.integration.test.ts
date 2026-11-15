import { auctions, commodities } from '@blizzard-api/wow/auction-house';
import { connectedRealmIndex } from '@blizzard-api/wow/connected-realm';
import { describe, test } from 'vitest';
import { prettifyError } from 'zod';
import {
  auctionHouseCommoditiesResponseSchema,
  auctionHouseResponseSchema,
} from '../../../generated/schemas/wow/auction-house';
import { getIntegrationTestClient } from '../utils/client';
import { getRandomItem } from '../utils/random';

describe('wow auction-house integration', async () => {
  const client = await getIntegrationTestClient();
  test('validates auctions and commodities responses', async ({ expect }) => {
    const realms = await client.sendRequest(connectedRealmIndex());
    const connectedRealm = getRandomItem(realms?.connected_realms.filter((cr) => cr.href));
    if (!connectedRealm) {
      throw new Error('No connected realms found for testing auction house');
    }
    const realmId = connectedRealm.href.split('/').at(-1)?.split('?', 1)[0];
    if (!realmId) {
      throw new Error('No realm ID found for testing auction house');
    }

    const auctionsResult = await client.sendRequest(auctions(Number.parseInt(realmId)));
    const parsedAuctions = auctionHouseResponseSchema.safeParse(auctionsResult);
    if (!parsedAuctions.success) {
      console.error('Auctions validation failed:', realmId, prettifyError(parsedAuctions.error));
    }
    expect(parsedAuctions.success).toBe(true);

    const commoditiesResult = await client.sendRequest(commodities());
    const parsedCommodities = auctionHouseCommoditiesResponseSchema.safeParse(commoditiesResult);
    if (!parsedCommodities.success) {
      console.error('Commodities validation failed:', prettifyError(parsedCommodities.error));
    }
    expect(parsedCommodities.success).toBe(true);
  });
});
