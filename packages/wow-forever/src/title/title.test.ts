import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { title, titleIndex } from './index';

describe('titleApi', () => {
  test('title should return a resource object with the correct path and namespace', () => {
    const resource = title(30);

    expect(resource.path).toBe(`${wowBasePath}/title/30`);
    expect(resource.namespace).toBe('static-forever');
  });

  test('titleIndex should return a resource object with the correct path and namespace', () => {
    const resource = titleIndex();

    expect(resource.path).toBe(`${wowBasePath}/title/index`);
    expect(resource.namespace).toBe('static-forever');
  });
});
