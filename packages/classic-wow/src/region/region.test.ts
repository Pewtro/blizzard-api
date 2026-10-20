import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { region, regionIndex } from './index';

const namespaces = ['dynamic-classic1x', 'dynamic-classic', 'dynamic-classicann'] as const;

describe('classicRegionApi', () => {
  test.each(namespaces)('should return the region resource in the %s namespace', (namespace) => {
    const regionId = 1;
    const resource = region(namespace, regionId);
    expect(resource.path).toBe(`${wowBasePath}/region/1`);
    expect(resource.namespace).toBe(namespace);
  });

  test.each(namespaces)('should return the region index resource in the %s namespace', (namespace) => {
    const resource = regionIndex(namespace);
    expect(resource.path).toBe(`${wowBasePath}/region/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
