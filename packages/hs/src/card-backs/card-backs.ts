import type { Locales, Resource } from '@blizzard-api/core';
import type { CardBackSearchParameters, CardBackSearchResponse, SingleCardBackSearchResponse } from './types';

export function cardBackSearch(
  options: CardBackSearchParameters,
): Resource<CardBackSearchResponse, CardBackSearchParameters> {
  return {
    parameters: options,
    path: 'hearthstone/cardbacks',
  };
}

export function fetchOneCardBack(
  id: string,
  locale?: Locales,
): Resource<SingleCardBackSearchResponse, { locale?: Locales }> {
  return {
    parameters: { locale },
    path: `hearthstone/cardbacks/${id}`,
  };
}
