import type { Href, KeyBase, NameIdKey, ResponseBase } from '@blizzard-api/core';

/**
 * The response for a character hunter pets summary.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface CharacterHunterPetsSummaryResponse extends ResponseBase {
  character: CharacterReference;
  hunter_pets: Array<HunterPet>;
}

interface CharacterReference {
  id: number;
  key: Href;
  name: string;
  slug: string;
  surname: string;
}

interface HunterPet {
  creature: NameIdKey;
  creature_display: KeyBase & { id: number };
  is_active?: boolean;
  is_summoned?: boolean;
  level: number;
  name: string;
  slot: number;
}
