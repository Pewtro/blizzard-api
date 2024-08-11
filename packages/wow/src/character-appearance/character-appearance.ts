import type { Resource } from '@blizzard-api/core';
import type { CharacterAppearanceResponse } from './types';

export function characterAppearanceSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterAppearanceResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName.toLowerCase()}/appearance`,
  };
}
