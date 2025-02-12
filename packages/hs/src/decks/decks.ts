import type { Resource } from '@blizzard-api/core';
import type { DeckResponse, DeckSearchParameters } from './types';

/**
 * Returns a deck based on the code provided.
 * @param options The options for fetching a deck.
 * @returns The deck resource. See {@link DeckResponse}.
 */
export function getDeck(
  options: { code: string } | { hero?: string; ids: Array<string> },
): Resource<DeckResponse, DeckSearchParameters> {
  if ('code' in options) {
    return {
      parameters: {
        code: encodeURI(options.code),
      },
      path: 'hearthstone/deck',
    };
  }

  return {
    parameters: {
      hero: options.hero,
      ids: options.ids?.join(','),
    },
    path: 'hearthstone/deck',
  };
}
