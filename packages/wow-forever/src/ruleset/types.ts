import type { Href, KeyBase, NullishNameId, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a ruleset index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RulesetIndexResponse extends ResponseBase {
  rulesets: Array<RulesetSummary>;
}

/**
 * The response for a ruleset.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface RulesetResponse extends NullishNameId, ResponseBase {
  auctions: Href;
  status: RulesetStatus;
}

interface RulesetStatus {
  name: string;
  type: 'DOWN' | 'UP';
}

interface RulesetSummary extends KeyBase {
  id: number;
}
