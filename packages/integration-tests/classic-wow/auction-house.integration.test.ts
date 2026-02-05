import * as classicWow from '@blizzard-api/classic-wow';
import { createBlizzardApiClient } from '@blizzard-api/client';
import { describe, it } from 'vitest';
import { treeifyError } from 'zod';
import { environment } from '../../../environment';
import {
  auctionHouseIndexResponseSchema,
  auctionsResponseSchema,
  connectedRealmIndexResponseSchema,
} from '../../../generated/schemas/classic-wow';

//The auction house API is known to be flaky; skip by default.
describe.skip('classic-wow auction house integration', () => {
  it('fetches index and validates responses with generated schemas', async ({ expect }) => {
    const client = await createBlizzardApiClient({
      key: environment.blizzardClientId,
      origin: 'us',
      secret: environment.blizzardClientSecret,
    });

    // 1) Get connected realm index and validate
    const realmIndexResponse = await client.sendRequest(classicWow.connectedRealmIndex('dynamic-classic1x'));
    const parsedRealmIndex = connectedRealmIndexResponseSchema.safeParse(realmIndexResponse);
    if (!parsedRealmIndex.success) {
      console.error('Connected realm index validation failed:', treeifyError(parsedRealmIndex.error));
    }
    expect(parsedRealmIndex.success).toBe(true);

    const firstRealm = realmIndexResponse.connected_realms?.[0];
    expect(firstRealm).toBeDefined();

    // Extract connected realm id from the href (e.g. /data/wow/connected-realm/123)
    const href = firstRealm?.href;
    const match = /connected-realm\/(\d+)/.exec(href ?? '');
    expect(match).toBeTruthy();
    const connectedRealmId = Number(match?.[1]);

    // 2) Fetch auction house index for that connected realm and validate
    const auctionIndexResponse = await client.sendRequest(
      classicWow.auctionHouseIndex('dynamic-classic1x', connectedRealmId),
    );
    const parsedAuctionIndex = auctionHouseIndexResponseSchema.safeParse(auctionIndexResponse);
    if (!parsedAuctionIndex.success) {
      console.error('Auction house index validation failed:', treeifyError(parsedAuctionIndex.error));
    }
    expect(parsedAuctionIndex.success).toBe(true);

    const firstAuctionHouse = auctionIndexResponse.auctions?.[0];
    expect(firstAuctionHouse).toBeDefined();

    const auctionHouseId = firstAuctionHouse?.id;
    expect(auctionHouseId).toBeGreaterThan(0);

    // 3) Fetch auctions for that auction house and validate (may be large)
    const auctionsResponse = await client.sendRequest(
      classicWow.auctions('dynamic-classic1x', connectedRealmId, auctionHouseId ?? 0),
    );
    const parsedAuctions = auctionsResponseSchema.safeParse(auctionsResponse);
    if (!parsedAuctions.success) {
      console.error('Auctions validation failed:', treeifyError(parsedAuctions.error));
    }
    expect(parsedAuctions.success).toBe(true);
  });
});
