import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { auctionHouseIndex, auctions, commodities } from './index';

describe('auctionHouseApi', () => {
  test('auctionHouseIndex should return a resource object with the correct path and namespace', () => {
    const resource = auctionHouseIndex(2);

    expect(resource.path).toBe(`${wowBasePath}/ruleset/2/auctions/index`);
    expect(resource.namespace).toBe('dynamic-forever');
  });

  test('auctions should return a resource object with the correct path and namespace', () => {
    const resource = auctions(2, 110);

    expect(resource.path).toBe(`${wowBasePath}/ruleset/2/auctions/110`);
    expect(resource.namespace).toBe('dynamic-forever');
  });

  test('commodities should return a resource object with the correct path and namespace', () => {
    const resource = commodities(2, 110);

    expect(resource.path).toBe(`${wowBasePath}/ruleset/2/auctions/110/commodities`);
    expect(resource.namespace).toBe('dynamic-forever');
  });
});
