import { describe, test } from 'vitest';
import { auctions, commodities } from './auction-house';

describe.concurrent('auctionHouse', () => {
  test('should return the correct resource for auctions', ({ expect }) => {
    const connectedRealmId = 123;
    const resource = auctions(connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions');
    expect(resource.namespace).toBe('dynamic');
  });

  test('should return the correct resource for commodities', ({ expect }) => {
    const resource = commodities();

    expect(resource.path).toBe('/data/wow/auctions/commodities');
    expect(resource.namespace).toBe('dynamic');
  });
});
