import { wowCharacterBasePath } from '@blizzard-api/core';
import type { Resource } from '@blizzard-api/core';
import type {
  CharacterCollectionDecorResponse,
  CharacterCollectionsIndexResponse,
  CharacterHeirloomsCollectionSummaryResponse,
  CharacterMountsCollectionSummaryResponse,
  CharacterPetsCollectionSummaryResponse,
  CharacterToysCollectionSummaryResponse,
  CharacterTransmogCollectionSummaryResponse,
} from './types';

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
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections`,
  };
}

/**
 * @param realmSlug The slug of the realm.
 * @param characterName The lowercase name of the character.
 * @returns a summary of the housing decor a character has collected.
 */
export function characterCollectionDecor(
  realmSlug: string,
  characterName: string,
): Resource<CharacterCollectionDecorResponse> {
  return {
    namespace: 'profile',
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections/decor`,
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
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections/heirlooms`,
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
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections/mounts`,
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
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections/pets`,
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
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections/toys`,
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
    path: `${wowCharacterBasePath}/${realmSlug}/${characterName}/collections/transmogs`,
  };
}
