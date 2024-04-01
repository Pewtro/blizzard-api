import { describe, it, expect } from 'vitest';
import { base, mediaBase } from '../base';
import { mythicKeystoneAffixApi } from './mythic-keystone-affix';

describe('mythicKeystoneAffixApi', () => {
  it('mythicKeystoneAffix should return a resource object with the correct path and namespace', () => {
    const mythicKeystoneAffixId = 123;
    const resource = mythicKeystoneAffixApi.mythicKeystoneAffix(mythicKeystoneAffixId);

    expect(resource.path).toBe(`${base}/mythic-keystone-affix/${mythicKeystoneAffixId}`);
    expect(resource.namespace).toBe('static');
  });

  it('mythicKeystoneAffixIndex should return a resource object with the correct path and namespace', () => {
    const resource = mythicKeystoneAffixApi.mythicKeystoneAffixIndex();

    expect(resource.path).toBe(`${base}/mythic-keystone-affix/index`);
    expect(resource.namespace).toBe('static');
  });

  it('mythicKeystoneAffixMedia should return a resource object with the correct path and namespace', () => {
    const mythicKeystoneAffixId = 123;
    const resource = mythicKeystoneAffixApi.mythicKeystoneAffixMedia(mythicKeystoneAffixId);

    expect(resource.path).toBe(`${mediaBase}/mythic-keystone-affix/${mythicKeystoneAffixId}`);
    expect(resource.namespace).toBe('static');
  });
});
