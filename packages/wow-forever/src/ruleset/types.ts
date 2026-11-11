import type { Href, IdKey, NameType, NullishNameId, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a ruleset index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RulesetIndexResponse extends ResponseBase {
  rulesets: Array<IdKey>;
}

/**
 * The response for a ruleset.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RulesetResponse extends NullishNameId, ResponseBase {
  auctions: Href;
  status: RulesetStatus;
}

interface RulesetStatus extends NameType {
  type: 'DOWN' | 'UP';
}
