import type { Resource } from '@blizzard-api/core';
import type {
  CharacterMythicKeystoneProfileIndexResponse,
  CharacterMythicKeystoneSeasonDetailsResponse,
} from './types';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns Returns the Mythic Keystone season details for a character. Returns a 404 Not Found for characters that have not yet completed a Mythic Keystone dungeon for the specified season.
 */
export function characterMythicKeystoneProfileIndex(
  realmSlug: string,
  characterName: string,
): Resource<CharacterMythicKeystoneProfileIndexResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile`,
  };
}

/**
 * Returns the Mythic Keystone season details for a character.
 * Returns a 404 Not Found for characters that have not yet completed a Mythic Keystone dungeon for the specified season.
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @param seasonId The ID of the season.
 * @returns the Mythic Keystone season details for a character.
 */
export function characterMythicKeystoneSeasonDetails(
  realmSlug: string,
  characterName: string,
  seasonId: number,
): Resource<CharacterMythicKeystoneSeasonDetailsResponse> {
  return {
    namespace: 'profile',
    path: `/profile/wow/character/${realmSlug}/${characterName}/mythic-keystone-profile/season/${seasonId}`,
  };
}
