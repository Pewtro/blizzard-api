import type { BaseSearchParameters, Locales } from '@blizzard-api/core';
import type { Faction, KeyBase, NameId, NameIdKey, ResponseBase } from '../base';

type EncounterCategory = 'DUNGEON' | 'RAID' | 'WORLD_BOSS';

type EncounterMode = 'HEROIC' | 'LFR' | 'MYTHIC' | 'NORMAL';

type ModeName =
  | '10 Player'
  | '10 Player (Heroic)'
  | '25 Player'
  | '25 Player (Heroic)'
  | 'Heroic'
  | 'Mythic'
  | 'Mythic+ Dungeons'
  | 'Normal'
  | 'Raid Finder';
type ModeType =
  | 'HEROIC'
  | 'LEGACY_10_MAN'
  | 'LEGACY_10_MAN_HEROIC'
  | 'LEGACY_25_MAN'
  | 'LEGACY_25_MAN_HEROIC'
  | 'LFR'
  | 'MYTHIC'
  | 'MYTHIC_KEYSTONE'
  | 'NORMAL';

/**
 * The response for a journal encounter index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalEncounterIndexResponse extends ResponseBase {
  encounters: Array<NameIdKey>;
}

/**
 * The response for a journal encounter.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalEncounterResponse extends ResponseBase, NameId {
  category: Category;
  creatures: Array<Creature>;
  description: string;
  faction?: Faction;
  instance: NameIdKey;
  items: Array<Item>;
  modes?: Array<Mode>;
  sections: Array<JournalSection>;
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
  body_text?: string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSection>;
  spell?: NameIdKey;
  title: string;
}

/**
 * The response for a journal expansion index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalExpansionIndexResponse extends ResponseBase {
  tiers: Array<NameIdKey>;
}

/**
 * The response for a journal expansion.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalExpansionResponse extends ResponseBase, NameId {
  dungeons: Array<NameIdKey>;
  raids: Array<NameIdKey>;
}

/**
 * The response for a journal instance index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalInstanceIndexResponse extends ResponseBase {
  instances: Array<NameIdKey>;
}

/**
 * The response for a journal instance.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalInstanceResponse extends ResponseBase, NameId {
  area: NameId;
  category: Category;
  description: string;
  encounters: Array<NameIdKey>;
  expansion: NameIdKey;
  location: NameId;
  map: NameId;
  media: Media;
  minimum_level: number;
  modes: Array<ModeElement>;
  order_index: number;
}

interface Media extends KeyBase {
  id: number;
}

interface ModeElement {
  is_tracked: boolean;
  mode: Mode;
  players: number;
}

/**
 * The response for journal instance media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalInstanceMediaResponse extends ResponseBase {
  assets: Array<Asset>;
}

interface Asset {
  key: string;
  value: string;
}

/**
 * The parameters for a journal encounter search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface JournalEncounterSearchParameters extends BaseSearchParameters {
  instanceName: string;
  locale: Locales;
}

/**
 * The response for a journal encounter search.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/guides/search}
 */
export interface JournalEncounterSearchResponseItem extends KeyBase {
  data: {
    category: Category;
    creatures: Array<JournalEncounterSearchCreature>;
    id: number;
    instance: { id: number; name: Record<Locales, string> };
    items: Array<JournalEncounterSearchItem>;
    modes?: Array<{ name: Record<Locales, string>; type: EncounterMode }>;
    name: Record<Locales, string>;
    sections: Array<JournalSection>;
  };
}

interface JournalEncounterSearchCreature {
  creature_display: { id: number };
  id: number;
  name: Record<Locales, string>;
}

interface JournalEncounterSearchItem {
  id: number;
  item: { id: number; name: Record<Locales, string> };
}
