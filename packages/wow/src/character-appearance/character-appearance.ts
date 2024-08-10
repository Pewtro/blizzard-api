import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterAppearanceResponse } from './types';

export function characterAppearanceSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterAppearanceResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/appearance`,
    token,
  };
}
