import type { Character, KeyBase, NullishNameIdKey, ResponseBase } from '@blizzard-api/core';

export interface CharacterHunterPetsSummaryResponse extends ResponseBase {
  character: Character;
  hunter_pets: Array<HunterPet>;
}

interface HunterPet {
  creature: NullishNameIdKey;
  creature_display: KeyBase & { id: number };
  is_active?: boolean;
  is_summoned?: boolean;
  level: number;
  name: string;
  slot: number;
}
