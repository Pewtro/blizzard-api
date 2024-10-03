import type { Resource } from '@blizzard-api/core';
import type { DeckResponse, DeckSearchParameters } from './types';

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
