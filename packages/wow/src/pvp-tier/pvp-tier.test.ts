import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import { pvpTier, pvpTierIndex, pvpTierMedia } from './pvp-tier';

describe.concurrent('pvpTierApi', () => {
  it('pvpTier should return a resource object with the correct path and namespace', ({ expect }) => {
    const pvpTierId = 123;
    const resource = pvpTier(pvpTierId);

    expect(resource.path).toBe(`${base}/pvp-tier/${pvpTierId}`);
    expect(resource.namespace).toBe('static');
  });

  it('pvpTierIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = pvpTierIndex();

    expect(resource.path).toBe(`${base}/pvp-tier/index`);
    expect(resource.namespace).toBe('static');
  });

  it('pvpTierMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const pvpTierId = 123;
    const resource = pvpTierMedia(pvpTierId);

    expect(resource.path).toBe(`${mediaBase}/pvp-tier/${pvpTierId}`);
    expect(resource.namespace).toBe('static');
  });
});
