import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { powerType, powerTypeIndex } from './index';

describe('powerTypeApi', () => {
  test('powerType should return a resource object with the correct path and namespace', () => {
    const resource = powerType(1);

    expect(resource.path).toBe(`${wowBasePath}/power-type/1`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('powerTypeIndex should return a resource object with the correct path and namespace', () => {
    const resource = powerTypeIndex();

    expect(resource.path).toBe(`${wowBasePath}/power-type/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
