import { describe, it } from 'vitest';
import { classicAuctionHouseApi } from './auction-house';

describe.concurrent('classicAuctionHouseApi', () => {
  it('should return the correct resource for auctionHouseIndex', ({ expect }) => {
    const connectedRealmId = 123;
    const resource = classicAuctionHouseApi.auctionHouseIndex('dynamic-classic', connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions/index');
    expect(resource.namespace).toBe('dynamic-classic');
  });

  it('should return the correct resource for auctions', ({ expect }) => {
    const connectedRealmId = 123;
    const auctionHouseId = 456;
    const resource = classicAuctionHouseApi.auctions('dynamic-classic1x', connectedRealmId, auctionHouseId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions/456');
    expect(resource.namespace).toBe('dynamic-classic1x');
  });
});
