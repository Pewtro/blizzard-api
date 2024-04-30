import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { Faction, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

type EncounterCategory = 'RAID' | 'DUNGEON' | 'WORLD_BOSS';

type EncounterMode = 'NORMAL' | 'HEROIC' | 'MYTHIC' | 'LFR';

type ModeName =
  | 'Raid Finder'
  | 'Normal'
  | 'Heroic'
  | 'Mythic'
  | 'Mythic+ Dungeons'
  | '10 Player'
  | '25 Player'
  | '10 Player (Heroic)'
  | '25 Player (Heroic)';
type ModeType =
  | 'LFR'
  | 'NORMAL'
  | 'HEROIC'
  | 'MYTHIC'
  | 'MYTHIC_KEYSTONE'
  | 'LEGACY_10_MAN'
  | 'LEGACY_25_MAN'
  | 'LEGACY_10_MAN_HEROIC'
  | 'LEGACY_25_MAN_HEROIC';

export interface JournalEncounterIndexResponse extends ResponseBase {
  encounters: Array<NameIdKey>;
}

export interface JournalEncounterResponse extends ResponseBase, NameId {
  description: string;
  creatures: Array<Creature>;
  items: Array<Item>;
  sections: Array<JournalSection>;
  instance: NameIdKey;
  category: Category;
  modes?: Array<Mode>;
  faction?: Faction;
}

interface Category {
  type: EncounterCategory;
}

interface Creature extends NameId {
  creature_display: CreatureDisplay;
  description?: string;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

interface Item {
  id: number;
  item: NameIdKey;
}

interface Mode {
  name: ModeName;
  type: ModeType;
}

interface JournalSection {
  id: number;
  title: string;
  body_text?: string;
  sections?: Array<JournalSection>;
  creature_display?: CreatureDisplay;
  spell?: NameIdKey;
}

export interface JournalExpansionIndexResponse extends ResponseBase {
  tiers: Array<NameIdKey>;
}

export interface JournalExpansionResponse extends ResponseBase, NameId {
  dungeons: Array<NameIdKey>;
  raids: Array<NameIdKey>;
}

export interface JournalInstanceIndexResponse extends ResponseBase {
  instances: Array<NameIdKey>;
}

export interface JournalInstanceResponse extends ResponseBase, NameId {
  map: NameId;
  area: NameId;
  description: string;
  encounters: Array<NameIdKey>;
  expansion: NameIdKey;
  location: NameId;
  modes: Array<ModeElement>;
  media: Media;
  minimum_level: number;
  category: Category;
  order_index: number;
}

interface Media extends KeyBase {
  id: number;
}

interface ModeElement {
  mode: Mode;
  players: number;
  is_tracked: boolean;
}

export interface JournalInstanceMediaResponse extends ResponseBase {
  assets: Array<Asset>;
}

interface Asset {
  key: string;
  value: string;
}

export interface JournalEncounterSearchParameters extends BaseSearchParameters {
  instanceName: string;
  locale: Locales;
}

export interface JournalEncounterSearchResponseItem extends KeyBase {
  data: {
    instance: { name: Record<Locales, string>; id: number };
    modes?: Array<{ name: Record<Locales, string>; type: EncounterMode }>;
    creatures: Array<JournalEncounterSearchCreature>;
    name: Record<Locales, string>;
    id: number;
    category: Category;
    items: Array<JournalEncounterSearchItem>;
    sections: Array<JournalSection>;
  };
}

interface JournalEncounterSearchCreature {
  creature_display: { id: number };
  name: Record<Locales, string>;
  id: number;
}

interface JournalEncounterSearchItem {
  id: number;
  item: { name: Record<Locales, string>; id: number };
}
