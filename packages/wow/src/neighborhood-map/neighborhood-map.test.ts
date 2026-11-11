import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { neighborhood, neighborhoodMap, neighborhoodMaps } from './index';

describe('neighborhoodMapApi', () => {
  test('neighborhoodMaps should return a resource object with the correct path and namespace', () => {
    const resource = neighborhoodMaps();

    expect(resource.path).toBe(`${wowBasePath}/neighborhood-map/index`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('neighborhoodMap should return a resource object with the correct path and namespace', () => {
    const resource = neighborhoodMap(123);

    expect(resource.path).toBe(`${wowBasePath}/neighborhood-map/123`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('neighborhood should return a resource object with the correct path and namespace', () => {
    const resource = neighborhood(123, 456);

    expect(resource.path).toBe(`${wowBasePath}/neighborhood-map/123/neighborhood/456`);
    expect(resource.namespace).toBe('dynamic');
  });
});
