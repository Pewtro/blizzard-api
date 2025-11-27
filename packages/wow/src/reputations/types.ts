import type { KeyBase, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a reputation faction index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ReputationFactionIndexResponse extends ResponseBase {
  factions: Array<NameIdKey>;
  root_factions: Array<NameIdKey>;
}

/**
 * The response for a reputation faction.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ReputationFactionResponse extends ResponseBase {
  description: string;
  id: number;
  name: string;
  reputation_tiers: ReputationTiers;
}

/**
 * The response for a reputation tier index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ReputationTiersIndexResponse extends ResponseBase {
  reputation_tiers: Array<ReputationTier>;
}

/**
 * The response for a reputation tier.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ReputationTiersResponse extends ResponseBase {
  faction?: NameIdKey;
  id: number;
  tiers: Array<Tier>;
}

interface ReputationTier extends KeyBase {
  id: number;
  name?: string;
}

interface ReputationTiers extends KeyBase {
  id: number;
}

interface Tier {
  id: number;
  max_value: number;
  min_value: number;
  name: string;
}
