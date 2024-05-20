import type { Resource } from '@blizzard-api/core';
import { profileBase } from '../base';
import type { AccountHeroFollowerItemsResponse, AccountHeroResponse, AccountResponse } from './types';

export function account(battleTag: string): Resource<AccountResponse> {
  return {
    path: `${profileBase}/${battleTag}`,
  };
}

export function accountHero(battleTag: string, heroId: number): Resource<AccountHeroResponse> {
  return {
    path: `${profileBase}/${battleTag}/hero/${heroId}`,
  };
}

export function accountHeroItems(battleTag: string, heroId: number): Resource<AccountHeroResponse> {
  return {
    path: `${profileBase}/${battleTag}/hero/${heroId}/items`,
  };
}

export function accountHeroFollowerItems(
  battleTag: string,
  heroId: number,
): Resource<AccountHeroFollowerItemsResponse> {
  return {
    path: `${profileBase}/${battleTag}/hero/${heroId}/follower-items`,
  };
}
