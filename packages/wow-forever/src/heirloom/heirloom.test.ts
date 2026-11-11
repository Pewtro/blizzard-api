import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { heirloom, heirloomIndex } from './index';

describe('heirloomApi', () => {
  test('heirloom should return a resource object with the correct path and namespace', () => {
    const resource = heirloom(123);

    expect(resource.path).toBe(`${wowBasePath}/heirloom/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('heirloomIndex should return a resource object with the correct path and namespace', () => {
    const resource = heirloomIndex();

    expect(resource.path).toBe(`${wowBasePath}/heirloom/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
