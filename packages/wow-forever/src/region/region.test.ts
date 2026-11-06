import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { region, regionIndex } from './index';

describe('regionApi', () => {
  test('region should return a resource object with the correct path and namespace', () => {
    const resource = region(91);

    expect(resource.path).toBe(`${wowBasePath}/region/91`);
    expect(resource.namespace).toBe('dynamic-forever');
  });

  test('regionIndex should return a resource object with the correct path and namespace', () => {
    const resource = regionIndex();

    expect(resource.path).toBe(`${wowBasePath}/region/index`);
    expect(resource.namespace).toBe('dynamic-forever');
  });
});
