import type { KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

export interface JournalEncounterIndexResponse extends ResponseBase {
  encounters: Array<NameIdKey>;
}

export interface JournalEncounterResponse extends ResponseBase, NameId {
  description: string;
  creatures: Array<Creature>;
  items: Array<Item>;
  sections: Array<JournalEncounterResponseSection>;
  instance: NameIdKey;
  category: Category;
  modes: Array<Mode>;
}

interface Category {
  type: string;
}

interface Creature extends NameId {
  creature_display: CreatureDisplay;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

interface Item {
  id: number;
  item: NameIdKey;
}

interface Mode {
  type: string;
  name: string;
}

interface PurpleSection {
  id: number;
  title: string;
  body_text: string;
  sections: Array<JournalEncounterResponseSection>;
  creature_display: CreatureDisplay;
}

interface JournalEncounterResponseSection {
  id: number;
  title: string;
  body_text: string;
  sections?: Array<PurpleSection>;
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
