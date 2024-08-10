import type { ProtectedResource } from '@blizzard-api/core';
import type {
  CharacterMythicKeystoneProfileIndexResponse,
  CharacterMythicKeystoneSeasonDetailsResponse,
} from './types';

export function characterMythicKeystoneProfileIndex(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterMythicKeystoneProfileIndexResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile`,
    token,
  };
}

export function characterMythicKeystoneSeasonDetails(
  realmSlug: string,
  characterName: string,
  seasonId: number,
  token: string,
): ProtectedResource<CharacterMythicKeystoneSeasonDetailsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`,
    token,
  };
}
