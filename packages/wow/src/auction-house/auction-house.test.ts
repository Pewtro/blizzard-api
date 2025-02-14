import { describe, it } from 'vitest';
import { auctions, commodities } from './auction-house';

describe.concurrent('auctionHouse', () => {
  it('should return the correct resource for auctions', ({ expect }) => {
    const connectedRealmId = 123;
    const resource = auctions(connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions');
    expect(resource.namespace).toBe('dynamic');
  });

  it('should return the correct resource for commodities', ({ expect }) => {
    const resource = commodities();

    expect(resource.path).toBe('/data/wow/auctions/commodities');
    expect(resource.namespace).toBe('dynamic');
  });
});
