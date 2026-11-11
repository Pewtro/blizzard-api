import type { Href, KeyBase, NameIdKey, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

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

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
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

interface NameType {
  name: string;
  type: string;
}

interface Pet {
  active_slot?: number;
  creature_display?: KeyBase & { id: number };
  id: number;
  is_active?: boolean;
  is_favorite?: boolean;
  level: number;
  name?: string;
  quality: Quality;
  species: NullishNameIdKey;
  stats: Stats;
}

interface Quality {
  name: string;
  type: 'COMMON' | 'POOR' | 'RARE' | 'UNCOMMON';
}

interface Slot {
  appearances: Array<KeyBase & { id: number }>;
  slot: NameType;
}

interface Stats {
  breed_id: number;
  health: number;
  power: number;
  speed: number;
}

interface Toy {
  is_favorite?: boolean;
  toy: NullishNameIdKey;
}
