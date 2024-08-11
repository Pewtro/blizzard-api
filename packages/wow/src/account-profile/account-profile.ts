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

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a profile summary for an account.
 */
export function accountProfileSummary(token: string): ProtectedResource<AccountProfileSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}`,
    token,
  };
}

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param realmId The realm ID.
 * @param characterId The character ID.
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a protected profile summary for a character.
 */
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

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns an index of collection types for an account.
 */
export function accountCollectionsIndex(token: string): ProtectedResource<AccountCollectionsIndexResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections`,
    token,
  };
}

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a summary of the heirlooms an account has obtained.
 */
export function accountHeirloomsCollectionSummary(
  token: string,
): ProtectedResource<AccountHeirloomsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/heirlooms`,
    token,
  };
}

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a summary of the mounts an account has obtained.
 */
export function accountMountsCollectionSummary(
  token: string,
): ProtectedResource<AccountMountsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/mounts`,
    token,
  };
}

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a summary of the battle pets an account has obtained.
 */
export function accountPetsCollectionSummary(token: string): ProtectedResource<AccountPetsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/pets`,
    token,
  };
}

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a summary of the toys an account has obtained.
 */
export function accountToysCollectionSummary(token: string): ProtectedResource<AccountToysCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/toys`,
    token,
  };
}

/**
 * Because this endpoint provides data about the current logged-in user's World of Warcraft account, it requires an access token with the wow.profile scope acquired via the Authorization Code Flow. See {@link https://develop.battle.net/documentation/guides/using-oauth/authorization-code-flow}
 * @param token The OAuth 2.0 access token to use for authentication.
 * @returns a summary of the transmog unlocks an account has obtained.
 */
export function accountTransmogsCollectionSummary(
  token: string,
): ProtectedResource<AccountTransmogsCollectionSummaryResponse> {
  return {
    namespace: 'profile',
    path: `${accountProfileBase}/collections/transmogs`,
    token,
  };
}
