import type { ProtectedResource } from '@blizzard-api/core';
import type { CharacterDungeonsResponse, CharacterEncountersSummaryResponse, CharacterRaidsResponse } from './types';

const bathPase = 'profile/wow/character';

export function characterEncountersSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterEncountersSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${bathPase}/${realmSlug}/${characterName.toLowerCase()}/encounters`,
    token,
  };
}

export function characterDungeons(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterDungeonsResponse> {
  return {
    namespace: 'profile',
    path: `${bathPase}/${realmSlug}/${characterName.toLowerCase()}/encounters/dungeons`,
    token,
  };
}

export function characterRaids(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterRaidsResponse> {
  return {
    namespace: 'profile',
    path: `${bathPase}/${realmSlug}/${characterName.toLowerCase()}/encounters/raids`,
    token,
  };
}
