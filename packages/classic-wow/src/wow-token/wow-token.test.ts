import { wowBasePath } from '@blizzard-api/core';
import { describe, expect, test } from 'vitest';
import { wowToken } from './index';

const namespace = 'dynamic-classic' as const;

describe('classicWowTokenApi', () => {
  test('wowToken should return a resource object with the correct path and namespace', () => {
    const resource = wowToken(namespace);

    expect(resource.path).toBe(`${wowBasePath}/token/index`);
    expect(resource.namespace).toBe(namespace);
  });
});
