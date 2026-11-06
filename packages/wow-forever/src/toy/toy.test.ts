import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { toy, toyIndex } from './index';

describe('toyApi', () => {
  test('toy should return a resource object with the correct path and namespace', () => {
    const resource = toy(123);

    expect(resource.path).toBe(`${wowBasePath}/toy/123`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('toyIndex should return a resource object with the correct path and namespace', () => {
    const resource = toyIndex();

    expect(resource.path).toBe(`${wowBasePath}/toy/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
