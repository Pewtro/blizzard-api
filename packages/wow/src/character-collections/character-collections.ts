import type { ProtectedResource } from '@blizzard-api/core';
import type {
  CharacterCollectionsIndexResponse,
  CharacterHeirloomsCollectionSummaryResponse,
  CharacterMountsCollectionSummaryResponse,
  CharacterPetsCollectionSummaryResponse,
  CharacterToysCollectionSummaryResponse,
  CharacterTransmogCollectionSummaryResponse,
} from './types';

const basePath = '/profile/wow/character';

export function characterCollectionsIndex(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterCollectionsIndexResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections`,
    token,
  };
}

export function characterHeirloomsCollectionSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterHeirloomsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/heirlooms`,
    token,
  };
}

export function characterMountsCollectionSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterMountsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/mounts`,
    token,
  };
}

export function characterPetsCollectionSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterPetsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/pets`,
    token,
  };
}

export function characterToysCollectionSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterToysCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/toys`,
    token,
  };
}

export function characterTransmogCollectionSummary(
  realmSlug: string,
  characterName: string,
  token: string,
): ProtectedResource<CharacterTransmogCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${basePath}/${realmSlug}/${characterName}/collections/transmogs`,
    token,
  };
}
