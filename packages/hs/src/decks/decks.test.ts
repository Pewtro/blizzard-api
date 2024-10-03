import type { Resource } from '@blizzard-api/core';
import { describe, expect, it } from 'vitest';
import { getDeck } from './decks';
import type { DeckResponse, DeckSearchParameters } from './types';

describe('getDeck', () => {
  it('should return a Resource with encoded code parameter when code is provided', () => {
    const options = { code: 'ABC123' };
    const result: Resource<DeckResponse, DeckSearchParameters> = getDeck(options);

    expect(result).toEqual({
      parameters: {
        code: 'ABC123',
      },
      path: 'hearthstone/deck',
    });
  });

  it('should return a Resource with hero and ids parameters when code is not provided', () => {
    const options = { hero: 'mage', ids: ['1', '2', '3'] };
    const result: Resource<DeckResponse, DeckSearchParameters> = getDeck(options);

    expect(result).toEqual({
      parameters: {
        hero: 'mage',
        ids: '1,2,3',
      },
      path: 'hearthstone/deck',
    });
  });
});
