import type { Character, IdKey, NameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterHunterPetsSummaryResponse extends ResponseBase {
  character: Character;
  hunter_pets: Array<HunterPet>;
}

interface HunterPet {
  creature: NameIdKey;
  creature_display: IdKey;
  is_active?: boolean;
  is_summoned?: boolean;
  level: number;
  name: string;
  slot: number;
}
