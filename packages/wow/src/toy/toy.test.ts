import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { toy, toyIndex } from './toy';

describe.concurrent('toyApi', () => {
  test('should return the correct path for toy', ({ expect }) => {
    const toyId = 123;
    const resource = toy(toyId);
    expect(resource.path).toBe(`${wowBasePath}/toy/123`);
    expect(resource.namespace).toBe('static');
  });

  test('should return the correct path for toyIndex', ({ expect }) => {
    const resource = toyIndex();
    expect(resource.path).toBe(`${wowBasePath}/toy/index`);
    expect(resource.namespace).toBe('static');
  });
});
