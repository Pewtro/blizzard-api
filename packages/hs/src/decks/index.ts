import type { Resource } from '@blizzard-api/core';
import type { DeckResponse, DeckSearchParameters } from './types';

/**
 * Returns a deck based on the code provided.
 * @param options The options for fetching a deck.
 * @returns The deck resource. See {@link DeckResponse}.
 */
export function getDeck(
  options:
    | { code: string }
    | {
        hero?: number | string;
        ids: Array<number | string>;
        //Undocumented parameter used for sideboard cards for Zilliax Deluxe 3000 and E.T.C., Band Manager.
        sideboardCards?: `${number}:${number}` | Array<`${number}:${number}`>;
      },
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
      hero: options.hero?.toString(),
      ids: options.ids?.join(','),
      sideboardCards: Array.isArray(options.sideboardCards) ? options.sideboardCards.join(',') : options.sideboardCards,
    },
    path: 'hearthstone/deck',
  };
}
