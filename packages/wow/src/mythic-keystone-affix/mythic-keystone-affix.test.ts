import { describe, it } from 'vitest';
import { base, mediaBase } from '../base';
import { mythicKeystoneAffix, mythicKeystoneAffixIndex, mythicKeystoneAffixMedia } from './mythic-keystone-affix';

describe.concurrent('mythicKeystoneAffixApi', () => {
  it('mythicKeystoneAffix should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneAffixId = 123;
    const resource = mythicKeystoneAffix(mythicKeystoneAffixId);

    expect(resource.path).toBe(`${base}/keystone-affix/${mythicKeystoneAffixId}`);
    expect(resource.namespace).toBe('static');
  });

  it('mythicKeystoneAffixIndex should return a resource object with the correct path and namespace', ({ expect }) => {
    const resource = mythicKeystoneAffixIndex();

    expect(resource.path).toBe(`${base}/keystone-affix/index`);
    expect(resource.namespace).toBe('static');
  });

  it('mythicKeystoneAffixMedia should return a resource object with the correct path and namespace', ({ expect }) => {
    const mythicKeystoneAffixId = 123;
    const resource = mythicKeystoneAffixMedia(mythicKeystoneAffixId);

    expect(resource.path).toBe(`${mediaBase}/keystone-affix/${mythicKeystoneAffixId}`);
    expect(resource.namespace).toBe('static');
  });
});
