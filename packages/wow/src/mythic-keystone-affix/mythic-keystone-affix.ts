import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';

export const mythicKeystoneAffixApi = {
  mythicKeystoneAffix: (mythicKeystoneAffixId: number): Resource<void> => {
    return {
      path: `${base}/mythic-keystone-affix/${mythicKeystoneAffixId}`,
      namespace: 'static',
    };
  },
  mythicKeystoneAffixIndex: (): Resource<void> => {
    return {
      path: `${base}/mythic-keystone-affix/index`,
      namespace: 'static',
    };
  },
  mythicKeystoneAffixMedia: (mythicKeystoneAffixId: number): Resource<void> => {
    return {
      path: `${mediaBase}/mythic-keystone-affix/${mythicKeystoneAffixId}`,
      namespace: 'static',
    };
  },
};
