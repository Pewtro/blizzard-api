import type { NameId } from '../../../wow/src/base';

export interface AllMetadataResponse {
  arenaIds: Array<number>;
  bgGameModes: Array<GameMode>;
  cardBackCategories: Array<GameMode>;
  classes: Array<Class>;
  filterableFields: Array<string>;
  gameModes: Array<GameMode>;
  keywords: Array<Keyword>;
  mercenaryFactions: Array<GameMode>;
  mercenaryRoles: Array<GameMode>;
  minionTypes: Array<GameMode>;
  numericFields: Array<string>;
  rarities: Array<Rarity>;
  setGroups: Array<SetGroup>;
  sets: Array<Set>;
  spellSchools: Array<GameMode>;
  types: Array<GameMode>;
}

export interface SpecificMetadataResponse extends NameId {
  aliasSetIds?: Array<number>;
  collectibleCount: number;
  collectibleRevealedCount: number;
  hyped: boolean;
  nonCollectibleCount: number;
  nonCollectibleRevealedCount: number;
  slug: string;
  type: SetType;
}

interface Class {
  alternateHeroCardIds?: Array<number>;
  cardId?: number;
  heroPowerCardId?: number;
  id: number;
  name: string;
  slug: string;
}

interface GameMode extends NameId {
  gameModes?: Array<number>;
  slug: string;
}

interface Keyword extends NameId {
  gameModes: Array<number>;
  refText: string;
  slug: string;
  text: string;
}

interface Rarity extends NameId {
  craftingCost: Array<null | number>;
  dustValue: Array<null | number>;
  slug: string;
}

interface Set extends NameId {
  aliasSetIds?: Array<number>;
  collectibleCount: number;
  collectibleRevealedCount: number;
  hyped: boolean;
  nonCollectibleCount: number;
  nonCollectibleRevealedCount: number;
  slug: string;
  type: SetType;
}

interface SetGroup {
  cardSets: Array<string>;
  icon?: string;
  name: string;
  slug: string;
  standard?: boolean;
  svg?: null | string;
  year?: number;
  yearRange?: string;
}

type SetType = '' | 'adventure' | 'base' | 'expansion';
