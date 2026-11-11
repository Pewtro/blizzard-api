import { wowAccountProfileBasePath } from '@blizzard-api/core';
import type { ProtectedResource } from '@blizzard-api/core';
import type { AccountProfileSummaryResponse, AccountTransmogsCollectionSummaryResponse } from './types';

/**
 * Get a profile summary for the authenticated account.
 * Requires a user access token with the `wow.profile` scope.
 * @param token The user access token.
 * @returns The account profile summary. See {@link AccountProfileSummaryResponse}.
 */
export function accountProfileSummary(token: string): ProtectedResource<AccountProfileSummaryResponse> {
  return {
    namespace: 'profile-forever',
    path: wowAccountProfileBasePath,
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
    path: `${wowAccountProfileBasePath}/collections/transmogs`,
    token,
  };
}
