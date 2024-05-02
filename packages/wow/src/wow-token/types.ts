import type { ResponseBase } from '../base';

/**
 * The response for a WoW token.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface WowTokenResponse extends ResponseBase {
  last_updated_timestamp: number;
  price: number;
}
