import { wowAccountProfileBasePath } from '@blizzard-api/core';
import type { ProtectedResource } from '@blizzard-api/core';
import type {
  AccountCollectionsIndexResponse,
  AccountHeirloomsCollectionSummaryResponse,
  AccountMountsCollectionSummaryResponse,
  AccountPetsCollectionSummaryResponse,
  AccountProfileSummaryResponse,
  AccountToysCollectionSummaryResponse,
  AccountTransmogsCollectionSummaryResponse,
} from './types';

/**
 * Get an index of collection types for the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account collections index. See {@link AccountCollectionsIndexResponse}.
 */
export function accountCollectionsIndex(token?: string): ProtectedResource<AccountCollectionsIndexResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowAccountProfileBasePath}/collections`,
    token,
  };
}

/**
 * Get the heirlooms collected by the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account's heirlooms. See {@link AccountHeirloomsCollectionSummaryResponse}.
 */
export function accountHeirloomsCollectionSummary(
  token?: string,
): ProtectedResource<AccountHeirloomsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowAccountProfileBasePath}/collections/heirlooms`,
    token,
  };
}

/**
 * Get the mounts collected by the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account's mounts. See {@link AccountMountsCollectionSummaryResponse}.
 */
export function accountMountsCollectionSummary(
  token?: string,
): ProtectedResource<AccountMountsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowAccountProfileBasePath}/collections/mounts`,
    token,
  };
}

/**
 * Get the battle pets collected by the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account's battle pets. See {@link AccountPetsCollectionSummaryResponse}.
 */
export function accountPetsCollectionSummary(token?: string): ProtectedResource<AccountPetsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowAccountProfileBasePath}/collections/pets`,
    token,
  };
}

/**
 * Get a profile summary for the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account profile summary. See {@link AccountProfileSummaryResponse}.
 */
export function accountProfileSummary(token?: string): ProtectedResource<AccountProfileSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: wowAccountProfileBasePath,
    token,
  };
}

/**
 * Get the toys collected by the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account's toys. See {@link AccountToysCollectionSummaryResponse}.
 */
export function accountToysCollectionSummary(token?: string): ProtectedResource<AccountToysCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowAccountProfileBasePath}/collections/toys`,
    token,
  };
}

/**
 * Get the transmog unlocks for the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token Optional user access token; alternatively, scope the client with `withUserToken`.
 * @returns The account's transmogs. See {@link AccountTransmogsCollectionSummaryResponse}.
 */
export function accountTransmogsCollectionSummary(
  token?: string,
): ProtectedResource<AccountTransmogsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${wowAccountProfileBasePath}/collections/transmogs`,
    token,
  };
}
