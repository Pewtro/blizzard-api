import type { Faction, KeyBase, NameIdKey, ResponseBase } from '@blizzard-api/core';

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
  can_paragon?: boolean;
  description?: string;
  factions?: Array<NameIdKey>;
  header_shows_bar?: boolean;
  id: number;
  is_header?: boolean;
  is_renown?: boolean;
  name: string;
  player_faction?: Faction;
  renown_tiers?: Array<RenownTier>;
  reputation_tiers?: ReputationTier;
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

interface RenownTier {
  level: number;
  name: string;
  rewards: Array<NameIdKey>;
}

interface ReputationTier extends KeyBase {
  id: number;
  name?: string;
}

interface Tier {
  id: number;
  max_value: number;
  min_value: number;
  name: string;
}
