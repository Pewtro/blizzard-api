import { describe, it, expect } from 'vitest';
import { auctionHouseApi } from './auction-house';

describe('auctionHouse', () => {
  it('should return the correct resource for auctions', () => {
    const connectedRealmId = 123;
    const resource = auctionHouseApi.auctions(connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions');
    expect(resource.namespace).toBe('dynamic');
  });

  it('should return the correct resource for commodities', () => {
    const resource = auctionHouseApi.commodities();

    expect(resource.path).toBe('/data/wow/auctions/commodities');
    expect(resource.namespace).toBe('dynamic');
  });
});
