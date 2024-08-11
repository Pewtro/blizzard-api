import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterTitlesSummaryResponse } from './types';

export function characterTitlesSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterTitlesSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/titles`,
    token,
  };
}
