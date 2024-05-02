import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  MythicKeystoneAffixIndexResponse,
  MythicKeystoneAffixMediaResponse,
  MythicKeystoneAffixResponse,
} from './types';

export const mythicKeystoneAffixApi = {
  /**
   * Get a list of all Mythic Keystone affixes.
   * @returns A list of all Mythic Keystone affixes. See {@link MythicKeystoneAffixIndexResponse}
   */
  mythicKeystoneAffix: (mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixResponse> => {
    return {
      path: `${base}/keystone-affix/${mythicKeystoneAffixId}`,
      namespace: 'static',
    };
  },
  /**
   * Get a list of all Mythic Keystone affixes.
   * @returns A list of all Mythic Keystone affixes. See {@link MythicKeystoneAffixIndexResponse}
   */
  mythicKeystoneAffixIndex: (): Resource<MythicKeystoneAffixIndexResponse> => {
    return {
      path: `${base}/keystone-affix/index`,
      namespace: 'static',
    };
  },
  /**
   * Get a list of all Mythic Keystone affix media.
   * @returns A list of all Mythic Keystone affix media. See {@link MythicKeystoneAffixMediaResponse}
   */
  mythicKeystoneAffixMedia: (mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixMediaResponse> => {
    return {
      path: `${mediaBase}/keystone-affix/${mythicKeystoneAffixId}`,
      namespace: 'static',
    };
  },
};
