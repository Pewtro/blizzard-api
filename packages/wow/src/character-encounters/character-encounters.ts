import type { Resource } from '@blizzard-api/core';
import type { CharacterDungeonsResponse, CharacterEncountersSummaryResponse, CharacterRaidsResponse } from './types';

const bathPase = 'profile/wow/character';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's encounters.
 */
export function characterEncountersSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterEncountersSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${bathPase}/${realmSlug}/${characterName.toLowerCase()}/encounters`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's completed dungeons.
 */
export function characterDungeons(realmSlug: string, characterName: string): Resource<CharacterDungeonsResponse> {
  return {
    namespace: 'profile',
    path: `${bathPase}/${realmSlug}/${characterName.toLowerCase()}/encounters/dungeons`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of a character's completed raids.
 */
export function characterRaids(realmSlug: string, characterName: string): Resource<CharacterRaidsResponse> {
  return {
    namespace: 'profile',
    path: `${bathPase}/${realmSlug}/${characterName.toLowerCase()}/encounters/raids`,
  };
}
