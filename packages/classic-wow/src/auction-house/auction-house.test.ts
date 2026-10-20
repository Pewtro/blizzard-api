import { describe, expect, test } from 'vitest';
import { auctionHouseIndex, auctions } from './index';

const namespaces = ['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const;

describe('classicAuctionHouseApi', () => {
  test.each(namespaces)('should return the correct resource for auctionHouseIndex in the %s namespace', (namespace) => {
    const connectedRealmId = 123;
    const resource = auctionHouseIndex(namespace, connectedRealmId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions/index');
    expect(resource.namespace).toBe(namespace);
  });

  test.each(namespaces)('should return the correct resource for auctions in the %s namespace', (namespace) => {
    const connectedRealmId = 123;
    const auctionHouseId = 456;
    const resource = auctions(namespace, connectedRealmId, auctionHouseId);

    expect(resource.path).toBe('/data/wow/connected-realm/123/auctions/456');
    expect(resource.namespace).toBe(namespace);
  });
});
