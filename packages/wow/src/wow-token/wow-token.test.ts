import { describe, it } from 'vitest';
import { base } from '../base';
import { wowTokenApi } from './wow-token';

describe.concurrent('wowTokenApi', () => {
  it('should return the wow token resource', ({ expect }) => {
    const resource = wowTokenApi.wowToken();
    expect(resource.path).toBe(`${base}/token/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
