import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterProfileStatusResponse, CharacterProfileSummaryResponse } from './types';

export function characterProfileSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterProfileSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}`,
    token,
  };
}

export function characterProfileStatus(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterProfileStatusResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/status`,
    token,
  };
}
