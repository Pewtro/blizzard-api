import type {
  BaseSearchParameters,
  Faction,
  KeyBase,
  Locales,
  NameId,
  NameIdKey,
  ResponseBase,
  SearchResponseWithoutResults,
} from '@blizzard-api/core';

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
export interface JournalEncounterResponse extends NameId, ResponseBase {
  category: Category;
  creatures?: Array<Creature>;
  description?: string;
  faction?: Faction;
  instance: KeyBase & { id: number; name?: string };
  items?: Array<Item>;
  modes?: Array<Mode>;
  sections?: Array<JournalSection>;
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
export interface JournalEncounterSearchResponse extends SearchResponseWithoutResults {
  results: Array<JournalEncounterSearchResponseItem>;
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
export interface JournalExpansionResponse extends NameId, ResponseBase {
  dungeons: Array<NameIdKey>;
  raids: Array<NameIdKey>;
  world_bosses?: Array<NameIdKey>;
}

/**
 * The response for a journal instance index.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalInstanceIndexResponse extends ResponseBase {
  instances: Array<NameIdKey>;
}

/**
 * The response for journal instance media.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalInstanceMediaResponse extends ResponseBase {
  assets: Array<Asset>;
}

/**
 * The response for a journal instance.
 * @see {@link https://develop.battle.net/documentation/world-of-warcraft/game-data-apis}
 */
export interface JournalInstanceResponse extends NameId, ResponseBase {
  area?: NameId;
  category: Category;
  description?: string;
  encounters: Array<NameIdKey>;
  expansion?: NameIdKey;
  location?: NameId;
  map?: NameId;
  media: Media;
  minimum_level?: number;
  modes?: Array<ModeElement>;
  order_index?: number;
}

interface Asset {
  key: string;
  value: string;
}

interface Category {
  type?: EncounterCategory;
}

interface Creature extends NameId {
  creature_display: CreatureDisplay;
  description?: string;
}

interface CreatureDisplay extends KeyBase {
  id: number;
}

type EncounterCategory = 'DUNGEON' | 'EVENT' | 'RAID' | 'WORLD_BOSS';

type EncounterMode = 'HEROIC' | 'LFR' | 'MYTHIC' | 'NORMAL';

interface Item {
  id: number;
  item: NameIdKey;
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

interface JournalEncounterSearchResponseItem extends KeyBase {
  data: {
    category: Category;
    creatures: Array<JournalEncounterSearchCreature>;
    id: number;
    instance: { id: number; name?: Record<Locales, string> };
    items?: Array<JournalEncounterSearchItem>;
    modes?: Array<{ name: Record<Locales, string>; type: EncounterMode }>;
    name: Record<Locales, string>;
    sections?: Array<JournalSection>;
  };
}

interface JournalSection {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSubSection>;
  spell?: KeyBase & { id: number; name?: string };
  title?: null | string;
}

interface JournalSubSection {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSubSection2>;
  spell?: KeyBase & { id: number; name?: string };
  title?: string;
}

interface JournalSubSection2 {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSubSection3>;
  spell?: KeyBase & { id: number; name?: string };
  title?: string;
}

interface JournalSubSection3 {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSubSection4>;
  spell?: KeyBase & { id: number; name?: string };
  title?: string;
}

interface JournalSubSection4 {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSubSection5>;
  spell?: KeyBase & { id: number; name?: string };
  title?: string;
}

interface JournalSubSection5 {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  sections?: Array<JournalSubSection6>;
  spell?: KeyBase & { id: number; name?: string };
  title?: string;
}

interface JournalSubSection6 {
  body_text?: null | string;
  creature_display?: CreatureDisplay;
  id: number;
  spell?: KeyBase & { id: number; name?: string };
  title?: string;
}

interface Media extends KeyBase {
  id: number;
}

interface Mode {
  name: ModeName;
  type: ModeType;
}

interface ModeElement {
  is_timewalking?: boolean;
  is_tracked: boolean;
  mode: Mode;
  players: number;
}

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
