import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterReputationsSummaryResponse } from './types';

export function characterReputationsSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterReputationsSummaryResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/reputations`,
    token,
  };
}
