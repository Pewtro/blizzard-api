import type { ProtectedResource } from '@blizzard-api/core';
import type { AccountProfileSummaryResponse, AccountTransmogsCollectionSummaryResponse } from './types';

const basePath = '/profile/user/wow';

/**
 * Get a profile summary for the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token The user access token.
 * @returns The account profile summary. See {@link AccountProfileSummaryResponse}.
 */
export function accountProfileSummary(token: string): ProtectedResource<AccountProfileSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: basePath,
    token,
  };
}

/**
 * Get the transmog unlocks for the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token The user access token.
 * @returns The account's transmogs. See {@link AccountTransmogsCollectionSummaryResponse}.
 */
export function accountTransmogsCollectionSummary(
  token: string,
): ProtectedResource<AccountTransmogsCollectionSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: `${basePath}/collections/transmogs`,
    token,
  };
}
