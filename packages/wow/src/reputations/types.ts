import type { KeyBase, NameIdKey, ResponseBase } from '../base';

export interface ReputationFactionIndexResponse extends ResponseBase {
  factions: Array<NameIdKey>;
  root_factions: Array<NameIdKey>;
}

export interface ReputationFactionResponse extends ResponseBase {
  id: number;
  name: string;
  description: string;
  reputation_tiers: ReputationTiers;
}

interface ReputationTiers extends KeyBase {
  id: number;
}

export interface ReputationTiersIndexResponse extends ResponseBase {
  reputation_tiers: Array<ReputationTier>;
}

interface ReputationTier extends KeyBase {
  id: number;
  name?: string;
}

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
