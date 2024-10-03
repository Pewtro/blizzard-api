export type DeckSearchParameters = { code: string } | { hero?: string; ids: string };
export interface DeckResponse {
  cardCount: number;
  cards: Array<Card>;
  class: Class;
  deckCode: string;
  format: string;
  hero: Hero;
  heroPower: Hero;
  version: number;
}

interface Card {
  armor?: number;
  artistName: string;
  attack?: number;
  bannedFromSideboard?: number;
  cardSetId: number;
  cardTypeId: number;
  childIds?: Array<number>;
  classId: number;
  collectible: number;
  cropImage: string;
  flavorText: string;
  health?: number;
  id: number;
  image: string;
  imageGold: string;
  isZilliaxCosmeticModule: boolean;
  isZilliaxFunctionalModule: boolean;
  keywordIds?: Array<number>;
  manaCost: number;
  minionTypeId?: number;
  multiClassIds: Array<number>;
  name: string;
  rarityId: number;
  slug: string;
  spellSchoolId?: number;
  text: string;
}

interface Class {
  id: number;
  name: string;
  slug: string;
}

interface Hero {
  artistName: null | string;
  cardSetId: number;
  cardTypeId: number;
  classId: number;
  collectible: number;
  cropImage: null;
  flavorText: string;
  health?: number;
  id: number;
  image: string;
  imageGold: string;
  isZilliaxCosmeticModule: boolean;
  isZilliaxFunctionalModule: boolean;
  manaCost: number;
  multiClassIds: Array<number>;
  name: string;
  parentId: number;
  rarityId: null | number;
  slug: string;
  text: string;
}
