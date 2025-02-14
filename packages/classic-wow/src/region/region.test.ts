import { describe, it } from 'vitest';
import { base } from '../../../wow/src/base';
import { region, regionIndex } from './region';

describe.concurrent('classicRegionApi', () => {
  it('should return the region resource', ({ expect }) => {
    const namespace = 'dynamic-classic';
    const regionId = 1;
    const resource = region(namespace, regionId);
    expect(resource.path).toBe(`${base}/region/1`);
    expect(resource.namespace).toBe(namespace);
  });

  it('should return the region index resource', ({ expect }) => {
    const namespace = 'dynamic-classic';
    const resource = regionIndex(namespace);
    expect(resource.path).toBe(`${base}/region/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
