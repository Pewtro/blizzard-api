import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  MythicKeystoneAffixIndexResponse,
  MythicKeystoneAffixMediaResponse,
  MythicKeystoneAffixResponse,
} from './types';

/**
 * Get a list of all Mythic Keystone affixes.
 * @param mythicKeystoneAffixId The ID of the Mythic Keystone affix.
 * @returns A list of all Mythic Keystone affixes. See {@link MythicKeystoneAffixIndexResponse}
 */
export function mythicKeystoneAffix(mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixResponse> {
  return {
    namespace: 'static',
    path: `${base}/keystone-affix/${mythicKeystoneAffixId}`,
  };
}
/**
 * Get a list of all Mythic Keystone affixes.
 * @returns A list of all Mythic Keystone affixes. See {@link MythicKeystoneAffixIndexResponse}
 */
export function mythicKeystoneAffixIndex(): Resource<MythicKeystoneAffixIndexResponse> {
  return {
    namespace: 'static',
    path: `${base}/keystone-affix/index`,
  };
}
/**
 * Get a list of all Mythic Keystone affix media.
 * @param mythicKeystoneAffixId The ID of the Mythic Keystone affix.
 * @returns A list of all Mythic Keystone affix media. See {@link MythicKeystoneAffixMediaResponse}
 */
export function mythicKeystoneAffixMedia(mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixMediaResponse> {
  return {
    namespace: 'static',
    path: `${mediaBase}/keystone-affix/${mythicKeystoneAffixId}`,
  };
}
