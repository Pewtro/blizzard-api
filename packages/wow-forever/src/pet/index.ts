import type { Resource } from '@blizzard-api/core';
import { wowBasePath, wowMediaBasePath } from '@blizzard-api/core';
import type {
  PetAbilityIndexResponse,
  PetAbilityMediaResponse,
  PetAbilityResponse,
  PetIndexResponse,
  PetMediaResponse,
  PetResponse,
} from './types';

/**
 * Get a pet by ID.
 * @param petId The pet ID.
 * @returns The pet. See {@link PetResponse}.
 */
export function pet(petId: number): Resource<PetResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/pet/${petId}`,
  };
}
/**
 * Get a pet ability by ID.
 * @param petAbilityId The pet ability ID.
 * @returns The pet ability. See {@link PetAbilityResponse}.
 */
export function petAbility(petAbilityId: number): Resource<PetAbilityResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/pet-ability/${petAbilityId}`,
  };
}
/**
 * Get a pet ability index.
 * @returns The pet ability index. See {@link PetAbilityIndexResponse}.
 */
export function petAbilityIndex(): Resource<PetAbilityIndexResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/pet-ability/index`,
  };
}
/**
 * Get pet ability media by ID.
 * @param petAbilityId The pet ability ID.
 * @returns The pet ability media. See {@link PetAbilityMediaResponse}.
 */
export function petAbilityMedia(petAbilityId: number): Resource<PetAbilityMediaResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowMediaBasePath}/pet-ability/${petAbilityId}`,
  };
}
/**
 * Get a pet index.
 * @returns The pet index. See {@link PetIndexResponse}.
 */
export function petIndex(): Resource<PetIndexResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowBasePath}/pet/index`,
  };
}
/**
 * Get pet media by ID.
 * @param petId The pet ID.
 * @returns The pet media. See {@link PetMediaResponse}.
 */
export function petMedia(petId: number): Resource<PetMediaResponse> {
  return {
    namespace: 'static-forever',
    path: `${wowMediaBasePath}/pet/${petId}`,
  };
}
