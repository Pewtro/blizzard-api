import type { Href, KeyBase, NameIdKey } from '../base';

export interface CharacterHunterPetsSummaryResponse {
  _links: { self: Href };
  character: Character;
  hunter_pets: Array<HunterPet>;
}

interface Realm extends NameIdKey {
  slug: string;
}

interface Character extends NameIdKey {
  realm: Realm;
}

interface HunterPet {
  creature: NameIdKey;
  creature_display: { id: number } & KeyBase;
  is_active?: boolean;
  is_summoned?: boolean;
  level: number;
  name: string;
  slot: number;
}
