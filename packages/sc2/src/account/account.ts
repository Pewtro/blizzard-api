import type { Resource } from '@blizzard-api/core';

/**
 * Returns the player information for the specified account ID.
 * @param accountId The account ID
 * @returns The player resource. See {@link Resource}.
 */
export function player(accountId: string): Resource<Array<unknown>> {
  return {
    path: `/sc2/player/${accountId}`,
  };
}
