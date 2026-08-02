/* eslint-disable sonarjs/cognitive-complexity */
import type { Locales, Resource } from '@blizzard-api/core';
import type {
  BlizzardCardSearchParameters,
  CardSearchParameters,
  CardSearchResponse,
  FetchOneCardResponse,
  GameMode,
} from './types';

const collectibleMapping: Record<
  Required<CardSearchParameters>['collectible'],
  BlizzardCardSearchParameters['collectible']
> = {
  both: '0,1',
  collectible: '1',
  'non-collectible': '0',
};

/**
 * Returns a list of cards based on the search parameters provided.
 * @param options The options for fetching cards. See {@link CardSearchParameters}.
 * @returns The card search resource. See {@link CardSearchResponse}.
 */
export function cardSearch(options: CardSearchParameters): Resource<CardSearchResponse, BlizzardCardSearchParameters> {
  let attack: string | undefined;
  let defaultMercenary: string | undefined;
  let health: string | undefined;
  let mercenaryId: string | undefined;
  let collectible: BlizzardCardSearchParameters['collectible'] = '0,1';
  let manaCost: string | undefined;
  let tier: string | undefined;

  if (options.attack) {
    attack = Array.isArray(options.attack) ? options.attack.join(',') : String(options.attack);
  }
  if (options.defaultMercenary) {
    defaultMercenary = Array.isArray(options.defaultMercenary)
      ? options.defaultMercenary.join(',')
      : String(options.defaultMercenary);
  }
  if (options.health) {
    health = Array.isArray(options.health) ? options.health.join(',') : String(options.health);
  }
  if (options.mercenaryId) {
    mercenaryId = Array.isArray(options.mercenaryId) ? options.mercenaryId.join(',') : String(options.mercenaryId);
  }
  if (options.collectible) {
    collectible = collectibleMapping[options.collectible];
  }
  if (options.manaCost) {
    manaCost = Array.isArray(options.manaCost) ? options.manaCost.join(',') : String(options.manaCost);
  }
  if (options.tier) {
    tier = Array.isArray(options.tier) ? options.tier.join(',') : String(options.tier);
  }

  return {
    parameters: {
      ...options,
      attack,
      collectible,
      defaultMercenary,
      health,
      manaCost,
      mercenaryId,
      tier,
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
