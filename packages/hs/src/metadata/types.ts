import type { NameId } from '@blizzard-api/core';

export interface AllMetadataResponse {
  arenaIds: Array<number>;
  bgGameModes: Array<GameMode>;
  cardBackCategories: Array<GameMode>;
  classes: Array<Class>;
  factions: Array<GameMode>;
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

export type SpecificMetadataResponse =
  | Array<CardbackMetadataResponse>
  | Array<CraftingCostMetadataResponse>
  | Array<DetailedMetadataResponse>
  | Array<number>
  | Array<ReferenceTextMetadataResponse>
  | Array<SetGroupsMetadataResponse>
  | Array<SlugNameIdMetadataResponse>
  | Array<string>;

interface CardbackMetadataResponse extends NameId {
  alternateHeroCardIds?: Array<number>;
  cardId?: number;
  heroPowerCardId?: number;
  slug: string;
}

interface Class {
  alternateHeroCardIds?: Array<number>;
  cardId?: number;
  heroPowerCardId?: number;
  id: number;
  name: string;
  slug: string;
}

interface CraftingCostMetadataResponse extends NameId {
  craftingCost: Array<null | number>;
  dustValue: Array<null | number>;
  slug: string;
}

interface DetailedMetadataResponse extends NameId {
  aliasSetIds?: Array<number>;
  collectibleCount: number;
  collectibleRevealedCount: number;
  hyped: boolean;
  nonCollectibleCount: number;
  nonCollectibleRevealedCount: number;
  slug: string;
  type: SetType;
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

interface ReferenceTextMetadataResponse extends NameId {
  gameModes: Array<number>;
  refText: string;
  slug: string;
  text: string;
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

interface SetGroupsMetadataResponse {
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

interface SlugNameIdMetadataResponse extends NameId {
  gameModes?: Array<number>;
  slug: string;
}
