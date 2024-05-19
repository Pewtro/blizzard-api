import type { Resource } from '@blizzard-api/core';
import { base, mediaBase } from '../base';
import type {
  MythicKeystoneAffixIndexResponse,
  MythicKeystoneAffixMediaResponse,
  MythicKeystoneAffixResponse,
} from './types';

/**
 * Get a list of all Mythic Keystone affixes.
 * @returns A list of all Mythic Keystone affixes. See {@link MythicKeystoneAffixIndexResponse}
 */
export function mythicKeystoneAffix(mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixResponse> {
  return {
    path: `${base}/keystone-affix/${mythicKeystoneAffixId}`,
    namespace: 'static',
  };
}
/**
 * Get a list of all Mythic Keystone affixes.
 * @returns A list of all Mythic Keystone affixes. See {@link MythicKeystoneAffixIndexResponse}
 */
export function mythicKeystoneAffixIndex(): Resource<MythicKeystoneAffixIndexResponse> {
  return {
    path: `${base}/keystone-affix/index`,
    namespace: 'static',
  };
}
/**
 * Get a list of all Mythic Keystone affix media.
 * @returns A list of all Mythic Keystone affix media. See {@link MythicKeystoneAffixMediaResponse}
 */
export function mythicKeystoneAffixMedia(mythicKeystoneAffixId: number): Resource<MythicKeystoneAffixMediaResponse> {
  return {
    path: `${mediaBase}/keystone-affix/${mythicKeystoneAffixId}`,
    namespace: 'static',
  };
}
