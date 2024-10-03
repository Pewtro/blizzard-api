import type { Locales } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { cardBackSearch, fetchOneCardBack } from './card-backs';
import type { CardBackSearchParameters } from './types';

describe('cardBackSearch', () => {
  it('should return the correct resource object for card back search', () => {
    const options: CardBackSearchParameters = { locale: 'en_US', page: 1 };
    const result = cardBackSearch(options);

    expect(result).toEqual({
      parameters: options,
      path: 'hearthstone/cardbacks',
    });
  });
});

describe('fetchOneCardBack', () => {
  it('should return the correct resource object for fetching one card back with locale', () => {
    const id = '12345';
    const locale: Locales = 'en_US';
    const result = fetchOneCardBack(id, locale);

    expect(result).toEqual({
      parameters: { locale },
      path: `hearthstone/cardbacks/${id}`,
    });
  });

  it('should return the correct resource object for fetching one card back without locale', () => {
    const id = '12345';
    const result = fetchOneCardBack(id);

    expect(result).toEqual({
      parameters: { locale: undefined },
      path: `hearthstone/cardbacks/${id}`,
    });
  });
});
