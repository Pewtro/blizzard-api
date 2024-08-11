import type { Resource } from '@blizzard-api/core';
import type {
  CharacterCollectionsIndexResponse,
  CharacterHeirloomsCollectionSummaryResponse,
  CharacterMountsCollectionSummaryResponse,
  CharacterPetsCollectionSummaryResponse,
  CharacterToysCollectionSummaryResponse,
  CharacterTransmogCollectionSummaryResponse,
} from './types';

const basePath = '/profile/wow/character';

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns an index of collection types for a character.
 */
export function characterCollectionsIndex(
  realmSlug: string,
  characterName: string,
): Resource<CharacterCollectionsIndexResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the heirlooms a character has obtained.
 */
export function characterHeirloomsCollectionSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterHeirloomsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/heirlooms`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the mounts a character has obtained.
 */
export function characterMountsCollectionSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterMountsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/mounts`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the battle pets a character has obtained.
 */
export function characterPetsCollectionSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterPetsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/pets`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the toys a character has obtained.
 */
export function characterToysCollectionSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterToysCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/toys`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the transmog unlocks a character has obtained.
 */
export function characterTransmogCollectionSummary(
  realmSlug: string,
  characterName: string,
): Resource<CharacterTransmogCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/transmogs`,
  };
}
