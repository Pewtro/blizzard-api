import { describe, it } from 'vitest';
import { base } from '../base';
import { wowToken } from './wow-token';

describe.concurrent('wowTokenApi', () => {
  it('should return the wow token resource', ({ expect }) => {
    const resource = wowToken();
    expect(resource.path).toBe(`${base}/token/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
