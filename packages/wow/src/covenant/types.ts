import type { IdKey, MediaAsset, NameId, NameIdKey, NameType, ResponseBase } from '@blizzard-api/core';

/**
 * Interface for a response from the conduit index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ConduitIndexResponse extends ResponseBase {
  conduits: Array<NameIdKey>;
}

/**
 * Interface for a response from the conduit endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface ConduitResponse extends ResponseBase {
  id: number;
  item: NameIdKey;
  name: string;
  ranks: Array<Rank>;
  socket_type: NameType;
}

/**
 * Interface for a response from the covenant index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CovenantIndexResponse extends ResponseBase {
  covenants: Array<NameIdKey>;
}

/**
 * Interface for a response from the covenant media endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CovenantMediaResponse extends ResponseBase {
  assets?: Array<MediaAsset>;
}

/**
 * Interface for a response from the covenant endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CovenantResponse extends ResponseBase {
  class_abilities?: Array<ClassAbility>;
  description: string;
  id: number;
  media?: IdKey;
  name: string;
  renown_rewards: Array<RenownReward>;
  signature_ability?: SignatureAbility;
  soulbinds?: Array<NameIdKey>;
}

/**
 * Interface for a response from the soulbind index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SoulbindIndexResponse extends ResponseBase {
  soulbinds: Array<NameIdKey>;
}

/**
 * Interface for a response from the soulbind endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SoulbindResponse extends ResponseBase {
  covenant: NameIdKey;
  creature: NameIdKey;
  follower: NameId;
  id: number;
  name: string;
  talent_tree: NameIdKey;
}

interface ClassAbility {
  id: number;
  playable_class: NameIdKey;
  spell_tooltip: ClassAbilitySpellTooltip;
}

interface ClassAbilitySpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: string;
  power_cost?: null | string;
  range?: string;
  spell: NameIdKey;
}

interface Rank {
  id: number;
  spell_tooltip: SpellTooltip;
  tier: number;
}

interface RenownReward {
  level: number;
  reward: NameIdKey;
}

interface SignatureAbility {
  id: number;
  spell_tooltip: SignatureAbilitySpellTooltip;
}

interface SignatureAbilitySpellTooltip {
  cast_time: string;
  cooldown?: string;
  description: string;
  range?: string;
  spell: NameIdKey;
}

interface SpellTooltip {
  cast_time: string;
  description: string;
  spell: NameIdKey;
}
