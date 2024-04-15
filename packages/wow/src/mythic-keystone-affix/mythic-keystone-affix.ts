import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  MythicKeystoneAffixIndexResponse,
  MythicKeystoneAffixMediaResponse,
  MythicKeystoneAffixResponse,
} from './types';

export const mythicKeystoneAffixApi = {
  mythicKeystoneAffix: (mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixResponse> => {
    return {
      path: `${base}/keystone-affix/${mythicKeystoneAffixId}`,
      namespace: 'static',
    };
  },
  mythicKeystoneAffixIndex: (): Resource<MythicKeystoneAffixIndexResponse> => {
    return {
      path: `${base}/keystone-affix/index`,
      namespace: 'static',
    };
  },
  mythicKeystoneAffixMedia: (mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixMediaResponse> => {
    return {
      path: `${mediaBase}/keystone-affix/${mythicKeystoneAffixId}`,
      namespace: 'static',
    };
  },
};
