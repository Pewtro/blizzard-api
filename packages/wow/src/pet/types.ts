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
  abilities: Array<Ability>;
  battle_pet_type: BattlePetType;
  creature: NameIdKey;
  description: string;
  icon: string;
  is_alliance_only: boolean;
  is_battlepet: boolean;
  is_capturable: boolean;
  is_horde_only: boolean;
  is_random_creature_display: boolean;
  is_tradable: boolean;
  media: Media;
  should_exclude_if_uncollected: boolean;
  source: Source;
}

interface Ability {
  ability: NameIdKey;
  required_level: number;
  slot: number;
}

interface BattlePetType extends NameId {
  type: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Source {
  name: string;
  type: string;
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
  media: Media;
  rounds: number;
}

/**
 * The response for a pet ability media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}
