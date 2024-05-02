import type { KeyBase, MediaAsset, NameId, NameIdKey, ResponseBase } from '../base';

/**
 * The response for a pet index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetIndexResponse extends ResponseBase {
  pets: Array<NameIdKey>;
}

/**
 * The response for a pet.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetResponse extends ResponseBase, NameId {
  battle_pet_type: BattlePetType;
  description: string;
  is_capturable: boolean;
  is_tradable: boolean;
  is_battlepet: boolean;
  is_alliance_only: boolean;
  is_horde_only: boolean;
  abilities: Array<Ability>;
  source: Source;
  icon: string;
  creature: NameIdKey;
  is_random_creature_display: boolean;
  media: Media;
  should_exclude_if_uncollected: boolean;
}

interface Ability {
  ability: NameIdKey;
  slot: number;
  required_level: number;
}

interface BattlePetType extends NameId {
  type: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  type: string;
  name: string;
}

/**
 * The response for a pet search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a pet ability index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityIndexResponse extends ResponseBase {
  abilities: Array<NameIdKey>;
}

/**
 * The response for a pet ability.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityResponse extends ResponseBase, NameId {
  battle_pet_type: BattlePetType;
  rounds: number;
  media: Media;
}

/**
 * The response for a pet ability media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
