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
 * Get an index of collection types for a character.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's collection index. See {@link CharacterCollectionsIndexResponse}.
 */
export function characterCollectionsIndex(name: string, surname: string): Resource<CharacterCollectionsIndexResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/collections`,
  };
}

/**
 * Get a summary of the heirlooms a character has obtained.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's heirlooms. See {@link CharacterHeirloomsCollectionSummaryResponse}.
 */
export function characterHeirloomsCollectionSummary(
  name: string,
  surname: string,
): Resource<CharacterHeirloomsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/collections/heirlooms`,
  };
}

/**
 * Get a summary of the mounts a character has obtained.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's mounts. See {@link CharacterMountsCollectionSummaryResponse}.
 */
export function characterMountsCollectionSummary(
  name: string,
  surname: string,
): Resource<CharacterMountsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/collections/mounts`,
  };
}

/**
 * Get a summary of the battle pets a character has obtained.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's battle pets. See {@link CharacterPetsCollectionSummaryResponse}.
 */
export function characterPetsCollectionSummary(
  name: string,
  surname: string,
): Resource<CharacterPetsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/collections/pets`,
  };
}

/**
 * Get a summary of the toys a character has obtained.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's toys. See {@link CharacterToysCollectionSummaryResponse}.
 */
export function characterToysCollectionSummary(
  name: string,
  surname: string,
): Resource<CharacterToysCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/collections/toys`,
  };
}

/**
 * Get a summary of the transmog unlocks a character has obtained.
 * @param name The character's first name.
 * @param surname The character's surname.
 * @returns The character's transmogs. See {@link CharacterTransmogCollectionSummaryResponse}.
 */
export function characterTransmogCollectionSummary(
  name: string,
  surname: string,
): Resource<CharacterTransmogCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/${characterSlug(name, surname)}/collections/transmogs`,
  };
}

const characterSlug = (name: string, surname: string): string => encodeURIComponent(`${name}-${surname}`.toLowerCase());
