import type {
  IdKey,
  MediaAsset,
  NameId,
  NameIdKey,
  NameType,
  NullishNameId,
  NullishNameIdKey,
  ResponseBase,
} from '@blizzard-api/core';

/**
 * The response for a pet ability index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityIndexResponse extends ResponseBase {
  abilities: Array<NullishNameIdKey>;
}

/**
 * The response for a pet ability media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityMediaResponse extends ResponseBase {
  assets: Array<MediaAsset>;
  id: number;
}

/**
 * The response for a pet ability.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetAbilityResponse extends NullishNameId, ResponseBase {
  battle_pet_type: BattlePetType;
  cooldown?: number;
  media: IdKey;
  rounds: number;
}

/**
 * The response for a pet index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetIndexResponse extends ResponseBase {
  pets: Array<NullishNameIdKey>;
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
 * The response for a pet.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface PetResponse extends NullishNameId, ResponseBase {
  abilities?: Array<Ability>;
  battle_pet_type: BattlePetType;
  creature: NameIdKey;
  description: null | string;
  icon: string;
  is_alliance_only: boolean;
  is_battlepet: boolean;
  is_capturable: boolean;
  is_horde_only: boolean;
  is_random_creature_display: boolean;
  is_tradable: boolean;
  media: IdKey;
  should_exclude_if_uncollected?: boolean;
  source?: NameType;
}

interface Ability {
  ability: NameIdKey;
  required_level: number;
  slot: number;
}

interface BattlePetType extends NameId, NameType {}
