import type { Resource } from '@blizzard-api/core';
import { profileBase } from '../base';
import type { AccountHeroFollowerItemsResponse, AccountHeroResponse, AccountResponse } from './types';

/**
 * Returns the account information for the specified battle tag.
 * @param battleTag The battle tag of the account.
 * @returns The account resource. See {@link AccountResponse}.
 */
export function account(battleTag: string): Resource<AccountResponse> {
  return {
    path: `${profileBase}/${battleTag}`,
  };
}

/**
 * Returns the hero information for the specified battle tag and hero ID.
 * @param battleTag The battle tag of the account.
 * @param heroId The ID of the hero.
 * @returns The hero resource. See {@link AccountHeroResponse}.
 */
export function accountHero(battleTag: string, heroId: number): Resource<AccountHeroResponse> {
  return {
    path: `${profileBase}/${battleTag}/hero/${heroId}`,
  };
}

/**
 * Returns the follower items for the specified battle tag and hero ID.
 * @param battleTag The battle tag of the account.
 * @param heroId The ID of the hero.
 * @returns The follower items resource. See {@link AccountHeroFollowerItemsResponse}.
 */
export function accountHeroFollowerItems(
  battleTag: string,
  heroId: number,
): Resource<AccountHeroFollowerItemsResponse> {
  return {
    path: `${profileBase}/${battleTag}/hero/${heroId}/follower-items`,
  };
}

/**
 * Returns the items for the specified battle tag and hero ID.
 * @param battleTag The battle tag of the account.
 * @param heroId The ID of the hero.
 * @returns The hero items resource. See {@link AccountHeroResponse}.
 */
export function accountHeroItems(battleTag: string, heroId: number): Resource<AccountHeroResponse> {
  return {
    path: `${profileBase}/${battleTag}/hero/${heroId}/items`,
  };
}
