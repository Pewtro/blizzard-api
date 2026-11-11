import type { Href, IdKey, NameIdKey, NameType, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';
import type { CharacterReference, PetQuality, PetStats } from '../shared/types';

/**
 * The response for a character collections index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterCollectionsIndexResponse extends ResponseBase {
  character: CharacterReference;
  heirlooms: Href;
  mounts: Href;
  pets: Href;
  toys: Href;
  transmogs: Href;
}

/**
 * The response for a character's heirlooms collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterHeirloomsCollectionSummaryResponse extends ResponseBase {
  heirlooms?: Array<Heirloom>;
}

/**
 * The response for a character's mounts collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterMountsCollectionSummaryResponse extends ResponseBase {
  mounts?: Array<Mount>;
}

/**
 * The response for a character's pets collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterPetsCollectionSummaryResponse extends ResponseBase {
  pets?: Array<Pet>;
  unlocked_battle_pet_slots: number;
}

/**
 * The response for a character's toys collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterToysCollectionSummaryResponse extends ResponseBase {
  toys?: Array<Toy>;
}

/**
 * The response for a character's transmog collection.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterTransmogCollectionSummaryResponse extends ResponseBase {
  appearance_sets?: Array<NameIdKey>;
  slots?: Array<Slot>;
}

interface Heirloom {
  heirloom: NameIdKey;
  upgrade: { level: number };
}

interface Mount {
  is_character_specific?: boolean;
  is_favorite?: boolean;
  is_useable: boolean;
  mount: NullishNameIdKey;
}

interface Pet {
  active_slot?: number;
  creature_display?: IdKey;
  id: number;
  is_active?: boolean;
  is_favorite?: boolean;
  level: number;
  name?: string;
  quality: PetQuality;
  species: NullishNameIdKey;
  stats: PetStats;
}

interface Slot {
  appearances: Array<IdKey>;
  slot: NameType;
}

interface Toy {
  is_favorite?: boolean;
  toy: NullishNameIdKey;
}
