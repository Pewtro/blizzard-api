import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterMediaSummaryResponse } from './types';

export function characterMediaSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterMediaSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/character-media`,
    token,
  };
}
