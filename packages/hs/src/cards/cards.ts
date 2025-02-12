import type { Locales, Resource } from '@blizzard-api/core';
import type { GameMode } from '../base';
import type {
  BlizzardCardSearchParameters,
  CardSearchParameters,
  CardSearchResponse,
  FetchOneCardResponse,
} from './types';

/**
 * Returns a list of cards based on the search parameters provided.
 * @param options The options for fetching cards. See {@link CardSearchParameters}.
 * @returns The card search resource. See {@link CardSearchResponse}.
 */
export function cardSearch(options: CardSearchParameters): Resource<CardSearchResponse, BlizzardCardSearchParameters> {
  let attack: string | undefined = undefined;
  let defaultMercenary: string | undefined = undefined;
  let health: string | undefined = undefined;
  let mercenaryId: string | undefined = undefined;

  if (options.attack) {
    attack = Array.isArray(options.attack) ? options.attack.join(',') : `${options.attack}`;
  }
  if (options.defaultMercenary) {
    defaultMercenary = Array.isArray(options.defaultMercenary)
      ? options.defaultMercenary.join(',')
      : `${options.defaultMercenary}`;
  }
  if (options.health) {
    health = Array.isArray(options.health) ? options.health.join(',') : `${options.health}`;
  }
  if (options.mercenaryId) {
    mercenaryId = Array.isArray(options.mercenaryId) ? options.mercenaryId.join(',') : `${options.mercenaryId}`;
  }

  return {
    parameters: {
      ...options,
      attack,
      defaultMercenary,
      health,
      mercenaryId,
    },
    path: 'hearthstone/cards',
  };
}

/**
 * Returns a single card based on the ID provided.
 * @param id The card ID
 * @param options The options for fetching a card.
 * @param options.gameMode The game mode to use for fetching the card (optional).
 * @param options.locale The locale to use for fetching the card (optional).
 * @returns The card resource. See {@link FetchOneCardResponse}.
 */
export function fetchOneCard(
  id: string,
  options?: {
    gameMode?: GameMode;
    locale?: Locales;
  },
): Resource<FetchOneCardResponse, { gameMode?: GameMode; locale?: Locales }> {
  const { gameMode = 'constructed', locale } = options ?? {};
  return {
    parameters: { gameMode, locale },
    path: `hearthstone/cards/${id}`,
  };
}
