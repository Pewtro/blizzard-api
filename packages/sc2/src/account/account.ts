import type { Resource } from '@blizzard-api/core';

export function player(accountId: string): Resource<Array<unknown>> {
  return {
    path: `/sc2/player/${accountId}`,
  };
}
