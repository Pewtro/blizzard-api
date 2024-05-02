import type { KeyBase, NameIdKey, ResponseBase } from '../base';

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
  id: number;
  name: string;
  description: string;
  reputation_tiers: ReputationTiers;
}

interface ReputationTiers extends KeyBase {
  id: number;
}

/**
 * The response for a reputation tier index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ReputationTiersIndexResponse extends ResponseBase {
  reputation_tiers: Array<ReputationTier>;
}

interface ReputationTier extends KeyBase {
  id: number;
  name?: string;
}

/**
 * The response for a reputation tier.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ReputationTiersResponse extends ResponseBase {
  id: number;
  tiers: Array<Tier>;
  faction?: NameIdKey;
}

interface Tier {
  name: string;
  min_value: number;
  max_value: number;
  id: number;
}
