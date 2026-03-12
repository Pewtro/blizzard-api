import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { region, regionIndex } from './region';

describe.concurrent('classicRegionApi', () => {
  test('should return the region resource', ({ expect }) => {
    const namespace = 'dynamic-classic';
    const regionId = 1;
    const resource = region(namespace, regionId);
    expect(resource.path).toBe(`${wowBasePath}/region/1`);
    expect(resource.namespace).toBe(namespace);
  });

  test('should return the region index resource', ({ expect }) => {
    const namespace = 'dynamic-classic';
    const resource = regionIndex(namespace);
    expect(resource.path).toBe(`${wowBasePath}/region/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
