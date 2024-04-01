import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { regionApi } from './region';

describe('regionApi', () => {
  it('region should return a resource object with the correct path and namespace', () => {
    const regionId = 123;
    const resource = regionApi.region(regionId);

    expect(resource.path).toBe(`${base}/region/123`);
    expect(resource.namespace).toBe('static');
  });

  it('regionIndex should return a resource object with the correct path and namespace', () => {
    const resource = regionApi.regionIndex();

    expect(resource.path).toBe(`${base}/region/index`);
    expect(resource.namespace).toBe('static');
  });
});
