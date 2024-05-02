import type { KeyBase, NameIdKey, ResponseBase } from '../base';

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
  name: string;
  item: Item;
  socket_type: SocketType;
  ranks: Array<Rank>;
}

interface Item extends KeyBase {
  id: number;
}

interface Rank {
  id: number;
  tier: number;
  spell_tooltip: SpellTooltip;
}

interface SpellTooltip {
  spell: Item;
  description: string;
  cast_time: string;
}

interface SocketType {
  type: string;
  name: string;
}

/**
 * Interface for a response from the covenant index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CovenantIndexResponse extends ResponseBase {
  covenants: Array<NameIdKey>;
}

/**
 * Interface for a response from the covenant endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CovenantResponse extends ResponseBase {
  id: number;
  name: string;
  description: string;
  renown_rewards: Array<RenownReward>;
}

interface RenownReward {
  level: number;
  reward: NameIdKey;
}

/**
 * Interface for a response from the covenant media endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CovenantMediaResponse extends ResponseBase {
  id: number;
  name: string;
  description: string;
  signature_ability: SignatureAbility;
  class_abilities: Array<ClassAbility>;
  soulbinds: Array<NameIdKey>;
  renown_rewards: Array<RenownReward>;
  media: Media;
}

interface ClassAbility {
  id: number;
  playable_class: NameIdKey;
  spell_tooltip: ClassAbilitySpellTooltip;
}

interface ClassAbilitySpellTooltip {
  spell: NameIdKey;
  description: string;
  cast_time: string;
  range?: string;
  cooldown?: string;
  power_cost?: null | string;
}

interface Media extends KeyBase {
  id: number;
}

interface SignatureAbility {
  id: number;
  spell_tooltip: SignatureAbilitySpellTooltip;
}

interface SignatureAbilitySpellTooltip {
  spell: NameIdKey;
  description: string;
  cast_time: string;
  cooldown: string;
}

/**
 * Interface for a response from the soulbind endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SoulbindResponse extends ResponseBase {
  id: number;
  name: string;
  covenant: NameIdKey;
  creature: NameIdKey;
  follower: NameIdKey;
  talent_tree: NameIdKey;
}

/**
 * Interface for a response from the soulbind index endpoint.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface SoulbindIndexResponse extends ResponseBase {
  soulbinds: Array<NameIdKey>;
}
