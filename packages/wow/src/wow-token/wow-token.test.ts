import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { wowTokenApi } from './wow-token';

describe('wowTokenApi', () => {
  it('should return the wow token resource', () => {
    const resource = wowTokenApi.wowToken();
    expect(resource.path).toBe(`${base}/token/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
