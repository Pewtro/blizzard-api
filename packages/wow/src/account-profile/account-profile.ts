import type { ProtectedResource } from '@blizzard-api/core';
import type {
  AccountCollectionsIndexResponse,
  AccountHeirloomsCollectionSummaryResponse,
  AccountMountsCollectionSummaryResponse,
  AccountPetsCollectionSummaryResponse,
  AccountProfileSummaryResponse,
  AccountToysCollectionSummaryResponse,
  AccountTransmogsCollectionSummaryResponse,
  ProtectedCharacterProfileSummaryResponse,
} from './types';

const accountProfileBase = '/profile/user/wow';

export function accountProfileSummary(token: string): ProtectedResource<AccountProfileSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}`,
    token,
  };
}

export function protectedCharacterProfileSummary(
  realmId: number,
  characterId: number,
  token: string,
): ProtectedResource<ProtectedCharacterProfileSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/protected-character/${realmId}-${characterId}`,
    token,
  };
}

export function accountCollectionsIndex(token: string): ProtectedResource<AccountCollectionsIndexResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections`,
    token,
  };
}

export function accountHeirloomsCollectionSummary(
  token: string,
): ProtectedResource<AccountHeirloomsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/heirlooms`,
    token,
  };
}

export function accountMountsCollectionSummary(
  token: string,
): ProtectedResource<AccountMountsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/mounts`,
    token,
  };
}

export function accountPetsCollectionSummary(token: string): ProtectedResource<AccountPetsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/pets`,
    token,
  };
}

export function accountToysCollectionSummary(token: string): ProtectedResource<AccountToysCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/toys`,
    token,
  };
}

export function accountTransmogsCollectionSummary(
  token: string,
): ProtectedResource<AccountTransmogsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/transmogs`,
    token,
  };
}
