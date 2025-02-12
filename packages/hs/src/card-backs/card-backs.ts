import type { Locales, Resource } from '@blizzard-api/core';
import type { CardBackSearchParameters, CardBackSearchResponse, SingleCardBackSearchResponse } from './types';

/**
 * Returns a list of card backs based on the search parameters provided.
 * @param options The options for fetching card backs. See {@link CardBackSearchParameters}.
 * @returns The card back search resource. See {@link CardBackSearchResponse}.
 */
export function cardBackSearch(
  options: CardBackSearchParameters,
): Resource<CardBackSearchResponse, CardBackSearchParameters> {
  return {
    parameters: options,
    path: 'hearthstone/cardbacks',
  };
}

/**
 * Returns a single card back based on the ID provided.
 * @param id The card back ID
 * @param locale The locale to use for fetching the card back (optional).
 * @returns The card back resource. See {@link SingleCardBackSearchResponse}.
 */
export function fetchOneCardBack(
  id: string,
  locale?: Locales,
): Resource<SingleCardBackSearchResponse, { locale?: Locales }> {
  return {
    parameters: { locale },
    path: `hearthstone/cardbacks/${id}`,
  };
}
