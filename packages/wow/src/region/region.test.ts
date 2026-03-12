import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { region, regionIndex } from './region';

describe.concurrent('regionApi', () => {
  test('region should return a resource object with the correct path and namespace', ({ expect }) => {
    const regionId = 123;
    const resource = region(regionId);

    expect(resource.path).toBe(`${wowBasePath}/region/123`);
    expect(resource.namespace).toBe('dynamic');
  });

  test('regionIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = regionIndex();

    expect(resource.path).toBe(`${wowBasePath}/region/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
