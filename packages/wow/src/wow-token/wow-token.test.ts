import { wowBasePath } from '@blizzard-api/core';
import { describe, test } from 'vitest';
import { wowToken } from './wow-token';

describe.concurrent('wowTokenApi', () => {
  test('should return the wow token resource', ({ expect }) => {
    const resource = wowToken();
    expect(resource.path).toBe(`${wowBasePath}/token/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
