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
