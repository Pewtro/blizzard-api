import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { pvpTier, pvpTierIndex, pvpTierMedia } from './pvp-tier';

describe.concurrent('pvpTierApi', () => {
  test('pvpTier should return a resource object with the correct path and namespace', ({ expect }) => {
    const pvpTierId = 123;
    const resource = pvpTier(pvpTierId);

    expect(resource.path).toBe(`${wowBasePath}/pvp-tier/${pvpTierId}`);
    expect(resource.namespace).toBe('static');
  });

  test('pvpTierIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpTierIndex();

    expect(resource.path).toBe(`${wowBasePath}/pvp-tier/index`);
    expect(resource.namespace).toBe('static');
  });

  test('pvpTierMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const pvpTierId = 123;
    const resource = pvpTierMedia(pvpTierId);

    expect(resource.path).toBe(`${wowMediaBasePath}/pvp-tier/${pvpTierId}`);
    expect(resource.namespace).toBe('static');
  });
});
