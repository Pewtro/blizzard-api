import { describe, it, expect } from 'vitest';
import { base } from '../base';
import { realmApi } from './realm';

describe('realmApi', () => {
  it('realm should return a resource object with the correct path and namespace', () => {
    const realmSlug = 'my-realm';
    const resource = realmApi.realm(realmSlug);

    expect(resource.path).toBe(`${base}/realm/${realmSlug}`);
    expect(resource.namespace).toBe('dynamic');
  });

  it('realmIndex should return a resource object with the correct path and namespace', () => {
    const resource = realmApi.realmIndex();

    expect(resource.path).toBe(`${base}/realm/index`);
    expect(resource.namespace).toBe('dynamic');
  });
});
