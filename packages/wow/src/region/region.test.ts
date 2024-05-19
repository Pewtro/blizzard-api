import { describe, it } from 'vitest';
import { base } from '../base';
import * as regionApi from './region';

describe.concurrent('regionApi', () => {
  it('region should return a resource object with the correct path and namespace', ({ expect }) => {
    const regionId = 123;
    const resource = regionApi.region(regionId);

    expect(resource.path).toBe(`${base}/region/123`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('regionIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = regionApi.regionIndex();

    expect(resource.path).toBe(`${base}/region/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
